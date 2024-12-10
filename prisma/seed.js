const seedBridges = require("./seed-functions/seedBridges");
const seedNavigation = require("./seed-functions/seedNavigation");
const seedCondition = require("./seed-functions/seedCondition");
const seedMaintenance = require("./seed-functions/seedMaintenance");
const seedStructure = require("./seed-functions/seedStructure");
const seedGeometry = require("./seed-functions/seedGeometry");
async function main() {
  // console.log("Seeding bridgdes ...");
  // await seedBridges();
  // console.log("Bridgdes seeding finished.");
  // console.log("Seeding navigation ...");
  // await seedNavigation();
  // console.log("Navigation seeding finished.");
  // console.log("Seeding condition...");
  // await seedCondition();
  // console.log("Condition seeding finished.");
  console.log("Seeding Maintenance...");
  await seedMaintenance();
  console.log("Maintenance seeding finished.");
  // console.log("Seeding Structure...");
  // await seedStructure();
  // console.log("Structure seeding finished.");
  // console.log("Seeding Geometry...");
  // await seedGeometry();
  // console.log("Geometry seeding finished.");
}

main().catch((err) => {
  console.error("An error occurred while running the main script:", err);
  process.exit(1);
});
