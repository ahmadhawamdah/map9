const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedBridges() {
  try {
    console.log("Starting seeding process for bridges...");

    const bridgeData = [];

    // Adjusted to match your CSV columns
    fs.createReadStream("./data/bridges.csv") // Ensure the path matches your directory structure
      .pipe(csv())
      .on("data", (row) => {
        bridgeData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Matches your schema and CSV column
          stateCode: parseInt(row.STATE_CODE_001),
          yearBuilt: parseInt(row.YEAR_BUILT_027),
          yearReconstructed: row.YEAR_RECONSTRUCTED_106
            ? parseInt(row.YEAR_RECONSTRUCTED_106)
            : null,
          routePrefix: row.ROUTE_PREFIX_005B,
          functionalClass: parseInt(row.FUNCTIONAL_CLASS_026),
          designLoad: row.DESIGN_LOAD,
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

async function seedLocations() {
  try {
    console.log("Starting seeding process for locations...");

    const locationData = [];

    // Adjust the path to the correct CSV file location
    fs.createReadStream("./data/location.csv")
      .pipe(csv())
      .on("data", (row) => {
        locationData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          latitude: parseFloat(row.LAT_016),
          longitude: parseFloat(row.LONG_017),
          countyCode: parseInt(row.COUNTY_CODE_003),
          placeCode: parseInt(row.PLACE_CODE_004),
          description: row.FEATURES_DESC_006A,
          detourKilos: parseInt(row.DETOUR_KILOS_019),
        });
      })
      .on("end", async () => {
        console.log(`${locationData.length} location records read from CSV.`);

        for (const location of locationData) {
          try {
            // Ensure the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: location.structureNumber },
            });

            if (bridgeExists) {
              // Insert location data into the database
              await prisma.location.create({ data: location });
            } else {
              console.warn(
                `No bridge found with structureNumber ${location.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting location with structureNumber ${location.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding locations completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding locations:", error);
    process.exit(1);
  }
}

async function seedOwnerships() {
  try {
    console.log("Starting seeding process for ownerships...");

    const ownershipData = [];

    // Adjust the path to the correct CSV file location
    fs.createReadStream("./data/ownership.csv")
      .pipe(csv())
      .on("data", (row) => {
        ownershipData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          owner: parseInt(row.OWNER_022),
          maintenance: parseInt(row.MAINTENANCE_021),
          toll: parseInt(row.TOLL_020),
        });
      })
      .on("end", async () => {
        console.log(`${ownershipData.length} ownership records read from CSV.`);

        for (const ownership of ownershipData) {
          try {
            // Ensure the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: ownership.structureNumber },
            });

            if (bridgeExists) {
              // Insert ownership data into the database
              await prisma.ownership.create({ data: ownership });
            } else {
              console.warn(
                `No bridge found with structureNumber ${ownership.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting ownership with structureNumber ${ownership.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding ownerships completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding ownerships:", error);
    process.exit(1);
  }
}

async function seedConditions() {
  try {
    console.log("Starting seeding process for locations...");

    const conditionData = [];

    // Adjust the path to the correct CSV file location
    fs.createReadStream("./data/condition.csv")
      .pipe(csv())
      .on("data", (row) => {
        conditionData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          deckCondition: row.DECK_COND_058,
          superstructureCondition: row.SUPERSTRUCTURE_COND_059,
          substructureCondition: row.SUBSTRUCTURE_COND_060,
          culvertCondition: row.CULVERT_COND_062,
          structuralEval: row.STRUCTURAL_EVAL_067,
          scourCritical: row.SCOUR_CRITICAL_113,
          lowestRating: parseInt(row.LOWEST_RATING),
        });
      })
      .on("end", async () => {
        console.log(`${conditionData.length} location records read from CSV.`);
        for (const condition of conditionData) {
          try {
            // Ensure the structureNumber exists in the Bridge table
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

async function seedTraffic() {
  try {
    console.log("Starting seeding process for locations...");

    const trafficData = [];

    // Adjust the path to the correct CSV file location
    fs.createReadStream("./data/traffic.csv")
      .pipe(csv())
      .on("data", (row) => {
        trafficData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          adt: parseInt(row.ADT_029),
          yearAdt: parseInt(row.YEAR_ADT_030),
          futureAdt: parseInt(row.FUTURE_ADT_114),
          percentTruck: parseInt(row.PERCENT_ADT_TRUCK_109),
        });
      })
      .on("end", async () => {
        console.log(`${trafficData.length} location records read from CSV.`);
        for (const traffic of trafficData) {
          try {
            // Ensure the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: traffic.structureNumber },
            });

            if (bridgeExists) {
              // Insert traffic data into the database
              await prisma.traffic.create({ data: traffic });
            } else {
              console.warn(
                `No bridge found with structureNumber ${traffic.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting traffic with structureNumber ${traffic.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding traffic completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding traffic:", error);
    process.exit(1);
  }
}

// Run the seeding script
// seedBridges();
seedLocations();
seedOwnerships();
seedConditions();
// seedTraffic();
