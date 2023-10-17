import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Seu Novo Banco Digital: Simplificando Suas Finanças com Tecnologia Avançada',
  description:
    'Explore as possibilidades de um banco digital inovador, onde a conveniência e a tecnologia se unem para simplificar suas finanças. Com uma ampla gama de serviços bancários online, desde contas correntes até investimentos, estamos aqui para atender às suas necessidades financeiras de forma eficiente. Gerencie seu dinheiro, faça transações seguras e alcance seus objetivos financeiros com facilidade. Descubra como nossa plataforma intuitiva pode tornar suas operações bancárias mais convenientes do que nunca.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
