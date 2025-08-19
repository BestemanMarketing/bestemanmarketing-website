"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowLeft, Shield, Mail, Phone } from "lucide-react"
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

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState<Language>("en")

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
        backToHome: "Back to Home",
      },
      title: "Privacy Policy",
      lastUpdated: "Last updated: August 2025",
      sections: {
        whoWeAre: {
          title: "1. Who we are",
          content: `Besteman Marketing is based in Amsterdam, The Netherlands, providing strategic marketing services and AI-powered solutions for e-commerce companies.

Contact:
📧 bestemanmarketing@gmail.com
📞 +31655805499`,
        },
        dataCollection: {
          title: "2. What data do we collect?",
          content: `We only collect data necessary to deliver our services:

• Name and contact details (email, phone number, company name)
• Information you provide through the contact form or when booking a call
• Any communication via email or phone
• Website usage (via cookies and analytics) to improve our website and services`,
        },
        whyProcess: {
          title: "3. Why do we process your data?",
          content: `• To contact you and schedule appointments
• To provide our marketing services
• For invoicing and administration
• To improve our website and services
• To send updates and newsletters (only with your consent)`,
        },
        dataRetention: {
          title: "4. How long do we store your data?",
          content: `We do not keep your data longer than necessary:

• Contact details: as long as there is an (ongoing) collaboration, and up to 2 years thereafter
• Billing data: 7 years (legal retention period)`,
        },
        dataSharing: {
          title: "5. With whom do we share your data?",
          content: `We do not sell your data. We only share it with third parties that support our services (e.g., accounting software, analytics tools, Calendly). These parties operate under strict confidentiality.`,
        },
        cookies: {
          title: "6. Cookies and tracking",
          content: `We use cookies and similar technologies for:

• Functional purposes (ensuring the website works properly)
• Statistics and analytics (e.g., Google Analytics)
• Marketing purposes (advertising and remarketing)

You can disable cookies in your browser settings at any time.`,
        },
        rights: {
          title: "7. Your rights",
          content: `You have the right to:

• Request access to the data we hold about you
• Request correction or deletion of your data
• Object to data processing or marketing use
• Withdraw your consent (e.g., for newsletters)

To exercise these rights, contact us at bestemanmarketing@gmail.com.`,
        },
        security: {
          title: "8. Security",
          content: `We take appropriate measures to protect your data against loss, misuse, or unauthorized access.`,
        },
      },
    },
    nl: {
      nav: {
        services: "Diensten",
        about: "Over",
        blackFriday: "Black Friday",
        contact: "Contact",
        backToHome: "Terug naar Home",
      },
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt: augustus 2025",
      sections: {
        whoWeAre: {
          title: "1. Wie zijn wij?",
          content: `Besteman Marketing is gevestigd in Amsterdam, Nederland en biedt strategische marketingdiensten en AI-gedreven oplossingen voor e-commerce bedrijven.

Contact:
📧 bestemanmarketing@gmail.com
📞 +31655805499`,
        },
        dataCollection: {
          title: "2. Welke gegevens verzamelen wij?",
          content: `Wij verzamelen enkel gegevens die nodig zijn om onze diensten te leveren:

• Naam en contactgegevens (e-mail, telefoonnummer, bedrijfsnaam)
• Gegevens die je invult in het contactformulier of bij het boeken van een call
• Eventuele communicatie via e-mail of telefoon
• Websitegebruik (via cookies en analytics) om onze site en diensten te verbeteren`,
        },
        whyProcess: {
          title: "3. Waarom verwerken wij jouw gegevens?",
          content: `• Om contact met je op te nemen en afspraken te plannen
• Om onze marketingdiensten uit te voeren
• Voor facturatie en administratie
• Voor het verbeteren van onze website en diensten
• Voor het versturen van updates en nieuwsbrieven (alleen met jouw toestemming)`,
        },
        dataRetention: {
          title: "4. Hoe lang bewaren wij jouw gegevens?",
          content: `Wij bewaren jouw gegevens niet langer dan noodzakelijk:

• Contactgegevens: zolang er een (potentiële) samenwerking loopt, en max. 2 jaar daarna
• Factuurgegevens: 7 jaar (wettelijke bewaarplicht)`,
        },
        dataSharing: {
          title: "5. Met wie delen wij jouw gegevens?",
          content: `Jouw gegevens worden niet verkocht. Wij delen ze alleen met derden die ons ondersteunen in de uitvoering (bijv. boekhoudsoftware, analytics-tools, Calendly). Deze partijen werken onder strikte geheimhouding.`,
        },
        cookies: {
          title: "6. Cookies en tracking",
          content: `Wij maken gebruik van cookies en vergelijkbare technieken voor:

• Functioneel gebruik (goed werkende website)
• Statistieken en analyse (bijv. Google Analytics)
• Marketingdoeleinden (zoals advertenties en remarketing)

Je kunt cookies altijd uitschakelen in je browserinstellingen.`,
        },
        rights: {
          title: "7. Jouw rechten",
          content: `Je hebt het recht om:

• Inzage te krijgen in de gegevens die wij van je hebben
• Gegevens te laten corrigeren of verwijderen
• Bezwaar te maken tegen verwerking of gebruik voor marketing
• Je toestemming in te trekken (bijv. voor nieuwsbrieven)

Wil je gebruikmaken van deze rechten? Mail ons via bestemanmarketing@gmail.com.`,
        },
        security: {
          title: "8. Beveiliging",
          content: `Wij nemen passende maatregelen om jouw gegevens te beschermen tegen verlies of misbruik.`,
        },
      },
    },
  }

  const t = content[language]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <Link href={createLanguageAwareLink("/", language)} className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-semibold text-gray-900">Besteman Marketing</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href={createLanguageAwareLink("/#services", language)}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base"
          >
            {t.nav.services}
          </Link>
          <Link
            href={createLanguageAwareLink("/#about", language)}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base"
          >
            {t.nav.about}
          </Link>
          <Link
            href={createLanguageAwareLink("/#black-friday", language)}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base"
          >
            {t.nav.blackFriday}
          </Link>
          <Link
            href={createLanguageAwareLink("/#contact", language)}
            className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
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
      </header>

      <main className="flex-1">
        {/* Back to Home */}
        <section className="w-full py-6 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Link
              href={createLanguageAwareLink("/", language)}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.nav.backToHome}
            </Link>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-12 sm:py-16 md:py-24">
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs sm:text-sm">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  {t.title}
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">{t.title}</h1>
                <p className="text-gray-600 text-sm sm:text-base">{t.lastUpdated}</p>
              </div>

              {/* Content */}
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(t.sections).map(([key, section]) => (
                  <Card key={key} className="border-l-4 border-l-blue-500">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl text-gray-900">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="prose prose-gray max-w-none">
                        {section.content.split("\n").map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-700 leading-relaxed mb-3 sm:mb-4 last:mb-0 text-sm sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Section */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {language === "en" ? "Questions about this policy?" : "Vragen over dit beleid?"}
                  </h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {language === "en"
                      ? "If you have any questions about this privacy policy, please don't hesitate to contact us."
                      : "Als je vragen hebt over dit privacybeleid, neem dan gerust contact met ons op."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base break-all">bestemanmarketing@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">+31655805499</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
