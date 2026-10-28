import { useCallback, useEffect, useRef, useState } from "react"
import { makeQuiz } from "../data/quiz"

const TOTAL_TIME = 8 * 60
const QUESTION_COUNT = 10

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60
  return `${minutes}:${String(rest).padStart(2, "0")}`
}

function resultMessage(percent) {
  if (percent >= 90) return "Ajoyib natija! Mavzularni juda yaxshi o'zlashtirgansiz."
  if (percent >= 70) return "Yaxshi natija! Bir necha mavzuni takrorlash yetarli."
  if (percent >= 50) return "Yaxshi boshlanish. Xato qilgan mavzularga qayta to'xtalib o'ting."
  return "Xafa bo'lmang — darslarni takrorlab, yana urinib ko'ring."
}

export default function Quiz({ onFinish, onNavigate }) {
  const [questions, setQuestions] = useState(() => makeQuiz(QUESTION_COUNT))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)

  const answersRef = useRef([])
  const finishedRef = useRef(false)

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    const result = answersRef.current.reduce(
      (sum, answer, position) =>
        sum + (answer === questions[position]?.answer ? 1 : 0),
      0,
    )
    setScore(result)
    setFinished(true)
    onFinish({ score: result, total: questions.length })
  }, [questions, onFinish])

  useEffect(() => {
    if (finished) return undefined
    if (timeLeft <= 0) {
      finish()
      return undefined
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, finished, finish])

  function choose(optionIndex) {
    if (selected !== null || finished) return
    setSelected(optionIndex)
    answersRef.current = [...answersRef.current, optionIndex]
    setAnswers(answersRef.current)
  }

  function nextQuestion() {
    if (selected === null) return
    if (index + 1 >= questions.length) {
      finish()
      return
    }
    setIndex((prev) => prev + 1)
    setSelected(null)
  }

  function restart() {
    finishedRef.current = false
    answersRef.current = []
    setQuestions(makeQuiz(QUESTION_COUNT))
    setIndex(0)
    setSelected(null)
    setAnswers([])
    setTimeLeft(TOTAL_TIME)
    setFinished(false)
    setScore(0)
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="page">
        <div className="result-card">
          <span className="eyebrow">Test yakunlandi</span>
          <div className="result-score">
            {score}
            <span>/{questions.length}</span>
          </div>
          <p className="result-message">{resultMessage(percent)}</p>
          <div className="result-stats">
            <div>
              <strong>{percent}%</strong>
              <span>aniqlik</span>
            </div>
            <div>
              <strong>+{score * 5} XP</strong>
              <span>tajriba balli</span>
            </div>
            <div>
              <strong>{formatTime(TOTAL_TIME - timeLeft)}</strong>
              <span>sarflangan vaqt</span>
            </div>
          </div>
          <div className="hero-actions center">
            <button type="button" className="btn btn-primary" onClick={restart}>
              Yana urinish
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => onNavigate("practice")}
            >
              Mashq qilish
            </button>
          </div>
        </div>

        <section className="review">
          <h2 className="section-title">Savollar tahlili</h2>
          <div className="review-list">
            {questions.map((question, position) => {
              const given = answers[position]
              const isRight = given === question.answer
              return (
                <div
                  key={question.id}
                  className={`review-item ${isRight ? "right" : "wrong"}`}
                >
                  <div className="review-top">
                    <span className="review-topic">{question.topic}</span>
                    <span className="review-badge">
                      {isRight ? "To'g'ri" : "Xato"}
                    </span>
                  </div>
                  <p className="review-question">
                    {position + 1}. {question.question}
                  </p>
                  <p>
                    Sizning javobingiz:{" "}
                    <strong>{given === undefined ? "javob berilmagan" : question.options[given]}</strong>
                  </p>
                  {!isRight && (
                    <p>
                      To'g'ri javob: <strong>{question.options[question.answer]}</strong>
                    </p>
                  )}
                  <p className="review-expl">{question.explanation}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }

  const question = questions[index]
  const progressPercent = (index / questions.length) * 100

  return (
    <div className="page">
      <div className="page-head">
        <span className="eyebrow">Bilimni sinash</span>
        <h1 className="page-title">{QUESTION_COUNT} savolli test</h1>
        <p className="section-sub">
          Har bir savol uchun bitta javob tanlang. Vaqt: {formatTime(TOTAL_TIME)}.
          To'g'ri javob uchun +5 XP.
        </p>
      </div>

      <div className="quiz-card">
        <div className="quiz-top">
          <span className="quiz-counter">
            Savol {index + 1} / {questions.length}
          </span>
          <span className={`timer ${timeLeft <= 60 ? "low" : ""}`}>
            <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
              <circle
                cx="12"
                cy="13"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 9v4l2.6 1.6M9 2h6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="bar quiz-bar">
          <span
            className="bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <h2 className="quiz-question">{question.question}</h2>
        <span className="review-topic">{question.topic}</span>

        <div className="options">
          {question.options.map((option, optionIndex) => {
            let className = "option-btn"
            if (selected !== null) {
              if (optionIndex === question.answer) className += " correct"
              else if (optionIndex === selected) className += " wrong"
            }
            return (
              <button
                key={option}
                type="button"
                className={className}
                onClick={() => choose(optionIndex)}
                disabled={selected !== null}
              >
                <span className="option-letter" aria-hidden="true">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option}</span>
              </button>
            )
          })}
        </div>

        <div aria-live="polite">
          {selected !== null && (
            <div
              className={`feedback ${selected === question.answer ? "correct" : "wrong"}`}
            >
              <strong>
                {selected === question.answer ? "To'g'ri javob!" : "Xato javob"}
              </strong>
              <p>{question.explanation}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={nextQuestion}
              >
                {index + 1 === questions.length ? "Natijani ko'rish" : "Keyingi savol →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
