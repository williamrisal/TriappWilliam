export interface Product {
  code: string;
  product: ProductClass;
  status: number;
  status_verbose: string;
}

export interface ProductClass {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  additives_debug_tags: any[];
  additives_n: number;
  additives_old_n: number;
  additives_old_tags: any[];
  additives_original_tags: any[];
  additives_prev_original_tags: any[];
  additives_tags: any[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: any[];
  allergens_lc: string;
  allergens_tags: any[];
  amino_acids_prev_tags: any[];
  amino_acids_tags: any[];
  brand_owner: string;
  brand_owner_imported: string;
  brands: string;
  brands_imported: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_imported: string;
  categories_lc: string;
  categories_old: string;
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties: CategoryProperties;
  checkers_tags: any[];
  ciqual_food_name_tags: string[];
  cities_tags: string[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completed_t: number;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_imported: string;
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_imported: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_20141016: string;
  emb_codes_orig: string;
  emb_codes_tags: string[];
  entry_dates_tags: string[];
  expiration_date: string;
  food_groups: string;
  food_groups_tags: string[];
  generic_name: string;
  generic_name_fr: string;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_packaging_small_url: string;
  image_packaging_thumb_url: string;
  image_packaging_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  ingredients: Ingredient[];
  ingredients_analysis: IngredientsAnalysis;
  ingredients_analysis_tags: string[];
  ingredients_debug: any[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_ids_debug: any[];
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_debug: string;
  ingredients_text_debug_tags: any[];
  ingredients_text_fr: string;
  ingredients_text_fr_imported: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_fr: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  lang_imported: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  lc_imported: string;
  link: string;
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_tags: string[];
  max_imgid: string;
  minerals_prev_tags: any[];
  minerals_tags: string[];
  misc_tags: string[];
  no_nutrition_data: string;
  nova_group_debug: string;
  nova_group_error: string;
  nova_groups_tags: string[];
  nucleotides_prev_tags: any[];
  nucleotides_tags: any[];
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore_data: NutriscoreData;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutriscore_score_producer: string;
  nutriscore_score_producer_imported: string;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_per_imported: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_imported: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  obsolete_imported: string;
  origin: string;
  origin_fr: string;
  origins: string;
  origins_hierarchy: string[];
  origins_lc: string;
  origins_old: string;
  origins_tags: string[];
  other_nutritional_substances_tags: any[];
  owner: string;
  owner_fields: { [key: string]: number };
  owners_tags: string;
  packaging: string;
  packaging_hierarchy: string[];
  packaging_lc: string;
  packaging_old: string;
  packaging_old_before_taxonomization: string;
  packaging_tags: string[];
  packaging_text: string;
  packaging_text_fr: string;
  packagings: Packaging[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_fr: string;
  product_name_fr_imported: string;
  product_quantity: string;
  purchase_places: string;
  purchase_places_tags: string[];
  quantity: string;
  quantity_imported: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_size: string;
  serving_size_imported: string;
  sortkey: number;
  sources: Source[];
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_tags: string[];
  teams: string;
  teams_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: any[];
  traces_lc: string;
  traces_tags: any[];
  unique_scans_n: number;
  unknown_ingredients_n: string;
  unknown_nutrients_tags: string[];
  update_key: string;
  vitamins_prev_tags: any[];
  vitamins_tags: any[];
}

export interface CategoriesProperties {
  'agribalyse_food_code:en': string;
  'agribalyse_proxy_food_code:en': string;
  'ciqual_food_code:en': string;
}

export interface CategoryProperties {
  'ciqual_food_name:en': string;
  'ciqual_food_name:fr': string;
}

export interface EcoscoreData {
  adjustments: Adjustments;
  ecoscore_not_applicable_for_category: string;
  status: string;
}

export interface Adjustments {}

export interface Images {
  '1': The1;
  '2': The2;
  '3': The2;
  '4': The2;
  '5': The2;
  '6': The2;
  '7': The2;
  '8': The2;
  '9': The1;
  '11': The1;
  '12': The1;
  '13': The1;
  '14': The1;
  '15': The1;
  '16': The1;
  '17': The1;
  '18': The1;
  '19': The1;
  front_fr: Fr;
  ingredients_fr: Fr;
  nutrition_fr: Fr;
  packaging_fr: Fr;
}

export interface The1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

export interface Sizes {
  '100': The100;
  '400': The100;
  full: The100;
  '200'?: The100;
}

export interface The100 {
  h: number;
  w: number;
}

export interface The2 {
  sizes: Sizes;
  uploaded_t: string;
  uploader: string;
}

export interface Fr {
  angle: number | null | string;
  coordinates_image_size?: string;
  geometry: string;
  imgid: string;
  normalize: null | string;
  rev: string;
  sizes: Sizes;
  white_magic: null | string;
  x1: null | string;
  x2: null | string;
  y1: null | string;
  y2: null | string;
  ocr?: number;
  orientation?: null;
}

export interface Ingredient {
  id: string;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  ingredients?: Ingredient[];
}

export interface IngredientsAnalysis {
  'en:palm-oil-content-unknown': string[];
  'en:vegan-status-unknown': string[];
  'en:vegetarian-status-unknown': string[];
}

export interface Languages {
  'en:french': number;
}

export interface LanguagesCodes {
  fr: number;
}

export interface NutrientLevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}

export interface Nutriments {
  bicarbonate: number;
  bicarbonate_100g: number;
  bicarbonate_unit: string;
  bicarbonate_value: number;
  calcium: number;
  calcium_100g: number;
  calcium_unit: string;
  calcium_value: number;
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  chloride: number;
  chloride_100g: number;
  chloride_label: string;
  chloride_unit: string;
  chloride_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kj': number;
  'energy-kj_100g': number;
  'energy-kj_unit': string;
  'energy-kj_value': number;
  energy_100g: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_unit: string;
  fat_value: number;
  fiber: number;
  fiber_100g: number;
  fiber_unit: string;
  fiber_value: number;
  'fr-sulfate': number;
  'fr-sulfate_100g': number;
  'fr-sulfate_label': string;
  'fr-sulfate_unit': string;
  'fr-sulfate_value': number;
  'fruits-vegetables-nuts': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  'fruits-vegetables-nuts_100g': number;
  'fruits-vegetables-nuts_serving': number;
  'fruits-vegetables-nuts_unit': string;
  'fruits-vegetables-nuts_value': number;
  magnesium: number;
  magnesium_100g: number;
  magnesium_unit: string;
  magnesium_value: number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  ph: number;
  ph_100g: number;
  ph_serving: number;
  ph_unit: string;
  ph_value: number;
  potassium: number;
  potassium_100g: number;
  potassium_unit: string;
  potassium_value: number;
  proteins: number;
  proteins_100g: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_unit: string;
  sugars_value: number;
}

export interface NutriscoreData {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: string;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_ratio: number;
  saturated_fat_ratio_points: number;
  saturated_fat_ratio_value: number;
  saturated_fat_value: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}

export interface Packaging {
  material: string;
  shape: string;
}

export interface SelectedImages {
  front: Front;
  ingredients: Front;
  nutrition: Front;
  packaging: Front;
}

export interface Front {
  display: Display;
  small: Display;
  thumb: Display;
}

export interface Display {
  fr: string;
}

export interface Source {
  fields: string[];
  id: string;
  images: any[];
  import_t: number;
  manufacturer: number;
  name: string;
  url: null;
}
