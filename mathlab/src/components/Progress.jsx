import { topics, totalLessons } from "../data/topics"
import { formatDate, levelFromXp, xpInLevel } from "../utils/progress"

export default function Progress({ progress, onReset, onNavigate }) {
  const level = levelFromXp(progress.xp)
  const inLevel = xpInLevel(progress.xp)
  const quizzes = progress.quiz || []
  const best = quizzes.reduce(
    (max, item) =>
      Math.max(max, Math.round((item.score / Math.max(1, item.total)) * 100)),
    0,
  )
  const completedPercent = Math.round(
    (progress.completed.length / totalLessons) * 100,
  )

  function handleReset() {
    if (window.confirm("Barcha natijalar o'chiriladi. Davom etasizmi?")) {
      onReset()
    }
  }

  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">Natijalar</span>
        <h1 className="page-title">Sizning progressingiz</h1>
        <p className="section-sub">
          XP, tugatilgan darslar va test natijalari shu brauzerda saqlanadi.
        </p>
      </div>

      <section className="level-card">
        <div className="level-badge-box">
          <span className="level-label">Daraja</span>
          <span className="level-number">{level}</span>
          <span className="level-total">{progress.xp} XP jami</span>
        </div>
        <div className="level-info">
          <div className="level-row">
            <span>Keyingi darajaga</span>
            <strong>{100 - inLevel} XP</strong>
          </div>
          <div className="bar light">
            <span className="bar-fill" style={{ width: `${inLevel}%` }} />
          </div>
          <p className="level-note">
            {progress.streak > 1
              ? `Zo'r! ${progress.streak} kunlik seriya davom etmoqda.`
              : "Har kuni mashq qilib, kunlik seriyani boshlang."}
          </p>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Tugatilgan darslar</span>
          <span className="stat-value">
            {progress.completed.length}/{totalLessons}
          </span>
          <span className="stat-note">{completedPercent}% dastur bajarildi</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Yechilgan mashqlar</span>
          <span className="stat-value">{progress.solved || 0}</span>
          <span className="stat-note">Mashqlar sahifasidagi to'g'ri javoblar</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Topshirilgan testlar</span>
          <span className="stat-value">{quizzes.length}</span>
          <span className="stat-note">Har bir test 10 savoldan iborat</span>
        </div>
        <div className="stat-card accent">
          <span className="stat-label">Eng yaxshi natija</span>
          <span className="stat-value">{best}%</span>
          <span className="stat-note">Testlardagi eng yuqori aniqlik</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="section-title">Mavzular bo'yicha</h2>
            <p className="section-sub">Qaysi bo'limni tugatganingizni kuzatib boring.</p>
          </div>
        </div>
        <div className="progress-topics">
          {topics.map((topic) => {
            const done = topic.lessons.filter((lesson) =>
              progress.completed.includes(lesson.id),
            ).length
            const percent = Math.round((done / topic.lessons.length) * 100)
            return (
              <div
                key={topic.id}
                className="progress-topic"
                style={{ "--topic": topic.color }}
              >
                <span className="topic-symbol small" aria-hidden="true">
                  {topic.symbol}
                </span>
                <div className="progress-topic-body">
                  <div className="progress-topic-top">
                    <strong>{topic.title}</strong>
                    <span>
                      {done}/{topic.lessons.length} · {percent}%
                    </span>
                  </div>
                  <div className="bar">
                    <span className="bar-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="section-title">Test tarixi</h2>
            <p className="section-sub">Oxirgi 25 ta test natijasi saqlanadi.</p>
          </div>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onNavigate("quiz")}
          >
            Yangi test
          </button>
        </div>

        {quizzes.length === 0 ? (
          <div className="empty-state">
            <span aria-hidden="true">∑</span>
            <h3>Hali test topshirilmagan</h3>
            <p>Bilimingizni sinash uchun 10 savolli testni boshlang.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate("quiz")}
            >
              Testni boshlash
            </button>
          </div>
        ) : (
          <div className="history">
            {quizzes.map((item, position) => {
              const percent = Math.round(
                (item.score / Math.max(1, item.total)) * 100,
              )
              return (
                <div
                  key={`${item.date}-${position}`}
                  className="history-row"
                >
                  <span className="history-index">{quizzes.length - position}</span>
                  <div className="history-main">
                    <strong>
                      {item.score}/{item.total} to'g'ri javob
                    </strong>
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <span
                    className={`history-percent ${percent >= 70 ? "good" : percent >= 50 ? "mid" : "low"}`}
                  >
                    {percent}%
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section className="danger-zone">
        <div>
          <h3>Natijalarni tozalash</h3>
          <p>Bu amal XP, darslar va test tarixini butunlay o'chiradi.</p>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleReset}>
          Hammasini o'chirish
        </button>
      </section>
    </div>
  )
}
