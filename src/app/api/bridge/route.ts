import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      location = [],
      yearBuilt = { min: 1967, max: 2024 },
      yearReconstructed = { min: 0, max: 2024 },
      fedAgency = "",
      serviceOn = 0,
      routePrefix = 0,
      bounds = null, // Viewport bounds (optional)
    } = body;

    let filters: any = {};

    if (bounds && Array.isArray(bounds) && bounds.length === 4) {
      let [minLng, minLat, maxLng, maxLat] = bounds;

      // Convert bounds to match database integer format
      minLat = Math.round(minLat * 1_000_000);
      maxLat = Math.round(maxLat * 1_000_000);
      minLng = Math.round(minLng * 1_000_000);
      maxLng = Math.round(maxLng * 1_000_000);

      filters.lat = { gte: minLat, lte: maxLat };
      filters.long = { gte: minLng, lte: maxLng };
    }

    if (location && location.length > 0) {
      const locationParts = location
        .split(" ")
        .filter((part: string) => part.trim() !== "");
      filters.OR = locationParts.map((loc: string) => ({
        location: { contains: loc, mode: "insensitive" },
      }));
    }

    if (yearBuilt.min || yearBuilt.max) {
      filters.yearBuilt = {
        gte: yearBuilt.min || undefined,
        lte: yearBuilt.max || undefined,
      };
    }

    if (yearReconstructed.min || yearReconstructed.max) {
      filters.yearReconstructed = {
        gte: yearReconstructed.min || undefined,
        lte: yearReconstructed.max || undefined,
      };
    }

    if (fedAgency) filters.fedAgency = fedAgency;
    if (serviceOn) filters.serviceOn = serviceOn;
    if (routePrefix) filters.routePrefix = routePrefix;

    // 📌 Query Bridges with Applied Filters
    const bridges = await prisma.bridge.findMany({
      where: filters,
      select: {
        structureNumber: true,
        location: true,
        yearBuilt: true,
        yearReconstructed: true,
        fedAgency: true,
        serviceOn: true,
        routePrefix: true,
        long: true,
        lat: true,
      },
    });

    return NextResponse.json(bridges, { status: 200 });
  } catch (error) {
    console.error("Error fetching bridges:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch bridges",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
