import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Header from '#/Global/Header'
import Particles from '#/Global/Particles'

const SuisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Light.woff2',
      weight: '300',
    },
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Book.woff2',
      weight: '450',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/SuisseIntl-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/SuisseIntl-Bold.woff2',
      weight: '700',
    },
  ],
})

const website = {
  siteName: 'BOZZHIK',
  title: 'BOZZHIK',
  description: "I'm a website developer and user interface designer. I am studying at the HSE to design and develop digital products. I am currently working as a self-employed frontend developer, specializing in creating stunning landing pages and interactive websites.",
  keywords: 'bozzhik, bozhik, bojic, maxim bozhik, maxim bojic',

  url: 'https://bozzhik.ru',
  generator: 'nextjs, react, website',
}

export const metadata: Metadata = {
  title: {
    default: website.title,
    template: `%s — ${website.siteName}`,
  },

  description: website.description,
  keywords: website.keywords,

  metadataBase: new URL(website.url),
  generator: website.generator,

  openGraph: {
    type: 'website',
    url: website.url,
    title: website.title,
    description: website.description,
    siteName: website.title,
    images: `${website.url}/og.jpg`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${SuisseIntl.className} bg-custom-black text-white`}>
        <Header />
        {children}
        <Particles className="fixed inset-0 h-screen overflow-hidden -z-10 opacity-70" />
      </body>
    </html>
  )
}
