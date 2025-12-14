import { Metadata } from 'next'
import {PageWrapper} from "@/components/page-wrapper"
import Header from "@/components/blocks/header"
import Support from "@/components/blocks/support"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "Support - Soncresity Industries",
  description: "Support Soncresity Industries",
}

export default function SupportPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen relative">
        <Header/>
        
        <Support/>
        
        <Footer/>
      </main>
    </PageWrapper>
  )
}