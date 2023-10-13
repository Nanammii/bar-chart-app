import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '700']
});

export const metadata = {
  title: 'Bar Chart App',
  description: 'Created bar-chart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={manrope.className}>
      <body>
      <main>{children}</main>
      </body>
    </html>
  )
}
