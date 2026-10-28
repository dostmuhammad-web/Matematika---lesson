import { useState } from "react"
import { topics } from "../data/topics"

export default function Lessons({
  progress,
  selectedTopic,
  onSelectTopic,
  onCompleteLesson,
  onPracticeTopic,
}) {
  const [openLesson, setOpenLesson] = useState(null)
  const topic = topics.find((item) => item.id === selectedTopic)

  if (!topic) {
    return (
      <div className="page">
        <div className="page-head">
          <span className="eyebrow">Darslar</span>
          <h1 className="page-title">Mavzularni tanlang</h1>
          <p className="section-sub">
            Har bir bo'limda qisqa nazariya, formula va yechilgan misollar bor.
            Darsni tugatganingizda +10 XP olasiz.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((item) => {
            const done = item.lessons.filter((lesson) =>
              progress.completed.includes(lesson.id),
            ).length
            const percent = Math.round((done / item.lessons.length) * 100)
            return (
              <button
                key={item.id}
                type="button"
                className="topic-card"
                style={{ "--topic": item.color }}
                onClick={() => onSelectTopic(item.id)}
              >
                <span className="topic-top">
                  <span className="topic-symbol" aria-hidden="true">
                    {item.symbol}
                  </span>
                  <span className="pill">{item.tag}</span>
                </span>
                <span className="topic-title">{item.title}</span>
                <span className="topic-desc">{item.description}</span>
                <span className="topic-meta">
                  <span>
                    {done}/{item.lessons.length} dars tugatildi
                  </span>
                  <span>{percent}%</span>
                </span>
                <span className="bar">
                  <span className="bar-fill" style={{ width: `${percent}%` }} />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const done = topic.lessons.filter((lesson) =>
    progress.completed.includes(lesson.id),
  ).length
  const percent = Math.round((done / topic.lessons.length) * 100)

  return (
    <div className="page">
      <button
        type="button"
        className="back-btn"
        onClick={() => onSelectTopic(null)}
      >
        <span aria-hidden="true">←</span> Barcha mavzular
      </button>

      <header className="topic-header" style={{ "--topic": topic.color }}>
        <span className="topic-header-symbol" aria-hidden="true">
          {topic.symbol}
        </span>
        <div className="topic-header-copy">
          <div className="topic-header-top">
            <h1 className="page-title">{topic.title}</h1>
            <span className="pill">{topic.tag}</span>
          </div>
          <p className="section-sub">{topic.description}</p>
          <div className="topic-header-progress">
            <span className="bar">
              <span className="bar-fill" style={{ width: `${percent}%` }} />
            </span>
            <span className="topic-progress-text">
              {done}/{topic.lessons.length} dars · {percent}%
            </span>
          </div>
        </div>
      </header>

      <div className="lesson-list">
        {topic.lessons.map((lesson, index) => {
          const isOpen = openLesson === lesson.id
          const isDone = progress.completed.includes(lesson.id)
          return (
            <article
              key={lesson.id}
              className={`lesson-card ${isOpen ? "open" : ""} ${isDone ? "done" : ""}`}
            >
              <button
                type="button"
                className="lesson-head"
                aria-expanded={isOpen}
                onClick={() => setOpenLesson(isOpen ? null : lesson.id)}
              >
                <span className="lesson-num" aria-hidden="true">
                  {isDone ? "✓" : index + 1}
                </span>
                <span className="lesson-head-text">
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="lesson-meta">
                    {lesson.duration} · {isDone ? "Tugatilgan" : "Yangi dars"}
                  </span>
                </span>
                <span className={`lesson-chevron ${isOpen ? "open" : ""}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="lesson-body">
                  <div className="lesson-block">
                    <h3>Nazariya</h3>
                    <ul className="theory-list">
                      {lesson.theory.map((paragraph) => (
                        <li key={paragraph}>{paragraph}</li>
                      ))}
                    </ul>
                  </div>

                  {lesson.formula && (
                    <div className="formula" aria-label="Asosiy formula">
                      {lesson.formula}
                    </div>
                  )}

                  <div className="example-box">
                    <h3>Misol</h3>
                    <p className="example-problem">{lesson.example.problem}</p>
                    <ol className="example-steps">
                      {lesson.example.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="tip-box">
                    <span className="tip-label">Maslahat</span>
                    <p>{lesson.tip}</p>
                  </div>

                  <div className="lesson-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={isDone}
                      onClick={() => onCompleteLesson(lesson.id)}
                    >
                      {isDone ? "Tugatilgan ✓" : "Tugatdim, +10 XP"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => onPracticeTopic(topic.id)}
                    >
                      Mashq qilish
                    </button>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
