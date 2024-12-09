const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedCondition() {
  try {
    console.log("Starting seeding process for conditions...");

    const conditionData = [];

    fs.createReadStream("./data/condition.csv") // Update path as needed
      .pipe(csv())
      .on("data", (row) => {
        conditionData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          bridgeCondition: row.BRIDGE_CONDITION,
          deckCond: row.DECK_COND_058,
          superstructureCond: row.SUPERSTRUCTURE_COND_059,
          substructureCond: row.SUBSTRUCTURE_COND_060,
          channelCond:
            row.CHANNEL_COND_061 === "N" ? null : row.CHANNEL_COND_061,
          culvertCond:
            row.CULVERT_COND_062 === "N" ? null : row.CULVERT_COND_062,
          structuralEval: row.STRUCTURAL_EVAL_067,
          deckGeometryEval: row.DECK_GEOMETRY_EVAL_068,
          underclearanceEval:
            row.UNDCLRENCE_EVAL_069 === "N" ? null : row.UNDCLRENCE_EVAL_069,
          waterwayEval:
            row.WATERWAY_EVAL_071 === "N" ? null : row.WATERWAY_EVAL_071,
          apprRoadEval: parseInt(row.APPR_ROAD_EVAL_072, 10),
          postingEval: parseInt(row.POSTING_EVAL_070, 10),
          lowestRating: parseInt(row.LOWEST_RATING, 10),
        });
      })
      .on("end", async () => {
        console.log(`${conditionData.length} condition records read from CSV.`);

        for (const condition of conditionData) {
          try {
            // Check if the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: condition.structureNumber },
            });

            if (bridgeExists) {
              // Insert condition data into the database
              await prisma.condition.create({ data: condition });
            } else {
              console.warn(
                `No bridge found with structureNumber ${condition.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting condition with structureNumber ${condition.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding conditions completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding conditions:", error);
    process.exit(1);
  }
}

module.exports = seedCondition;
