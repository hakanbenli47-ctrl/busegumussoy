export const siteData = {

  // 🔹 ALLGEMEIN
  genel: {
    isim: "Buse Gümüş Beauty",
    slogan: "Entfalte deine Schönheit mit professioneller Berührung.",
    aciklama: "Professionelle Lösungen in Laser-Haarentfernung, Hautpflege und Schönheitsbehandlungen.",
    altBaslik: "Professionelle Schönheit & Pflege",
    konumAciklama: "Die wertvollste Zeit, die du dir selbst widmest, beginnt hier.",
  },

  // 🔹 MENÜ
  menu: [
    { label: "Dienstleistungen", link: "#hizmetler" },
    { label: "Ablauf", link: "#surec" },
    { label: "Bewertungen", link: "#yorumlar" }
  ],

  yakinOteller: [
    "Stadtzentrum – 5 Min",
    "Einkaufszentrum – 5 Min",
    "Strand – 10 Min",
    "Hotelzone – 10 Min"
  ],

  // 🔹 HERO
  hero: {
    buton1: "Jetzt anrufen",
    buton2: "WhatsApp",

    slider: [
      {
        type: "image",
        src: "/hero.jpg",
        baslik: "Buse Gümüş Beauty",
        aciklama: "Professionelle Pflege, klare Ergebnisse"
      },
      {
        type: "image",
        src: "/salon2.jpg",
        baslik: "Strahlende Haut",
        aciklama: "Gesundes und lebendiges Aussehen"
      },
      {
        type: "video",
        src: "/video1.mp4",
        baslik: "Echte Ergebnisse",
        aciklama: "Sehe den Unterschied schon nach der ersten Sitzung"
      }
    ],

    konumGorsel: "/konum.jpg"
  },

  // 🔹 STATISTIKEN
  stats: [
    {
      deger: "2000+",
      label: "Zufriedene Kunden",
      aciklama: "Service mit Fokus auf Kundenzufriedenheit"
    },
    {
      deger: "5+",
      label: "Jahre Erfahrung",
      aciklama: "Expertenteam"
    },
    {
      deger: "4.9",
      label: "Kundenbewertung",
      aciklama: "Hohe Zufriedenheitsrate"
    },
    {
      deger: "8+",
      label: "Servicearten",
      aciklama: "Schönheitslösungen"
    }
  ],

  // 🔹 DIENSTLEISTUNGEN
  hizmetler: [
    {
      title: "Hautpflege 🧴",
      desc: "Professionelle Pflege, die deine Haut tief reinigt und erneuert. Spezielle Anwendungen für ein strahlenderes, gesünderes und lebendigeres Aussehen.",
      img: "/gorsel1.jpg",
      target: "kadin"
    },
    {
      title: "Laser-Haarentfernung ✨",
      desc: "Befreie dich dauerhaft von unerwünschten Haaren. Glatte Haut mit sicherer und effektiver Lasertechnologie.",
      img: "/gorsel2.jpg",
      target: "kadin"
    },
    {
      title: "Kunstnägel 💅",
      desc: "Langlebige, stabile und ästhetische Nägel. Ein gepflegter und stilvoller Look für jeden Stil.",
      img: "/gorsel3.jpg",
      target: "kadin"
    },
    {
      title: "Wimpernverlängerung 👁️",
      desc: "Vollere, längere und beeindruckende Wimpern. Natürlicher und voluminöser Look ohne Mascara.",
      img: "/gorsel4.jpg",
      target: "kadin"
    },
    {
      title: "Haarstyling & Pflege 👩‍🦱",
      desc: "Professionelle Pflege für dein Haar. Starke und auffällige Haare durch Schnitt, Pflege und Styling.",
      img: "/gorsel5.jpg",
      target: "kadin"
    },
    {
      title: "Brautvorbereitung 👰",
      desc: "Makelloses Aussehen an deinem besonderen Tag. Komplettes Styling mit Haar, Make-up und Pflege.",
      img: "/gorsel6.jpg",
      target: "kadin"
    }
  ],

  hizmetlerMeta: {
    baslik: "Unsere Dienstleistungen",
    aciklama: "Professionelle Anwendungen, die deiner Schönheit Mehrwert verleihen"
  },

  // 🔹 ÜBER UNS
  about: {
    isim: "Wer sind wir?",
    aciklama: "Als Buse Gümüş Beauty bieten wir Dienstleistungen mit modernster Technologie und professionellen Produkten an. Mit individuellen Lösungen streben wir für jeden Kunden das beste Ergebnis an.",
    gorsel: "/person1.jpg"
  },

  // 🔹 WARUM WIR
  nedenBiz: {
    baslik: "Warum Sie uns wählen sollten",
    aciklama: "Wir arbeiten mit Fokus auf Qualität, Hygiene und Kundenzufriedenheit.",
    maddeler: [
      {
        title: "Expertenteam",
        desc: "Erfahrenes Personal"
      },
      {
        title: "Hygienische Umgebung",
        desc: "Entspricht den Gesundheitsstandards"
      },
      {
        title: "Hochwertige Produkte",
        desc: "Hautfreundliche Produkte"
      }
    ]
  },

  // 🔹 GALERIE
  galeri: {
    baslik: "Unsere Arbeiten",
    aciklama: "Echte Kundenergebnisse",

    erkek: [],
    kadin: [
      "/gorsel1.jpg",
      "/gorsel2.jpg",
      "/gorsel3.jpg",
      "/gorsel4.jpg",
      "/gorsel5.jpg",
      "/gorsel6.jpg"
    ]
  },

  // 🔹 BEWERTUNGEN
  yorumlar: {
    baslik: "Kundenbewertungen",
    puan: "4.9 / 5",
    liste: [
      {
        name: "Zeynep A.",
        yorum: "Ich habe eine Hautpflege gemacht und schon nach der ersten Sitzung einen Unterschied gesehen. Meine Haut wirkt strahlender und gesünder. Wirklich ein professioneller Ort."
      },
      {
        name: "Elif K.",
        yorum: "Ich komme für die Laser-Haarentfernung und bin sehr zufrieden mit den Ergebnissen. Sowohl Hygiene als auch Aufmerksamkeit sind auf höchstem Niveau."
      },
      {
        name: "Ayşe D.",
        yorum: "Ich habe eine Wimpernverlängerung machen lassen, sie sieht sowohl natürlich als auch voll aus. Ich kann jetzt ohne Make-up rausgehen."
      },
      {
        name: "Merve T.",
        yorum: "Ich habe Kunstnägel machen lassen und selbst nach Wochen sehen sie aus wie am ersten Tag. Sehr saubere und sorgfältige Arbeit."
      },
      {
        name: "Seda Y.",
        yorum: "Ich habe eine Haarpflege und Föhn bekommen, meine Haare sind unglaublich weich und glänzend geworden. Ich werde definitiv wiederkommen."
      },
      {
        name: "Büşra Ç.",
        yorum: "Ich habe sie für meine Brautvorbereitung gewählt, alles war perfekt. Sowohl Haare als auch Make-up waren genau wie ich es wollte."
      }
    ]
  },

  // 🔹 CTA
  cta: {
    baslik: "Bist du bereit für eine Veränderung?",
    buton: "Jetzt Termin buchen"
  },

  // 🔹 KONTAKT
  iletisim: {
    telefon: "905052566109",
    whatsapp: "905052566109",
    adres: "https://www.google.com/maps/place/Buse+G%C3%BCm%C3%BC%C5%9F/@41.274926,36.3110733,16.5z/data=!4m6!3m5!1s0x4087d9b220feb8ad:0x225731be27b80117!8m2!3d41.2748709!4d36.3113119!16s%2Fg%2F11vlrw8pnm",
    instagram: "https://www.instagram.com/busegumusbeauty/",
    haritaEmbed: "https://www.google.com/maps?q=41.2748709,36.3113119&z=16&output=embed"
  },

  fiyatlar: {
    baslik: "Preise",
    aciklama: "Alle unsere Dienstleistungen werden ab Startpreisen angeboten",
    erkek: { baslik: "", liste: [] },
    kadin: { baslik: "Schönheitsdienstleistungen", liste: [] },
    detay: [],
    agda: { baslik: "Waxing-Dienstleistungen", liste: [] },
    not: "* Preise können je nach Behandlung variieren"
  },

  // 🔹 FOOTER
  footer: {
    aciklama: "Erneuere dich mit Buse Gümüş Beauty.",
    menuBaslik: "Menü",
    iletisimBaslik: "Kontakt",
    harita: "https://www.google.com/maps/place/Buse+G%C3%BCm%C3%BC%C5%9F/@41.274926,36.3110733,16.5z/data=!4m6!3m5!1s0x4087d9b220feb8ad:0x225731be27b80117!8m2!3d41.2748709!4d36.3113119!16s%2Fg%2F11vlrw8pnm!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI2MDQwOC.0IKXMDSoASAFQAw%3D%3D",
    instagram: "https://www.instagram.com/busegumusbeauty/",
    copyright: "© 2026 Buse Gümüş Beauty"
  }

}