import { Metadata } from 'next'
import {PageWrapper} from "@/components/page-wrapper"
import Header from "@/components/blocks/header"
import Socials from "@/components/blocks/socials"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "Socials - Soncresity Industries",
  description: "Connect with Soncresity Industries on social media",
}

export default function SocialsPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen relative">
        <Header/>
        
        <Socials/>
        
        <Footer/>
      </main>
    </PageWrapper>
  )
}