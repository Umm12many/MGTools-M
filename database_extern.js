class Plant {
  /**
   * @param {string} name The Plant's display name.
   * @param {string} id The Plants in game ID.
   * @param {string} shopImage The link to the image for the Plant.
   * @param {number} rarity The number of the rarity for the Plant inside the shop (if in the shop)/For the plant in general, 0 for common, 1 for uncommon, 2 for rare, 3 for legendary, 4 for mythical, 5 for divine, 6 for celestial
   * @param {number} shopPrice The price of the Plant in the shop (If in the shop)
   * @param {boolean} inShop Whether or not the Plant is buyable in the shop
   * @param {string} htmlEmoji The emoji (EG 🌵 for Cactus) to be shown inside html for Notifications, Wiki tools, etc.
   * @param {number} plantValue The base selling value for said Plant, with no modifiers.
   */
  constructor(
    name,
    id,
    shopImage,
    rarity,
    shopPrice,
    inShop,
    htmlEmoji,
    plantValue,
  ) {
    this.name = name;
    this.id = id;
    this.shopImage = shopImage;
    this.rarity = rarity;
    this.shopPrice = shopPrice;
    this.inShop = inShop;
    this.htmlEmoji = htmlEmoji;
    this.plantValue = plantValue;
  }

  /**
   * Returns the plant in json format.
   * @returns {string} the plant in json
   */
  getPlantJson() {
    if (this.inShop) {
      return `
      {
        "name" = "${this.name}",
        "id" = "${this.id}",
        "shopImage" = "${this.shopImage}",
        "rarity" = ${this.rarity},
        "shopPrice" = ${this.shopPrice},
        "inShop" = ${this.inShop},
        "htmlEmoji" = "${this.htmlEmoji}",
        "plantValue" = ${this.plantValue}
      }
      `;
    } else {
      return `
      {
        "name" = "${this.name}",
        "id" = "${this.id}",
        "shopImage" = "${this.shopImage}",
        "rarity" = ${this.rarity},
        "inShop" = ${this.inShop},
        "htmlEmoji" = "${this.htmlEmoji}",
        "plantValue" = ${this.plantValue}
      }
      `;
    }
  }
}

// --- Usages Examples ---

// Create an instance of the custom type
const testPlant = new Plant(
  "Carrot",
  "Carrot",
  "https://cdn.discordapp.com/emojis/1423010183574982669.webp",
  0,
  10,
  true,
  "🥕",
  20,
);

// Use its properties and methods
console.log(testPlant.getPlantJson()); // "Hello, my name is Alice and I am 30 years old."
console.log(typeof testPlant); // "object"
console.log(testPlant instanceof Plant); // true
console.log(testPlant.name);

const NUM_COM = 0;
const NUM_UNCOM = 1;
const NUM_RARE = 2;
const NUM_LEG = 3;
const NUM_MYTH = 4;
const NUM_DIV = 5;
const NUM_CEL = 6;

// --- Database (Remember to include delphinium!!!!!!) ---

const plantsDatabase = [
  new Plant(
    "Carrot",
    "Carrot",
    "https://media.magicgarden.wiki/Carrot.png",
    NUM_COM,
    10,
    true,
    "🥕",
    20,
  ),
  new Plant(
    "Strawberry",
    "Strawberry",
    "https://media.magicgarden.wiki/Strawberry.png",
    NUM_COM,
    50,
    true,
    "🍓",
    14,
  ),
  new Plant(
    "Aloe",
    "Aloe",
    "https://media.magicgarden.wiki/Aloe.png",
    NUM_COM,
    135,
    true,
    "🌿",
    310,
  ),
  new Plant(
    "Delphinium",
    "Delphinium",
    "https://media.magicgarden.wiki/Delphinium.png",
    NUM_UNCOM,
    0,
    false,
    "🪻",
    530,
  ),
  new Plant(
    "FavaBean",
    "FavaBean",
    "https://media.magicgarden.wiki/Fava_Bean_Pod.png",
    NUM_UNCOM,
    250,
    true,
    "🫛",
    30,
  ),
  new Plant(
    "Blueberry",
    "Blueberry",
    "https://media.magicgarden.wiki/Blueberry.png",
    NUM_UNCOM,
    400,
    true,
    "🫐",
    23,
  ),
  new Plant(
    "Apple",
    "Apple",
    "https://media.magicgarden.wiki/Apple.png",
    NUM_UNCOM,
    500,
    true,
    "🍎",
    73,
  ),
  new Plant(
    "Tulip",
    "Tulip",
    "https://media.magicgarden.wiki/Tulip.png",
    NUM_UNCOM,
    600,
    true,
    "🌷",
    767,
  ),
  new Plant(
    "Tomato",
    "Tomato",
    "https://media.magicgarden.wiki/Tomato.png",
    NUM_UNCOM,
    800,
    true,
    "🍅",
    27,
  ),
  new Plant(
    "Daffodil",
    "Daffodil",
    "https://media.magicgarden.wiki/Daffodil.png",
    NUM_RARE,
    1000,
    true,
    "🌻",
    1090,
  ),
  new Plant(
    "Corn",
    "Corn",
    "https://media.magicgarden.wiki/Corn.png",
    NUM_RARE,
    1300,
    true,
    "🌽",
    36,
  ),
  new Plant(
    "Watermelon",
    "Watermelon",
    "https://media.magicgarden.wiki/Watermelon.png",
    NUM_RARE,
    2500,
    true,
    "🍉",
    2708,
  ),
  new Plant(
    "Pumpkin",
    "Pumpkin",
    "https://media.magicgarden.wiki/Pumpkin.png",
    NUM_RARE,
    3000,
    true,
    "🎃",
    3700,
  ),
  new Plant(
    "Echeveria",
    "Echeveria",
    "https://media.magicgarden.wiki/Echeveria.png",
    NUM_RARE,
    4200,
    true,
    "🌵",
    4600,
  ),
  new Plant(
    "Coconut",
    "Coconut",
    "https://media.magicgarden.wiki/Coconut.png",
    NUM_LEG,
    6000,
    true,
    "🥥",
    302,
  ),
  new Plant(
    "Banana",
    "Banana",
    "https://media.magicgarden.wiki/Banana.png",
    NUM_LEG,
    7500,
    true,
    "🍌",
    1750,
  ),
  new Plant(
    "PineTree",
    "PineTree",
    "https://media.magicgarden.wiki/Pine_Tree.png",
    NUM_LEG,
    12000,
    true,
    "🌲",
    15000,
  ),
  new Plant(
    "Lily",
    "Lily",
    "https://media.magicgarden.wiki/Lily.png",
    NUM_LEG,
    20000,
    true,
    "💮",
    20123,
  ),
  new Plant(
    "Camellia",
    "Camellia",
    "https://media.magicgarden.wiki/Camellia.png",
    NUM_LEG,
    55000,
    true,
    "🌼",
    4875,
  ),
  new Plant(
    "Squash",
    "Squash",
    "https://media.magicgarden.wiki/Squash.png",
    NUM_LEG,
    0,
    false,
    "🎄",
    3500,
  ),
  new Plant(
    "BurrosTail",
    "BurrosTail",
    "https://media.magicgarden.wiki/Burro's_Tail.png",
    NUM_LEG,
    93000,
    true,
    "🪴",
    6000,
  ),
  new Plant(
    "Mushroom",
    "Mushroom",
    "https://media.magicgarden.wiki/Mushroom.png",
    NUM_MYTH,
    150000,
    true,
    "🍄",
    160000,
  ),
  new Plant(
    "Cactus",
    "Cactus",
    "https://media.magicgarden.wiki/Cactus.png",
    NUM_MYTH,
    250000,
    true,
    "🌵",
    261000,
  ),
  new Plant(
    "Bamboo",
    "Bamboo",
    "https://media.magicgarden.wiki/Bamboo.png",
    NUM_MYTH,
    400000,
    true,
    "🎍",
    500000,
  ),
  new Plant(
    "Poinsettia",
    "Poinsettia",
    "https://media.magicgarden.wiki/Poinsettia.png",
    NUM_MYTH,
    500000,
    true,
    "🪷",
    30000,
  ),
  new Plant(
    "Chrysanthemum",
    "Chrysanthemum",
    "https://media.magicgarden.wiki/Chrysanthemum.png",
    NUM_MYTH,
    650000,
    true,
    "🌸",
    18000,
  ),
  new Plant(
    "Grape",
    "Grape",
    "https://media.magicgarden.wiki/Grape.png",
    NUM_MYTH,
    850000,
    true,
    "🍇",
    12500,
  ),
  new Plant(
    "Pepper",
    "Pepper",
    "https://media.magicgarden.wiki/Pepper.png",
    NUM_DIV,
    1000000,
    true,
    "🌶️",
    7220,
  ),
  new Plant(
    "Lemon",
    "Lemon",
    "https://media.magicgarden.wiki/Lemon.png",
    NUM_DIV,
    2000000,
    true,
    "🍋",
    10000,
  ),
  new Plant(
    "PassionFruit",
    "PassionFruit",
    "https://media.magicgarden.wiki/Passion_Fruit.png",
    NUM_DIV,
    2750000,
    true,
    "🥭",
    24500,
  ),
  new Plant(
    "DragonFruit",
    "DragonFruit",
    "https://media.magicgarden.wiki/Dragon_Fruit.png",
    NUM_DIV,
    5000000,
    true,
    "🐉",
    24500,
  ),
  new Plant(
    "Cacao",
    "Cacao",
    "https://media.magicgarden.wiki/Cacao_Fruit.png",
    NUM_DIV,
    10000000,
    true,
    "🫘",
    50000,
  ),
  new Plant(
    "Lychee",
    "Lychee",
    "https://media.magicgarden.wiki/Lychee.png",
    NUM_DIV,
    25000000,
    true,
    "🍒",
    50000,
  ),
  new Plant(
    "Sunflower",
    "Sunflower",
    "https://media.magicgarden.wiki/Sunflower.png",
    NUM_DIV,
    100000000,
    true,
    "🌻",
    750000,
  ),
  new Plant(
    "Starweaver",
    "Starweaver",
    "https://media.magicgarden.wiki/Starweaver.png",
    NUM_CEL,
    1000000000,
    true,
    "⭐",
    10000000,
  ),
  new Plant(
    "Dawnbinder",
    "Dawnbinder",
    "https://media.magicgarden.wiki/Dawnbinder.png",
    NUM_CEL,
    10000000000,
    true,
    "🌙",
    11000000,
  ),
  new Plant(
    "Moonbinder",
    "Moonbinder",
    "https://media.magicgarden.wiki/Moonbinder.png",
    NUM_CEL,
    50000000000,
    true,
    "🌅",
    11000000,
  ),
];

plantsDatabase.forEach((item) => {
  console.log("Plant: ", item.name);
});
