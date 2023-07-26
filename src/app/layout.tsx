import '../styles/globals.css'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'

import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import ButtonMenu from '@/components/button-menu'
import { Metadata } from 'next'

const roboto = RobotoFlex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'PEAL', template: '%s | PEAL' },
  description:
    'Bem-vindo ao meu site! Aqui você encontrará minha biografia, projetos e postagens relacionadas à programação. Explore meu trabalho e descubra minha paixão pela programação.',
  // manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <head>
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </head>
      <body className={`${roboto.className} flex flex-1 sm:relative`}>
        <Sidebar />
        <div className="ml-0 flex-1 p-7 transition-all lg:ml-[290px]">
          <ButtonMenu />
          <div className="flex min-h-screen flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
