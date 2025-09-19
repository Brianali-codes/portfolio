import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'Brian Ali — Developer',
    template: '%s — Brian Ali',
  },
  description: 'Creative developer, specializing in building stunning landing pages, interactive websites, and powerful web & mobile applications.',
  keywords: 'brianali, brian, ali, alibrian, brian ali, brianali-codes, website developer, frontend developer, landing pages, interactive websites, portfolio, brianali-codes-github, portfolio-templates',
  openGraph: {
    images: 'https://brianali.netlify.app' + '/open-graph.jpg',
  },
}

export const sfProDisplay = localFont({
  variable: '--font-sf-pro-display',
  src: [
    {
      path: '../assets/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
})
