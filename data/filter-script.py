import pandas as pd

file_path = "PA22.txt"

# Load the dataset
full_data = pd.read_csv(file_path, delimiter=",", low_memory=False)

# Table 1: Bridges
bridges_columns = [
    "STRUCTURE_NUMBER_008",
    "YEAR_BUILT_027",
    "YEAR_RECONSTRUCTED_106",
    "HISTORY_037",
    "SERVICE_ON_042A",
    "ROUTE_PREFIX_005B",
    "LOCATION_009",
    "FED_AGENCY",
    "LAT_016",
    "LONG_017"
]

bridges = full_data[bridges_columns]
bridges.to_csv("bridges.csv", index=False)

navigation_columns = [
    "STRUCTURE_NUMBER_008",
    "DIRECTION_005E",
    "TRAFFIC_DIRECTION_102",
    "NAVIGATION_038",
    "TOLL_020",
    "FUNCTIONAL_CLASS_026",
    "DETOUR_KILOS_019",
    "KILOPOINT_011",
    "TRAFFIC_LANES_ON_028A",
    "TRAFFIC_LANES_UND_028B",
    "ADT_029",
    "PERCENT_ADT_TRUCK_109",
    "YEAR_ADT_030",
    "FUTURE_ADT_114",
    "YEAR_OF_FUTURE_ADT_115"
]

navigation = full_data[navigation_columns]
navigation.to_csv("navigation.csv", index=False)

condition_columns = [
    "STRUCTURE_NUMBER_008",
    "BRIDGE_CONDITION",
    "DECK_COND_058",
    "SUPERSTRUCTURE_COND_059",
    "SUBSTRUCTURE_COND_060",
    "CHANNEL_COND_061",
    "CULVERT_COND_062",
    "STRUCTURAL_EVAL_067",
    "DECK_GEOMETRY_EVAL_068",
    "UNDCLRENCE_EVAL_069",
    "WATERWAY_EVAL_071",
    "APPR_ROAD_EVAL_072",
    "POSTING_EVAL_070",
    "LOWEST_RATING"
]


condition = full_data[condition_columns]
condition.to_csv("condition.csv", index=False)

maintenance_columns = [
    "STRUCTURE_NUMBER_008",
    "MAINTENANCE_021",
    "BRIDGE_IMP_COST_094",
    "ROADWAY_IMP_COST_095",
    "TOTAL_IMP_COST_096",
    "YEAR_OF_IMP_097",
    "WORK_PROPOSED_075A",
    "INSPECT_FREQ_MONTHS_091",
    "FRACTURE_092A",
    "OPEN_CLOSED_POSTED_041"
]

maintenance = full_data[maintenance_columns]
maintenance.to_csv("maintenance.csv", index=False)

structure_columns = [
    "STRUCTURE_NUMBER_008",
    "APPR_KIND_044A",
    "STRUCTURE_KIND_043A",
    "STRUCTURE_TYPE_043B",
    "APPR_TYPE_044B",
    "MAIN_UNIT_SPANS_045",
    "APPR_SPANS_046",
    "MEDIAN_CODE_033",
    "DECK_STRUCTURE_TYPE_107",
    "RAILINGS_036A",
    "TRANSITIONS_036B",
    "APPR_RAIL_036C",
    "APPR_RAIL_END_036D",
    "PARALLEL_STRUCTURE_101"
]

structure = full_data[structure_columns]
structure.to_csv("structure.csv", index=False)

geometry_columns = [
    "STRUCTURE_NUMBER_008",
    "MIN_VERT_CLR_010",
    "APPR_WIDTH_MT_032",
    "STRUCTURE_FLARED_035",
    "NAV_VERT_CLR_MT_039",
    "NAV_HORR_CLR_MT_040",
    "LEFT_CURB_MT_050A",
    "RIGHT_CURB_MT_050B",
    "ROADWAY_WIDTH_MT_051",
    "DECK_WIDTH_MT_052",
    "VERT_CLR_OVER_MT_053",
    "VERT_CLR_UND_REF_054A",
    "VERT_CLR_UND_054B",
    "LAT_UND_REF_055A",
    "LAT_UND_MT_055B",
    "LEFT_LAT_UND_MT_056",
    "HORR_CLR_MT_047",
    "DECK_AREA",
    "MAX_SPAN_LEN_MT_048",
    "STRUCTURE_LEN_MT_049",
    "MIN_NAV_CLR_MT_116",
    "DEGREES_SKEW_034"
]

geometry = full_data[geometry_columns]
geometry.to_csv("geometry.csv", index=False)

print("Filtered data saved into separate CSV files.")
