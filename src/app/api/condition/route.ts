import prisma from "../../../../prisma/db";

export async function POST(req: Request) {
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
    } = body;

    // Initialize filters for Condition table
    const filters: any = {};

    // Add string conditions to filters
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

    // Add range filters
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

    // Fetch filtered results with inner join on Bridge table
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

    // Map results to include lat/long in top-level response
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

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching conditions:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to fetch conditions",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
