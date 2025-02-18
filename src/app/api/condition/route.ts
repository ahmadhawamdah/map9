import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      bridgeCondition = "",
      deckCond = "",
      superstructureCond = "",
      substructureCond = "",
      channelCond = "",
      culvertCond = "",
      structuralEval = "",
      deckGeometryEval = "",
      underclearanceEval = "",
      waterwayEval = "",
      apprRoadEval = { min: 0, max: 0 },
      postingEval = { min: 0, max: 0 },
      lowestRating = { min: 0, max: 0 },
      bounds = null, // Viewport bounds (optional)
    } = body;

    console.log("Received bounds:", bounds);

    // Initialize filters for Condition table
    const filters: any = {};

    // Apply string-based filters
    if (bridgeCondition) filters.bridgeCondition = bridgeCondition;
    if (deckCond) filters.deckCond = deckCond;
    if (superstructureCond) filters.superstructureCond = superstructureCond;
    if (substructureCond) filters.substructureCond = substructureCond;
    if (channelCond) filters.channelCond = channelCond;
    if (culvertCond) filters.culvertCond = culvertCond;
    if (structuralEval) filters.structuralEval = structuralEval;
    if (deckGeometryEval) filters.deckGeometryEval = deckGeometryEval;
    if (underclearanceEval) filters.underclearanceEval = underclearanceEval;
    if (waterwayEval) filters.waterwayEval = waterwayEval;

    // Apply range-based filters
    if (apprRoadEval.min || apprRoadEval.max) {
      filters.apprRoadEval = {
        gte: apprRoadEval.min || undefined,
        lte: apprRoadEval.max || undefined,
      };
    }

    if (postingEval.min || postingEval.max) {
      filters.postingEval = {
        gte: postingEval.min || undefined,
        lte: postingEval.max || undefined,
      };
    }

    if (lowestRating.min || lowestRating.max) {
      filters.lowestRating = {
        gte: lowestRating.min || undefined,
        lte: lowestRating.max || undefined,
      };
    }

    // Include viewport bounds if provided
    if (bounds && Array.isArray(bounds) && bounds.length === 4) {
      let [minLng, minLat, maxLng, maxLat] = bounds;

      // Convert bounds to match database format (multiply by 1,000,000)
      minLat = Math.round(minLat * 1_000_000);
      maxLat = Math.round(maxLat * 1_000_000);
      minLng = Math.round(minLng * 1_000_000);
      maxLng = Math.round(maxLng * 1_000_000);

      console.log(
        `Filtering by viewport bounds: lat(${minLat} - ${maxLat}), long(${minLng} - ${maxLng})`
      );

      filters.Bridge = {
        lat: { gte: minLat, lte: maxLat },
        long: { gte: minLng, lte: maxLng },
      };
    }

    // Query condition table with filters and join with bridge table
    const conditions = await prisma.condition.findMany({
      where: filters,
      include: {
        Bridge: {
          select: {
            structureNumber: true,
            lat: true,
            long: true,
            location: true,
            yearBuilt: true,
          },
        },
      },
    });

    // Map results to include bridge data in the top-level response
    const results = conditions.map((condition) => ({
      id: condition.id,
      structureNumber: condition.structureNumber,
      bridgeCondition: condition.bridgeCondition,
      deckCond: condition.deckCond,
      superstructureCond: condition.superstructureCond,
      substructureCond: condition.substructureCond,
      channelCond: condition.channelCond,
      culvertCond: condition.culvertCond,
      structuralEval: condition.structuralEval,
      deckGeometryEval: condition.deckGeometryEval,
      underclearanceEval: condition.underclearanceEval,
      waterwayEval: condition.waterwayEval,
      apprRoadEval: condition.apprRoadEval,
      postingEval: condition.postingEval,
      lowestRating: condition.lowestRating,
      lat: condition.Bridge.lat,
      long: condition.Bridge.long,
      location: condition.Bridge.location,
      yearBuilt: condition.Bridge.yearBuilt,
    }));

    console.log(`Conditions found: ${results.length}`);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error fetching conditions:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch conditions",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
