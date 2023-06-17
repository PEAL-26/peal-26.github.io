import '../styles/globals.css'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'

import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

const roboto = RobotoFlex({ subsets: ['latin'] })

export const metadata = {
  title: { default: 'PEAL', template: '%s | PEAL' },
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <body className={`${roboto.className} flex flex-1`}>
        <Sidebar />
        <div className="ml-0 flex-1 p-7 lg:ml-[290px]">
          <div className="min-h-screen flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
