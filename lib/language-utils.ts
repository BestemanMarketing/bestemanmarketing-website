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

  try {
    const urlParams = new URLSearchParams(window.location.search)
    const lang = urlParams.get("lang")

    if (lang === "en" || lang === "nl") {
      return lang
    }
  } catch (error) {
    console.warn("Failed to get language from URL:", error)
  }

  return null
}

export function updateUrlWithLanguage(language: Language): void {
  if (typeof window === "undefined") return

  try {
    const url = new URL(window.location.href)
    url.searchParams.set("lang", language)

    // Update URL without triggering a page reload
    window.history.replaceState({}, "", url.toString())
  } catch (error) {
    console.warn("Failed to update URL with language:", error)
  }
}

export function createLanguageAwareLink(href: string, language: Language): string {
  // During server-side rendering, just return the href as-is
  if (typeof window === "undefined") {
    return href
  }

  try {
    // Create URL with current origin
    const url = new URL(href, window.location.origin)
    url.searchParams.set("lang", language)
    return url.pathname + url.search
  } catch (error) {
    console.warn("Failed to create language-aware link:", error)
    // Fallback: just add the language parameter
    const separator = href.includes('?') ? '&' : '?'
    return `${href}${separator}lang=${language}`
  }
}
