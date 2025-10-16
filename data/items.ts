// Item Category System
export type ItemCategory =
  | 'Weapon'
  | 'Armor'
  | 'Material'
  | 'Ammo'
  | 'Tactical'
  | 'Consumable'
  | 'Quest Item'
  | 'Treasure';

export type ItemSubcategory =
  // Weapons
  | 'Bow'
  | 'Rifle'
  | 'Pistol'
  | 'SMG'
  | 'Shotgun'
  | 'Sniper'
  | 'Melee - One-Handed'
  | 'Melee - Two-Handed'
  // Armor
  | 'Helmet'
  | 'Upper Armor'
  | 'Lower Armor'
  | 'Vest'
  | 'Backpack'
  | 'Gloves'
  | 'Boots'
  // Materials
  | 'Dismantle Only'
  | 'For Sale Only'
  | 'Dismantle & Craft'
  | 'Crafting Only'
  | 'Raw Material'
  // Ammo
  | 'Bullet'
  | 'Arrow'
  | 'Shell'
  // Tactical
  | 'Medical'
  | 'Throwable'
  | 'Utility'
  // Consumable
  | 'Food'
  | 'Drink'
  | 'Buff'
  // Quest/Treasure
  | 'Quest Specific'
  | 'Rare Find'
  | 'Casino Loot';

export type ItemTag =
  // Floor Theme Tags
  | 'Medicine'
  | 'Casino Supply'
  | 'Vehicle Part'
  | 'Building Material'
  | 'Electronics'
  | 'Houseware'
  | 'Beauty'
  | 'High Value Floor'
  | 'Boss'
  | 'Safes'
  | 'Office'
  | 'Construction'
  | 'Shopping'
  | 'Military'
  | 'Residential'
  | 'Broadcasting'
  | 'Fitness'
  | 'Hotel'
  // Specific Item Types (what players actually search for)
  | 'Bandage'
  | 'Medkit'
  | 'Drink'
  | 'Food'
  | 'Wire'
  | 'Electronics'
  | 'Scrap Metal'
  | 'Cloth'
  | 'Wood'
  | 'Plastic'
  | 'Bullet'
  | 'Arrow'
  | 'Shell'
  | 'Grenade'
  | 'Rifle'
  | 'Pistol'
  | 'Bow'
  | 'Melee'
  | 'Armor Piece'
  | 'Backpack'
  | 'Casino Chip'
  | 'Quest Item';

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  subcategory: ItemSubcategory;
  rarity: 'Junk' | 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  tags: ItemTag[];
  dropFloors: string[]; // Which floors this item commonly drops on (e.g., ['3F', '8F'])
  description: string;
  questItem?: boolean; // If true, marks this as a quest-specific item
}

export interface FloorLootPool {
  floor: string;
  floorName: string; // Include theme in name like "HOSPITAL SURGERY (Medicine)"
  primaryTags: ItemTag[];
  commonItems: string[]; // Item IDs that commonly drop here
  description: string;
}

// Items Database - Only confirmed items from The Midnight Walkers
// TODO: Add items as we discover them in the game
export const itemsDatabase: Item[] = [
  // Tactical - Medicine
  {
    id: 'drink',
    name: 'Drink',
    category: 'Tactical',
    subcategory: 'Medical',
    rarity: 'Common',
    tags: ['Medicine', 'Drink'],
    dropFloors: ['3F', '8F'],
    description: 'Restores hydration'
  },
  {
    id: 'bandage',
    name: 'Bandage',
    category: 'Tactical',
    subcategory: 'Medical',
    rarity: 'Common',
    tags: ['Medicine', 'Bandage'],
    dropFloors: ['3F', '8F'],
    description: 'Stops bleeding'
  },
  // Materials - Medicine
  {
    id: 'acidic_blood',
    name: 'Acidic Blood',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Rare',
    tags: ['Medicine'],
    dropFloors: ['3F', '8F'],
    description: 'Rare material from mutated enemies'
  },
  {
    id: 'blood_sample',
    name: 'Blood Sample',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Uncommon',
    tags: ['Medicine'],
    dropFloors: ['3F', '8F'],
    description: 'Used in research quests',
    questItem: true
  },
  // Materials - Crafting
  {
    id: 'wire',
    name: 'Wire',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Common',
    tags: ['Wire', 'Office', 'Construction'],
    dropFloors: ['6F', '5F', '10F'],
    description: 'Used for crafting'
  },
  {
    id: 'electronics',
    name: 'Electronic Components',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Uncommon',
    tags: ['Electronics', 'Office'],
    dropFloors: ['6F', '4F', '9F'],
    description: 'Used for advanced crafting'
  },
  {
    id: 'scrap_metal',
    name: 'Scrap Metal',
    category: 'Material',
    subcategory: 'Dismantle & Craft',
    rarity: 'Common',
    tags: ['Scrap Metal', 'Construction'],
    dropFloors: ['5F', '10F'],
    description: 'Used for crafting and repairs'
  },
  // Casino Items
  {
    id: 'casino_chip',
    name: 'Casino Chip',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Uncommon',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Valuable casino currency'
  },
  {
    id: 'chip_tray',
    name: 'Chip Tray',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino chip holder'
  },
  {
    id: 'baccarat_table_mat',
    name: 'Baccarat Table Mat',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Uncommon',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino table material'
  },
  {
    id: 'blackjack_mat',
    name: 'Blackjack Mat',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Uncommon',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino table material'
  },
  {
    id: 'all_in_button',
    name: 'All-In Button',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Poker table button'
  },
  {
    id: 'seat_card',
    name: 'Seat Card',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino seat marker'
  },
  {
    id: 'cup_holder',
    name: 'Cup Holder',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino table accessory'
  },
  {
    id: 'roulette_ball',
    name: 'Roulette Ball',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Uncommon',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Roulette game piece'
  },
  {
    id: 'roulette_marker',
    name: 'Roulette Marker',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Marks winning numbers'
  },
  {
    id: 'dice',
    name: 'Dice',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Casino gaming dice'
  },
  {
    id: 'call_bell',
    name: 'Call Bell',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Service bell'
  },
  {
    id: 'pack_of_playing_cards',
    name: 'Pack Of Playing Cards',
    category: 'Material',
    subcategory: 'Casino Loot',
    rarity: 'Common',
    tags: ['Casino Supply'],
    dropFloors: ['12F'],
    description: 'Deck of cards'
  },
  // Vehicle Parts - Parking Lot
  {
    id: 'lubricant',
    name: 'Lubricant',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Vehicle maintenance fluid'
  },
  {
    id: 'wiper_blade',
    name: 'Wiper Blade',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Car windshield wiper'
  },
  {
    id: 'car_door_handle',
    name: 'Car Door Handle',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Vehicle door component'
  },
  {
    id: 'tire_rim',
    name: 'Tire Rim',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Metal wheel rim'
  },
  {
    id: 'cleaning_spray',
    name: 'Cleaning Spray',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Vehicle cleaning product'
  },
  {
    id: 'oil_spray',
    name: 'Oil Spray',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Lubricating oil spray'
  },
  {
    id: 'car_cleaner',
    name: 'Car Cleaner',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Vehicle cleaning solution'
  },
  {
    id: 'muffler',
    name: 'Muffler',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Exhaust system component'
  },
  {
    id: 'rearview_mirror',
    name: 'Rearview Mirror',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Vehicle Part'],
    dropFloors: ['B1F'],
    description: 'Vehicle mirror'
  },
  // Building Materials - Construction Zones
  {
    id: 'lumber',
    name: 'Lumber',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction wood material'
  },
  {
    id: 'metal',
    name: 'Metal',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Basic metal material'
  },
  {
    id: 'metal_polish',
    name: 'Metal Polish',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Metal finishing product'
  },
  {
    id: 'scrap_metal_construction',
    name: 'Scrap Metal',
    category: 'Material',
    subcategory: 'Dismantle & Craft',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Used for crafting and repairs'
  },
  {
    id: 'nail',
    name: 'Nail',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction fastener'
  },
  {
    id: 'wire_construction',
    name: 'Wire',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Used for crafting'
  },
  {
    id: 'metal_pipe',
    name: 'Metal Pipe',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction piping'
  },
  {
    id: 'metal_spring',
    name: 'Metal Spring',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Mechanical component'
  },
  {
    id: 'reinforced_wood',
    name: 'Reinforced Wood',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Strengthened wooden material'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction fastener'
  },
  {
    id: 'nut',
    name: 'Nut',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction fastener'
  },
  {
    id: 'copper_glue',
    name: 'Copper Glue',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Specialized adhesive'
  },
  {
    id: 'wooden_stick',
    name: 'Wooden Stick',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Basic wood component'
  },
  {
    id: 'iron_ingot',
    name: 'Iron Ingot',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Processed metal bar'
  },
  {
    id: 'masking_tape',
    name: 'Masking Tape',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction tape'
  },
  {
    id: 'duct_tape',
    name: 'Duct Tape',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Heavy-duty tape'
  },
  {
    id: 'metal_plate',
    name: 'Metal Plate',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Flat metal sheet'
  },
  {
    id: 'paint_brush_large',
    name: 'Paint Brush (Large)',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Large painting tool'
  },
  {
    id: 'paint_brush_small',
    name: 'Paint Brush (Small)',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Small painting tool'
  },
  {
    id: 'paint_roller',
    name: 'Paint Roller',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Painting tool'
  },
  {
    id: 'rusty_gear',
    name: 'Rusty Gear',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Worn mechanical part'
  },
  {
    id: 'gear_wrench',
    name: 'Gear Wrench',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Construction tool'
  },
  {
    id: 'instant_adhesive',
    name: 'Instant Adhesive',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Fast-drying glue'
  },
  {
    id: 'reinforced_metal_ingot',
    name: 'Reinforced Metal Ingot',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Rare',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Strengthened metal bar'
  },
  {
    id: 'paint_can',
    name: 'Paint Can',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Container of paint'
  },
  {
    id: 'stone',
    name: 'Stone',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Basic construction material'
  },
  {
    id: 'plank',
    name: 'Plank',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Building Material'],
    dropFloors: ['5F', '10F'],
    description: 'Wooden construction board'
  },
  // Electronics - Office Floor (6F)
  {
    id: 'electronic_scrap',
    name: 'Electronic Scrap',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Salvaged electronic components'
  },
  {
    id: 'payment_terminal',
    name: 'Payment Terminal',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Electronic payment device'
  },
  {
    id: 'electrical_wire',
    name: 'Electrical Wire',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Common',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Used for electrical crafting'
  },
  {
    id: 'electric_drill',
    name: 'Electric Drill',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Power tool for drilling'
  },
  {
    id: 'stand_microphone',
    name: 'Stand Microphone',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Professional microphone with stand'
  },
  {
    id: 'headset',
    name: 'Headset',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Audio headset device'
  },
  {
    id: 'microphone',
    name: 'Microphone',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Audio recording device'
  },
  {
    id: 'camera',
    name: 'Camera',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Electronic camera device'
  },
  {
    id: 'golden_microphone',
    name: 'Golden Microphone',
    category: 'Material',
    subcategory: 'Rare Find',
    rarity: 'Rare',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Valuable golden microphone'
  },
  {
    id: 'blueprints',
    name: 'Blueprints',
    category: 'Material',
    subcategory: 'Crafting Only',
    rarity: 'Uncommon',
    tags: ['Electronics'],
    dropFloors: ['4F', '6F', '9F'],
    description: 'Technical design blueprints',
    questItem: true
  },
  // Beauty - Broadcasting Stations (4F, 9F)
  {
    id: 'lipstick',
    name: 'Lipstick',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Beauty'],
    dropFloors: ['4F', '9F'],
    description: 'Cosmetic lip color'
  },
  {
    id: 'perfume',
    name: 'Perfume',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Beauty'],
    dropFloors: ['4F', '9F'],
    description: 'Fragrance spray'
  },
  {
    id: 'bb_cream',
    name: 'BB Cream',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Beauty'],
    dropFloors: ['4F', '9F'],
    description: 'Beauty balm cream'
  },
  {
    id: 'skin_care_cream',
    name: 'Skin Care Cream',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Beauty'],
    dropFloors: ['4F', '9F'],
    description: 'Facial moisturizing cream'
  },
  // Houseware - Shopping Centers (1F, 2F)
  {
    id: 'water_based_marker',
    name: 'Water-Based Marker',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Writing marker'
  },
  {
    id: 'detergent',
    name: 'Detergent',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Cleaning detergent'
  },
  {
    id: 'mold_remover',
    name: 'Mold Remover',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Mold cleaning solution'
  },
  {
    id: 'bleach',
    name: 'Bleach',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Cleaning bleach'
  },
  {
    id: 'hanger',
    name: 'Hanger',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Clothing hanger'
  },
  {
    id: 'chalk',
    name: 'Chalk',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Writing chalk'
  },
  {
    id: 'file_folder',
    name: 'File Folder',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Document folder'
  },
  {
    id: 'pencil',
    name: 'Pencil',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Writing pencil'
  },
  {
    id: 'diary',
    name: 'Diary',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Personal diary'
  },
  {
    id: 'document',
    name: 'Document',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Paper document'
  },
  {
    id: 'scissors',
    name: 'Scissors',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Cutting scissors'
  },
  {
    id: 'toilet_paper',
    name: 'Toilet Paper',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Bathroom tissue'
  },
  {
    id: 'shampoo',
    name: 'Shampoo',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Hair cleaning product'
  },
  {
    id: 'conditioner',
    name: 'Conditioner',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Hair conditioner'
  },
  {
    id: 'body_wash',
    name: 'Body Wash',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Body cleaning soap'
  },
  {
    id: 'toothbrush',
    name: 'Toothbrush',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Dental hygiene tool'
  },
  {
    id: 'toothpaste',
    name: 'Toothpaste',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Dental cleaning paste'
  },
  {
    id: 'soap',
    name: 'Soap',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Cleaning soap'
  },
  {
    id: 'box_cutter',
    name: 'Box Cutter',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Utility cutting tool'
  },
  {
    id: 'packing_tape',
    name: 'Packing Tape',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Adhesive packing tape'
  },
  {
    id: 'black_market_ledger',
    name: 'Black Market Ledger',
    category: 'Material',
    subcategory: 'Rare Find',
    rarity: 'Rare',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Suspicious record book',
    questItem: true
  },
  {
    id: 'torn_diary',
    name: 'Torn Diary',
    category: 'Material',
    subcategory: 'Rare Find',
    rarity: 'Uncommon',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Damaged personal journal'
  },
  {
    id: 'envelope',
    name: 'Envelope',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Paper envelope'
  },
  {
    id: 'flowerpot',
    name: 'Flowerpot',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Common',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Plant container'
  },
  {
    id: 'garden_shears',
    name: 'Garden Shears',
    category: 'Material',
    subcategory: 'Raw Material',
    rarity: 'Uncommon',
    tags: ['Houseware'],
    dropFloors: ['1F', '2F'],
    description: 'Gardening cutting tool'
  }
];

// Floor Loot Pools
export const floorLootPools: FloorLootPool[] = [
  {
    floor: 'B1F',
    floorName: 'PARKING LOT',
    primaryTags: ['Vehicle Part'],
    commonItems: ['lubricant', 'wiper_blade', 'car_door_handle', 'tire_rim', 'cleaning_spray', 'oil_spray', 'car_cleaner', 'muffler', 'rearview_mirror'],
    description: 'Parking lot with vehicle parts and automotive supplies'
  },
  {
    floor: '1F',
    floorName: 'SHOPPING CENTER A',
    primaryTags: ['Houseware'],
    commonItems: ['water_based_marker', 'detergent', 'mold_remover', 'bleach', 'hanger', 'chalk', 'file_folder', 'pencil', 'diary', 'document', 'scissors', 'toilet_paper', 'shampoo', 'conditioner', 'body_wash', 'toothbrush', 'toothpaste', 'soap', 'box_cutter', 'packing_tape', 'black_market_ledger', 'torn_diary', 'envelope', 'flowerpot', 'garden_shears'],
    description: 'Shopping center with household items, cleaning supplies, and everyday goods'
  },
  {
    floor: '2F',
    floorName: 'SHOPPING CENTER B',
    primaryTags: ['Houseware'],
    commonItems: ['water_based_marker', 'detergent', 'mold_remover', 'bleach', 'hanger', 'chalk', 'file_folder', 'pencil', 'diary', 'document', 'scissors', 'toilet_paper', 'shampoo', 'conditioner', 'body_wash', 'toothbrush', 'toothpaste', 'soap', 'box_cutter', 'packing_tape', 'black_market_ledger', 'torn_diary', 'envelope', 'flowerpot', 'garden_shears'],
    description: 'Shopping center with household items, cleaning supplies, and everyday goods'
  },
  {
    floor: '3F',
    floorName: 'HOSPITAL SURGERY',
    primaryTags: ['Medicine'],
    commonItems: ['drink', 'bandage', 'acidic_blood', 'blood_sample'],
    description: 'Hospital floor with medical supplies and rare materials'
  },
  {
    floor: '4F',
    floorName: 'BROADCASTING STATION',
    primaryTags: ['Electronics', 'Beauty', 'Boss'],
    commonItems: ['electronic_scrap', 'payment_terminal', 'electrical_wire', 'electric_drill', 'stand_microphone', 'headset', 'microphone', 'camera', 'golden_microphone', 'blueprints', 'lipstick', 'perfume', 'bb_cream', 'skin_care_cream'],
    description: 'Broadcasting station with electronics, beauty products, and boss spawns'
  },
  {
    floor: '5F',
    floorName: 'CONSTRUCTION ZONE',
    primaryTags: ['Building Material'],
    commonItems: ['lumber', 'metal', 'metal_polish', 'scrap_metal_construction', 'nail', 'wire_construction', 'metal_pipe', 'metal_spring', 'reinforced_wood', 'bolt', 'nut', 'copper_glue', 'wooden_stick', 'iron_ingot', 'masking_tape', 'duct_tape', 'metal_plate', 'paint_brush_large', 'paint_brush_small', 'paint_roller', 'rusty_gear', 'gear_wrench', 'instant_adhesive', 'reinforced_metal_ingot', 'paint_can', 'stone', 'plank'],
    description: 'Construction zone with building materials and tools'
  },
  {
    floor: '6F',
    floorName: 'OFFICE',
    primaryTags: ['Electronics'],
    commonItems: ['electronic_scrap', 'payment_terminal', 'electrical_wire', 'electric_drill', 'stand_microphone', 'headset', 'microphone', 'camera', 'golden_microphone', 'blueprints'],
    description: 'Office floor with electronics, audio equipment, and valuable tech items'
  },
  {
    floor: '7F',
    floorName: 'BOTANICAL GARDEN',
    primaryTags: [],
    commonItems: [],
    description: 'Configure loot tags for this floor'
  },
  {
    floor: '8F',
    floorName: 'HOSPITAL RECEPTION',
    primaryTags: ['Medicine'],
    commonItems: ['drink', 'bandage', 'acidic_blood', 'blood_sample'],
    description: 'Hospital reception with medical supplies and materials'
  },
  {
    floor: '9F',
    floorName: 'BROADCASTING STATION',
    primaryTags: ['Electronics', 'Beauty', 'Boss'],
    commonItems: ['electronic_scrap', 'payment_terminal', 'electrical_wire', 'electric_drill', 'stand_microphone', 'headset', 'microphone', 'camera', 'golden_microphone', 'blueprints', 'lipstick', 'perfume', 'bb_cream', 'skin_care_cream'],
    description: 'Broadcasting station with electronics, beauty products, and boss spawns'
  },
  {
    floor: '10F',
    floorName: 'CONSTRUCTION ZONE',
    primaryTags: ['Building Material'],
    commonItems: ['lumber', 'metal', 'metal_polish', 'scrap_metal_construction', 'nail', 'wire_construction', 'metal_pipe', 'metal_spring', 'reinforced_wood', 'bolt', 'nut', 'copper_glue', 'wooden_stick', 'iron_ingot', 'masking_tape', 'duct_tape', 'metal_plate', 'paint_brush_large', 'paint_brush_small', 'paint_roller', 'rusty_gear', 'gear_wrench', 'instant_adhesive', 'reinforced_metal_ingot', 'paint_can', 'stone', 'plank'],
    description: 'Construction zone with building materials and tools'
  },
  {
    floor: '11F',
    floorName: 'FITNESS CENTER',
    primaryTags: [],
    commonItems: [],
    description: 'Configure loot tags for this floor'
  },
  {
    floor: '12F',
    floorName: 'CASINO',
    primaryTags: ['Casino Supply'],
    commonItems: ['casino_chip', 'chip_tray', 'baccarat_table_mat', 'blackjack_mat', 'all_in_button', 'seat_card', 'cup_holder', 'roulette_ball', 'roulette_marker', 'dice', 'call_bell', 'pack_of_playing_cards'],
    description: 'Casino floor with gambling supplies and collectibles'
  },
  {
    floor: '13F',
    floorName: 'HOTEL LOBBY',
    primaryTags: [],
    commonItems: [],
    description: 'Configure loot tags for this floor'
  },
  {
    floor: '14F',
    floorName: 'HOTEL GUEST FLOOR',
    primaryTags: ['Safes', 'High Value Floor'],
    commonItems: [],
    description: 'Hotel guest floor with safes containing valuable loot'
  },
  {
    floor: '15F',
    floorName: 'PUB',
    primaryTags: [],
    commonItems: [],
    description: 'Configure loot tags for this floor'
  }
];

// Helper function to find items by tag
export function getItemsByTag(tag: ItemTag): Item[] {
  return itemsDatabase.filter(item => item.tags.includes(tag));
}

// Helper function to find floors by tag
export function getFloorsByTag(tag: ItemTag): FloorLootPool[] {
  return floorLootPools.filter(floor => floor.primaryTags.includes(tag));
}

// Helper function to get all items that drop on a specific floor
export function getFloorItems(floorId: string): Item[] {
  const floor = floorLootPools.find(f => f.floor === floorId);
  if (!floor) return [];

  return itemsDatabase.filter(item =>
    floor.commonItems.includes(item.id) ||
    floor.primaryTags.some(tag => item.tags.includes(tag))
  );
}
