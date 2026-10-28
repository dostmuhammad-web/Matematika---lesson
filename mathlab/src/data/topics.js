export const topics = [
  {
    id: "arifmetika",
    title: "Arifmetika",
    symbol: "∑",
    color: "#6366f1",
    tag: "Boshlang'ich",
    description:
      "Sonlar, amallar tartibi, bo'linish belgilari va darajalar bilan ishlashni o'rganing.",
    lessons: [
      {
        id: "arifmetika-1",
        title: "Amallar tartibi",
        duration: "5 daqiqa",
        theory: [
          "Ifodada qavslar bo'lsa, eng avval qavs ichidagi amallar bajariladi.",
          "Qavslardan keyin daraja, so'ng ko'paytirish va bo'lish chapdan o'ngga bajariladi.",
          "Eng oxirida qo'shish va ayirish chapdan o'ngga bajariladi.",
        ],
        formula: "a × (b + c) = a × b + a × c",
        example: {
          problem: "12 + 3 × 4 ni hisoblang.",
          steps: [
            "Avval ko'paytirish: 3 × 4 = 12",
            "Keyin qo'shish: 12 + 12 = 24",
            "Javob: 24",
          ],
        },
        tip: "Shubhalansangiz, har bir qadamni alohida yozib chiqing — xato qayerda ketganini darhol ko'rasiz.",
      },
      {
        id: "arifmetika-2",
        title: "Bo'linish belgilari",
        duration: "7 daqiqa",
        theory: [
          "Natural sonlar — 1, 2, 3, ... sanashda ishlatiladigan sonlar.",
          "Son 2 ga bo'linadi, agar oxirgi raqami juft bo'lsa.",
          "Son 3 ga bo'linadi, agar raqamlari yig'indisi 3 ga bo'linsa.",
          "Son 5 ga bo'linadi, agar oxirgi raqami 0 yoki 5 bo'lsa.",
        ],
        formula: "Bo'linuvchi = bo'luvchi × bo'linma + qoldiq",
        example: {
          problem: "123 soni 3 ga bo'linadimi?",
          steps: [
            "Raqamlar yig'indisi: 1 + 2 + 3 = 6",
            "6 soni 3 ga bo'linadi.",
            "Demak, 123 ham 3 ga bo'linadi: 123 ÷ 3 = 41",
          ],
        },
        tip: "Bo'linish belgilari katta sonlarni tekshirishda vaqtni ancha tejaydi.",
      },
      {
        id: "arifmetika-3",
        title: "Daraja va kvadrat ildiz",
        duration: "6 daqiqa",
        theory: [
          "aⁿ — a sonini n marta o'ziga ko'paytirish demakdir.",
          "a² sonning kvadrati, a³ esa kubi deb ataladi.",
          "√b — kvadrati b ga teng bo'lgan musbat son.",
        ],
        formula: "a² × a³ = a⁵,   √(a²) = a (a ≥ 0)",
        example: {
          problem: "5² va √81 ni hisoblang.",
          steps: ["5² = 5 × 5 = 25", "9² = 81, demak √81 = 9"],
        },
        tip: "1 dan 20 gacha sonlarning kvadratlarini yodda saqlang — bu hisoblashni tezlashtiradi.",
      },
    ],
  },
  {
    id: "kasrlar",
    title: "Kasrlar",
    symbol: "½",
    color: "#ec4899",
    tag: "Boshlang'ich",
    description:
      "Oddiy kasrlar, umumiy maxraj, qo'shish, ayirish, ko'paytirish va bo'lish.",
    lessons: [
      {
        id: "kasrlar-1",
        title: "Kasr tushunchasi",
        duration: "5 daqiqa",
        theory: [
          "a/b kasrda a — surat, b — maxraj. Maxraj butun necha qismga bo'linganini, surat nechta qism olinganini bildiradi.",
          "Surat maxrajdan kichik bo'lsa — to'g'ri kasr, katta bo'lsa — noto'g'ri kasr.",
          "Noto'g'ri kasrni aralash songa aylantirish mumkin: 7/4 = 1 3/4.",
        ],
        formula: "a/b,  b ≠ 0",
        example: {
          problem: "3/4 kasr nimani bildiradi?",
          steps: [
            "Butun 4 ta teng qismga bo'lingan.",
            "Shundan 3 ta qism olingan.",
            "Demak, bu butunning to'rtdan uch qismi.",
          ],
        },
        tip: "Kasr — bu bo'lish amalining yozuvi: 3/4 = 3 ÷ 4.",
      },
      {
        id: "kasrlar-2",
        title: "Qo'shish va ayirish",
        duration: "7 daqiqa",
        theory: [
          "Maxrajlar bir xil bo'lsa, suratlar qo'shiladi yoki ayiriladi, maxraj o'zgarmaydi.",
          "Maxrajlar har xil bo'lsa, avval umumiy maxraj topiladi.",
          "Umumiy maxraj sifatida maxrajlarning eng kichik umumiy karralisi (EKUK) olinadi.",
        ],
        formula: "a/c + b/c = (a + b)/c",
        example: {
          problem: "1/2 + 1/3 ni hisoblang.",
          steps: [
            "Umumiy maxraj 6 ga teng.",
            "1/2 = 3/6, 1/3 = 2/6",
            "3/6 + 2/6 = 5/6",
            "Javob: 5/6",
          ],
        },
        tip: "Natijani har doim ixchamlang — surat va maxrajning umumiy bo'luvchisini toping.",
      },
      {
        id: "kasrlar-3",
        title: "Ko'paytirish va bo'lish",
        duration: "6 daqiqa",
        theory: [
          "Ko'paytirishda surat suratga, maxraj maxrajga ko'paytiriladi.",
          "Bo'lishda ikkinchi kasr teskari aylantiriladi va ko'paytiriladi.",
          "Ko'paytirishdan oldin qisqartirish hisoblashni osonlashtiradi.",
        ],
        formula: "a/b ÷ c/d = a/b × d/c",
        example: {
          problem: "2/3 ÷ 4/5 ni hisoblang.",
          steps: [
            "Bo'lishni ko'paytirishga aylantiramiz: 2/3 × 5/4",
            "Suratlar: 2 × 5 = 10",
            "Maxrajlar: 3 × 4 = 12",
            "10/12 = 5/6",
          ],
        },
        tip: "Bo'lishda faqat ikkinchi kasr teskari aylanadi — birinchisiga tegmaslik kerak.",
      },
    ],
  },
  {
    id: "foizlar",
    title: "Foizlar",
    symbol: "%",
    color: "#f59e0b",
    tag: "O'rta",
    description:
      "Foiz tushunchasi, chegirma, o'sish va kundalik hayotdagi foiz masalalari.",
    lessons: [
      {
        id: "foizlar-1",
        title: "Foiz nima?",
        duration: "5 daqiqa",
        theory: [
          "Foiz — butunning yuzdan bir qismi. 1% = 1/100 = 0,01.",
          "Sonning p% ini topish uchun sonni p/100 ga ko'paytirish kerak.",
          "Kasrni foizga aylantirish uchun uni 100 ga ko'paytiring.",
        ],
        formula: "p% = p/100",
        example: {
          problem: "80 sonining 25% ini toping.",
          steps: ["25% = 25/100 = 0,25", "80 × 0,25 = 20", "Javob: 20"],
        },
        tip: "25% — to'rtdan bir, 50% — yarmi, 10% — o'ndan bir. Bu qiymatlarni yodda saqlang.",
      },
      {
        id: "foizlar-2",
        title: "Chegirma va o'sish",
        duration: "6 daqiqa",
        theory: [
          "Narxni p% ga kamaytirish uchun uni (1 − p/100) ga ko'paytiring.",
          "Narxni p% ga oshirish uchun uni (1 + p/100) ga ko'paytiring.",
          "Chegirma miqdori = eski narx × p/100.",
        ],
        formula: "Yangi narx = Eski narx × (1 ± p/100)",
        example: {
          problem: "120 000 so'mlik mahsulotga 20% chegirma berildi. Yangi narx qancha?",
          steps: [
            "Chegirma: 120 000 × 0,2 = 24 000 so'm",
            "Yangi narx: 120 000 − 24 000 = 96 000 so'm",
            "Yoki: 120 000 × 0,8 = 96 000 so'm",
          ],
        },
        tip: "Chegirma va o'sishni bitta ko'paytirish bilan hisoblash tezroq va xatosizroq.",
      },
      {
        id: "foizlar-3",
        title: "Foizga oid masalalar",
        duration: "7 daqiqa",
        theory: [
          "Qism butunning necha foizini tashkil qilishini topish: (qism ÷ butun) × 100.",
          "Agar yangi qiymat va o'sish foizi ma'lum bo'lsa, dastlabki qiymatni bo'lish orqali topamiz.",
          "Foiz masalalarida avval nimani 100% deb olish kerakligini aniqlang.",
        ],
        formula: "Foiz = (qism ÷ butun) × 100",
        example: {
          problem: "30 soni 120 ning necha foizi?",
          steps: [
            "Qism = 30, butun = 120",
            "(30 ÷ 120) × 100 = 0,25 × 100 = 25",
            "Javob: 25%",
          ],
        },
        tip: "Masalada «nimaning foizi» deb so'ralsa, o'sha son butun (100%) hisoblanadi.",
      },
    ],
  },
  {
    id: "algebra",
    title: "Algebra",
    symbol: "x²",
    color: "#14b8a6",
    tag: "O'rta",
    description:
      "Harfli ifodalar, o'xshash hadlar va qisqa ko'paytirish formulalari.",
    lessons: [
      {
        id: "algebra-1",
        title: "Algebraik ifodalar",
        duration: "6 daqiqa",
        theory: [
          "Algebraik ifoda sonlar, harflar va amallardan tuziladi: 3x + 5.",
          "Harf oldidagi son koeffitsiyent deyiladi. 3x da koeffitsiyent — 3.",
          "Ifodaning qiymatini topish uchun harf o'rniga berilgan sonni qo'yiladi.",
        ],
        formula: "ax + b,  a ≠ 0",
        example: {
          problem: "x = 4 bo'lsa, 3x + 5 ifodaning qiymatini toping.",
          steps: ["3 × 4 + 5", "12 + 5 = 17", "Javob: 17"],
        },
        tip: "Harf o'rniga son qo'yganda ko'paytirish belgisini yozib qo'ying — chalkashlik kamayadi.",
      },
      {
        id: "algebra-2",
        title: "O'xshash hadlarni ixchamlash",
        duration: "6 daqiqa",
        theory: [
          "Bir xil harf qismiga ega hadlar o'xshash hadlar deyiladi: 5x va −2x.",
          "O'xshash hadlarning koeffitsiyentlari qo'shiladi yoki ayiriladi.",
          "Sonlar (harfsiz hadlar) alohida guruhlanadi.",
        ],
        formula: "ax + bx = (a + b)x",
        example: {
          problem: "5x + 3 − 2x + 7 ni ixchamlang.",
          steps: [
            "x li hadlar: 5x − 2x = 3x",
            "Sonlar: 3 + 7 = 10",
            "Natija: 3x + 10",
          ],
        },
        tip: "Had oldidagi ishorani ham birga ko'chiring: −2x dagi minusni unutmang.",
      },
      {
        id: "algebra-3",
        title: "Qisqa ko'paytirish formulalari",
        duration: "7 daqiqa",
        theory: [
          "Yig'indining kvadrati: (a + b)² = a² + 2ab + b².",
          "Ayirmaning kvadrati: (a − b)² = a² − 2ab + b².",
          "Kvadratlar ayirmasi: a² − b² = (a − b)(a + b).",
        ],
        formula: "(a ± b)² = a² ± 2ab + b²",
        example: {
          problem: "(x + 3)² ni yoying.",
          steps: [
            "a = x, b = 3",
            "(x + 3)² = x² + 2 × x × 3 + 3²",
            "Natija: x² + 6x + 9",
          ],
        },
        tip: "O'rta had (2ab) ni tushirib qoldirish eng ko'p uchraydigan xatodir.",
      },
    ],
  },
  {
    id: "geometriya",
    title: "Geometriya",
    symbol: "△",
    color: "#0ea5e9",
    tag: "O'rta",
    description:
      "Perimetr, yuza, uchburchaklar va aylana haqidagi asosiy bilimlar.",
    lessons: [
      {
        id: "geometriya-1",
        title: "Perimetr va yuza",
        duration: "6 daqiqa",
        theory: [
          "Perimetr — shakl chegarasining uzunligi, u uzunlik birliklarida o'lchanadi.",
          "Yuza — shakl egallagan tekislik qismi, u kvadrat birliklarda o'lchanadi.",
          "To'g'ri to'rtburchak yuzi = uzunlik × kenglik.",
        ],
        formula: "P = 2(a + b),   S = a × b",
        example: {
          problem: "Tomonlari 6 sm va 4 sm bo'lgan to'g'ri to'rtburchakning perimetri va yuzini toping.",
          steps: [
            "P = 2 × (6 + 4) = 20 sm",
            "S = 6 × 4 = 24 sm²",
          ],
        },
        tip: "Perimetr — bir o'lchamli (sm), yuza — ikki o'lchamli (sm²). Birliklarga e'tibor bering.",
      },
      {
        id: "geometriya-2",
        title: "Uchburchaklar",
        duration: "7 daqiqa",
        theory: [
          "Uchburchak burchaklarining yig'indisi har doim 180° ga teng.",
          "Uchburchak yuzi = (asos × balandlik) ÷ 2.",
          "Tomonlariga ko'ra uchburchaklar teng tomonli, teng yonli va turli tomonli bo'ladi.",
        ],
        formula: "∠A + ∠B + ∠C = 180°",
        example: {
          problem: "Uchburchakning ikki burchagi 50° va 60°. Uchinchi burchakni toping.",
          steps: [
            "50° + 60° = 110°",
            "180° − 110° = 70°",
            "Javob: 70°",
          ],
        },
        tip: "Uchburchakda 180° dan katta burchak bo'lishi mumkin emas — javobni tekshirishda foydalaning.",
      },
      {
        id: "geometriya-3",
        title: "Aylana",
        duration: "6 daqiqa",
        theory: [
          "Aylana markazi va radiusi bilan aniqlanadi. Diametr = 2 × radius.",
          "Aylana uzunligi C = 2πr formula bilan topiladi.",
          "Aylana yuzi S = πr² formula bilan topiladi.",
        ],
        formula: "C = 2πr,   S = πr²",
        example: {
          problem: "Radiusi 5 sm bo'lgan aylananing uzunligi va yuzini toping (π = 3,14).",
          steps: [
            "C = 2 × 3,14 × 5 = 31,4 sm",
            "S = 3,14 × 5² = 3,14 × 25 = 78,5 sm²",
          ],
        },
        tip: "π — doimiy son, taxminan 3,14 ga teng. Javobda birliklarni yozishni unutmang.",
      },
    ],
  },
  {
    id: "tenglamalar",
    title: "Tenglamalar",
    symbol: "=",
    color: "#a855f7",
    tag: "O'rta",
    description:
      "Chiziqli tenglamalarni yechish, qavslar va tekshirish usullari.",
    lessons: [
      {
        id: "tenglamalar-1",
        title: "Tenglama nima?",
        duration: "5 daqiqa",
        theory: [
          "Tenglama — noma'lum son qatnashgan tenglik.",
          "Tenglamani to'g'ri tenglikka aylantiradigan son uning ildizi deyiladi.",
          "Tenglamani yechish — barcha ildizlarini topish demakdir.",
        ],
        formula: "ax + b = c",
        example: {
          problem: "x + 7 = 12 tenglamani yeching.",
          steps: ["x = 12 − 7", "x = 5", "Tekshirish: 5 + 7 = 12 ✓"],
        },
        tip: "Topilgan javobni tenglamaga qo'yib tekshirish — eng ishonchli nazorat usuli.",
      },
      {
        id: "tenglamalar-2",
        title: "Chiziqli tenglamalar",
        duration: "7 daqiqa",
        theory: [
          "Hadni tenglikning narigi tomoniga o'tkazganda ishorasi teskari bo'ladi.",
          "Noma'lumli hadlarni bir tomonga, sonlarni boshqa tomonga yig'amiz.",
          "Oxirida koeffitsiyentga bo'lib, noma'lumni topamiz.",
        ],
        formula: "ax + b = cx + d  →  x = (d − b)/(a − c)",
        example: {
          problem: "3x + 2 = x + 10 tenglamani yeching.",
          steps: [
            "3x − x = 10 − 2",
            "2x = 8",
            "x = 4",
          ],
        },
        tip: "Har bir hadni ko'chirganda ishorasini alohida tekshiring — bu xatolarning asosiy manbai.",
      },
      {
        id: "tenglamalar-3",
        title: "Qavsli tenglamalar",
        duration: "6 daqiqa",
        theory: [
          "Avval qavslarni ochish mumkin, keyin o'xshash hadlarni ixchamlash kerak.",
          "Agar qavs oldida umumiy ko'paytuvchi bo'lsa, ikkala tomonni unga bo'lish tezroq bo'ladi.",
          "Qavs oldidagi minus barcha ichki hadlarning ishorasini o'zgartiradi.",
        ],
        formula: "a(x + b) = c  →  x = c/a − b",
        example: {
          problem: "2(x + 3) = 14 tenglamani yeching.",
          steps: [
            "Ikkala tomonni 2 ga bo'lamiz: x + 3 = 7",
            "x = 7 − 3",
            "x = 4",
          ],
        },
        tip: "Qavsni ochishdan oldin uni qisqartirish imkoniyatini qidiring — hisoblash soddalashadi.",
      },
    ],
  },
]

export const allLessons = topics.flatMap((topic) =>
  topic.lessons.map((lesson) => ({ ...lesson, topicId: topic.id, topicTitle: topic.title })),
)

export const totalLessons = allLessons.length
