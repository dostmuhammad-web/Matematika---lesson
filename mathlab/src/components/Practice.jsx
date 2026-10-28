import { useState } from "react"
import { topics } from "../data/topics"
import { generateQuestion, isCorrect, levels } from "../utils/math"

const fallbackTopic = topics[0].id

export default function Practice({ initialTopic, onCorrect }) {
  const startTopic = topics.some((topic) => topic.id === initialTopic)
    ? initialTopic
    : fallbackTopic

  const [topicId, setTopicId] = useState(startTopic)
  const [level, setLevel] = useState("oson")
  const [question, setQuestion] = useState(() =>
    generateQuestion(startTopic, "oson"),
  )
  const [value, setValue] = useState("")
  const [status, setStatus] = useState("idle")
  const [showHint, setShowHint] = useState(false)
  const [stats, setStats] = useState({ correct: 0, total: 0 })
  const [combo, setCombo] = useState(0)

  const topic = topics.find((item) => item.id === topicId) || topics[0]
  const levelLabel = levels.find((item) => item.id === level)?.label || "Oson"
  const accuracy = stats.total
    ? Math.round((stats.correct / stats.total) * 100)
    : 0

  function resetQuestion(nextTopicId, nextLevel) {
    setQuestion(generateQuestion(nextTopicId, nextLevel))
    setValue("")
    setStatus("idle")
    setShowHint(false)
  }

  function changeTopic(nextTopicId) {
    setTopicId(nextTopicId)
    setStats({ correct: 0, total: 0 })
    setCombo(0)
    resetQuestion(nextTopicId, level)
  }

  function changeLevel(nextLevel) {
    setLevel(nextLevel)
    setStats({ correct: 0, total: 0 })
    setCombo(0)
    resetQuestion(topicId, nextLevel)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (status !== "idle" || !value.trim()) return

    const correct = isCorrect(question, value)
    setStatus(correct ? "correct" : "wrong")
    setStats((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }))
    if (correct) {
      setCombo((prev) => prev + 1)
      onCorrect()
    } else {
      setCombo(0)
    }
  }

  function nextQuestion() {
    resetQuestion(topicId, level)
  }

  function resetSession() {
    setStats({ correct: 0, total: 0 })
    setCombo(0)
    resetQuestion(topicId, level)
  }

  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">Mashqlar</span>
        <h1 className="page-title">Hisoblashni mashq qiling</h1>
        <p className="section-sub">
          Mavzu va qiyinlikni tanlang. Har bir to'g'ri javob uchun +2 XP olasiz.
        </p>
      </div>

      <div className="practice-grid">
        <section className="question-card">
          <div className="chip-row" aria-label="Mavzuni tanlash">
            {topics.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chip ${topicId === item.id ? "active" : ""}`}
                style={{ "--topic": item.color }}
                onClick={() => changeTopic(item.id)}
              >
                <span aria-hidden="true">{item.symbol}</span>
                {item.title}
              </button>
            ))}
          </div>

          <div className="practice-toolbar">
            <div className="segmented" role="group" aria-label="Qiyinlik darajasi">
              {levels.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`seg-btn ${level === item.id ? "active" : ""}`}
                  onClick={() => changeLevel(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span className="question-topic" style={{ "--topic": topic.color }}>
              {topic.symbol} {topic.title} · {levelLabel}
            </span>
          </div>

          <div className="question-body">
            <p className="question-text">{question.text}</p>

            <form className="answer-row" onSubmit={handleSubmit}>
              <input
                className="answer-input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={question.placeholder}
                disabled={status !== "idle"}
                autoComplete="off"
                aria-label="Javobingiz"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status !== "idle" || !value.trim()}
              >
                Tekshirish
              </button>
            </form>

            <div className="question-tools">
              <button
                type="button"
                className="hint-btn"
                onClick={() => setShowHint((prev) => !prev)}
              >
                {showHint ? "Maslahatni yashirish" : "Maslahat kerakmi?"}
              </button>
              <span className="input-note">
                Kasrlarni 3/4 ko'rinishida kiriting
              </span>
            </div>

            {showHint && <div className="hint-box">{question.hint}</div>}

            <div aria-live="polite">
              {status === "correct" && (
                <div className="feedback correct">
                  <strong>To'g'ri javob! +2 XP</strong>
                  <p>{question.solution}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextQuestion}
                  >
                    Keyingi savol →
                  </button>
                </div>
              )}
              {status === "wrong" && (
                <div className="feedback wrong">
                  <strong>
                    Xato. To'g'ri javob: {question.answerLabel}
                  </strong>
                  <p>{question.solution}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextQuestion}
                  >
                    Keyingi savol →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <aside className="practice-side">
          <div className="side-card">
            <h2>Bu sessiya</h2>
            <div className="mini-stats">
              <div>
                <strong>{stats.correct}</strong>
                <span>to'g'ri</span>
              </div>
              <div>
                <strong>{stats.total}</strong>
                <span>savol</span>
              </div>
              <div>
                <strong>{accuracy}%</strong>
                <span>aniqlik</span>
              </div>
            </div>
            <div className="combo-line">
              <span>Ketma-ket to'g'ri:</span>
              <strong>{combo}</strong>
            </div>
            <button type="button" className="btn btn-ghost full" onClick={resetSession}>
              Sessiyani noldan boshlash
            </button>
          </div>

          <div className="side-card tip-side" style={{ "--topic": topic.color }}>
            <h2>Eslatma</h2>
            <p>{topic.description}</p>
            <p className="side-tip">
              {topic.id === "kasrlar"
                ? "Natijani ixchamlang: 4/8 o'rniga 1/2 yozish to'g'riroq. Ikkalasi ham qabul qilinadi."
                : "Javobni tekshirishdan oldin qadamlarni qog'ozga yozib chiqing — xatoni topish osonlashadi."}
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
