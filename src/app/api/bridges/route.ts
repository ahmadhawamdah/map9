import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      stateCode = "",
      yearBuilt = { min: 1967, max: 2024 },
      functionalClass = { min: 0, max: 20 },
      designLoad = "",
    } = body;

    const filters: any = {};
    if (stateCode) filters.stateCode = parseInt(stateCode, 10);
    if (yearBuilt.min || yearBuilt.max) {
      filters.yearBuilt = {
        gte: yearBuilt.min || undefined,
        lte: yearBuilt.max || undefined,
      };
      if (functionalClass.min || functionalClass.max) {
        filters.functionalClass = {
          gte: functionalClass.min || undefined,
          lte: functionalClass.max || undefined,
        };
      }
    }

    if (designLoad) filters.designLoad = designLoad;

    const bridges = await prisma.bridge.findMany({
      where: filters,
      select: {
        structureNumber: true,
        stateCode: true,
        yearBuilt: true,
        functionalClass: true,
        designLoad: true,
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
