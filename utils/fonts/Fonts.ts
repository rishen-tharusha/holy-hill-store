import { Fraunces, Inter } from 'next/font/google'

// Display face for headings — warm, a little editorial, used with restraint.
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Body / utility face.
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})