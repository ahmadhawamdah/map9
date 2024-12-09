import { NextResponse } from "next/server";

import prisma from "../../../../prisma/db";

export async function DELETE() {
  try {
    // Delete all rows from the specified table
    await prisma.structure.deleteMany(); // Replace 'tableName' with your table name

    // Return a success response
    return NextResponse.json(
      { message: "All data from the table has been deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting table data:", error);

    // Return an error response
    return NextResponse.json(
      { error: "Failed to delete data from the table." },
      { status: 500 }
    );
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}

export async function GET() {
  // Handle invalid methods
  return NextResponse.json(
    { error: "Method GET not allowed." },
    { status: 405 }
  );
}
