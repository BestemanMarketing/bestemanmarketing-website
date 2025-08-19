"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowLeft, FileText, Mail, Phone } from "lucide-react"
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

export default function TermsOfServicePage() {
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
      title: "Terms of Service",
      lastUpdated: "Last updated: August 2025",
      sections: {
        applicability: {
          title: "1. Applicability",
          content: `These terms apply to all offers, proposals, agreements, and services provided by Besteman Marketing, unless otherwise agreed in writing.`,
        },
        services: {
          title: "2. Services",
          content: `Besteman Marketing provides strategic marketing consulting, AI automation, and creative campaigns for e-commerce businesses. The exact scope of work will be specified in a proposal, contract, or written confirmation.`,
        },
        proposals: {
          title: "3. Proposals and fees",
          content: `• All proposals are valid for 30 days unless stated otherwise
• Prices are exclusive of VAT and any additional costs (such as ad budgets, software licenses, etc.)`,
        },
        payment: {
          title: "4. Payment",
          content: `• Invoices must be paid within 14 days
• Late payments may incur interest and collection fees
• Services may be paused in case of outstanding payments`,
        },
        clientObligations: {
          title: "5. Client obligations",
          content: `The client is responsible for:

• Providing all necessary information and materials on time
• Ensuring the accuracy of supplied data
• Complying with laws and regulations regarding advertising, customer data, and content`,
        },
        intellectualProperty: {
          title: "6. Intellectual property",
          content: `• All materials developed by Besteman Marketing (campaigns, strategies, AI models, copy, visuals) remain the property of Besteman Marketing until full payment is received
• Upon payment, the client receives a non-exclusive right of use`,
        },
        liability: {
          title: "7. Liability",
          content: `• Besteman Marketing is not liable for indirect damages such as lost profits, reputational damage, or missed opportunities
• Liability is limited to the total amount of the relevant assignment`,
        },
        termination: {
          title: "8. Duration and termination",
          content: `• Agreements may be terminated in writing by either party with a notice period of 1 month, unless otherwise agreed
• Besteman Marketing may terminate the agreement immediately in cases of non-payment or breach of terms`,
        },
        forceMajeure: {
          title: "9. Force majeure",
          content: `In the event of force majeure (e.g., illness, system failures, government restrictions), Besteman Marketing is not obligated to fulfill the agreement for as long as the situation persists.`,
        },
        governingLaw: {
          title: "10. Governing law",
          content: `All agreements are governed by Dutch law. Any disputes will be submitted to the court of Amsterdam.`,
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
      title: "Algemene Voorwaarden",
      lastUpdated: "Laatst bijgewerkt: augustus 2025",
      sections: {
        applicability: {
          title: "1. Toepasselijkheid",
          content: `Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten en diensten geleverd door Besteman Marketing, tenzij schriftelijk anders overeengekomen.`,
        },
        services: {
          title: "2. Diensten",
          content: `Besteman Marketing levert strategisch marketingadvies, AI-automatisering en creatieve campagnes voor e-commerce bedrijven. De exacte scope wordt vastgelegd in een offerte, contract of schriftelijke bevestiging.`,
        },
        proposals: {
          title: "3. Offertes en tarieven",
          content: `• Alle offertes zijn 30 dagen geldig, tenzij anders aangegeven
• Prijzen zijn exclusief btw en eventuele bijkomende kosten (zoals advertentiebudgetten, softwarelicenties, etc.)`,
        },
        payment: {
          title: "4. Betaling",
          content: `• Facturen dienen binnen 14 dagen betaald te worden
• Bij te late betaling kan rente en incassokosten in rekening worden gebracht
• Diensten kunnen gepauzeerd worden bij achterstallige betalingen`,
        },
        clientObligations: {
          title: "5. Verplichtingen opdrachtgever",
          content: `De opdrachtgever is verantwoordelijk voor:

• Het tijdig aanleveren van benodigde informatie en materialen
• Juistheid van de aangeleverde gegevens
• Naleving van wet- en regelgeving m.b.t. advertenties, klantdata en content`,
        },
        intellectualProperty: {
          title: "6. Intellectueel eigendom",
          content: `• Alle door Besteman Marketing ontwikkelde materialen (campagnes, strategieën, AI-modellen, teksten, visuals) blijven eigendom van Besteman Marketing totdat volledige betaling heeft plaatsgevonden
• Na betaling krijgt de opdrachtgever een niet-exclusief gebruiksrecht`,
        },
        liability: {
          title: "7. Aansprakelijkheid",
          content: `• Besteman Marketing is niet aansprakelijk voor indirecte schade zoals winstderving, reputatieschade of gemiste kansen
• Onze aansprakelijkheid is beperkt tot het bedrag van de betreffende opdracht`,
        },
        termination: {
          title: "8. Duur en beëindiging",
          content: `• Overeenkomsten kunnen door beide partijen schriftelijk worden beëindigd met een opzegtermijn van 1 maand, tenzij anders afgesproken
• Besteman Marketing kan de overeenkomst direct beëindigen bij wanbetaling of schending van voorwaarden`,
        },
        forceMajeure: {
          title: "9. Overmacht",
          content: `Bij overmacht (bijv. ziekte, storingen, overheidsmaatregelen) is Besteman Marketing niet verplicht om de overeenkomst na te komen zolang de situatie voortduurt.`,
        },
        governingLaw: {
          title: "10. Toepasselijk recht",
          content: `Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de rechtbank Amsterdam.`,
        },
      },
    },
  }

  const t = content[language]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 lg:px-8 h-16 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <Link href={createLanguageAwareLink("/", language)} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">Besteman Marketing</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={createLanguageAwareLink("/#services", language)}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            {t.nav.services}
          </Link>
          <Link
            href={createLanguageAwareLink("/#about", language)}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            {t.nav.about}
          </Link>
          <Link
            href={createLanguageAwareLink("/#black-friday", language)}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            {t.nav.blackFriday}
          </Link>
          <Link
            href={createLanguageAwareLink("/#contact", language)}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleLanguageChange("nl")}
            className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
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
            className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
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

        {/* Terms of Service Content */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <FileText className="w-4 h-4 mr-2" />
                  {t.title}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-gray-600">{t.lastUpdated}</p>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {Object.entries(t.sections).map(([key, section]) => (
                  <Card key={key} className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-gray max-w-none">
                        {section.content.split("\n").map((paragraph, index) => (
                          <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Section */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {language === "en" ? "Questions about these terms?" : "Vragen over deze voorwaarden?"}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {language === "en"
                      ? "If you have any questions about these terms of service, please don't hesitate to contact us."
                      : "Als je vragen hebt over deze algemene voorwaarden, neem dan gerust contact met ons op."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">bestemanmarketing@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">+31655805499</span>
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
