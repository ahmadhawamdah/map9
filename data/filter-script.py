import pandas as pd

# Path to the dataset
file_path = "PA22.txt"  # Adjust this path if necessary

# Load the dataset with appropriate settings
full_data = pd.read_csv(file_path, delimiter=",", low_memory=False)

# Table 1: Bridges (Core Attributes)
bridges_columns = [
    "STRUCTURE_NUMBER_008", "STATE_CODE_001", "YEAR_BUILT_027", "YEAR_RECONSTRUCTED_106",
    "ROUTE_PREFIX_005B", "FUNCTIONAL_CLASS_026", "DESIGN_LOAD_031"
]
bridges = full_data[bridges_columns]
bridges.to_csv("bridges.csv", index=False)

# Table 2: Location
location_columns = [
    "STRUCTURE_NUMBER_008", "LAT_016", "LONG_017", "COUNTY_CODE_003", "PLACE_CODE_004",
    "FEATURES_DESC_006A", "DETOUR_KILOS_019"
]
location = full_data[location_columns]
location.to_csv("location.csv", index=False)

# Table 3: Condition & Ratings
condition_columns = [
    "STRUCTURE_NUMBER_008", "DECK_COND_058", "SUPERSTRUCTURE_COND_059", "SUBSTRUCTURE_COND_060",
    "CULVERT_COND_062", "STRUCTURAL_EVAL_067", "SCOUR_CRITICAL_113", "LOWEST_RATING"
]
condition = full_data[condition_columns]
condition.to_csv("condition.csv", index=False)

# Table 4: Traffic
traffic_columns = ["STRUCTURE_NUMBER_008", "ADT_029", "YEAR_ADT_030", "FUTURE_ADT_114", "PERCENT_ADT_TRUCK_109"]
traffic = full_data[traffic_columns]
traffic.to_csv("traffic.csv", index=False)

# Table 5: Ownership & Maintenance
ownership_columns = ["STRUCTURE_NUMBER_008", "OWNER_022", "MAINTENANCE_021", "TOLL_020"]
ownership = full_data[ownership_columns]
ownership.to_csv("ownership.csv", index=False)

print("Filtered data saved into separate CSV files.")
