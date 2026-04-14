export const siteData = {

  // 🔹 GENEL
  genel: {
    isim: "Buse Gümüş Beauty",
    slogan: "Güzelliğini profesyonel dokunuşla ortaya çıkar.",
    aciklama: "Lazer epilasyon, cilt bakımı ve güzellik hizmetlerinde profesyonel çözümler.",
    altBaslik: "Profesyonel Güzellik & Bakım",
    konumAciklama: "Kendine ayırdığın en değerli zaman burada başlar.",
  },

  // 🔹 MENÜ
  menu: [
    { label: "Hizmetler", link: "#hizmetler" },
    { label: "Süreç", link: "#surec" },
    { label: "Yorumlar", link: "#yorumlar" }
  ],

yakinOteller: [
  "Şehir Merkezi – 5 dk",
  "Alışveriş Merkezi – 5 dk",
  "Plaj – 10 dk",
  "Oteller Bölgesi – 10 dk"
],

  // 🔹 HERO
hero: {
buton1: "Hemen Ara",
buton2: "WhatsApp",

slider: [
{
type: "image",
src: "/hero.jpg",
baslik: "Buse Gümüş Beauty",
aciklama: "Profesyonel bakım, net sonuç"
},
{
type: "image",
src: "/salon2.jpg",
baslik: "Işıldayan Cilt",
aciklama: "Sağlıklı ve canlı görünüm"
},
{
type: "video",
src: "/video1.mp4",
baslik: "Gerçek Sonuç",
aciklama: "İlk seansta farkı gör"
}
],

konumGorsel: "/konum.jpg"
},

  // 🔹 STATS
  stats: [
    {
      deger: "2000+",
      label: "Mutlu Müşteri",
      aciklama: "Memnuniyet odaklı hizmet"
    },
    {
      deger: "5+",
      label: "Yıl Deneyim",
      aciklama: "Uzman ekip"
    },
    {
      deger: "4.9",
      label: "Müşteri Puanı",
      aciklama: "Yüksek memnuniyet oranı"
    },
    {
      deger: "8+",
      label: "Hizmet Türü",
      aciklama: "Güzellik çözümleri"
    }
  ],

  // 🔹 HİZMETLER
hizmetler: [
  {
    title: "Cilt Bakımı 🧴",
    desc: "Cildinizi derinlemesine temizleyip yenileyen profesyonel bakım. Daha parlak, sağlıklı ve canlı bir görünüm için özel uygulamalar.",
    img: "/gorsel1.jpg",
    target: "kadin"
  },
  {
    title: "Lazer Epilasyon ✨",
    desc: "İstenmeyen tüylerden kalıcı olarak kurtulun. Güvenli ve etkili lazer teknolojisi ile pürüzsüz bir cilt.",
    img: "/gorsel2.jpg",
    target: "kadin"
  },
  {
    title: "Protez Tırnak 💅",
    desc: "Kırılmayan, uzun süre dayanıklı ve estetik tırnaklar. Her stile uygun şık ve bakımlı görünüm.",
    img: "/gorsel3.jpg",
    target: "kadin"
  },
  {
    title: "İpek Kirpik 👁️",
    desc: "Daha dolgun, uzun ve etkileyici kirpikler. Maskara kullanmadan doğal ve hacimli bakışlar.",
    img: "/gorsel4.jpg",
    target: "kadin"
  },
  {
    title: "Saç Tasarım & Bakım 👩‍🦱",
    desc: "Saçlarınıza profesyonel dokunuş. Kesim, bakım ve şekillendirme ile güçlü ve göz alıcı saçlar.",
    img: "/gorsel5.jpg",
    target: "kadin"
  },
  {
    title: "Gelin Hazırlık 👰",
    desc: "En özel gününüzde kusursuz görünüm. Saç, makyaj ve bakım hizmetleriyle eksiksiz hazırlık.",
    img: "/gorsel6.jpg",
    target: "kadin"
  }
],

  hizmetlerMeta: {
    baslik: "Hizmetlerimiz",
    aciklama: "Güzelliğinize değer katan profesyonel uygulamalar"
  },

  // 🔹 ABOUT
  about: {
    isim: "Biz Kimiz?",
    aciklama: "Buse Gümüş Beauty olarak, en son teknolojiler ve profesyonel ürünlerle hizmet sunuyoruz. Her müşterimize özel çözümlerle en iyi sonucu hedefliyoruz.",
    gorsel: "/person1.jpg"
  },

  // 🔹 NEDEN BİZ
  nedenBiz: {
    baslik: "Neden Bizi Tercih Etmelisiniz",
    aciklama: "Kalite, hijyen ve müşteri memnuniyeti odaklı çalışıyoruz.",
    maddeler: [
      {
        title: "Uzman Kadro",
        desc: "Deneyimli ekip"
      },
      {
        title: "Hijyenik Ortam",
        desc: "Sağlık standartlarına uygun"
      },
      {
        title: "Kaliteli Ürünler",
        desc: "Cildinize dost ürünler"
      }
    ]
  },

  // 🔹 GALERİ
galeri: {
  baslik: "Çalışmalarımız",
  aciklama: "Gerçek müşteri sonuçları",

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

  // 🔹 YORUMLAR
  yorumlar: {
  baslik: "Müşteri Yorumları",
  puan: "4.9 / 5",
  liste: [
    {
      name: "Zeynep A.",
      yorum: "Cilt bakımı yaptırdım ve ilk seanstan farkı gördüm. Cildim daha parlak ve sağlıklı görünüyor. Gerçekten işini bilen bir yer."
    },
    {
      name: "Elif K.",
      yorum: "Lazer epilasyon için geliyorum, sonuçlardan çok memnunum. Hem hijyen hem ilgi gerçekten üst seviyede."
    },
    {
      name: "Ayşe D.",
      yorum: "İpek kirpik yaptırdım, hem doğal hem dolgun duruyor. Artık makyaj yapmadan çıkabiliyorum."
    },
    {
      name: "Merve T.",
      yorum: "Protez tırnak yaptırdım, haftalar geçmesine rağmen ilk günkü gibi duruyor. Çok temiz ve özenli çalışılıyor."
    },
    {
      name: "Seda Y.",
      yorum: "Saç bakımı ve fön yaptırdım, saçlarım inanılmaz yumuşak ve parlak oldu. Kesinlikle tekrar geleceğim."
    },
    {
      name: "Büşra Ç.",
      yorum: "Gelin hazırlığım için tercih ettim, her şey kusursuzdu. Hem saç hem makyaj tam istediğim gibi oldu."
    }
  ]
},

  // 🔹 CTA
  cta: {
    baslik: "Değişime hazır mısın?",
    buton: "Hemen Randevu Al"
  },

  // 🔹 İLETİŞİM
iletisim: {
  telefon: "905052566109",
  whatsapp: "905052566109",
  adres: "https://www.google.com/maps/place/Buse+G%C3%BCm%C3%BC%C5%9F/@41.274926,36.3110733,16.5z/data=!4m6!3m5!1s0x4087d9b220feb8ad:0x225731be27b80117!8m2!3d41.2748709!4d36.3113119!16s%2Fg%2F11vlrw8pnm",
  instagram: "https://www.instagram.com/busegumusbeauty/",

  haritaEmbed: "https://www.google.com/maps?q=41.2748709,36.3113119&z=16&output=embed"
},

fiyatlar: {
  baslik: "Fiyatlar",
  aciklama: "Tüm hizmetlerimiz başlayan fiyatlarla sunulmaktadır",
  erkek: { baslik: "", liste: [] },
  kadin: { baslik: "Güzellik Hizmetleri", liste: [] },
  detay: [],
  agda: { baslik: "Ağda Hizmetleri", liste: [] },
  not: "* İşleme göre fiyat değişebilir"
},

  // 🔹 FOOTER
  footer: {
    aciklama: "Buse Gümüş Beauty ile kendini yenile.",
    menuBaslik: "Menü",
    iletisimBaslik: "İletişim",
    harita: "https://www.google.com/maps/place/Buse+G%C3%BCm%C3%BC%C5%9F/@41.274926,36.3110733,16.5z/data=!4m6!3m5!1s0x4087d9b220feb8ad:0x225731be27b80117!8m2!3d41.2748709!4d36.3113119!16s%2Fg%2F11vlrw8pnm!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D",
    instagram: "https://www.instagram.com/busegumusbeauty/",
    copyright: "© 2026 Buse Gümüş Beauty"
  }

}