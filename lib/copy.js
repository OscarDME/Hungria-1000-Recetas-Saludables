// lib/copy.js — A landoló oldal TELJES látható tartalma.
// Minden szöveges módosítást itt kell elvégezni. A komponensek kizárólag ebből az objektumból olvasnak.

export const copy = {
  metadata: {
    title: "Esencia Pro | 1000 Egészséges Recept 2.0",
    description:
      "1000 Egészséges Recept 2.0 cukorbetegeknek: finom, egyszerű és kifejezetten a vércukorszint szabályozására. Különleges ajánlat: 2990 Ft + 5 ingyenes bónusz.",
    lang: "hu",
  },

  brand: {
    name: "Esencia Pro",
    tagline: "1000 Egészséges Recept 2.0",
  },

  hero: {
    banner: "EZ AZ AJÁNLAT ÉS AZ INGYENES BÓNUSZOK LEJÁRNAK:",
    timerLabels: { days: "Nap", hours: "Óra", minutes: "Perc", seconds: "Mp" },
    kicker: "Több mint 2000 ember változtatta meg az életét",
    headlinePre: "Több mint 2000 ember",
    headlineHighlight: "nyerte vissza az egészségét",
    headlinePost: "1000 receptünk segítségével",
    subheadline: "A cukorbetegség nem kifogás arra, hogy lemondj a finom ételekről!",
    supporting:
      "Tegyél az egészségedért, miközben isteni ízeket élvezel az 1000 Egészséges Recept 2.0-val!",
    cta: "Indítsd el a videót most! 🔊",
    imageAlt: "1000 Egészséges Recept 2.0 e-könyv cukorbetegeknek",
    trustChips: [
      { icon: "⭐", text: "+2000 elégedett olvasó" },
      { icon: "🎁", text: "5 ingyenes bónusz" },
      { icon: "🛡️", text: "7 napos garancia" },
    ],
  },

  story: {
    headlinePre: "Tudtad, hogy a helytelen étkezés",
    headlineHighlight: "észrevétlenül és gyorsan növeli",
    headlinePost: "a cukorbetegség szövődményeinek kockázatát?",
    intro:
      "Minden falat számít. Amit ma megeszel, meghatározza, hogyan fogod érezni magad holnap. Ha cukorbetegséggel élsz, a legapróbb botlások is csendben összeadódnak.",
    problemsLead: "Íme, mi történik, ha elhanyagolod az étkezésed:",
    problems: [
      {
        title: "Hirtelen vércukorszint-ingadozás",
        desc: "A rossz étrend vércukor-kiugrásokat okozhat, ami idővel károsítja az idegeket, a szemet és a vesét.",
      },
      {
        title: "Lassú, de biztos súlygyarapodás",
        desc: "Az egészségtelen ételek észrevétlen hízáshoz vezetnek, ami jelentősen ronthat a cukorbetegséged állapotán.",
      },
      {
        title: "Növekvő szív- és érrendszeri kockázat",
        desc: "A helytelen táplálkozás megterheli a szívedet, márpedig a cukorbetegeknél ez az egyik leggyakoribb veszélyforrás.",
      },
      {
        title: "Kínzó emésztési panaszok",
        desc: "Bizonyos összetevők puffadást, gázosodást, székrekedést és állandó diszkomfortérzetet okozhatnak.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Egyik kézben zöld alma, a másikban rózsaszín fánk: a választás a tiéd",
    solutionBadge: "A Megoldás",
    solutionHeadline:
      "Szeretnéd megtanulni, hogyan étkezz finoman és egészségesen, anélkül, hogy rontanál a cukorbetegségeden?",
  },

  benefits: {
    forYouHeadline: "Ez az e-könyv neked szól, ha...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Cukorbeteg vagy, esetleg egy érintett családtagodról gondoskodsz",
        desc: "Olyan recepteket találsz, amelyeket kifejezetten a vércukor kordában tartására alkottunk, az étkezés örömének feláldozása nélkül.",
      },
      {
        icon: "Sparkles",
        title: "Egyszerűbbé akarod tenni az egészséges főzést a mindennapokban",
        desc: "Az egészséges étkezésnek nem kell bonyolultnak lennie: rövid és világos lépéseken vezetünk végig.",
      },
      {
        icon: "Users",
        title: "Olyan ételekre vágysz, amiket a család minden tagja imádni fog",
        desc: "Finomságok, amiket otthon mindenki jóízűen megeszik, nem csak az, aki cukorbeteg.",
      },
    ],
    headline: "Ezt kapod az 1000 Egészséges Recept 2.0-tól:",
    items: [
      {
        icon: "ChefHat",
        title: "Ínycsiklandó és egészséges ételek",
        desc: "Amiket az egész család imádni fog minden egyes étkezésnél.",
      },
      {
        icon: "ListChecks",
        title: "Lépésről lépésre követhető útmutatók",
        desc: "Pofonegyszerű elkészítés, még akkor is, ha teljesen kezdő vagy a konyhában.",
      },
      {
        icon: "ShoppingBasket",
        title: "Könnyen beszerezhető alapanyagok",
        desc: "Bármelyik sarki boltban vagy szupermarketben megtalálod őket.",
      },
      {
        icon: "Lightbulb",
        title: "Profi séfek bevált trükkjei",
        desc: "Hogy magabiztosan főzz és még finomabb ízeket varázsolj az asztalra.",
      },
      {
        icon: "Apple",
        title: "Gondosan összeállított tápanyagok",
        desc: "Megtanulod pontosan azt adni a testednek, amire igazán szüksége van.",
      },
      {
        icon: "Wheat",
        title: "Tudatos szénhidrátkontroll",
        desc: "Anélkül, hogy le kellene mondanod a változatos ízekről.",
      },
      {
        icon: "Activity",
        title: "Stabil és kiszámítható vércukorszint",
        desc: "Ételek, amelyek segítenek kordában tartani a cukrodat.",
      },
      {
        icon: "HeartPulse",
        title: "Jobb általános közérzet",
        desc: "Több energia, könnyebb emésztés és minőségibb élet.",
      },
    ],
    socialProof:
      "Az 1000 Egészséges Recept 2.0 segítségével hozzád hasonló emberek ezrei stabilizálták a vércukorszintjüket, szabadultak meg a felesleges kilóktól, és hozták vissza az étkezés örömét az életükbe.",
  },

  features: {
    headline: "Mit tartalmaz az e-könyv?",
    subheadline: "Mindent, amire szükséged van egy finom, egészséges és kompromisszummentes étrendhez.",
    items: [
      {
        icon: "Utensils",
        title: "Változatos és egészséges receptek",
        desc: "Rengeteg kiegyensúlyozott és tápláló recept az ebédektől a vacsorákig, beleértve az egészséges szószokat és krémeket is.",
      },
      {
        icon: "BookOpen",
        title: "A cukorbeteg-barát főzés alapjai",
        desc: "Megérted, pontosan hogyan lettek ezek a receptek a te speciális igényeidre szabva.",
      },
      {
        icon: "Lightbulb",
        title: "Praktikus konyhai praktikák",
        desc: "Fedezz fel olyan trükköket, amikkel sokkal élvezetesebb lesz a főzés.",
      },
      {
        icon: "Replace",
        title: "Okos alapanyag-helyettesítési útmutató",
        desc: "Tudd meg, mik a cukorbetegség barátai, és mivel váltsd ki a káros ételeket.",
      },
      {
        icon: "Gift",
        title: "Exkluzív extra kedvezmények",
        desc: "A vásárlásoddal ajándékokat és belépőt kapsz a Privilégium Klubunkba.",
      },
    ],
  },

  bonuses: {
    badge: "INGYENES BÓNUSZOK",
    headline: "Korlátozott ideig ezt az 5 ajándékot is megkapod",
    subheadline: "Teljesen ingyen adjuk őket a mai e-könyv vásárlásod mellé.",
    freeLabel: "INGYENES!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "1. BÓNUSZ",
        title: "E-könyv: 15 Egészséges Leves",
        desc: "15 szénhidrátszegény, melegítő leves receptje.",
        value: "4 990 Ft",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "2. BÓNUSZ",
        title: "E-könyv: 10 Egészséges Turmix",
        desc: "10 frissítő, cukormentes turmix ötlet.",
        value: "4 990 Ft",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "3. BÓNUSZ",
        title: "E-könyv: 15 Egészséges Snack",
        desc: "15 gyors és egészséges nassolnivaló cukorbetegeknek.",
        value: "4 990 Ft",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "4. BÓNUSZ",
        title: "E-könyv: Heti Menütervező",
        desc: "Praktikus tervező, amivel könnyedén megszervezheted a napi étkezéseidet.",
        value: "4 990 Ft",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "5. BÓNUSZ",
        title: "Privilégium Klub",
        desc: "Jövőbeli frissítések, 7 napos garancia és kedvezmények a katalógusunk többi termékére.",
        value: "6 990 Ft",
      },
    ],
    totalLabel: "A bónuszok összértéke: 26 950 Ft — Ma: INGYENES",
    footer: "Mindent azonnal, digitális formátumban kapsz meg a vásárlás után.",
  },

  testimonials: {
    headline: "Ezt mondják a vásárlóink",
    subheadline:
      "Valódi emberek őszinte véleménye az 1000 Egészséges Recept 2.0-ról.",
    productLabel: "1000 Egészséges Recept 2.0 cukorbetegeknek",
    rating: "5★",
    actions: { like: "Tetszik", comment: "Hozzászólás", share: "Megosztás" },
    items: [
      {
        name: "Kovács Péter",
        text:
          "Egyszerű recepteket kerestem, könnyen beszerezhető alapanyagokból. Ez a könyv tele van isteni ételekkel, és tényleg csak pár lépés az egész. 100%-ig ajánlom!",
      },
      {
        name: "Tóth Mária",
        text:
          "Amikor diagnosztizálták a cukorbetegségemet, attól féltem a legjobban, hogy soha többé nem ehetek finomakat. A receptek szuperek, és mivel digitális a könyv, ott van a telefonomon bevásárlás közben is.",
      },
      {
        name: "Németh Júlia",
        text:
          "Egy cukorbeteg gyermek édesanyjaként igazi kihívás volt olyan ételt főzni, amit a többiek is megesznek. Ez a könyv elhozta a változatosságot és a nyugalmat. A receptek hatalmas sikert aratnak itthon.",
      },
      {
        name: "Varga Gizella",
        text:
          "Amikor kiderült a férjem betegsége, ez a könyv hatalmas segítség volt. Nincsenek benne furcsa, beszerezhetetlen hozzávalók, mégis minden nagyon finom. Csak ajánlani tudom!",
      },
      {
        name: "Szabó Anna",
        text:
          "Bátran ajánlom mindenkinek: finomak és könnyen követhetők a leírások. Külön köszönet az ingyenes bónuszokért, a menütervezővel sokkal könnyebb tartani a diétát.",
      },
      {
        name: "Farkas István",
        text:
          "Ez a könyv teljesen megváltoztatta a főzési szokásaimat. Régebben külön főztem magamnak és a családnak. Ma már mindenki ugyanazt eszi, mindenféle macera nélkül. Hálásan köszönöm!",
      },
    ],
    cta: "MÉG MA EL AKAROM KEZDENI",
  },

  finalCta: {
    preHeadline: "ITT AZ IDŐ A VÁLTOZÁSRA",
    urgencyTop: "80% KEDVEZMÉNY",
    headline:
      "SZEREZD MEG A DIGITÁLIS KÖNYVET MA, ŐRÜLT KEDVEZMÉNNYEL!",
    subUrgency:
      "Több mint 2000 ember már visszakapta az egészségét ezekkel a receptekkel. Ma te következel.",
    bundleList: [
      "E-könyv: 1000 Egészséges Recept 2.0 cukorbetegeknek",
      "1. Bónusz — 15 Egészséges Leves",
      "2. Bónusz — 10 Egészséges Turmix",
      "3. Bónusz — 15 Egészséges Snack",
      "4. Bónusz — Heti Menütervező",
      "5. Bónusz — Privilégium Klub",
    ],
    imageAlt: "Teljes csomag: 1000 Egészséges Recept 2.0 + 5 bónusz",
    guaranteeText:
      "Még mindig hezitálsz? Ne aggódj, az égvilágon semmi kockázatod nincs! Az egészséged megér ennyit. 7 napos 100%-os pénzvisszafizetési garanciát vállalunk.",
    regularPriceLabel: "Eredeti ár:",
    regularPrice: "14 950 Ft",
    offerPrice: "2990 Ft",
    discountBadge: "80% KEDVEZMÉNY",
    urgencyText: "A TRANZAKCIÓ MAGYAR FORINTBAN TÖRTÉNIK",
    bottomUrgency: "Ez az ajánlat azonnal lejár, amint az időzítő nullára ér.",
    button: "KÉREM A KEDVEZMÉNYES AJÁNLATOT",
    trustRow: "100% Biztonságos fizetés · Azonnali hozzáférés · 7 napos garancia",
  },

  faq: {
    authorRole: "Esencia Pro · Egészséges Táplálkozás Szakértői Csapat",
    authorHeadline: "Finom ételek, amelyek vigyáznak az egészségedre",
    authorBio:
      "Az Esencia Pro-nál hiszünk abban, hogy a cukorbetegség nem veheti el az étkezés örömét. Minden egyes receptünket úgy alkottuk meg, hogy bűntudat nélkül élvezhesd az ízeket, miközben a vércukorszintedet is kordában tartod.",
    authorImageAlt: "Az Esencia Pro csapata",
    worksHeadline: "Kinek NEM való ez az e-könyv?",
    doesntWork: [
      "Azoknak, akik következmények nélkül akarnak egészségtelenül étkezni.",
      "Azoknak, akik nem nyitottak az új ízekre.",
      "Azoknak, akik csodát várnak anélkül, hogy bármin is változtatnának.",
    ],
    worksText:
      "De ha valódi, egyszerű, finom és a cukorbetegségedhez igazított recepteket keresel, akkor ezt a könyvet neked találták ki.",
    headline: "Gyakran Ismételt Kérdések",
    subheadline: "Minden, amit tudnod kell, mielőtt belevágsz.",
    items: [
      {
        q: "Hogyan kapom meg a könyvet fizetés után?",
        a: "A vásárlás után azonnal kapsz egy e-mailt a letöltési linkkel. Bármikor olvashatod telefonon, tableten vagy számítógépen.",
      },
      {
        q: "Milyen formátumú az e-könyv?",
        a: "Kiváló minőségű PDF formátumban kapod meg, ami minden eszközön tökéletesen olvasható, így kinyomtatnod sem kell.",
      },
      {
        q: "Alkalmasak a receptek 1-es és 2-es típusú cukorbetegeknek is?",
        a: "Igen, a recepteket kifejezetten a vércukorszint szabályozásának támogatására terveztük. Ugyanakkor mindig javasoljuk, hogy egyeztess a kezelőorvosoddal a diétádról.",
      },
      {
        q: "Szükségem lesz drága vagy nehezen beszerezhető alapanyagokra?",
        a: "Egyáltalán nem. Minden receptünk átlagos, megfizethető alapanyagokra épül, amiket a legközelebbi szupermarketben is megkapsz.",
      },
      {
        q: "Van garancia?",
        a: "Igen. 7 napos, 100%-os pénzvisszafizetési garanciát adunk. Ha nem vagy elégedett, kérdés nélkül visszautaljuk a teljes összeget.",
      },
      {
        q: "Fizethetek forintban?",
        a: "Igen, a rendszer automatikusan a helyi valutádban számol és terhel a vásárlás során.",
      },
    ],
  },

  closing: {
    kicker: "AZ UTOLSÓ LÉPÉS",
    headline: "Az egészséged nem várhat tovább",
    subheadline:
      "Már ma elkezdhetsz finomakat enni, anélkül, hogy ártanál a vércukorszintednek. Holnap ez az ár már lehet, hogy nem lesz elérhető.",
    regularPrice: "14 950 Ft",
    offerPrice: "2990 Ft",
    ctaLabel: "KÉREM A KEDVEZMÉNYES AJÁNLATOT MA",
    trustRow: "Biztonságos fizetés · Azonnali hozzáférés · 7 napos garancia",
  },

  footer: {
    brand: "PRO ESCALA",
    copyright: "Copyright © proescala.online ® 2025",
    disclaimer:
      "Ez a weboldal nem része a Facebook weboldalának vagy a Facebook Inc.-nek. Továbbá ezt az oldalt a Facebook semmilyen módon nem támogatja és nem szponzorálja.",
    trademark: "A FACEBOOK a FACEBOOK, Inc. bejegyzett védjegye.",
  },
};