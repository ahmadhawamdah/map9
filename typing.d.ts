export interface Bridge {
  structureNumber: string;
  stateCode: number;
  yearBuilt: number;
  yearReconstructed?: number;
  routePrefix: string;
  functionalClass: number;
  designLoad?: string;
  conditions: Condition[]; // One bridge can have many conditions
  locations: Location[]; // One bridge can have many locations
  ownerships: Ownership[]; // One bridge can have multiple owners
  trafficDetails: Traffic[]; // One bridge can have multiple traffic records
}

export interface Condition {
  id: string;
  structureNumber: string;
  deckCondition: string;
  superstructureCondition: string;
  substructureCondition: string;
  culvertCondition?: string;
  structuralEval: string;
  bridgeCondition: string;
  lowestRating: number;
  Bridge: Bridge; // Relation to Bridge
}

export interface Location {
  id: string;
  structureNumber: string;
  latitude: number;
  longitude: number;
  countyCode: number;
  placeCode: number;
  description: string;
  detourKilos: number;
  Bridge: Bridge; // Relation to Bridge
}

export interface Ownership {
  id: string;
  structureNumber: string;
  owner: number;
  maintenance: number;
  toll: number;
  Bridge: Bridge; // Relation to Bridge
}

export interface Traffic {
  id: string;
  structureNumber: string;
  adt: number; // Average Daily Traffic
  yearAdt: number;
  futureAdt: number;
  percentTruck?: number;
  Bridge: Bridge; // Relation to Bridge
}
