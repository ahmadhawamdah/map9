const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedNavigation() {
  try {
    console.log("Starting seeding process for navigation...");

    const navigationData = [];

    fs.createReadStream("./data/navigation.csv")
      .pipe(csv())
      .on("data", (row) => {
        navigationData.push({
          structureNumber: row.STRUCTURE_NUMBER_008, // Foreign key to Bridge table
          direction: parseInt(row.DIRECTION_005E),
          trafficDirection: parseInt(row.TRAFFIC_DIRECTION_102),
          navigation: parseInt(row.NAVIGATION_038, 10),
          toll: row.TOLL_020 === "1", // Convert to boolean
          functionalClass: parseInt(row.FUNCTIONAL_CLASS_026, 10),
          detourKilos: parseFloat(row.DETOUR_KILOS_019),
          kilopoint: parseFloat(row.KILOPOINT_011),
          trafficLanesOn: parseInt(row.TRAFFIC_LANES_ON_028A, 10),
          trafficLanesUnd: parseInt(row.TRAFFIC_LANES_UND_028B, 10),
          adt: parseInt(row.ADT_029, 10),
          percentAdtTruck: parseFloat(row.PERCENT_ADT_TRUCK_109),
          yearAdt: parseInt(row.YEAR_ADT_030, 10),
          futureAdt: parseInt(row.FUTURE_ADT_114, 10),
          yearOfFutureAdt: parseInt(row.YEAR_OF_FUTURE_ADT_115, 10),
        });
      })
      .on("end", async () => {
        console.log(
          `${navigationData.length} navigation records read from CSV.`
        );

        for (const navigation of navigationData) {
          try {
            // Check if the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: navigation.structureNumber },
            });

            if (bridgeExists) {
              // Insert navigation data into the database
              await prisma.navigation.create({ data: navigation });
            } else {
              console.warn(
                `No bridge found with structureNumber ${navigation.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting navigation with structureNumber ${navigation.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding navigation completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding navigation:", error);
    process.exit(1);
  }
}

module.exports = seedNavigation;
