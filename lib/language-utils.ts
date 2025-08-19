export type Language = "en" | "nl"

export const LANGUAGE_STORAGE_KEY = "besteman-marketing-language"

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en"

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === "en" || stored === "nl") {
      return stored
    }
  } catch (error) {
    console.warn("Failed to read language from localStorage:", error)
  }

  return "en"
}

export function setStoredLanguage(language: Language): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch (error) {
    console.warn("Failed to store language in localStorage:", error)
  }
}

export function getLanguageFromUrl(): Language | null {
  if (typeof window === "undefined") return null

  const urlParams = new URLSearchParams(window.location.search)
  const lang = urlParams.get("lang")

  if (lang === "en" || lang === "nl") {
    return lang
  }

  return null
}

export function updateUrlWithLanguage(language: Language): void {
  if (typeof window === "undefined") return

  const url = new URL(window.location.href)
  url.searchParams.set("lang", language)

  // Update URL without triggering a page reload
  window.history.replaceState({}, "", url.toString())
}

export function createLanguageAwareLink(href: string, language: Language): string {
  const url = new URL(href, window.location.origin)
  url.searchParams.set("lang", language)
  return url.pathname + url.search
}
