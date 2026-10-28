const STORAGE_KEY = "mathlab-progress"

export const emptyProgress = {
  xp: 0,
  completed: [],
  solved: 0,
  quiz: [],
  streak: 0,
  lastActive: null,
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...emptyProgress }
    const parsed = JSON.parse(raw)
    return {
      ...emptyProgress,
      ...parsed,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      quiz: Array.isArray(parsed.quiz) ? parsed.quiz : [],
    }
  } catch {
    return { ...emptyProgress }
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    return
  }
}

export function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    return
  }
}

export function levelFromXp(xp) {
  return Math.floor(Math.max(0, xp) / 100) + 1
}

export function xpInLevel(xp) {
  return Math.max(0, xp) % 100
}

function dayKey(date) {
  return date.toISOString().slice(0, 10)
}

export function touchStreak(progress) {
  const today = dayKey(new Date())
  if (progress.lastActive === today) return {}

  const yesterday = dayKey(new Date(Date.now() - 86400000))
  return {
    streak: progress.lastActive === yesterday ? (progress.streak || 0) + 1 : 1,
    lastActive: today,
  }
}

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("uz-UZ", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  } catch {
    return ""
  }
}
