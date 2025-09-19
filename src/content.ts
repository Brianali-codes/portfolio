import BozzhikImage from '$/profile/profile.png'
import BozzhikImage2 from '$/profile/profile.png'
import BozzhikImage3 from '$/profile/profile.png'
import CursorIcon from '$/icons/cursor.svg'

import GithubIcon from '$/icons/github.svg'
import XIcon from '$/icons/x.svg'
import TelegramIcon from '$/icons/telegram.svg'

import ReactNativeIcon from '$/icons/about/react-native.svg'
import ReactIcon from '$/icons/about/react.svg'
import NextJSIcon from '$/icons/about/nextjs.svg'
import TailwindCSSIcon from '$/icons/about/tailwindcss.svg'
import Controller from '$/icons/about/controller.svg'
import Anime from '$/icons/about/anime.svg'

import GraphiteImage from '$/projects/shiori.png'
import MurinoImage from '$/projects/BGZAP.webp'
import SnableImage from '$/projects/GUAP.webp'
import CarmateImage from '$/projects/emerald.png'
import HotkeysImage from '$/projects/QUICK.webp'
import HiddenImage from '$/projects/FRESCO.webp'



export const CONTENT = {
  global: {
    person: {
      name: 'Brian Ali',
      taglines: ['Turning caffeine into code.', 'Making pixels push themselves.', "I make websites work. You're welcome.", 'Just a dev doing dev things.', 'Coding, creating, conquering (bugs).', 'Making websites that magically work.'],
      pictures: [BozzhikImage, BozzhikImage2, BozzhikImage3],
      cursor: CursorIcon,
    },
    navigation: {
      github: {
        link: 'https://github.com/brianali-codes',
        content: GithubIcon,
      },
      x: {
        link: 'https://x.com/brianali427',
        content: XIcon,
      },
      telegram: {
        link: 'https://t.me/brianali427',
        content: TelegramIcon,
      },
      cv: {
        link: '/Brian-Ali-resume.pdf',
        content: 'Resume',
        color: null,
        contrast: false,
      },
    },
  },
  homePage: {
    about: {
      text: 'I develop interactive web applications using React, Next JS, and Tailwind CSS, while creating powerful mobile apps with React Native. Outside of coding, I’m fueled by Video Games and  Anime — both of which inspire the way I design engaging, user-focused experiences. Whether it’s crafting smooth UI animations or building immersive apps, I approach projects with the same creativity I admire in storytelling and game worlds.',
      badges: [
        {text: 'React Native', icon: ReactNativeIcon},
        {text: 'React', icon: ReactIcon},
        {text: 'Next JS', icon: NextJSIcon},
        {text: 'Tailwind CSS', icon: TailwindCSSIcon},
        {text: 'Video Games', icon: Controller},
        {text: 'Anime', icon: Anime},
      ],
    },
  },
}

export const PROJECTS = {
  graphite: {
    name: 'Remaya Org',
    descriptor: "Mobile Wallpaper App",
    image: GraphiteImage,
    link: 'https://shiori.framer.website/',
    color: '#58944A',
    featured: true,
  },
  carmate: {
    name: 'Emerald Consultation',
    descriptor: 'Emerald consultation website',
    image: CarmateImage,
    link: 'https://emerald-orpin.vercel.app/',
    color: '#4169E1',
    featured: true,
  },
 
  hotkeys: {
    name: 'Quicktech College',
    descriptor: 'quicktechcollege website',
    image: HotkeysImage,
    link: 'https://quicktechcollege.netlify.app/',
    color: '#EADD34',
    featured: true,
  },
  murino: {
    name: 'BGZap',
    descriptor: 'Remove Background of any image.',
    image: MurinoImage,
    link: 'https://bgzap.netlify.app/',
    color: '#525252',
    featured: true,
  },
  snable: {
    name: 'Frapp',
    descriptor: 'Get videogame giveaways',
    image: SnableImage,
    link: 'https://frapp.netlify.app/',
    color: '#2AC6D0',
    featured: true,
  },
  hidden: {
    name: 'Fresco Wallpapers',
    descriptor: 'Get HD wallpapers',
    image: HiddenImage,
    link: 'https://frescowallpapers.netlify.app/',
    color: '#C20000',
    featured: true,
  },

  
}
