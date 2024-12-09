const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedStructure() {
  try {
    console.log("Starting seeding process for structures...");

    const structureData = [];

    fs.createReadStream("./data/structure.csv") // Adjust path as needed
      .pipe(csv())
      .on("data", (row) => {
        structureData.push({
          structureNumber: row.STRUCTURE_NUMBER_008,
          apprKind: parseInt(row.APPR_KIND_044A, 10),
          structureKind: parseInt(row.STRUCTURE_KIND_043A, 10),
          structureType: parseInt(row.STRUCTURE_TYPE_043B, 10),
          apprType: parseInt(row.APPR_TYPE_044B, 10),
          mainUnitSpans: parseInt(row.MAIN_UNIT_SPANS_045, 10),
          apprSpans: parseInt(row.APPR_SPANS_046, 10),
          medianCode: parseInt(row.MEDIAN_CODE_033, 10),
          deckStructureType: row.DECK_STRUCTURE_TYPE_107.trim(),
          railings: parseInt(row.RAILINGS_036A, 10),
          transitions: parseInt(row.TRANSITIONS_036B, 10),
          apprRail: parseInt(row.APPR_RAIL_036C, 10),
          apprRailEnd: parseInt(row.APPR_RAIL_END_036D, 10),
          parallelStructure: row.PARALLEL_STRUCTURE_101.trim(),
        });
      })
      .on("end", async () => {
        console.log(`${structureData.length} structure records read from CSV.`);

        for (const structure of structureData) {
          try {
            // Check if the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: structure.structureNumber },
            });

            if (bridgeExists) {
              // Insert structure data into the database
              await prisma.structure.create({ data: structure });
            } else {
              console.warn(
                `No bridge found with structureNumber ${structure.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting structure with structureNumber ${structure.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding structures completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding structures:", error);
    process.exit(1);
  }
}

module.exports = seedStructure;
