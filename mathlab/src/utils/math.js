const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pick = (list) => list[randInt(0, list.length - 1)]

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b))

const fmt = (value) => String(Math.round(value * 100) / 100).replace(".", ",")

function fraction(numerator, denominator) {
  if (denominator < 0) {
    numerator = -numerator
    denominator = -denominator
  }
  const divisor = gcd(numerator, denominator) || 1
  const n = numerator / divisor
  const d = denominator / divisor
  return d === 1 ? String(n) : `${n}/${d}`
}

function linear(coefficient, constant) {
  let result =
    coefficient === 1 ? "x" : coefficient === -1 ? "-x" : `${coefficient}x`
  if (constant !== 0) {
    result += constant > 0 ? `+${constant}` : `-${Math.abs(constant)}`
  }
  return result
}

export function parseNumber(value) {
  if (typeof value === "number") return value
  const clean = String(value ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[−–]/g, "-")
    .replace(",", ".")
  if (!clean) return NaN
  if (clean.includes("/")) {
    const [a, b] = clean.split("/")
    const numerator = Number(a)
    const denominator = Number(b)
    if (!Number.isFinite(numerator) || !denominator) return NaN
    return numerator / denominator
  }
  return Number(clean)
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[−–]/g, "-")
    .replace(/\*/g, "")
    .replace(/^\+/, "")
}

export function isCorrect(question, value) {
  if (question.answerType === "text") {
    const given = normalizeText(value)
    return [question.answer, ...(question.accept || [])].some(
      (item) => normalizeText(item) === given,
    )
  }
  const given = parseNumber(value)
  if (!Number.isFinite(given)) return false
  const expected = Number(question.answer)
  return Math.abs(given - expected) <= Math.max(0.011, Math.abs(expected) * 0.001)
}

function arithmetic(level) {
  if (level === "oson") {
    const type = randInt(1, 4)
    if (type === 1) {
      const a = randInt(6, 40)
      const b = randInt(6, 40)
      return {
        text: `${a} + ${b} = ?`,
        answer: a + b,
        answerLabel: String(a + b),
        hint: "Sonlarni ustun usulida qo'shib ko'ring.",
        solution: `${a} + ${b} = ${a + b}`,
      }
    }
    if (type === 2) {
      const a = randInt(25, 80)
      const b = randInt(5, a - 5)
      return {
        text: `${a} − ${b} = ?`,
        answer: a - b,
        answerLabel: String(a - b),
        hint: "Ayirishni ustun usulida bajaring.",
        solution: `${a} − ${b} = ${a - b}`,
      }
    }
    if (type === 3) {
      const a = randInt(2, 9)
      const b = randInt(2, 9)
      return {
        text: `${a} × ${b} = ?`,
        answer: a * b,
        answerLabel: String(a * b),
        hint: "Ko'paytirish jadvalini eslang.",
        solution: `${a} × ${b} = ${a * b}`,
      }
    }
    const b = randInt(2, 9)
    const q = randInt(2, 9)
    const a = b * q
    return {
      text: `${a} ÷ ${b} = ?`,
      answer: q,
      answerLabel: String(q),
      hint: `“${b} ni nechaga ko'paytirsam ${a} bo'ladi?” deb o'ylang.`,
      solution: `${a} ÷ ${b} = ${q}`,
    }
  }

  if (level === "o'rta") {
    const type = randInt(1, 4)
    if (type === 1) {
      const a = randInt(12, 25)
      const b = randInt(3, 9)
      return {
        text: `${a} × ${b} = ?`,
        answer: a * b,
        answerLabel: String(a * b),
        hint: "Sonni o'nlik va birlik qismlarga ajratib ko'paytiring.",
        solution: `${a} × ${b} = ${a * b}`,
      }
    }
    if (type === 2) {
      const a = randInt(3, 9)
      const b = randInt(3, 9)
      const c = randInt(5, 30)
      return {
        text: `${a} × ${b} + ${c} = ?`,
        answer: a * b + c,
        answerLabel: String(a * b + c),
        hint: "Avval ko'paytirishni, keyin qo'shishni bajaring.",
        solution: `${a} × ${b} = ${a * b}, undan keyin ${a * b} + ${c} = ${a * b + c}`,
      }
    }
    if (type === 3) {
      const a = randInt(3, 9)
      const b = randInt(2, 8)
      const c = randInt(2, 8)
      return {
        text: `${a} × (${b} + ${c}) = ?`,
        answer: a * (b + c),
        answerLabel: String(a * (b + c)),
        hint: "Avval qavs ichidagi amalni bajaring.",
        solution: `${b} + ${c} = ${b + c}, keyin ${a} × ${b + c} = ${a * (b + c)}`,
      }
    }
    const q = randInt(6, 15)
    const b = randInt(3, 9)
    const a = q * b
    return {
      text: `${a} ÷ ${b} = ?`,
      answer: q,
      answerLabel: String(q),
      hint: "Bo'lish - ko'paytirishga teskari amal.",
      solution: `${b} × ${q} = ${a}, demak ${a} ÷ ${b} = ${q}`,
    }
  }

  const type = randInt(1, 4)
  if (type === 1) {
    const a = randInt(11, 25)
    const b = randInt(10, 60)
    return {
      text: `${a}² − ${b} = ?`,
      answer: a * a - b,
      answerLabel: String(a * a - b),
      hint: "Avval kvadratni hisoblang.",
      solution: `${a}² = ${a * a}, keyin ${a * a} − ${b} = ${a * a - b}`,
    }
  }
  if (type === 2) {
    const a = randInt(5, 12)
    const b = randInt(3, 9)
    const c = randInt(2, 7)
    const d = randInt(5, 40)
    return {
      text: `(${a} + ${b}) × ${c} − ${d} = ?`,
      answer: (a + b) * c - d,
      answerLabel: String((a + b) * c - d),
      hint: "Qavs → ko'paytirish → ayirish tartibida yeching.",
      solution: `${a} + ${b} = ${a + b}, ${a + b} × ${c} = ${(a + b) * c}, ${(a + b) * c} − ${d} = ${(a + b) * c - d}`,
    }
  }
  if (type === 3) {
    const a = randInt(5, 15)
    const b = randInt(3, 9)
    const c = randInt(5, 15)
    const d = randInt(3, 9)
    return {
      text: `${a} × ${b} + ${c} × ${d} = ?`,
      answer: a * b + c * d,
      answerLabel: String(a * b + c * d),
      hint: "Ikki ko'paytmani alohida hisoblab, keyin qo'shing.",
      solution: `${a} × ${b} = ${a * b}; ${c} × ${d} = ${c * d}; ${a * b} + ${c * d} = ${a * b + c * d}`,
    }
  }
  const a = randInt(2, 9)
  return {
    text: `${a}³ = ?`,
    answer: a ** 3,
    answerLabel: String(a ** 3),
    hint: "Sonni uch marta o'ziga ko'paytiring.",
    solution: `${a} × ${a} × ${a} = ${a ** 3}`,
  }
}

function fractions(level) {
  if (level === "oson") {
    const denominator = randInt(4, 12)
    if (randInt(1, 2) === 1) {
      const n1 = randInt(1, denominator - 2)
      const n2 = randInt(1, denominator - n1)
      const total = n1 + n2
      return {
        text: `${n1}/${denominator} + ${n2}/${denominator} = ?`,
        answer: total / denominator,
        answerLabel: fraction(total, denominator),
        placeholder: "Masalan: 3/4",
        hint: "Maxrajlar bir xil bo'lsa, suratlarni qo'shamiz.",
        solution: `Suratlar qo'shiladi: ${n1} + ${n2} = ${total}. Natija: ${total}/${denominator} = ${fraction(total, denominator)}`,
      }
    }
    const total = randInt(3, denominator)
    const n2 = randInt(1, total - 1)
    const result = total - n2
    return {
      text: `${total}/${denominator} − ${n2}/${denominator} = ?`,
      answer: result / denominator,
      answerLabel: fraction(result, denominator),
      placeholder: "Masalan: 3/4",
      hint: "Maxrajlar bir xil bo'lsa, suratlarni ayiramiz.",
      solution: `Suratlar ayiriladi: ${total} − ${n2} = ${result}. Natija: ${result}/${denominator} = ${fraction(result, denominator)}`,
    }
  }

  if (level === "o'rta") {
    const denominators = [2, 3, 4, 5, 6, 8]
    let d1 = pick(denominators)
    let d2 = pick(denominators)
    while (d1 === d2) d2 = pick(denominators)
    let n1 = randInt(1, d1 - 1)
    let n2 = randInt(1, d2 - 1)
    const add = randInt(1, 2) === 1
    if (!add && n1 / d1 <= n2 / d2) {
      ;[n1, n2] = [n2, n1]
      ;[d1, d2] = [d2, d1]
    }
    const divisor = (d1 * d2) / gcd(d1, d2)
    const a1 = n1 * (divisor / d1)
    const a2 = n2 * (divisor / d2)
    const raw = add ? a1 + a2 : a1 - a2
    return {
      text: `${n1}/${d1} ${add ? "+" : "−"} ${n2}/${d2} = ?`,
      answer: raw / divisor,
      answerLabel: fraction(raw, divisor),
      placeholder: "Masalan: 5/6",
      hint: `Umumiy maxraj: ${divisor}.`,
      solution: `Umumiy maxraj ${divisor}: ${n1}/${d1} = ${a1}/${divisor}, ${n2}/${d2} = ${a2}/${divisor}. Natija: ${raw}/${divisor} = ${fraction(raw, divisor)}`,
    }
  }

  const denominators = [2, 3, 4, 5, 6, 8]
  const d1 = pick(denominators)
  const d2 = pick(denominators)
  const n1 = randInt(1, d1 - 1)
  const n2 = randInt(1, d2 - 1)
  const multiply = randInt(1, 2) === 1
  const result = multiply ? (n1 * n2) / (d1 * d2) : (n1 * d2) / (d1 * n2)
  const label = multiply
    ? fraction(n1 * n2, d1 * d2)
    : fraction(n1 * d2, d1 * n2)
  return {
    text: `${n1}/${d1} ${multiply ? "×" : "÷"} ${n2}/${d2} = ?`,
    answer: result,
    answerLabel: label,
    placeholder: "Masalan: 3/8",
    hint: multiply
      ? "Suratni suratga, maxrajni maxrajga ko'paytiring."
      : "Ikkinchi kasrni teskari qilib, ko'paytiring.",
    solution: multiply
      ? `(${n1} × ${n2}) / (${d1} × ${d2}) = ${n1 * n2}/${d1 * d2} = ${label}`
      : `${n1}/${d1} × ${d2}/${n2} = ${n1 * d2}/${d1 * n2} = ${label}`,
  }
}

function percentages(level) {
  if (level === "oson") {
    const number = randInt(2, 20) * 10
    const percent = pick([10, 20, 25, 50])
    const answer = (number * percent) / 100
    return {
      text: `${number} ning ${percent}% i nechaga teng?`,
      answer,
      answerLabel: fmt(answer),
      hint: `${percent}% = ${percent}/100.`,
      solution: `${number} × ${percent}/100 = ${fmt(answer)}`,
    }
  }

  if (level === "o'rta") {
    const price = randInt(20, 60) * 5000
    const percent = pick([10, 20, 25, 30])
    const answer = price * (1 - percent / 100)
    return {
      text: `Narx ${price.toLocaleString("ru-RU")} so'm. ${percent}% chegirmadan keyin narx qancha bo'ladi?`,
      answer,
      answerLabel: fmt(answer),
      hint: `Chegirma: ${price} × ${percent}/100 = ${fmt((price * percent) / 100)}`,
      solution: `Chegirma: ${price} × ${percent}/100 = ${fmt((price * percent) / 100)}. Yangi narx: ${price} − ${fmt((price * percent) / 100)} = ${fmt(answer)}`,
    }
  }

  if (randInt(1, 2) === 1) {
    const start = randInt(10, 30) * 20
    const percent = pick([10, 15, 20, 25])
    const result = start * (1 + percent / 100)
    return {
      text: `Son ${percent}% ga oshirilgach ${fmt(result)} bo'ldi. Dastlabki sonni toping.`,
      answer: start,
      answerLabel: fmt(start),
      hint: "Yangi son dastlabki sonning (100 + foiz)% ini tashkil qiladi.",
      solution: `Dastlabki sonni x deb olamiz: x × ${(100 + percent) / 100} = ${fmt(result)}. x = ${fmt(result)} ÷ ${(100 + percent) / 100} = ${fmt(start)}`,
    }
  }

  const part = randInt(3, 20) * 5
  const whole = part * pick([2, 3, 4])
  const answer = (part / whole) * 100
  return {
    text: `${part} soni ${whole} ning necha foizi?`,
    answer,
    answerLabel: `${fmt(answer)}%`,
    hint: "Foiz = (qism ÷ butun) × 100.",
    solution: `(${part} ÷ ${whole}) × 100 = ${fmt(answer)}%`,
  }
}

function algebra(level) {
  if (level === "oson") {
    const a = randInt(2, 9)
    const x = randInt(2, 9)
    const b = randInt(1, 20)
    return {
      text: `x = ${x} bo'lsa, ${a}x + ${b} ifodaning qiymatini toping.`,
      answer: a * x + b,
      answerLabel: String(a * x + b),
      hint: "x o'rniga berilgan sonni qo'ying.",
      solution: `${a} × ${x} + ${b} = ${a * x} + ${b} = ${a * x + b}`,
    }
  }

  if (level === "o'rta") {
    const a = randInt(4, 9)
    const c = randInt(1, a - 1)
    const b = randInt(3, 15)
    const d = randInt(1, 15)
    const coefficient = a - c
    const constant = b + d
    const answer = linear(coefficient, constant)
    return {
      text: `${a}x + ${b} − ${c}x + ${d} ni ixchamlang.`,
      answer,
      answerType: "text",
      accept: [answer.replace("+", " + ")],
      placeholder: "Masalan: 3x+7",
      hint: "x li hadlarni alohida, sonlarni alohida hisoblang.",
      solution: `x li hadlar: ${a}x − ${c}x = ${coefficient}x. Sonlar: ${b} + ${d} = ${constant}. Natija: ${answer}`,
    }
  }

  const a = randInt(3, 6)
  const c = randInt(1, a - 1)
  const b = randInt(2, 6)
  const d = randInt(1, 6)
  const coefficient = a - c
  const constant = a * b - c * d
  const answer = linear(coefficient, constant)
  return {
    text: `${a}(x + ${b}) − ${c}(x + ${d}) ni ixchamlang.`,
    answer,
    answerType: "text",
    placeholder: "Masalan: 2x-4",
    hint: "Qavslarni oching, so'ng o'xshash hadlarni ixchamlang.",
    solution: `Qavslar: ${a}x + ${a * b} − ${c}x − ${c * d}. x li hadlar: ${a}x − ${c}x = ${coefficient}x. Sonlar: ${a * b} − ${c * d} = ${constant}. Natija: ${answer}`,
  }
}

function geometry(level) {
  if (level === "oson") {
    if (randInt(1, 2) === 1) {
      const a = randInt(3, 15)
      const b = randInt(3, 15)
      return {
        text: `Tomonlari ${a} sm va ${b} sm bo'lgan to'g'ri to'rtburchakning yuzini toping (sm²).`,
        answer: a * b,
        answerLabel: `${a * b} sm²`,
        hint: "Yuza = uzunlik × kenglik.",
        solution: `S = ${a} × ${b} = ${a * b} sm²`,
      }
    }
    const a = randInt(3, 15)
    return {
      text: `Tomoni ${a} sm bo'lgan kvadratning perimetrini toping (sm).`,
      answer: 4 * a,
      answerLabel: `${4 * a} sm`,
      hint: "Kvadratning 4 ta teng tomoni bor.",
      solution: `P = 4 × ${a} = ${4 * a} sm`,
    }
  }

  if (level === "o'rta") {
    const type = randInt(1, 3)
    if (type === 1) {
      const base = randInt(4, 20)
      const height = randInt(3, 15)
      const answer = (base * height) / 2
      return {
        text: `Asosi ${base} sm, balandligi ${height} sm bo'lgan uchburchakning yuzini toping (sm²).`,
        answer,
        answerLabel: `${fmt(answer)} sm²`,
        hint: "Uchburchak yuzi = (asos × balandlik) ÷ 2.",
        solution: `S = (${base} × ${height}) ÷ 2 = ${fmt(answer)} sm²`,
      }
    }
    if (type === 2) {
      const base = randInt(4, 20)
      const height = randInt(3, 15)
      return {
        text: `Asosi ${base} sm, balandligi ${height} sm bo'lgan parallelogrammning yuzini toping (sm²).`,
        answer: base * height,
        answerLabel: `${base * height} sm²`,
        hint: "Parallelogramm yuzi = asos × balandlik.",
        solution: `S = ${base} × ${height} = ${base * height} sm²`,
      }
    }
    const a = randInt(4, 20)
    const b = randInt(4, 20)
    return {
      text: `Tomonlari ${a} sm va ${b} sm bo'lgan to'g'ri to'rtburchakning perimetrini toping (sm).`,
      answer: 2 * (a + b),
      answerLabel: `${2 * (a + b)} sm`,
      hint: "Perimetr = 2 × (uzunlik + kenglik).",
      solution: `P = 2 × (${a} + ${b}) = ${2 * (a + b)} sm`,
    }
  }

  const type = randInt(1, 3)
  if (type === 1) {
    const radius = randInt(2, 10)
    const answer = 3.14 * radius * radius
    return {
      text: `Radiusi ${radius} sm bo'lgan aylana yuzini toping (π = 3,14).`,
      answer,
      answerLabel: `${fmt(answer)} sm²`,
      hint: "Aylana yuzi = πr².",
      solution: `S = 3,14 × ${radius}² = 3,14 × ${radius * radius} = ${fmt(answer)} sm²`,
    }
  }
  if (type === 2) {
    const radius = randInt(2, 10)
    const answer = 2 * 3.14 * radius
    return {
      text: `Radiusi ${radius} sm bo'lgan aylananing uzunligini toping (π = 3,14).`,
      answer,
      answerLabel: `${fmt(answer)} sm`,
      hint: "Aylana uzunligi = 2πr.",
      solution: `C = 2 × 3,14 × ${radius} = ${fmt(answer)} sm`,
    }
  }
  const a = randInt(30, 80)
  const b = randInt(30, 180 - a - 20)
  const answer = 180 - a - b
  return {
    text: `Uchburchakning ikki burchagi ${a}° va ${b}°. Uchinchi burchakni toping.`,
    answer,
    answerLabel: `${answer}°`,
    hint: "Uchburchak burchaklari yig'indisi 180°.",
    solution: `180° − ${a}° − ${b}° = ${answer}°`,
  }
}

function equations(level) {
  if (level === "oson") {
    if (randInt(1, 2) === 1) {
      const x = randInt(2, 20)
      const a = randInt(2, 20)
      return {
        text: `x + ${a} = ${x + a}. x ni toping.`,
        answer: x,
        answerLabel: String(x),
        hint: "Qo'shilayotgan sonni tenglikning narigi tomoniga o'tkazing.",
        solution: `x = ${x + a} − ${a} = ${x}`,
      }
    }
    const a = randInt(2, 9)
    const x = randInt(2, 12)
    return {
      text: `${a}x = ${a * x}. x ni toping.`,
      answer: x,
      answerLabel: String(x),
      hint: `Ikkala tomonni ${a} ga bo'ling.`,
      solution: `x = ${a * x} ÷ ${a} = ${x}`,
    }
  }

  if (level === "o'rta") {
    const type = randInt(1, 2)
    const a = randInt(2, 9)
    const x = randInt(2, 12)
    if (type === 1) {
      const b = randInt(1, 20)
      return {
        text: `${a}x + ${b} = ${a * x + b}. x ni toping.`,
        answer: x,
        answerLabel: String(x),
        hint: `Avval ${b} ni narigi tomonga o'tkazing.`,
        solution: `${a}x = ${a * x + b} − ${b} = ${a * x}; x = ${a * x} ÷ ${a} = ${x}`,
      }
    }
    const b = randInt(2, Math.min(15, a * x - 1))
    const c = a * x - b
    return {
      text: `${a}x − ${b} = ${c}. x ni toping.`,
      answer: x,
      answerLabel: String(x),
      hint: `${b} ni qo'shib, keyin ${a} ga bo'ling.`,
      solution: `${a}x = ${c} + ${b} = ${a * x}; x = ${a * x} ÷ ${a} = ${x}`,
    }
  }

  const type = randInt(1, 2)
  if (type === 1) {
    const a = randInt(3, 9)
    const c = randInt(1, a - 1)
    const x = randInt(2, 10)
    const b = randInt(1, 15)
    const d = (a - c) * x + b
    return {
      text: `${a}x + ${b} = ${c}x + ${d}. x ni toping.`,
      answer: x,
      answerLabel: String(x),
      hint: "x li hadlarni bir tomonga, sonlarni boshqa tomonga yig'ing.",
      solution: `${a}x − ${c}x = ${d} − ${b}; ${a - c}x = ${(a - c) * x}; x = ${(a - c) * x} ÷ ${a - c} = ${x}`,
    }
  }
  const a = randInt(2, 9)
  const x = randInt(2, 12)
  const b = randInt(1, 10)
  return {
    text: `${a}(x + ${b}) = ${a * (x + b)}. x ni toping.`,
    answer: x,
    answerLabel: String(x),
    hint: `Avval ikkala tomonni ${a} ga bo'ling.`,
    solution: `x + ${b} = ${a * (x + b)} ÷ ${a} = ${x + b}; x = ${x + b} − ${b} = ${x}`,
  }
}

const generators = {
  arifmetika: arithmetic,
  kasrlar: fractions,
  foizlar: percentages,
  algebra: algebra,
  geometriya: geometry,
  tenglamalar: equations,
}

export const levels = [
  { id: "oson", label: "Oson" },
  { id: "o'rta", label: "O'rta" },
  { id: "qiyin", label: "Qiyin" },
]

export function generateQuestion(topicId, level = "oson") {
  const generator = generators[topicId] || arithmetic
  return {
    topicId,
    level,
    answerType: "number",
    placeholder: "Javobingizni yozing...",
    ...generator(level),
  }
}
