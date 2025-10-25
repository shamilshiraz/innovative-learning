import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Fonts preconnect and stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ ILH ORGANIZATION SCHEMA (Visible to Google Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Innovative Learning Horizons',
              alternateName: 'ILH',
              url: 'https://www.innovativelh.com/',
              logo: 'https://www.innovativelh.com/innovativelogo.png',
              foundingDate: '2018',
              description:
                'Innovative Learning Horizons (ILH) is a leading professional training institute in Saudi Arabia offering certified, career-focused courses for students and professionals.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Al Khobar, Eastern Province',
                addressLocality: 'Al Khobar',
                addressRegion: 'Eastern Province',
                postalCode: '31952',
                addressCountry: 'SA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966 51 174 2526',
                contactType: 'Customer Support',
                availableLanguage: ['English', 'Arabic'],
              },
              sameAs: [
                'https://www.facebook.com/profile.php?id=61581583274859',
                'https://www.instagram.com/innovative_learning_horizons',
              ],
            }),
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
