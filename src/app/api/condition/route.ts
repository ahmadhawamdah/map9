import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      deckCondition = "",
      superstructureCondition = "",
      culvertCondition = "",
      structuralEval = "",
      bridgeCondition = "",
      lowestRating = { min: 0, max: 0 },
    } = body;

    // Initialize filters
    const filters: any = {};

    // Add conditions to filters
    if (deckCondition) filters.deckCondition = deckCondition;
    if (superstructureCondition)
      filters.superstructureCondition = superstructureCondition;
    if (culvertCondition) filters.culvertCondition = culvertCondition;
    if (structuralEval) filters.structuralEval = structuralEval;
    if (bridgeCondition) filters.bridgeCondition = bridgeCondition;

    // Add range filter for lowestRating
    if (lowestRating.min || lowestRating.max) {
      filters.lowestRating = {
        gte: lowestRating.min || undefined,
        lte: lowestRating.max || undefined,
      };
    }

    // Fetch filtered results
    const conditions = await prisma.condition.findMany({
      where: filters,
      select: {
        deckCondition: true,
        superstructureCondition: true,
        culvertCondition: true,
        structuralEval: true,
        bridgeCondition: true,
        lowestRating: true,
      },
    });

    return new Response(JSON.stringify(conditions), {
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
