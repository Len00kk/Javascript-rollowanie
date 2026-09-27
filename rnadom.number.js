const itemki = {
  Rare: ["stare gówno za opuszczonym budynkiem", "butelka kaucyjna ale zgięta", "kapsułka po piwie", "rzygi żula (świeże)", "zużyty papieros"],
  SuperRare: ["Butelka kaucyjna", "rozjechany rachunek z biedronki", "worek plastikowy", "stara bułka kajzerka", "pióro gołębia"],
  Epic: ["Długopis który jeszcze pisze", "m&m's czerwony z podłogi", "5 groszówka z 2017", "Nie wiem"],
  Mythic: ["5zł z 2020roku", "baton snickers nieotwarty", "loteria niezdrapana"],
  Legendary: ["Czapka randoma", "Telefon kidoska (iphone12)", "Klucze do mieszkania"]
};

function pickRandom(ggg) {
  return ggg[Math.floor(Math.random() * ggg.length)];
}

function roll() {
  const chance = Math.floor(Math.random() * 100) + 1; // 1–100

  let rarity;
  if (chance <= 59)      rarity = 'Rare';        // 59%
  else if (chance <= 84) rarity = 'SuperRare';   // 25%
  else if (chance <= 94) rarity = 'Epic';        // 10%
  else if (chance <= 99) rarity = 'Mythic';      // 5%
  else                   rarity = 'Legendary';   // 1%

  const item = pickRandom(itemki[rarity]);
  console.log(`[${rarity}] ${item}`);
}

roll();