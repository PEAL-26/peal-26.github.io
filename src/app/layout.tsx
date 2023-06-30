import '../styles/globals.css'
import { Roboto_Flex as RobotoFlex } from 'next/font/google'

import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import ButtonMenu from '@/components/button-menu'

const roboto = RobotoFlex({ subsets: ['latin'] })

export const metadata = {
  title: { default: 'PEAL', template: '%s | PEAL' },
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  //TODO: Remover isso depois do teste
  console.log(process.env.NEXT_PUBLIC_TESTE2)

  return (
    <html lang="pt-pt">
      <body className={`${roboto.className} flex flex-1`}>
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
