const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function seedMaintenance() {
  try {
    console.log("Starting seeding process for maintenance...");

    const maintenanceData = [];

    fs.createReadStream("./data/maintenance.csv") // Update path to your CSV
      .pipe(csv())
      .on("data", (row) => {
        maintenanceData.push({
          structureNumber: row.STRUCTURE_NUMBER_008,
          maintenance: parseInt(row.MAINTENANCE_021),
          maintenanceType: parseInt(row.MAINTENANCE_021, 10),
          bridgeImprovement: row.BRIDGE_IMP_COST_094
            ? parseFloat(row.BRIDGE_IMP_COST_094)
            : null,
          roadwayImprovement: row.ROADWAY_IMP_COST_095
            ? parseFloat(row.ROADWAY_IMP_COST_095)
            : null,
          totalImprovement: row.TOTAL_IMP_COST_096
            ? parseFloat(row.TOTAL_IMP_COST_096)
            : null,
          yearOfImprovement: row.YEAR_OF_IMP_097
            ? parseFloat(row.YEAR_OF_IMP_097)
            : null,
          workProposed: row.WORK_PROPOSED_075A
            ? parseFloat(row.WORK_PROPOSED_075A)
            : null,
          inspectionFrequency: parseInt(row.INSPECT_FREQ_MONTHS_091, 10),
          fractureCritical: row.FRACTURE_092A.trim() || null,
          openClosedPosted: row.OPEN_CLOSED_POSTED_041.trim(),
        });
      })
      .on("end", async () => {
        console.log(
          `${maintenanceData.length} maintenance records read from CSV.`
        );

        for (const maintenance of maintenanceData) {
          try {
            // Check if the structureNumber exists in the Bridge table
            const bridgeExists = await prisma.bridge.findUnique({
              where: { structureNumber: maintenance.structureNumber },
            });

            if (bridgeExists) {
              // Insert maintenance data into the database
              await prisma.maintenance.create({ data: maintenance });
            } else {
              console.warn(
                `No bridge found with structureNumber ${maintenance.structureNumber}, skipping this record.`
              );
            }
          } catch (err) {
            console.error(
              `Error inserting maintenance with structureNumber ${maintenance.structureNumber}:`,
              err
            );
          }
        }

        console.log("Seeding maintenance completed.");
        process.exit(0);
      });
  } catch (error) {
    console.error("Error seeding maintenance:", error);
    process.exit(1);
  }
}

module.exports = seedMaintenance;
