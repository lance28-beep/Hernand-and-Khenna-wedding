export const siteConfig = {
  couple: {
    bride: "Ma. Khenna Mae G. Dela Cruz",
    brideNickname: "Khenna",
    groom: "Hernand Amor Macoy",
    groomNickname: "Hernand",
  },
  wedding: {
    date: "February 8, 2026",
    time: "4:00 P.M., PH Time",
    venue: "Las Casas Filipinas de Acuzar – Quezon City (Casa Cilayko)",
    tagline: "A Celebration of Love, Life, and Forever",
    theme: "Filipiniana-Inspired Celebration",
    motif: "Filipiniana-inspired attire (please avoid red, black, and white)",
  },
  details: {
    rsvp: {
      // RSVP deadline explicitly requested in the FAQ copy
      deadline: "January 22, 2026",
    },
  },
  ceremony: {
    location:
      "Las Casas Filipinas de Acuzar – Quezon City (Casa Cilayko), 134 Roosevelt Avenue, San Francisco del Monte, Quezon City, Metro Manila, Philippines",
    venue: "Las Casas Quezon City – Casa Cilayko",
    date: "February 8, 2026",
    day: "Sunday",
    time: "4:00 P.M.",
    // Entourage call time can be refined later if needed; align guests with requested 3:40 PM
    entourageTime: "3:40 P.M.",
    guestsTime: "3:40 P.M.",
  },
  reception: {
    location:
      "Las Casas Filipinas de Acuzar – Quezon City (Casa Cilayko), 134 Roosevelt Avenue, San Francisco del Monte, Quezon City, Metro Manila, Philippines",
    venue: "Las Casas Quezon City – Casa Cilayko",
    date: "February 8, 2026",
    // Reception program starts at 6:00 PM following the ceremony
    time: "6:00 P.M.",
  },
  dressCode: {
    theme: "Filipiniana-Inspired Attire",
    // Palette can be adjusted later; keep soft neutrals that work with Filipiniana styles
    colors: ["#F3E5CF", "#D8C0A8", "#BFA27C", "#8C6B4F", "#6E4C3A"],
    sponsors: {
      ladies: "Filipiniana gown",
      gentlemen:
        "Barong Tagalog, slacks, or ceremonial uniform (e.g., grey duct or other formal uniform).",
    },
    guests: {
      ladies: "Filipiniana gown.",
      gentlemen:
        "Barong Tagalog, slacks, or ceremonial uniform (e.g., grey duct or other formal uniform).",
    },
    note: "We warmly invite you to wear Filipiniana-inspired attire and kindly avoid red, black, and white.",
  },
  narratives: {
    // Groom – personal portrait
    groom: `Hernand is calm and composed, grounded by a deep sense of responsibility and an extraordinary patience that makes him a true pillar of strength. He is the protector of her peace, the steadfast believer in her wildest dreams, and a soul where quiet strength meets genuine gentleness. To her, he is both partner and anchor—someone who steadies her through life’s storms while encouraging her to rise, dream, and soar.`,

    // Bride – personal portrait
    bride: `Khenna is loving and selfless, the calm in the midst of chaos. She is the light that softens him — a dreamer who inspires Hernand to reach even greater heights. Her presence adds color and flavor to his life, turning ordinary moments into something extraordinary. To him, she is not just a partner, but the heart that makes life beautiful.`,

    // Shared love story – combined narrative
    shared: `From Classmates to Forever
Where it all began…
Hernand and Khenna first crossed paths as classmates in college, sharing dreams and laughter before life led them on separate journeys. Hernand pursued his calling in the academy, while Khenna continued to chase her own aspirations.
Years later, fate brought them back together—and what started as a simple reconnection blossomed into an unexpected love story. Their bond was effortless, their connection organic, and everything fell heavenly into place, as if the universe had been quietly writing their story all along.`,
  },
  colors: {
    primary: "#4A7C59",
    secondary: "#8FB99A",
  },
  snapShare: {
    googleDriveLink: "https://drive.google.com/drive/folders/1ijmtWwZEOUUZaip6kj8Pr6B61cBxF_PZ?usp=sharing",
    instructions: "Please scan this QR Code, create a folder with your name and upload the photos and videos you have taken during our wedding reception. We are delighted to see your snaps too!",
  },
}

export const entourage = [
  // Best Man & Maid/Matron of Honor
  { role: "Best Man", name: "Red Casallo" },
  { role: "Matron of Honor", name: "Imeeliza Timpug" },

  // Parents of the Bride
  { role: "Father", name: "Jaime Balajadia (Uncle)", group: "kate-family" },
  { role: "Mother", name: "Eloida Ricohermoso", group: "kate-family" },

  // Parents of the Groom
  { role: "Brother", name: "Perry Ticbaen (Brother)", group: "christian-family" },
  { role: "Mother", name: "Felicitas Ticbaen", group: "christian-family" },

  // Bridesmaids
  { role: "Bridesmaid", name: "Thea Lynn Dela Cruz" },
  { role: "Bridesmaid", name: "Keara Zane A Cariño" },
  { role: "Bridesmaid", name: "Fidnah Gracia Padallan" },
  { role: "Bridesmaid", name: "Lorna Ladisla" },
  { role: "Bridesmaid", name: "Carla Vanessa Tabilin" },
  { role: "Bridesmaid", name: "Romela Tolentino" },
  { role: "Bridesmaid", name: "Emmalyn Lipio" },
  { role: "Bridesmaid", name: "Carmen Pascual" },
  { role: "Bridesmaid", name: "Ciddie Manota" },

  // Groomsmen
  { role: "Groomsman", name: "Noah Alcaria" },
  { role: "Groomsman", name: "Jervin Garcia" },
  { role: "Groomsman", name: "Myric Mateo" },
  { role: "Groomsman", name: "Caughvan Faustino" },
  { role: "Groomsman", name: "Jayson Torquiano" },
  { role: "Groomsman", name: "Jendah Egino" },
  { role: "Groomsman", name: "Vincent Saguinsin" },
  { role: "Groomsman", name: "Frederick Manota" },
  { role: "Groomsman", name: "Emerson Sulit" },

  // Secondary Sponsors
  // Candle Sponsors
  { role: "Bridesmaid", name: "Romela Tolentino", group: "candle" },
  // Cord Sponsors
  { role: "Bridesmaid", name: "Emmalyn Lipio", group: "cord" },

  // Flower Girls and Little Bride
  { role: "Flower Girl", name: "Kirsten Elija Leyson" },
  { role: "Flower Girl", name: "Blake Juan" },
  { role: "Flower Girl", name: "Reign Arastel Rivera" },
  { role: "Little Bride", name: "Paige Yael Ticbaen" },

  // Ring / Coin Bearers
  { role: "Ring Bearer", name: "Khaleb Dwayne M. Beltran" },
  { role: "Coin Bearer", name: "Lucas Rhaiden Beltran" },
  { role: "Ring Bearer", name: "Dean James Ticbaen" },
]

export const principalSponsors = [
  // Paired from provided Male and Female Sponsors (order-based)
  { name: "Mr. Jony Balao", spouse: "Mrs. Conception Balao" },
  { name: "Mr. Cresencio Francisco", spouse: "Dr. Editha Francisco" },
  { name: "Mr. Aurelio Sab-it", spouse: "Mrs. Ester Sab-it" },
  { name: "Mr. Pio McLiing", spouse: "Mrs. Edna Boloma" },
  { name: "Mr. Fabian Dupiano", spouse: "Mrs. Mary Christine Dupiano" },
  { name: "Mr. Roberto Dosdos", spouse: "Mrs. Angelica Dosdos" },
  { name: "Mr. George Sacla", spouse: "Mrs. Minda De Bolt Sacla" },
  { name: "Mr. Elmo Casallo", spouse: "Mrs. Nora Casallo" },
  { name: "Engr. Jimmy Atayoc Sr", spouse: "Mrs. Mercedes Atayoc" },
  { name: "Mr. Tomas Moyongan", spouse: "Mrs. Betty Moyongan" },
  { name: "Mr. Roger Balantin", spouse: "Mrs. Delia Balantin" },
  { name: "Honorable Mayor Roderick Awingan", spouse: "Mrs. ____ Awingan" },
  { name: "Engr Roy Kepes", spouse: "Vice Gove MaryRose Kepes Fongwan" },
  { name: "Mr. Bobos Nestor Fongwan", spouse: "Mrs. Marga Sison" },
  { name: "Mr. Junvic Suguinsin", spouse: "Mrs. Lavenia Inson" },
  { name: "Mr. Salino Dosdos Jr", spouse: "Mrs. Gina Guiang" },
  { name: "Mr. Pampilo Balajadia", spouse: "Mrs. Angelica Balajadia" },
  { name: "Mr. Alan M. Serduar", spouse: "Mrs. Oliva Serduar" },
  { name: "Mr. Miguel Franco", spouse: "Mrs. Angela Balajadia" },
  // Remaining Female Sponsors without paired male
  { name: "Mrs. Carina C. Watanabe", spouse: "" },
  { name: "Mrs. Cecile Palilio", spouse: "" },
  { name: "Mrs. Nida Saguinsin", spouse: "" },
  { name: "Mrs. Araceli Pitogo", spouse: "" },
  { name: "Mrs. Alda Unidad", spouse: "" },
  { name: "Mrs. Reine Bernadeth Bolanos", spouse: "" },
]
