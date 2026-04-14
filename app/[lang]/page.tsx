"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { themes } from "@/theme/themes"
import { siteData as tr } from "@/data/tr"
import { siteData as en } from "@/data/en"
import { siteData as de } from "@/data/de"
import { siteData as ru } from "@/data/ru"
import Image from "next/image"
export default function Home({ params }: { params: { lang: string } }) {
const [step, setStep] = useState(0)
  const theme = themes.kuafor
const [activeImage, setActiveImage] = useState(0)
const [activeVideo, setActiveVideo] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const [showMapPreview, setShowMapPreview] = useState(false)
  const lang = typeof window !== "undefined"
  ? window.location.pathname.split("/")[1]
  : "tr"
  

type Lang = "tr" | "en" | "de" | "ru"

const dataMap: Record<Lang, typeof tr> = { tr, en, de, ru }

const currentLang = (["tr","en","de","ru"].includes(lang) ? lang : "tr") as Lang

const siteData = dataMap[currentLang]
  const imageSlides = siteData.hero.slider.filter((item: any) => item.type === "image")
const videoSlides = siteData.hero.slider.filter((item: any) => item.type === "video")


useEffect(() => {
  setTimeout(() => {
    setShowBubble(true)
  }, 3000)
}, [])
useEffect(() => {
  const timer = setTimeout(() => {
    setShowMapPreview(true)
  }, 3000)

  return () => clearTimeout(timer)
}, [])
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
  
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
useEffect(() => {
  if (!imageSlides.length) return

  const interval = setInterval(() => {
    setActiveImage((prev) =>
      prev === imageSlides.length - 1 ? 0 : prev + 1
    )
  }, 3000)

  return () => clearInterval(interval)
}, [imageSlides])
useEffect(() => {
  if (!videoSlides.length) return

  const interval = setInterval(() => {
    setActiveVideo((prev) =>
      prev === videoSlides.length - 1 ? 0 : prev + 1
    )
  }, 6000)

  return () => clearInterval(interval)
},
 [videoSlides])
 useEffect(() => {
  const timers = [
    setTimeout(() => setStep(1), 0),     // hero
    setTimeout(() => setStep(2), 500),   // floating butonlar
    setTimeout(() => setStep(3), 1000),  // stats
    setTimeout(() => setStep(4), 1500),  // hizmetler + diğerleri
  ]

  return () => timers.forEach(clearTimeout)
}, [])
useEffect(() => {
  setTimeout(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
  }, 100)
}, [])
  return (
<main
  style={{
    background: theme.bg,
   backgroundAttachment: "scroll",
    color: theme.text
  }}
  className="overflow-hidden page-fade"
>

{/* HEADER */}

<header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "border-b" : ""
  }`}
  style={{
background: scrolled
  ? "rgba(255,255,255,0.95)"
  : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none"
  }}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">

    {/* LOGO */}
    <div className="leading-tight">
      <h1 
        className="heading font-bold text-lg tracking-widest"
        style={{ color: theme.text }}
      >
        {siteData.genel.isim}
      </h1>

      <p 
        className="text-xs tracking-[0.25em]"
        style={{ color: theme.textSoft }}
      >
        {siteData.genel.altBaslik}
      </p>
    </div>

    {/* MENU (DESKTOP) */}
    <nav
      className="hidden md:flex gap-8 text-xs uppercase tracking-widest"
      style={{ color: theme.text }}
    >
      {siteData.menu.map((item: any, i: number) => (
        <a
          key={i}
          href={`/${currentLang}${item.link}`}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>

    {/* ACTIONS */}
    <div className="flex items-center gap-2 md:gap-3">

      {/* 🌐 DİL (DESKTOP) */}
      <div className="hidden md:flex gap-1 md:gap-2 text-[10px] md:text-xs">
        <a href="/tr" style={{ color: currentLang === "tr" ? theme.primary : theme.text }} className={`${currentLang === "tr" ? "font-bold" : "opacity-60 hover:opacity-100"}`}>TR</a>
        <a href="/en" style={{ color: currentLang === "en" ? theme.primary : theme.text }} className={`${currentLang === "en" ? "font-bold" : "opacity-60 hover:opacity-100"}`}>EN</a>
        <a href="/de" style={{ color: currentLang === "de" ? theme.primary : theme.text }} className={`${currentLang === "de" ? "font-bold" : "opacity-60 hover:opacity-100"}`}>DE</a>
        <a href="/ru" style={{ color: currentLang === "ru" ? theme.primary : theme.text }} className={`${currentLang === "ru" ? "font-bold" : "opacity-60 hover:opacity-100"}`}>RU</a>
      </div>

      {/* 🌐 MOBİL DİL */}
      <div className="relative md:hidden">
        <button
          onClick={() => setShowLang(!showLang)}
          className="w-9 h-9 flex items-center justify-center rounded-full border"
          style={{ color: theme.text }}
        >
          🌐
        </button>

        {showLang && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg text-xs overflow-hidden">
            <a href="/tr" className="block px-3 py-2 hover:bg-gray-100">TR</a>
            <a href="/en" className="block px-3 py-2 hover:bg-gray-100">EN</a>
            <a href="/de" className="block px-3 py-2 hover:bg-gray-100">DE</a>
            <a href="/ru" className="block px-3 py-2 hover:bg-gray-100">RU</a>
          </div>
        )}
      </div>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
        style={{
          background: theme.primary,
          color: "#fff",
          boxShadow: `0 0 20px ${theme.primary}80`
        }}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full"
      >
        <FaWhatsapp />
      </a>

      {/* 📞 MOBİL */}
      <a
        href={`tel:${siteData.iletisim.telefon}`}
        className="w-9 h-9 flex items-center justify-center rounded-full md:hidden"
        style={{ background: theme.text, color: "#fff" }}
      >
        📞
      </a>

      {/* CTA */}
      <a
        href={`tel:${siteData.iletisim.telefon}`}
        style={{
          background: theme.primary,
          color: "#fff"
        }}
        className="hidden md:block px-4 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition text-xs md:text-sm"
      >
        Randevu Al
      </a>

    </div>

  </div>
</header>

{/* HERO */}
<section className="relative min-h-[80vh] pt-24 md:pt-28 flex items-center justify-center overflow-hidden">

  {/* ARKA PLAN */}
  <div className="absolute inset-0 overflow-hidden">

    {/* ANA ZEMİN */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(135deg, ${theme.bg} 0%, ${theme.bgSoft || theme.bg} 100%)`
      }}
    />

    {/* ANİMASYONLAR */}
    {step >= 1 && (
      <>
        {/* BLOB 1 */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{
            duration: 20,
            repeat: 0,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] blur-[40px]"
          style={{
            background: theme.primary,
            top: "-100px",
            left: "-100px",
            opacity: 0.2,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />

        {/* BLOB 2 */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 24,
            repeat: 0,
            ease: "easeInOut",
          }}
          className="absolute w-[350px] h-[350px] blur-[35px]"
          style={{
            background: theme.glow,
            bottom: "-100px",
            right: "-100px",
            opacity: 0.25,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />

        {/* ORTA PARLAMA */}
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: 0,
            ease: "easeInOut",
          }}
          className="absolute w-[300px] h-[300px] blur-[30px]"
          style={{
            background: theme.primary,
            top: "30%",
            left: "40%",
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        />
      </>
    )}

  </div>

  {/* İÇERİK */}
  <div className="relative z-10 text-center px-6 max-w-2xl">

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ color: theme.primary }}
      className="text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-3"
    >
      {siteData.genel.slogan}
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ color: theme.text }}
      className="text-3xl sm:text-5xl font-semibold leading-tight"
    >
      {siteData.hero.slider[0]?.baslik}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ color: theme.text + "cc" }}
      className="mt-5 text-sm sm:text-base leading-relaxed max-w-md mx-auto"
    >
      {siteData.hero.slider[0]?.aciklama}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
    >
      <a
        href={`tel:${siteData.iletisim.telefon}`}
        className="px-6 py-3 rounded-xl font-semibold transition hover:scale-105 shadow-lg"
        style={{ background: theme.primary, color: "#fff" }}
      >
        {siteData.hero.buton1}
      </a>

      <a
        href={`https://wa.me/${siteData.iletisim.whatsapp}`}
        className="px-6 py-3 rounded-xl border transition hover:scale-105"
        style={{
          borderColor: theme.primary,
          color: theme.text
        }}
      >
        {siteData.hero.buton2}
      </a>
    </motion.div>

  </div>

  {/* ALT GEÇİŞ */}
  <div
    className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
    style={{
      background: `linear-gradient(to bottom, transparent, ${theme.bg})`
    }}
  />

</section>

<div className="max-w-4xl mx-auto flex flex-col gap-6">

  {/* 📍 HARİTA */}
  <div className="w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden">
 <iframe
  src={siteData.iletisim.haritaEmbed}
  className="w-full h-full border-0"
  loading="lazy"
/>
  </div>

  {/* BUTON */}
  <a
    href={siteData.iletisim.adres}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition"
    style={{
      background: theme.primary,
      color: "#fff"
    }}
  >
    📍 Konuma Git
  </a>

  {/* BAŞLIK */}
  <div className="text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-2">
      {siteData.genel.isim}
    </h2>

    <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md mx-auto">
      {siteData.genel.konumAciklama}
    </p>
  </div>

  {/* OTEL KUTUSU */}
  <div className="relative overflow-hidden rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-md">

    {/* PARLAYAN BORDER */}
    <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/20 animate-pulse" />

    {/* BAŞLIK */}
    <div className="text-center text-xs mb-3 opacity-70">
      Yakınlık
    </div>

    {/* KAYAN LİSTE */}
    <motion.div
      className="flex gap-4 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
    >
      {[...siteData.yakinOteller, ...siteData.yakinOteller].map((otel, i) => (
        <div
          key={i}
          className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 border border-white/10 shadow-md"
        >
          ✦ {otel}
        </div>
      ))}
    </motion.div>

  </div>

</div>
{/* STATS */}
<>
{/* ===================== STATS ===================== */}
<section className="mt-8 px-4 md:px-6 relative z-40 reveal">
  <div className="max-w-7xl mx-auto">

    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
        border: `1px solid ${theme.primary}20`
      }}
      className="relative grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-2xl p-4 md:p-10 overflow-hidden"
    >

      {/* 🔥 STRIPE (SABİT + NET) */}
      <div className="absolute top-0 left-0 w-full h-[6px] overflow-hidden">
        <div className="barberStripe w-full h-full opacity-20" />
      </div>

      {siteData.stats.map((item: any, i: number) => (
        <div
          key={i}
          className="relative p-3 md:p-6 rounded-xl md:rounded-2xl transition duration-300 hover:scale-105 group"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${theme.primary}15`,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
          }}
        >

          {/* glow */}
          <div
            className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <h3
            style={{ color: theme.primary }}
            className="text-xl md:text-4xl font-bold mb-1 relative z-10"
          >
            {item.deger}
          </h3>

          <p
            className="text-xs md:text-base mb-1 relative z-10"
            style={{ color: theme.text }}
          >
            {item.label}
          </p>

          <p
            className="text-[10px] md:text-xs leading-snug relative z-10"
            style={{ color: theme.text + "99" }}
          >
            {item.aciklama}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


{/* ===================== HİZMETLER ===================== */}
<section
  id="hizmetler"
  className="relative py-24 md:py-32 px-4 md:px-6 reveal overflow-hidden"
>

  {/* 🔥 STRIPE ARKA PLAN */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="barberStripe w-full h-full opacity-20" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* 🔥 BAŞLIK BLOK (GERÇEK ORTA) */}
    <div className="flex justify-center mb-12 md:mb-16">
      <div
        className="text-center px-6 py-5 rounded-2xl backdrop-blur-md w-full max-w-xl"
        style={{
          background: "rgba(0,0,0,0.55)"
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            textShadow: "0 4px 20px rgba(0,0,0,0.7)"
          }}
          className="heading text-2xl md:text-5xl font-bold tracking-tight"
        >
          {siteData.hizmetlerMeta.baslik}
        </h2>

        <p
          style={{ color: "rgba(255,255,255,0.9)" }}
          className="mt-3 md:mt-4 text-sm md:text-base"
        >
          {siteData.hizmetlerMeta.aciklama}
        </p>
      </div>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

      {siteData.hizmetler.map((item: any, i: number) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          onClick={() => {
            const el = document.getElementById(item.target)
            if (el) el.scrollIntoView({ behavior: "smooth" })
          }}
          className="group relative p-6 md:p-8 rounded-3xl transition duration-300 cursor-pointer overflow-hidden"
          style={{
           background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(6px)",
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
          }}
        >

          {/* ÜST STRIPE */}
          <div className="absolute top-0 left-0 w-full h-[6px] overflow-hidden rounded-t-3xl">
           <div className="barberStripe w-full h-full opacity-20" />
          </div>

          {/* GLOW */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10">

            {/* KATEGORİ */}
            <div className="mb-3 text-xs opacity-60">
              {item.target === "erkek" ? "Erkek Hizmetleri" : "Kadın Hizmetleri"}
            </div>

            {/* BAŞLIK */}
            <h3
              style={{ color: theme.primary }}
              className="heading text-lg md:text-xl font-semibold mb-2"
            >
              {item.title}
            </h3>

            {/* AÇIKLAMA */}
            <p
              className="text-xs md:text-sm leading-relaxed"
              style={{ color: theme.text + "cc" }}
            >
              {item.desc}
            </p>

            {/* ALT ÇİZGİ */}
            <div
              className="mt-4 md:mt-6 h-[2px] w-10 group-hover:w-20 transition-all duration-300"
              style={{ background: theme.primary }}
            />

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section><section className="relative py-24 md:py-32 px-4 md:px-6 reveal overflow-hidden">

  {/* ARKA PLAN */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="barberStripe w-full h-full opacity-20" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* GÖRSEL */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/person1.jpg"
          className="w-full h-[420px] object-cover"
        />

        {/* glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`,
            opacity: 0.2
          }}
        />
      </div>
    </motion.div>

    {/* METİN */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* BAŞLIK */}
      <h2
        style={{ color: theme.primary }}
        className="text-2xl md:text-4xl font-bold mb-4"
      >
        Buse Gümüş Beauty
      </h2>

      {/* ALT BAŞLIK */}
      <p
        style={{ color: theme.text }}
        className="text-sm md:text-base font-semibold mb-4"
      >
        Güzellik Uzmanı • Kurucu
      </p>

      {/* AÇIKLAMA */}
      <p
        style={{ color: theme.text + "cc" }}
        className="text-sm md:text-base leading-relaxed mb-5"
      >
        Ben Buse Gümüş. Güzellik ve bakım alanında edindiğim deneyimle, 
        her danışanıma özel ve doğru uygulamayı sunmayı hedefliyorum. 
        Amacım sadece işlem yapmak değil, kendinizi daha özgüvenli ve iyi hissetmenizi sağlamak.
      </p>

      <p
        style={{ color: theme.text + "cc" }}
        className="text-sm md:text-base leading-relaxed mb-6"
      >
        Hijyen, kalite ve memnuniyet benim için en önemli üç unsur. 
        En yeni teknikler ve profesyonel ürünlerle çalışarak, 
        kalıcı ve güvenilir sonuçlar sunuyorum.
      </p>

      {/* MİNİ GÜVEN BLOĞU */}
      <div className="flex gap-6 mb-8 text-center">
        <div>
          <p style={{ color: theme.primary }} className="font-bold text-lg">2000+</p>
          <p style={{ color: theme.text + "99" }} className="text-xs">Mutlu Müşteri</p>
        </div>
        <div>
          <p style={{ color: theme.primary }} className="font-bold text-lg">5+ Yıl</p>
          <p style={{ color: theme.text + "99" }} className="text-xs">Deneyim</p>
        </div>
      </div>

      {/* CTA */}
      <a
        href={`tel:${siteData.iletisim.telefon}`}
        className="inline-block px-6 py-3 rounded-xl font-semibold transition hover:scale-105"
        style={{ background: theme.primary, color: "#fff" }}
      >
        Randevu Al
      </a>

    </motion.div>

  </div>
</section>
</>

{/* HAKKIMIZDA / NEDEN BİZ */}
<section
  className="relative py-32 px-6 reveal overflow-hidden"
>

  {/* 🔥 STRIPE ARKA PLAN (NET) */}
  <div className="absolute inset-0 pointer-events-none">
<div className="barberStripe w-full h-full opacity-20" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* 🔥 BAŞLIK (ORTA + GLASS) */}
    <div className="flex justify-center mb-20">
      <div
        className="text-center px-6 py-5 rounded-2xl max-w-xl w-full"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <h2
          style={{
            color: "#fff",
            textShadow: "0 4px 20px rgba(0,0,0,0.7)"
          }}
          className="heading text-3xl md:text-5xl font-bold tracking-tight"
        >
          {siteData.nedenBiz.baslik}
        </h2>

        <p
          className="mt-4 text-sm md:text-base"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {siteData.nedenBiz.aciklama}
        </p>
      </div>
    </div>

    {/* KARTLAR */}
    <div className="grid md:grid-cols-3 gap-8">

      {siteData.nedenBiz.maddeler.map((item: any, i: number) => (
        
        <div
          key={i}
          className="group relative p-8 rounded-3xl transition duration-300 hover:-translate-y-2 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
          }}
        >

          {/* 🔥 BORDER STRIPE */}
          <div className="barberBorder absolute inset-0 rounded-3xl pointer-events-none" />

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10 text-center">

            {/* İKON */}
            <div
              style={{ background: theme.primary + "20" }}
              className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
            >
              <div
                style={{ background: theme.primary }}
                className="w-6 h-6 rounded-full"
              />
            </div>

            <h3
              style={{ color: theme.primary }}
              className="heading text-xl font-semibold mb-3"
            >
              {item.title}
            </h3>

            <p
              style={{ color: theme.text + "cc" }}
              className="text-sm leading-relaxed"
            >
              {item.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
{/* GALERİ */}
<section
  id="galeri"
  className="relative py-24 md:py-32 px-4 md:px-6 reveal overflow-hidden"
>

  {/* 🔥 STRIPE ARKA PLAN */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="barberStripe w-full h-full opacity-20" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* 🔥 BAŞLIK */}
    <div className="flex justify-center mb-14 md:mb-20">
      <div
        className="text-center px-6 py-4 rounded-2xl max-w-xl w-full"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <h2
          style={{
            color: "#fff",
            textShadow: "0 4px 20px rgba(0,0,0,0.7)"
          }}
          className="heading text-2xl md:text-5xl font-bold tracking-tight"
        >
          {siteData.galeri.baslik}
        </h2>

        <p
          className="mt-3 md:mt-4 text-sm md:text-base"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {siteData.galeri.aciklama}
        </p>
      </div>
    </div>

    {/* 🔥 TEK GALERİ GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">

      {[...siteData.galeri.erkek, ...siteData.galeri.kadin].map((src: string, i: number) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl md:rounded-2xl"
        >

          {/* BORDER */}
          <div className="barberBorder absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* GÖRSEL */}
          <img
            src={src}
            className="w-full h-40 md:h-64 object-cover transition duration-700 group-hover:scale-110"
          />

          {/* KARARTMA */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-black/40" />

          {/* GLOW */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

        </div>
      ))}

    </div>

  </div>
</section>
      {/* YORUMLAR */}
<section
  id="yorumlar"
  className="relative py-32 px-6 reveal overflow-hidden"
>

  {/* 🔥 STRIPE ARKA PLAN (NET) */}
  <div className="absolute inset-0 pointer-events-none">
<div className="barberStripe w-full h-full opacity-20" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* 🔥 BAŞLIK (GLASS) */}
    <div className="flex justify-center mb-20">
      <div
        className="text-center px-6 py-5 rounded-2xl max-w-xl w-full"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <h2
          className="heading text-3xl md:text-5xl font-bold tracking-tight"
          style={{
            color: "#fff",
            textShadow: "0 4px 20px rgba(0,0,0,0.7)"
          }}
        >
          {siteData.yorumlar.baslik}
        </h2>

        <div className="flex justify-center items-center gap-2 text-lg mt-4">
          <span style={{ color: "#fff" }}>★★★★★</span>

          <span className="text-sm ml-2 text-white/80">
            {siteData.yorumlar.puan}
          </span>
        </div>
      </div>
    </div>

    {/* YORUMLAR */}
    <div className="grid md:grid-cols-3 gap-8">

      {siteData.yorumlar.liste.map((item: any, i: number) => (
        <div
          key={i}
          className="group relative p-8 rounded-3xl transition duration-300 hover:-translate-y-2 overflow-hidden"
          style={{
           background: "rgba(255,255,255,0.6)",
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
          }}
        >

          {/* 🔥 BORDER STRIPE */}
          <div className="barberBorder absolute inset-0 rounded-3xl pointer-events-none" />

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10">

            {/* ÜST */}
            <div className="flex justify-between items-center mb-4">

              <h4
                style={{ color: theme.text }}
                className="font-semibold"
              >
                {item.name}
              </h4>

              <span style={{ color: theme.primary }}>
                ★★★★★
              </span>

            </div>

            {/* YORUM */}
            <p
              style={{ color: theme.text + "cc" }}
              className="text-sm leading-relaxed"
            >
              {item.yorum}
            </p>

            {/* ALT ÇİZGİ */}
            <div
              className="mt-6 h-[2px] w-10 group-hover:w-20 transition-all duration-300"
              style={{ background: theme.primary }}
            />

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      {/* CTA */}
  <section
  style={{
    background: `linear-gradient(to bottom, ${theme.bg}, ${theme.bgSoft})`
  }}
  className="py-24 text-center reveal flex flex-col items-center gap-8"
>
  <h2
    style={{ color: theme.primary }}
    className="heading text-3xl md:text-4xl font-bold tracking-tight"
  >
    {siteData.cta.baslik}
  </h2>

  <a
    href={`tel:${siteData.iletisim.telefon}`}
    style={{
      background: theme.primary,
      color: "#fff"
    }}
    className="px-10 py-4 rounded-xl font-semibold tracking-wide shadow-lg transition hover:scale-105"
  >
    {siteData.cta.buton}
  </a>
</section>

      {/* FOOTER */}
    <footer
  className="relative py-24 px-6 overflow-hidden"
  style={{
    background: theme.bg,
    borderTop: `1px solid ${theme.primary}20`
  }}
>

  {/* GLOW ARKA PLAN */}
  <div
    style={{ background: theme.glow }}
    className="absolute inset-0 blur-[120px] opacity-30"
  />

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {/* LOGO */}
    <div>
      <h3
        style={{ color: theme.primary }}
        className="heading text-xl font-semibold mb-4"
      >
        {siteData.genel.isim}
      </h3>

      <p
        style={{ color: theme.text + "cc" }}
        className="text-sm leading-relaxed"
      >
        {siteData.footer.aciklama}
      </p>
    </div>

    {/* MENU */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        {siteData.footer.menuBaslik}
      </h4>

      <div className="flex flex-col gap-3 text-sm">
        {siteData.menu.map((item: any, i: number) => (
          <a
            key={i}
           href={`/${currentLang}${item.link}`}
            style={{ color: theme.text }}
            className="hover:translate-x-1 transition duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>

    {/* İLETİŞİM */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        {siteData.footer.iletisimBaslik}
      </h4>

      <div className="flex flex-col gap-3 text-sm">

        <a
          href={`tel:${siteData.iletisim.telefon}`}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          {siteData.iletisim.telefon}
        </a>

        <a
          href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          WhatsApp
        </a>

        <a
          href={siteData.footer.harita}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          Harita
        </a>

        <a
          href={siteData.footer.instagram}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          Instagram
        </a>

      </div>
    </div>

    {/* CTA */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        Randevu
      </h4>

      <a
        href={`tel:${siteData.iletisim.telefon}`}
        style={{
          background: theme.primary,
          color: "#fff",
          boxShadow: `0 10px 30px ${theme.glow}`
        }}
        className="px-8 py-4 rounded-2xl font-semibold tracking-wide inline-block transition hover:scale-105 hover:opacity-90"
      >
        Randevu Al
      </a>
    </div>

  </div>

  {/* ALT */}
  <div
    style={{ color: theme.text + "99" }}
    className="text-center mt-16 text-xs"
  >
    {siteData.footer.copyright}
  </div>

</footer>
{/* FLOATING CTA */}
<div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">

  {/* WHATSAPP */}
  <div className="flex items-center gap-2">

    {showBubble && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        Hemen yaz
      </motion.div>
    )}

    <a
       href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
      className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
      style={{ background: "#25D366", color: "#fff" }}
    >
      <FaWhatsapp size={22} />
    </a>

  </div>

  {/* ARA */}
  <div className="flex items-center gap-2">

    {showBubble && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        Hemen ara
      </motion.div>
    )}

    <a
      href={`tel:${siteData.iletisim.telefon}`}
      className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
      style={{ background: "#111", color: "#fff" }}
    >
      📞
    </a>

  </div>
{/* KONUM */}

<div className="flex items-center gap-2">

  {showBubble && (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: [0, -6, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
    >
      Konum
    </motion.div>
  )}

  <a
    href={siteData.iletisim.adres}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition active:scale-95"
    style={{ background: theme.primary, color: "#fff" }}
  >
    📍
  </a>

</div>

</div>
    </main>
  )
}