const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedBridges() {
  try {
    console.log("Starting seeding process for bridges...");

    const bridgeData = [];

    fs.createReadStream("./data/bridges.csv") // Ensure the path matches your directory structure
      .pipe(csv())
      .on("data", (row) => {
        bridgeData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Matches schema and CSV column
          yearBuilt: parseInt(row.YEAR_BUILT_027),
          yearReconstructed: row.YEAR_RECONSTRUCTED_106
            ? parseInt(row.YEAR_RECONSTRUCTED_106)
            : null,
          history: parseInt(row.HISTORY_037),
          serviceOn: parseInt(row.SERVICE_ON_042A),
          routePrefix: parseInt(row.ROUTE_PREFIX_005B),
          location: row.LOCATION_009,
          fedAgency: row.FED_AGENCY,
          lat: parseInt(row.LAT_016),
          long: parseInt(row.LONG_017),
        });
      })
      .on("end", async () => {
        console.log(`${bridgeData.length} records read from CSV.`);

        // Insert bridge data into the database
        for (const bridge of bridgeData) {
          try {
            await prisma.bridge.create({ data: bridge });
          } catch (err) {
            console.error(
              `Error inserting bridge with structureNumber ${bridge.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding bridges completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding bridges:", error);
    process.exit(1);
  }
}

module.exports = seedBridges;
