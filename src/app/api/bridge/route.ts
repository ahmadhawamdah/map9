import prisma from "../../../../prisma/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      location = [], // Expecting an array of strings for location
      yearBuilt = { min: 1967, max: 2024 },
      yearReconstructed = { min: 0, max: 2024 },
      fedAgency = "",
      serviceOn = 0,
      routePrefix = 0,
    } = body;

    // Build filters dynamically
    const filters: any = {};

    if (location) {
      const locationParts = location
        .split(" ")
        .filter((part: string) => part.trim() !== "");
      filters.OR = locationParts.map((loc: string) => ({
        location: {
          contains: loc,
          mode: "insensitive", // Optional: makes the search case-insensitive
        },
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

    // Query database
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

    return new Response(JSON.stringify(bridges), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching bridges:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to fetch bridges",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
