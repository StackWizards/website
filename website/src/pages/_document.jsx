import { AbstractWavyBackground } from '@/components/Svg/WavyBackground';
import { Head, Html, Main, NextScript } from 'next/document';



export default function Document(props) {
  const markup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StackWizards",
    "url": "https://www.stackwizards.com",
    "logo": "https://www.stackwizards.com/logo.png",
    "sameAs": [
      "https://twitter.com/stackwizards",
      "https://www.linkedin.com/company/stackwizards",
      "https://github.com/stackwizards"
    ]
  }

  return (
    <Html
      className="h-full bg-white scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(markup)
        }} />
      </Head>
      <AbstractWavyBackground />

      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
