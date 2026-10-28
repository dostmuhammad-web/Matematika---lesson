import { useState } from "react"
import { topics, totalLessons } from "../data/topics"
import { generateQuestion, isCorrect } from "../utils/math"
import { levelFromXp } from "../utils/progress"

const features = [
  {
    icon: "01",
    title: "Qadam-baqadam darslar",
    text: "Har bir mavzu nazariya, formula va yechilgan misollar bilan tushuntirilgan.",
  },
  {
    icon: "∞",
    title: "Cheksiz mashqlar",
    text: "Savollar cheksiz generatsiya qilinadi — yodlab olish emas, tushunish muhim.",
  },
  {
    icon: "10",
    title: "10 savolli testlar",
    text: "Bilimingizni taymer bilan sinab ko'ring va har bir xatoni tahlil qiling.",
  },
  {
    icon: "↑",
    title: "Natijalar saqlanadi",
    text: "XP, daraja va kunlik seriya brauzerda saqlanadi — progressni kuzatib boring.",
  },
]

export default function Home({
  progress,
  onNavigate,
  onOpenTopic,
  onPracticeTopic,
  onAward,
}) {
  const [challenge] = useState(() => {
    const topic = topics[Math.floor(Math.random() * topics.length)]
    return { topic, question: generateQuestion(topic.id, "o'rta") }
  })
  const [value, setValue] = useState("")
  const [status, setStatus] = useState("idle")

  const level = levelFromXp(progress.xp)

  function checkChallenge(event) {
    event.preventDefault()
    if (status !== "idle" || !value.trim()) return
    if (isCorrect(challenge.question, value)) {
      setStatus("correct")
      onAward(5)
    } else {
      setStatus("wrong")
    }
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Interaktiv matematika platformasi
          </span>
          <h1 className="hero-title">
            Matematikani <span className="gradient-text">osongina</span> o'rganing
          </h1>
          <p className="hero-sub">
            Nazariya, mashq va testlar — hammasi bir joyda. Har kuni 10 daqiqa
            vaqt ajratib, matematikani mustahkam o'zlashtiring.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate("lessons")}
            >
              Darslarni boshlash
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => onNavigate("practice")}
            >
              Mashq qilish
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <strong>{totalLessons}</strong>
              <span>dars</span>
            </div>
            <div>
              <strong>6</strong>
              <span>mavzu</span>
            </div>
            <div>
              <strong>{progress.solved || 0}</strong>
              <span>yechilgan mashq</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <span className="float-symbol s1">π</span>
          <span className="float-symbol s2">√</span>
          <span className="float-symbol s3">∞</span>
          <span className="float-symbol s4">%</span>
          <div className="board">
            <div className="board-head">
              <span className="board-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="board-title">bugungi formula</span>
            </div>
            <div className="board-rows">
              <div className="board-row">
                <span>12 + 3 × 4</span>
                <span className="board-result">= 24</span>
              </div>
              <div className="board-row">
                <span>(a + b)²</span>
                <span className="board-result small">a² + 2ab + b²</span>
              </div>
              <div className="board-row">
                <span>3/4 + 1/2</span>
                <span className="board-result">= 5/4</span>
              </div>
              <div className="board-row">
                <span>√144</span>
                <span className="board-result">= 12</span>
              </div>
            </div>
            <div className="board-footer">
              <span>MathLab</span>
              <span>o'rgan · mashq qil · takrorla</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Sizning natijalaringiz">
        <div className="stat-card">
          <span className="stat-label">Tajriba balli</span>
          <span className="stat-value">{progress.xp} XP</span>
          <span className="stat-note">Har bir to'g'ri javob uchun ball</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Daraja</span>
          <span className="stat-value">Level {level}</span>
          <span className="stat-note">{100 - (progress.xp % 100)} XP keyingi darajagacha</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Tugatilgan darslar</span>
          <span className="stat-value">
            {progress.completed.length}/{totalLessons}
          </span>
          <span className="stat-note">Nazariyani o'rganib, belgilang</span>
        </div>
        <div className="stat-card accent">
          <span className="stat-label">Kunlik seriya</span>
          <span className="stat-value">{progress.streak || 0} kun</span>
          <span className="stat-note">Har kuni mashq qilib seriyani davom ettiring</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Dastur</span>
            <h2 className="section-title">Matematika bo'limlari</h2>
            <p className="section-sub">
              Asoslardan boshlab, murakkabroq mavzularga bosqichma-bosqich o'ting.
            </p>
          </div>
        </div>
        <div className="topics-grid">
          {topics.map((topic) => {
            const done = topic.lessons.filter((lesson) =>
              progress.completed.includes(lesson.id),
            ).length
            const percent = Math.round((done / topic.lessons.length) * 100)
            return (
              <button
                key={topic.id}
                type="button"
                className="topic-card"
                style={{ "--topic": topic.color }}
                onClick={() => onOpenTopic(topic.id)}
              >
                <span className="topic-top">
                  <span className="topic-symbol" aria-hidden="true">
                    {topic.symbol}
                  </span>
                  <span className="pill">{topic.tag}</span>
                </span>
                <span className="topic-title">{topic.title}</span>
                <span className="topic-desc">{topic.description}</span>
                <span className="topic-meta">
                  <span>{topic.lessons.length} dars</span>
                  <span>{percent}%</span>
                </span>
                <span className="bar">
                  <span className="bar-fill" style={{ width: `${percent}%` }} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="daily-card">
          <div className="daily-copy">
            <span className="eyebrow">Kunlik mashq</span>
            <h2 className="section-title">Bugungi savolga javob bering</h2>
            <p className="section-sub">
              To'g'ri javob uchun +5 XP oling. Mavzu:{" "}
              <strong>{challenge.topic.title}</strong>
            </p>
            <div className="daily-question">
              <span
                className="topic-symbol"
                style={{ "--topic": challenge.topic.color }}
                aria-hidden="true"
              >
                {challenge.topic.symbol}
              </span>
              <span>{challenge.question.text}</span>
            </div>
            <form className="answer-row" onSubmit={checkChallenge}>
              <input
                className="answer-input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={challenge.question.placeholder}
                disabled={status !== "idle"}
                autoComplete="off"
                aria-label="Kunlik savolga javob"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status !== "idle" || !value.trim()}
              >
                Tekshirish
              </button>
            </form>
            {status === "correct" && (
              <p className="inline-feedback correct">
                To'g'ri! +5 XP hisobingizga qo'shildi.
              </p>
            )}
            {status === "wrong" && (
              <p className="inline-feedback wrong">
                Xato. To'g'ri javob: <strong>{challenge.question.answerLabel}</strong>.{" "}
                {challenge.question.solution}
              </p>
            )}
          </div>
          <div className="daily-side">
            <span className="daily-badge">+5 XP</span>
            <p>
              Har kuni yangi savol. Seriyani uzmaslik uchun bugun ham mashq
              qiling.
            </p>
            <button
              type="button"
              className="btn btn-soft"
              onClick={() => onPracticeTopic(challenge.topic.id)}
            >
              Shu mavzuda mashq qilish
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Nega MathLab?</span>
            <h2 className="section-title">O'rganish uchun qulay muhit</h2>
          </div>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
