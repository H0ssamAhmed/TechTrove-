import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import ConvexClientProvider from './providers/ConvexClientProvider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechTrove',
  description: 'TechTrove is a professional technical articles website in software, soft skills, and so on',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className=' bg-[#041b2d] text-white'>
        <body className={inter.className}>
          <ConvexClientProvider>
            <Navbar />
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
