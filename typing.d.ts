export interface Bridge {
  structureNumber: string;
  yearBuilt: number;
  yearReconstructed?: number;
  history: number;
  serviceOn: number;
  routePrefix: number;
  location: string;
  fedAgency: string;
  lat: number;
  long: number;

  navigation: Navigation[];
  condition: Condition[];
  geometry: Geometry[];
  maintenance: Maintenance[];
  structure: Structure[];
}

export interface Navigation {
  id: string;
  structureNumber: string;
  direction: number;
  trafficDirection: number;
  navigation?: number;
  toll: boolean;
  functionalClass: number;
  detourKilos: number;
  kilopoint: number;
  trafficLanesOn: number;
  trafficLanesUnd: number;
  adt: number;
  percentAdtTruck?: number;
  yearAdt: number;
  futureAdt: number;
  yearOfFutureAdt: number;

  Bridge: Bridge;
}

export interface Condition {
  id: string;
  structureNumber: string;
  bridgeCondition: string;
  deckCond: string;
  superstructureCond: string;
  substructureCond: string;
  channelCond?: string;
  culvertCond?: string;
  structuralEval: string;
  deckGeometryEval: string;
  underclearanceEval?: string;
  waterwayEval?: string;
  apprRoadEval: number;
  postingEval: number;
  lowestRating: number;

  Bridge: Bridge;
}

export interface Maintenance {
  id: string;
  structureNumber: string;
  maintenance: number;
  maintenanceType: number;
  bridgeImprovement?: number;
  roadwayImprovement?: number;
  totalImprovement?: number;
  yearOfImprovement?: number;
  workProposed?: number;
  inspectionFrequency: number;
  fractureCritical?: string;
  openClosedPosted: string;

  Bridge: Bridge;
}

export interface Structure {
  id: string;
  structureNumber: string;
  apprKind: number;
  structureKind: number;
  structureType: number;
  apprType: number;
  mainUnitSpans: number;
  apprSpans: number;
  medianCode: number;
  deckStructureType: string;
  railings?: number;
  transitions?: number;
  apprRail?: number;
  apprRailEnd?: number;
  parallelStructure: string;

  Bridge: Bridge;
}

export interface Geometry {
  id: string;
  structureNumber: string;
  minVertClearance: number;
  apprWidth: number;
  structureFlared: number;
  navVertClearance: number;
  navHorrClearance: number;
  leftCurbWidth: number;
  rightCurbWidth: number;
  roadwayWidth: number;
  deckWidth: number;
  vertClearOver: number;
  vertClearUnderRef?: string;
  vertClearUnder: number;
  latUnderRef?: string;
  latUnder: number;
  leftLatUnder: number;
  horrClearance: number;
  deckArea: number;
  maxSpanLength: number;
  structureLength: number;
  minNavClearance: number;
  degreesSkew: number;

  Bridge: Bridge;
}

// Filter Files Types:
interface FilterBridgesParams {
  location: string;
  yearBuilt: { min: number; max: number };
  yearReconstructed: { min: number; max: number };
  fedAgency: string;
  serviceOn: number | null; // Allow null
  routePrefix: number;
}

interface FilterConditionsParams {
  bridgeCondition: string;
  deckCond: string;
  superstructureCond: string;
  substructureCond: string;
  channelCond: string;
  culvertCond: string;
  structuralEval: string;
  deckGeometryEval: string;
  underclearanceEval: string;
  waterwayEval: string;
  apprRoadEval: { min: number; max: number };
  postingEval: { min: number; max: number };
  lowestRating: { min: number; max: number };
}
