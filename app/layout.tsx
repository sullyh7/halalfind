import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halal Finder',
  description: 'Find local halal restaraunts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
    lang='en'
    className={inter.className}>
    <body className='min-h-screen antialiased'>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <div className='container overflow-hidden max-w-7xl mx-auto h-full pt-12 flex flex-col gap-y-[10rem]'>
          {children}
        </div>
        <Footer/>
      </ThemeProvider>
      <Toaster />
    </body>
  </html>
  )
}
