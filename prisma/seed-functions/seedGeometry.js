const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedGeometry() {
  try {
    console.log("Starting seeding process for geometry...");

    const geometryData = [];

    fs.createReadStream("./data/geometry.csv") // Adjust path as needed
      .pipe(csv())
      .on("data", (row) => {
        geometryData.push({
          structureNumber: row.STRUCTURE_NUMBER_008,
          minVertClearance: parseFloat(row.MIN_VERT_CLR_010),
          apprWidth: parseFloat(row.APPR_WIDTH_MT_032),
          structureFlared: parseInt(row.STRUCTURE_FLARED_035, 10),
          navVertClearance: parseFloat(row.NAV_VERT_CLR_MT_039),
          navHorrClearance: parseFloat(row.NAV_HORR_CLR_MT_040),
          leftCurbWidth: parseFloat(row.LEFT_CURB_MT_050A),
          rightCurbWidth: parseFloat(row.RIGHT_CURB_MT_050B),
          roadwayWidth: parseFloat(row.ROADWAY_WIDTH_MT_051),
          deckWidth: parseFloat(row.DECK_WIDTH_MT_052),
          vertClearOver: parseFloat(row.VERT_CLR_OVER_MT_053),
          vertClearUnderRef:
            row.VERT_CLR_UND_REF_054A === "N"
              ? null
              : row.VERT_CLR_UND_REF_054A,
          vertClearUnder: parseFloat(row.VERT_CLR_UND_054B),
          latUnderRef:
            row.LAT_UND_REF_055A === "N" ? null : row.LAT_UND_REF_055A,
          latUnder: parseFloat(row.LAT_UND_MT_055B),
          leftLatUnder: parseFloat(row.LEFT_LAT_UND_MT_056),
          horrClearance: parseFloat(row.HORR_CLR_MT_047),
          deckArea: parseFloat(row.DECK_AREA),
          maxSpanLength: parseFloat(row.MAX_SPAN_LEN_MT_048),
          structureLength: parseFloat(row.STRUCTURE_LEN_MT_049),
          minNavClearance: parseFloat(row.MIN_NAV_CLR_MT_116 || 0), // Default to 0 if missing
          degreesSkew: parseInt(row.DEGREES_SKEW_034, 10),
        });
      })
      .on("end", async () => {
        console.log(`${geometryData.length} geometry records read from CSV.`);

        for (const geometry of geometryData) {
          try {
            // Check if the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: geometry.structureNumber },
            });

            if (bridgeExists) {
              // Insert geometry data into the database
              await prisma.geometry.create({ data: geometry });
            } else {
              console.warn(
                `No bridge found with structureNumber ${geometry.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting geometry with structureNumber ${geometry.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding geometry completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding geometry:", error);
    process.exit(1);
  }
}

module.exports = seedGeometry;
