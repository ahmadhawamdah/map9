// Bridge
const serviceMap: Record<string, string> = {
  "1": "Highway, with or without pedestrian",
  "2": "Railroad",
  "3": "Pedestrian-bicycle",
  "4": "Highway-railroad",
  "5": "Waterway",
  "6": "Highway-waterway",
  "7": "Railroad-waterway",
  "8": "Highway-waterway-railroad",
  "9": "Relief for waterway",
  "0": "Other",
};

const highwayMap: Record<string, string> = {
  "1": "Interstate highway",
  "2": "U.S. numbered highway",
  "3": "State highway",
  "4": "County highway",
  "5": "City street",
  "6": "Federal lands road",
  "7": "State lands road",
  "8": "Other (include toll roads not otherwise)",
};

const historicStatusMap: { [code: number]: string } = {
  1: "Bridge is on the National Register of Historic Places.",
  2: "Bridge is eligible for the National Register of Historic Places.",
  3: "Bridge is possibly eligible for the National Register of Historic Places (requires further investigation before determination can be made) or bridge is on a State or local historic register.",
  4: "Historical significance is not determinable at this time.",
  5: "Bridge is not eligible for the National Register of Historic Places.",
};

export { historicStatusMap, highwayMap, serviceMap };

// Navigaion
const directionMap: { [code: string]: string } = {
  N: "Not applicable, no waterway.",
  "0": "No navigation control on waterway (bridge permit not required).",
  "1": "Navigation control present on waterway.",
};

const tollMap: { [code: number]: string } = {
  1: "Toll bridge.",
  2: "On toll road.",
  3: "On free road.",
};

const functionalClassificationMap: { [code: number]: string } = {
  1: "Principal Arterial - Interstate",
  2: "Principal Arterial - Other",
  6: "Minor Arterial",
  7: "Major Collector",
  8: "Minor Collector",
  9: "Local",
  11: "Principal Arterial - Interstate (Urban)",
  12: "Principal Arterial - Other Freeways or Expressways (Urban)",
  14: "Other Principal Arterial (Urban)",
  16: "Minor Arterial (Urban)",
  17: "Collector (Urban)",
  19: "Local (Urban)",
};

export { directionMap, tollMap, functionalClassificationMap };

//Condition
const conditionMap: Record<number | string, string> = {
  N: "NOT APPLICABLE",
  "9": "EXCELLENT",
  "8": "VERY GOOD",
  "7": "GOOD",
  "6": "SATISFACTORY",
  "5": "FAIR",
  "4": "POOR",
  "3": "SERIOUS",
  "2": "CRITICAL",
  "1": '"IMMINENT" FAILURE',
  "0": "FAILED",
};

const overallConditionMap: Record<number | string, string> = {
  F: "FAIR",
  G: "GOOD",
  P: "POOR",
};
export { conditionMap, overallConditionMap };

//Maintenance
const maintenanceAgencyMap: { [code: number]: string } = {
  1: "State Highway Agency",
  2: "County Highway Agency",
  3: "Town or Township Highway Agency",
  4: "City or Municipal Highway Agency",
  11: "State Park, Forest, or Reservation Agency",
  12: "Local Park, Forest, or Reservation Agency",
  21: "Other State Agencies",
  25: "Other Local Agencies",
  26: "Private (other than railroad)",
  27: "Railroad",
  31: "State Toll Authority",
  32: "Local Toll Authority",
  60: "Other Federal Agencies (not listed below)",
  61: "Indian Tribal Government",
  62: "Bureau of Indian Affairs",
  63: "Bureau of Fish and Wildlife",
  64: "U.S. Forest Service",
  66: "National Park Service",
  67: "Tennessee Valley Authority",
  68: "Bureau of Land Management",
  69: "Bureau of Reclamation",
  70: "Corps of Engineers (Civil)",
  71: "Corps of Engineers (Military)",
  72: "Air Force",
  73: "Navy/Marines",
  74: "Army",
  75: "NASA",
  76: "Metropolitan Washington Airports Service",
  80: "Unknown",
};

const workProposedMap: { [code: number]: string } = {
  31: "Replacement of bridge or other structure because of substandard load carrying capacity or substandard bridge roadway geometry.",
  32: "Replacement of bridge or other structure because of relocation of road.",
  33: "Widening of existing bridge or other major structure without deck rehabilitation or replacement; includes culvert lengthening.",
  34: "Widening of existing bridge with deck rehabilitation or replacement.",
  35: "Bridge rehabilitation because of general structure deterioration or inadequate strength.",
  36: "Bridge deck rehabilitation with only incidental widening.",
  37: "Bridge deck replacement with only incidental widening.",
  38: "Other structural work, including hydraulic replacements.",
};

const bridgeStatusMap: { [code: string]: string } = {
  A: "Open, no restriction",
  B: "Open, posting recommended but not legally implemented (all signs not in place or not correctly implemented)",
  D: "Open, would be posted or closed except for temporary shoring, etc. to allow for unrestricted traffic",
  E: "Open, temporary structure in place to carry legal loads while original structure is closed and awaiting replacement or rehabilitation",
  G: "New structure not yet open to traffic",
  K: "Bridge closed to all traffic",
  P: "Posted for load (may include other restrictions such as temporary bridges which are load posted)",
  R: "Posted for other load-capacity restriction (speed, number of vehicles on bridge, etc.)",
};

export { maintenanceAgencyMap, workProposedMap, bridgeStatusMap };
