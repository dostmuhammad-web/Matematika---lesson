import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Lessons from "./components/Lessons"
import Practice from "./components/Practice"
import Quiz from "./components/Quiz"
import Progress from "./components/Progress"
import {
  clearProgress,
  emptyProgress,
  loadProgress,
  saveProgress,
  touchStreak,
} from "./utils/progress"
import "./App.css"

function App() {
  const [page, setPage] = useState("home")
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [practiceTopic, setPracticeTopic] = useState(null)
  const [progress, setProgress] = useState(loadProgress)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("mathlab-theme") || "light"
    } catch {
      return "light"
    }
  })

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("mathlab-theme", theme)
    } catch {
      return
    }
  }, [theme])

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function navigate(nextPage) {
    setPage(nextPage)
    setSelectedTopic(null)
    setPracticeTopic(null)
    scrollTop()
  }

  function openTopic(topicId) {
    setPage("lessons")
    setSelectedTopic(topicId)
    setPracticeTopic(null)
    scrollTop()
  }

  function selectTopic(topicId) {
    setSelectedTopic(topicId)
    scrollTop()
  }

  function openPractice(topicId = null) {
    setPage("practice")
    setPracticeTopic(topicId)
    setSelectedTopic(null)
    scrollTop()
  }

  function award(points) {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + points,
      ...touchStreak(prev),
    }))
  }

  function handlePracticeCorrect() {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + 2,
      solved: (prev.solved || 0) + 1,
      ...touchStreak(prev),
    }))
  }

  function completeLesson(lessonId) {
    setProgress((prev) => {
      if (prev.completed.includes(lessonId)) return prev
      return {
        ...prev,
        completed: [...prev.completed, lessonId],
        xp: prev.xp + 10,
        ...touchStreak(prev),
      }
    })
  }

  function finishQuiz(result) {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + result.score * 5,
      quiz: [
        { ...result, date: new Date().toISOString() },
        ...prev.quiz,
      ].slice(0, 25),
      ...touchStreak(prev),
    }))
  }

  function resetProgress() {
    clearProgress()
    setProgress({ ...emptyProgress })
  }

  return (
    <div className="app">
      <Navbar
        page={page}
        onNavigate={navigate}
        xp={progress.xp}
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />

      <main className="main">
        <div className="container" key={`${page}-${selectedTopic || "none"}`}>
          {page === "home" && (
            <Home
              progress={progress}
              onNavigate={navigate}
              onOpenTopic={openTopic}
              onPracticeTopic={openPractice}
              onAward={award}
            />
          )}
          {page === "lessons" && (
            <Lessons
              progress={progress}
              selectedTopic={selectedTopic}
              onSelectTopic={selectTopic}
              onCompleteLesson={completeLesson}
              onPracticeTopic={openPractice}
            />
          )}
          {page === "practice" && (
            <Practice
              initialTopic={practiceTopic}
              onCorrect={handlePracticeCorrect}
            />
          )}
          {page === "quiz" && (
            <Quiz onFinish={finishQuiz} onNavigate={navigate} />
          )}
          {page === "progress" && (
            <Progress
              progress={progress}
              onReset={resetProgress}
              onNavigate={navigate}
            />
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              ∑
            </span>
            <span className="brand-text">
              Math<span>Lab</span>
            </span>
          </div>
          <p>Matematikani o'rganish uchun interaktiv platforma.</p>
          <span>© 2026 MathLab</span>
        </div>
      </footer>
    </div>
  )
}

export default App
