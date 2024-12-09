import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  context: { params: { [key: string]: string } }
) {
  const { structureNumber } = context.params;

  if (!structureNumber) {
    return NextResponse.json(
      { error: "Structure number is required" },
      { status: 400 }
    );
  }

  try {
    const bridgeData = await prisma.bridge.findUnique({
      where: {
        structureNumber,
      },
      include: {
        navigation: true,
        conditon: true,
        maintenance: true,
        geometry: true,
        Structure: true,
      },
    });

    if (!bridgeData) {
      return NextResponse.json({ error: "Bridge not found" }, { status: 404 });
    }

    return NextResponse.json(bridgeData, { status: 200 });
  } catch (error) {
    console.error("Error fetching bridge data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
