"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Target,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Eye,
  BarChart3,
  Rocket,
  MessageSquare,
  Bot,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  getStoredLanguage,
  setStoredLanguage,
  getLanguageFromUrl,
  updateUrlWithLanguage,
  createLanguageAwareLink,
  type Language,
} from "@/lib/language-utils"

export default function BestemanMarketingWebsite() {
  const [language, setLanguage] = useState<Language>("en")
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    goals: "",
  })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Initialize language from URL or localStorage
    const urlLanguage = getLanguageFromUrl()
    const storedLanguage = getStoredLanguage()

    const initialLanguage = urlLanguage || storedLanguage
    setLanguage(initialLanguage)

    // Update URL if language came from storage
    if (!urlLanguage && storedLanguage) {
      updateUrlWithLanguage(storedLanguage)
    }

    // Initialize cookie banner state
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (cookieConsent === "accepted") {
      setShowCookieBanner(false)
      setCookiesAccepted(true)
    } else if (cookieConsent === "necessary" || cookieConsent === "rejected") {
      setShowCookieBanner(false)
      setCookiesAccepted(false)
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setStoredLanguage(newLanguage)
    updateUrlWithLanguage(newLanguage)
  }

  const content = {
    en: {
      nav: {
        services: "Services",
        about: "About",
        blackFriday: "Black Friday",
        contact: "Contact",
      },
      hero: {
        badge: "Now Specialising in AI Automation",
        title1: "Stop Playing Small.",
        title2: "Start Scaling Smart.",
        subtitle1:
          "Are you an ambitious e-commerce brand looking to turn scattered marketing efforts into a clear, data-driven growth engine?",
        subtitle2:
          "Drawing on experience with high-growth companies like Uber Eats and Emma Sleep, I help mid-sized businesses apply proven strategies. By blending data-driven insights, creativity, and AI automation, we'll create sustainable growth that works for you!",
        cta1: "View my services",
        cta2: "Book your free 30-minute call",
        features: [
          "Monthly retainers for consistency",
          "AI-powered marketing solutions",
          "Data-first, creative, results-focused",
        ],
      },
      banner: "Launching soon: AI Black Friday Control Room for e-commerce brands",
      services: {
        title: "How I help your business grow",
        subtitle: "Strategic marketing built to scale your business with clarity, consistency, and measurable impact.",
        strategy: {
          title: "Marketing Strategy",
          description:
            "A focused strategy sprint to align goals, sharpen positioning, and turn opportunities into a clear plan.",
          features: [
            "Market research & analyses",
            "Branding toolkit",
            "Channel strategy",
            "90-day actionable plan",
            "Competitor insights",
          ],
          cta: "Book a strategy call",
        },
        channels: {
          title: "Marketing Channels",
          description:
            "Hands-on execution across the channels that move the needle. Built, launched, and optimised in sync.",
          features: [
            "CRM & lifecycle marketing",
            "Offline marketing",
            "Website SEO & landing page CRO",
            "Pinterest, Instagram, TikTok",
            "Referral & advocacy",
          ],
          cta: "Explore channel options",
        },
        measurement: {
          title: "Marketing Measurement",
          description: "Make every decision data-driven with clean tracking, clear KPIs, and reporting you can act on.",
          features: [
            "Analytics setup",
            "Funnel analysis",
            "Experimentation (A/B testing)",
            "Ongoing insights & tips",
            "Dashboards",
          ],
          cta: "Book a call",
        },
        footer:
          "Your business isn't one-size-fits-all and neither are these services. During a free 30-minute call, we'll define scope, deliverables, and a plan tailored to your stage.",
        footerCta: "Schedule a free 30-minute call",
      },
      about: {
        badge: "Your marketing partner",
        title: "Helping E-commerce brands scale",
        content1:
          "I'm a strategic marketing consultant with experience leading campaigns for multimillion-euro brands. Now dedicated to helping medium-sized e-commerce businesses achieve the same level of success.",
        content2:
          "My approach blends hard data with bold creativity, using AI automation and proven frameworks to turn marketing chaos into a streamlined growth machine.",
        content3:
          "You'll always work directly with me; no account managers, no layers, no wasted time. Just clear communication, tailored strategies, and measurable results.",
      },
      blackFriday: {
        badge: "Coming Soon",
        title: "The AI Black Friday Control Room",
        subtitle: "For e-commerce brands who can't afford to leave money on the table.",
        nightmareTitle: "The Black Friday Nightmare You Know",
        solutionTitle: "The AI-Powered Control Room Solution",
        solutionSubtitle:
          "Picture this: one central hub where every moving part of your Black Friday machine runs seamlessly. Here is a glimpse inside the control room and this is just a preview of what's coming.",
        problems: {
          orders: {
            title: "Orders Flooding In",
            description: "Overwhelming volume crashes your systems",
          },
          customers: {
            title: "Customer Chaos",
            description: "Questions faster than you can answer",
          },
          ads: {
            title: "Ads Burning Budget",
            description: "Money wasted on poorly optimised campaigns",
          },
          team: {
            title: "Team Overwhelm",
            description: "To-do lists that never seem to end",
          },
        },
        solutions: {
          ai: {
            title: "24/7 AI Customer Service",
            description: "Never sleeps, always helps. Handles support and upsells simultaneously.",
          },
          copy: {
            title: "Instant Ad Copy Generation",
            description: "AI creates converting copy in real-time, optimised for peak performance.",
          },
          insights: {
            title: "Real-Time Insights",
            description: "Spot opportunities the moment they appear and act instantly.",
          },
        },
        valueProposition:
          "This is for brands running high-volume, high-stakes sales events. It's built to turn chaos into record-breaking revenue.",
        waitlistTitle: "Join the Waitlist",
        waitlistDescription:
          "Secure early access to the beta before we open the doors wider. Limited spots: because we're optimising for performance, not mass sign up!",
        waitlistButton: "Join Waitlist",
        waitlistSubmitting: "Joining...",
        waitlistBenefit: "🔥 Early access includes exclusive beta pricing and priority support",
        stayUpdated: "Stay up to date",
        waitlistDisclaimer:
          "By providing your email, you agree to be contacted about the AI Black Friday Control Room.",
      },
      contact: {
        title: "Ready to transform your marketing?",
        subtitle:
          "If you're already generating sales but want a strategy that ties everything together, I can help. Let's design a marketing plan that works across every channel, runs on smart automation, and is built to scale.",
        formTitle: "Book your free 30-minute call",
        formSubtitle: "Let's discuss how I can help scale your business with strategic and creative marketing",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        company: "Company",
        goals: "Tell me more about your goals",
        submit: "Submit details",
        submitting: "Submitting...",
        disclaimer:
          "By submitting these details, you will automatically receive a Calendly invite to book your free 30-minute call.",
        contactInfo: {
          email: "bestemanmarketing@gmail.com",
          phone: "+31655805499",
          location: "Amsterdam, The Netherlands (available worldwide)",
        },
      },
      cookieBanner: {
        title: "We use cookies",
        description:
          "We use cookies to improve your experience on our website and to analyse website traffic. You can choose which cookies to accept.",
        acceptAll: "Accept all",
        acceptNecessary: "Accept necessary only",
        rejectAll: "Reject all",
        learnMore: "Learn more",
      },
    },
    nl: {
      nav: {
        services: "Diensten",
        about: "Over",
        blackFriday: "Black Friday",
        contact: "Contact",
      },
      hero: {
        badge: "Gespecialiseerd in AI-automatisering",
        title1: "Denk groter.",
        title2: "Groei slimmer.",
        subtitle1:
          "Ben jij een ambitieus e-commerce bedrijf die zijn versnipperde marketinginspanningen wil omzetten in een heldere, data-gedreven groeimachine?",
        subtitle2:
          "Met ervaring bij snelgroeiende bedrijven zoals Uber Eats en Emma Sleep help ik middelgrote merken duurzame groei realiseren. Door data, creativiteit en AI slim te combineren, bouwen we samen een schaalbare strategie die werkt.",
        cta1: "Bekijk mijn diensten",
        cta2: "Plan je gratis 30-minuten gesprek",
        features: [
          "Vaste maandelijkse retainer voor continuïteit",
          "AI-gedreven marketingoplossingen",
          "Data-first, creatief en resultaatgericht",
        ],
      },
      banner: "Lanceert binnenkort: AI Black Friday Control Room voor e-commerce merken",
      services: {
        title: "Hoe ik jouw merk laat groeien",
        subtitle: "Slimme marketingstrategieën om je bedrijf gestructureerd, consistent en meetbaar te laten groeien.",
        strategy: {
          title: "Marketingstrategie",
          description:
            "Een strategische sprint om doelen scherp te stellen, je merk te positioneren en kansen te vertalen naar een concreet plan.",
          features: [
            "Marktonderzoek & analyse",
            "Branding toolkit",
            "Kanaalstrategie",
            "Actieplan voor 90 dagen",
            "Concurrentie-inzichten",
          ],
          cta: "Plan een strategiesessie",
        },
        channels: {
          title: "Marketingkanalen",
          description:
            "Praktische uitvoering via de kanalen die echt verschil maken. Alles gelanceerd en geoptimaliseerd in samenhang.",
          features: [
            "CRM & lifecycle marketing",
            "Offline marketing",
            "Website SEO & CRO",
            "Pinterest, Instagram, TikTok",
            "Referral & advocacy",
          ],
          cta: "Ontdek kanaalmogelijkheden",
        },
        measurement: {
          title: "Marketingmeting",
          description:
            "Maak al je beslissingen op basis van data met heldere tracking, KPI's en actiegerichte rapportages.",
          features: [
            "Analytics-setup",
            "Funnel analyse",
            "Experimenteren (A/B-testen)",
            "Doorlopende inzichten en tips",
            "Dashboards",
          ],
          cta: "Plan een call",
        },
        footer:
          "Jouw bedrijf is niet one-size-fits-all en dat geldt ook voor deze diensten. Tijdens een gratis gesprek van 30 minuten bepalen we de omvang, de te leveren resultaten en een plan dat is afgestemd op jouw bedrijf.",
        footerCta: "Plan een gratis gesprek van 30 minuten",
      },
      about: {
        badge: "Jouw marketingpartner",
        title: "E-commerce merken helpen groeien",
        content1:
          "Ik ben een strategisch marketingconsultant met ervaring in het leiden van campagnes voor merken met miljoenen euro's omzet. Nu specialiseer ik me om middelgrote e-commercebedrijven te helpen hetzelfde succesniveau te bereiken.",
        content2:
          "Mijn aanpak combineert harde data met creativiteit, waarbij ik gebruikmaak van AI-automatisering en bewezen frameworks om marketingchaos om te zetten in een gestroomlijnde groeimachine.",
        content3:
          "Je werkt altijd rechtstreeks met mij samen; geen accountmanagers, geen tussenlagen, geen verspilde tijd. Alleen duidelijke communicatie, op maat gemaakte strategieën en meetbare resultaten.",
      },
      blackFriday: {
        badge: "Binnenkort beschikbaar",
        title: "De AI Black Friday Control Room",
        subtitle: "Voor e-commerce merken die het zich niet kunnen veroorloven om geld te laten liggen.",
        nightmareTitle: "De Black Friday-nachtmerrie die je kent",
        solutionTitle: "De AI-aangedreven Control Room oplossing",
        solutionSubtitle:
          "Stel je voor: één centrale hub waar elk onderdeel van je Black Friday-machine naadloos samenwerkt. Hier is een kijkje in de control room en dit is slechts een voorproefje van wat er gaat komen.",
        problems: {
          orders: {
            title: "Bestellingen stromen binnen",
            description: "Overweldigende hoeveelheden zorgen ervoor dat jouw systemen crashen",
          },
          customers: {
            title: "Chaos bij klanten",
            description: "Vragen komen sneller binnen dan je ze kunt beantwoorden",
          },
          ads: {
            title: "Advertenties die jouw budget opslokken",
            description: "Geld verspild aan slecht geoptimaliseerde campagnes",
          },
          team: {
            title: "Overweldigd team",
            description: "To-do-lijsten die nooit lijken te eindigen",
          },
        },
        solutions: {
          ai: {
            title: "24/7 AI-klantenservice",
            description: "Slaapt nooit, helpt altijd. Werkt tegelijkertijd aan ondersteuning en upsells.",
          },
          copy: {
            title: "Directe generatie van advertentieteksten",
            description: "AI creëert in realtime converterende teksten, geoptimaliseerd voor topprestaties.",
          },
          insights: {
            title: "Real-time inzichten",
            description: "Zie kansen zodra ze zich voordoen en handel direct.",
          },
        },
        valueProposition:
          "Dit is voor merken die high-volume, high-stakes sales doen. Gemaakt om chaos om te zetten in recordomzet.",
        waitlistTitle: "Schrijf je in voor de wachtlijst",
        waitlistDescription:
          "Verzeker jezelf van vroege toegang tot de bètaversie voordat we de deuren verder openen. Beperkt aantal plaatsen: omdat we optimaliseren voor prestaties, niet voor massale aanmeldingen!",
        waitlistButton: "Schrijf je in",
        waitlistSubmitting: "Aanmelden...",
        waitlistBenefit: "🔥 Vroege toegang omvat exclusieve bètaprijzen en prioritaire ondersteuning",
        stayUpdated: "Blijf op de hoogte",
        waitlistDisclaimer:
          "Door jouw e-mailadres op te geven, ga je akkoord dat wij je contacteren betreft de AI Black Friday Control Room.",
      },
      contact: {
        title: "Klaar om jouw marketing te transformeren?",
        subtitle:
          "Als je al omzet genereert, maar op zoek bent naar een strategie die alles samenbrengt, kan ik je helpen. Laten we een marketingplan ontwerpen dat op elk kanaal werkt, op slimme automatisering draait en schaalbaar is.",
        formTitle: "Boek jouw gratis gesprek van 30 minuten",
        formSubtitle:
          "Laten we bespreken hoe ik je kan helpen jouw bedrijf te laten groeien met strategische en creatieve marketing",
        firstName: "Voornaam",
        lastName: "Achternaam",
        email: "E-mailadres",
        company: "Bedrijf",
        goals: "Vertel me meer over jullie doelstellingen",
        submit: "Gegevens verzenden",
        submitting: "Versturen...",
        disclaimer:
          "Door deze gegevens te verzenden, ontvang je automatisch een Calendly-uitnodiging om jouw gratis gesprek van 30 minuten te boeken.",
        contactInfo: {
          email: "bestemanmarketing@gmail.com",
          phone: "+31655805499",
          location: "Amsterdam, Nederland (wereldwijd beschikbaar)",
        },
      },
      cookieBanner: {
        title: "We gebruiken cookies",
        description:
          "We gebruiken cookies om je ervaring op onze website te verbeteren en websiteverkeer te analyseren. Je kunt kiezen welke cookies je accepteert.",
        acceptAll: "Alles accepteren",
        acceptNecessary: "Alleen noodzakelijke",
        rejectAll: "Alles weigeren",
        learnMore: "Meer informatie",
      },
    },
  }

  const t = content[language]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsWaitlistSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mnnzwyvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: waitlistEmail,
          form_type: "Black Friday Waitlist",
          language: language,
        }),
      })

      if (response.ok) {
        alert(
          language === "en"
            ? "Thank you for joining the waitlist! We'll be in touch soon."
            : "Bedankt voor het aanmelden voor de wachtlijst! We nemen binnenkort contact op.",
        )
        setWaitlistEmail("")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Sorry, there was an error submitting the form. Please try again."
          : "Sorry, er was een fout bij het versturen van het formulier. Probeer het opnieuw.",
      )
    } finally {
      setIsWaitlistSubmitting(false)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mrbljvkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: contactForm.firstName,
          lastName: contactForm.lastName,
          email: contactForm.email,
          company: contactForm.company,
          goals: contactForm.goals,
          form_type: "Strategy Session Request",
          language: language,
        }),
      })

      if (response.ok) {
        alert(
          language === "en"
            ? "Thank you for your submission! You will receive a Calendly invite shortly."
            : "Bedankt voor je inzending! Je ontvangt binnenkort een Calendly uitnodiging.",
        )
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          goals: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Sorry, there was an error submitting the form. Please try again."
          : "Sorry, er was een fout bij het versturen van het formulier. Probeer het opnieuw.",
      )
    } finally {
      setIsContactSubmitting(false)
    }
  }

  const handleAcceptAllCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowCookieBanner(false)
    setCookiesAccepted(true)
  }

  const handleAcceptNecessaryCookies = () => {
    localStorage.setItem("cookieConsent", "necessary")
    setShowCookieBanner(false)
    setCookiesAccepted(false)
  }

  const handleRejectAllCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowCookieBanner(false)
    setCookiesAccepted(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <Link href={createLanguageAwareLink("/", language)} className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-semibold text-gray-900">Besteman Marketing</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-gray-900 font-medium">
            {t.nav.services}
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-gray-900 font-medium">
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection("black-friday")}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            {t.nav.blackFriday}
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-gray-900 font-medium">
            {t.nav.contact}
          </button>
        </nav>

        {/* Mobile Menu Button & Language Switcher */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleLanguageChange("nl")}
              className={`w-6 h-4 sm:w-8 sm:h-6 rounded-sm overflow-hidden border-2 transition-all ${
                language === "nl" ? "border-blue-500 shadow-md" : "border-gray-300"
              }`}
            >
              <Image
                src="/images/dutch-flag.png"
                alt="Nederlands"
                width={32}
                height={24}
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`w-6 h-4 sm:w-8 sm:h-6 rounded-sm overflow-hidden border-2 transition-all ${
                language === "en" ? "border-blue-500 shadow-md" : "border-gray-300"
              }`}
            >
              <Image
                src="/images/english-flag.png"
                alt="English"
                width={32}
                height={24}
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-gray-900 rounded-lg"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="p-4 space-y-4">
                <button
                  onClick={() => {
                    scrollToSection("services")
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium"
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => {
                    scrollToSection("black-friday")
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium"
                >
                  {t.nav.blackFriday}
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium"
                >
                  {t.nav.contact}
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100">
          <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <Badge
                variant="secondary"
                className="bg-pink-200/80 text-pink-800 hover:bg-pink-200/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium"
              >
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {t.hero.badge}
              </Badge>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block text-gray-900 mb-1 sm:mb-2">{t.hero.title1}</span>
                  <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                    {t.hero.title2}
                  </span>
                </h1>
              </div>

              <div className="space-y-4 sm:space-y-6 max-w-3xl">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
                  {t.hero.subtitle1}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
                  {t.hero.subtitle2}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("services")}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-medium w-full sm:w-auto"
                >
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 text-sm sm:text-base font-medium bg-transparent w-full sm:w-auto"
                >
                  {t.hero.cta2}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-600 px-4 sm:px-0">
                {t.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-center sm:text-left">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Project Banner */}
        <section className="w-full py-4 bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-white">
          <div className="container px-6 md:px-8 mx-auto">
            <div className="flex items-center justify-center gap-3 text-center">
              <Eye className="h-5 w-5 flex-shrink-0" />
              <p className="font-medium text-sm md:text-base">{t.banner}</p>
              <button
                onClick={() => scrollToSection("black-friday")}
                className="ml-4 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {t.blackFriday.stayUpdated}
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 px-4 sm:px-0">
                  {t.services.title}
                </h2>
                <p className="max-w-[800px] text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
                  {t.services.subtitle}
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Marketing Strategy */}
              <Card className="border-2 hover:border-rose-200 transition-all duration-300 hover:shadow-lg group flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl group-hover:from-rose-200 group-hover:to-rose-100 transition-colors">
                      <Target className="h-6 w-6 text-rose-600" />
                    </div>
                    <CardTitle className="text-xl">{t.services.strategy.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                    {t.services.strategy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 text-sm mb-6 flex-grow">
                    {t.services.strategy.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-rose-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-rose-600 hover:bg-rose-700 mt-auto"
                  >
                    {t.services.strategy.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Marketing Channels */}
              <Card className="border-2 hover:border-amber-200 transition-all duration-300 hover:shadow-lg group flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl group-hover:from-amber-200 group-hover:to-amber-100 transition-colors">
                      <Layers className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{t.services.channels.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                    {t.services.channels.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 text-sm mb-6 flex-grow">
                    {t.services.channels.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-amber-600 hover:bg-amber-700 mt-auto"
                  >
                    {t.services.channels.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Marketing Measurement */}
              <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl group-hover:from-purple-200 group-hover:to-purple-100 transition-colors">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{t.services.measurement.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                    {t.services.measurement.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 text-sm mb-6 flex-grow">
                    {t.services.measurement.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-purple-600 hover:bg-purple-700 mt-auto"
                  >
                    {t.services.measurement.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 md:mt-16 space-y-4 sm:space-y-6 px-4 sm:px-0">
              <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg">{t.services.footer}</p>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 hover:bg-rose-50 bg-transparent w-full sm:w-auto"
              >
                {t.services.footerCta}
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 to-rose-50/30"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-rose-100 text-rose-800">
                      <Sparkles className="w-3 h-3 mr-2" />
                      {t.about.badge}
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                      {t.about.title}
                    </h2>
                  </div>
                  <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                    <p>{t.about.content1}</p>
                    <p>{t.about.content2}</p>
                    <p>{t.about.content3}</p>
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                  <div className="relative">
                    <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 to-amber-100 p-1">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src="/images/profile-photo.jpg"
                          alt="Marketing consultant profile photo"
                          width={320}
                          height={384}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    {/* Decorative elements - hidden on mobile */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Black Friday Control Room Section */}
        <section
          id="black-friday"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-transparent" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  <Rocket className="w-4 h-4 mr-2" />
                  {t.blackFriday.badge}
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="block text-white mb-2">
                    {language === "en" ? "Launching soon:" : "Lanceert binnenkort:"}
                  </span>
                  <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
                    {t.blackFriday.title}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl">{t.blackFriday.subtitle}</p>
              </div>

              {/* Before: Chaos */}
              <div className="w-full max-w-6xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">{t.blackFriday.nightmareTitle}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-red-900/30 border-red-500/30 hover:bg-red-900/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{t.blackFriday.problems.orders.title}</h4>
                      <p className="text-sm text-gray-300">{t.blackFriday.problems.orders.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-900/30 border-red-500/30 hover:bg-red-900/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{t.blackFriday.problems.customers.title}</h4>
                      <p className="text-sm text-gray-300">{t.blackFriday.problems.customers.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-900/30 border-red-500/30 hover:bg-red-900/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{t.blackFriday.problems.ads.title}</h4>
                      <p className="text-sm text-gray-300">{t.blackFriday.problems.ads.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-900/30 border-red-500/30 hover:bg-red-900/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{t.blackFriday.problems.team.title}</h4>
                      <p className="text-sm text-gray-300">{t.blackFriday.problems.team.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Transformation Arrow */}
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-emerald-400"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-emerald-400"></div>
                </div>
              </div>

              {/* After: Control */}
              <div className="w-full max-w-6xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">{t.blackFriday.solutionTitle}</h3>
                  <p className="text-lg text-gray-300 max-w-4xl mx-auto">{t.blackFriday.solutionSubtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-emerald-900/30 border-emerald-500/30 hover:bg-emerald-900/40 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Bot className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-3 text-lg">{t.blackFriday.solutions.ai.title}</h4>
                      <p className="text-gray-300">{t.blackFriday.solutions.ai.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-emerald-900/30 border-emerald-500/30 hover:bg-emerald-900/40 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-3 text-lg">{t.blackFriday.solutions.copy.title}</h4>
                      <p className="text-gray-300">{t.blackFriday.solutions.copy.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-emerald-900/30 border-emerald-500/30 hover:bg-emerald-900/40 transition-colors">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Eye className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-3 text-lg">
                        {t.blackFriday.solutions.insights.title}
                      </h4>
                      <p className="text-gray-300">{t.blackFriday.solutions.insights.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="text-center space-y-6 max-w-4xl">
                <p className="text-xl text-gray-200 leading-relaxed">{t.blackFriday.valueProposition}</p>

                <div className="bg-gradient-to-r from-orange-900/30 to-pink-900/30 rounded-2xl p-8 border border-orange-500/20">
                  <h4 className="text-2xl font-bold text-white mb-4">{t.blackFriday.waitlistTitle}</h4>
                  <p className="text-gray-300 mb-6">{t.blackFriday.waitlistDescription}</p>
                  <form
                    onSubmit={handleWaitlistSubmit}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Input
                      type="email"
                      placeholder={language === "en" ? "Enter your email address" : "Voer jouw e-mailadres in"}
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      required
                      className="max-w-sm bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button
                      type="submit"
                      disabled={isWaitlistSubmitting}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 disabled:opacity-50"
                    >
                      {isWaitlistSubmitting ? t.blackFriday.waitlistSubmitting : t.blackFriday.waitlistButton}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-sm text-gray-400 mt-4">{t.blackFriday.waitlistBenefit}</p>
                  <p className="text-xs text-gray-500 mt-2">{t.blackFriday.waitlistDisclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-rose-50 to-amber-50"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                    {t.contact.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{t.contact.subtitle}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-100 rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-all">{t.contact.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{t.contact.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{t.contact.contactInfo.location}</span>
                  </div>
                </div>
              </div>
              <Card className="border-2 border-rose-200 shadow-xl">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl">{t.contact.formTitle}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{t.contact.formSubtitle}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-sm">
                          {t.contact.firstName}
                        </Label>
                        <Input
                          id="first-name"
                          value={contactForm.firstName}
                          onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                          required
                          className="text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-sm">
                          {t.contact.lastName}
                        </Label>
                        <Input
                          id="last-name"
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          required
                          className="text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        {t.contact.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm">
                        {t.contact.company}
                      </Label>
                      <Input
                        id="company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-sm">
                        {t.contact.goals}
                      </Label>
                      <Textarea
                        id="goals"
                        value={contactForm.goals}
                        onChange={(e) => setContactForm({ ...contactForm, goals: e.target.value })}
                        className="min-h-[100px] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isContactSubmitting}
                      className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white disabled:opacity-50 text-sm sm:text-base"
                    >
                      {isContactSubmitting ? t.contact.submitting : t.contact.submit}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                      {t.contact.disclaimer}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cookie Banner */}
        {showCookieBanner && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-3 sm:p-4 md:p-6">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t.cookieBanner.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{t.cookieBanner.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRejectAllCookies}
                    className="text-xs sm:text-sm bg-transparent border-red-300 text-red-600 hover:bg-red-50 w-full sm:w-auto"
                  >
                    {t.cookieBanner.rejectAll}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAcceptNecessaryCookies}
                    className="text-xs sm:text-sm bg-transparent w-full sm:w-auto"
                  >
                    {t.cookieBanner.acceptNecessary}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAcceptAllCookies}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs sm:text-sm w-full sm:w-auto"
                  >
                    {t.cookieBanner.acceptAll}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © 2025 Besteman Marketing. {language === "en" ? "All rights reserved." : "Alle rechten voorbehouden."}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href={createLanguageAwareLink("/privacy", language)}
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            {language === "en" ? "Privacy Policy" : "Privacybeleid"}
          </Link>
          <Link
            href={createLanguageAwareLink("/terms", language)}
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            {language === "en" ? "Terms of Service" : "Algemene voorwaarden"}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
