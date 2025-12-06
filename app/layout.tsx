// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'
// import { NavBar } from '@/components/nav-bar';
// import Fav_icon from '../public/fav_i.png'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "BOG'OT - SHIMANAY MEBEL",
//   icons: {
//     icon: [
//       {
//         url: "",
//         media: '(prefers-color-scheme: light)',
//       }
//     ]
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="uz">
//       <body className={`font-sans antialiased`}>
//         <NavBar />
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }

















import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { NavBar } from '@/components/nav-bar'
import Fav_icon from '../public/fav_i.png'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOG'OT - SHIMANAY MEBEL",
  icons: {
    icon: [
      {
        url: '/fav_i.png', // <-- You can also use the public folder path directly
        type: 'image/png',
      }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/fav_i.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}