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
        {/* ✅ Basic Meta Fallbacks */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ Favicon & PWA */}
        <link rel="icon" href="/ilh.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#b1976b" />

        {/* ✅ Ahref Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="6GsYocIP1Z05nJKLoVupGA" async></script>
      

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WCKV5V2S');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XDYZ295VLS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XDYZ295VLS');
            `,
          }}
        />

        {/* ✅ Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1379975270168364');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1379975270168364&ev=PageView&noscript=1"
          />
        </noscript>

        {/* ✅ ILH ORGANIZATION SCHEMA */}
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
                'https://www.linkedin.com/company/innovativelh',
              ],
            }),
          }}
        />

        {/* ✅ WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://www.innovativelh.com/',
              name: 'Innovative Learning Horizons (ILH)',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.innovativelh.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>

      <body>
{/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCKV5V2S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
