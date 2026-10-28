const questionBank = [
  {
    id: "q1",
    topic: "Arifmetika",
    question: "7 + 5 × 2 = ?",
    options: ["17", "24", "19", "12"],
    answer: 0,
    explanation: "Avval ko'paytirish: 5 × 2 = 10, keyin 7 + 10 = 17.",
  },
  {
    id: "q2",
    topic: "Arifmetika",
    question: "(12 − 4) ÷ 2 = ?",
    options: ["8", "4", "6", "2"],
    answer: 1,
    explanation: "Avval qavs: 12 − 4 = 8, keyin 8 ÷ 2 = 4.",
  },
  {
    id: "q3",
    topic: "Kasrlar",
    question: "3/4 + 1/4 = ?",
    options: ["1", "1/2", "7/8", "4/8"],
    answer: 0,
    explanation: "Maxrajlar bir xil: 3 + 1 = 4, natija 4/4 = 1.",
  },
  {
    id: "q4",
    topic: "Kasrlar",
    question: "1/2 + 1/3 = ?",
    options: ["2/5", "5/6", "1/6", "3/5"],
    answer: 1,
    explanation: "Umumiy maxraj 6: 3/6 + 2/6 = 5/6.",
  },
  {
    id: "q5",
    topic: "Foizlar",
    question: "0,25 soni foizda qanday yoziladi?",
    options: ["2,5%", "25%", "250%", "0,25%"],
    answer: 1,
    explanation: "0,25 × 100 = 25%, demak 0,25 = 25%.",
  },
  {
    id: "q6",
    topic: "Foizlar",
    question: "200 ning 15% i nechaga teng?",
    options: ["15", "30", "25", "45"],
    answer: 1,
    explanation: "200 × 15/100 = 30.",
  },
  {
    id: "q7",
    topic: "Foizlar",
    question:
      "80 000 so'mlik mahsulotga 25% chegirma berildi. Yangi narx qancha?",
    options: ["55 000", "60 000", "65 000", "72 000"],
    answer: 1,
    explanation: "Chegirma 20 000 so'm, yangi narx 80 000 − 20 000 = 60 000.",
  },
  {
    id: "q8",
    topic: "Algebra",
    question: "3x + 2x ni ixchamlang.",
    options: ["5x", "6x", "5x²", "x"],
    answer: 0,
    explanation: "O'xshash hadlar koeffitsiyentlari qo'shiladi: 3 + 2 = 5, natija 5x.",
  },
  {
    id: "q9",
    topic: "Algebra",
    question: "x = 4 bo'lsa, 2x + 7 ifodaning qiymati nechaga teng?",
    options: ["11", "15", "18", "9"],
    answer: 1,
    explanation: "2 × 4 + 7 = 8 + 7 = 15.",
  },
  {
    id: "q10",
    topic: "Tenglamalar",
    question: "2(x + 3) = 14 tenglamaning ildizini toping.",
    options: ["2", "4", "5", "7"],
    answer: 1,
    explanation: "x + 3 = 7, demak x = 7 − 3 = 4.",
  },
  {
    id: "q11",
    topic: "Tenglamalar",
    question: "3x − 5 = 10 tenglamaning ildizini toping.",
    options: ["3", "5", "15", "7"],
    answer: 1,
    explanation: "3x = 15, x = 15 ÷ 3 = 5.",
  },
  {
    id: "q12",
    topic: "Geometriya",
    question: "Tomonlari 6 sm va 4 sm bo'lgan to'g'ri to'rtburchakning yuzi qancha?",
    options: ["10 sm²", "20 sm²", "24 sm²", "12 sm²"],
    answer: 2,
    explanation: "S = 6 × 4 = 24 sm².",
  },
  {
    id: "q13",
    topic: "Geometriya",
    question: "Asosi 8 sm, balandligi 5 sm bo'lgan uchburchakning yuzi qancha?",
    options: ["40 sm²", "20 sm²", "13 sm²", "26 sm²"],
    answer: 1,
    explanation: "S = (8 × 5) ÷ 2 = 20 sm².",
  },
  {
    id: "q14",
    topic: "Geometriya",
    question: "Tomoni 7 sm bo'lgan kvadratning perimetri nechaga teng?",
    options: ["14 sm", "21 sm", "28 sm", "49 sm"],
    answer: 2,
    explanation: "P = 4 × 7 = 28 sm.",
  },
  {
    id: "q15",
    topic: "Geometriya",
    question: "Radiusi 5 sm bo'lgan aylananing yuzi qancha? (π = 3,14)",
    options: ["31,4 sm²", "78,5 sm²", "15,7 sm²", "157 sm²"],
    answer: 1,
    explanation: "S = 3,14 × 5² = 3,14 × 25 = 78,5 sm².",
  },
  {
    id: "q16",
    topic: "Arifmetika",
    question: "2³ + 3² = ?",
    options: ["17", "15", "13", "36"],
    answer: 0,
    explanation: "2³ = 8, 3² = 9, 8 + 9 = 17.",
  },
  {
    id: "q17",
    topic: "Arifmetika",
    question: "√144 nechaga teng?",
    options: ["11", "12", "14", "24"],
    answer: 1,
    explanation: "12² = 144, demak √144 = 12.",
  },
  {
    id: "q18",
    topic: "Geometriya",
    question:
      "Uchburchakning ikki burchagi 50° va 60°. Uchinchi burchak necha gradus?",
    options: ["60°", "70°", "80°", "110°"],
    answer: 1,
    explanation: "180° − 50° − 60° = 70°.",
  },
  {
    id: "q19",
    topic: "Kasrlar",
    question: "0,3 × 0,2 = ?",
    options: ["0,6", "0,06", "0,006", "6"],
    answer: 1,
    explanation: "3 × 2 = 6, o'nlik xonalar soni 2 ta: 0,06.",
  },
  {
    id: "q20",
    topic: "Foizlar",
    question: "15 soni 60 ning necha foizini tashkil qiladi?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 2,
    explanation: "(15 ÷ 60) × 100 = 0,25 × 100 = 25%.",
  },
]

function shuffle(list) {
  const result = [...list]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function makeQuiz(count = 10) {
  return shuffle(questionBank)
    .slice(0, count)
    .map((item) => {
      const options = shuffle(
        item.options.map((label, index) => ({
          label,
          correct: index === item.answer,
        })),
      )
      return {
        ...item,
        options: options.map((option) => option.label),
        answer: options.findIndex((option) => option.correct),
      }
    })
}
