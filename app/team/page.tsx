import { Metadata } from 'next'
import {PageWrapper} from "@/components/page-wrapper"
import Header from "@/components/blocks/header"
import Team from "@/components/blocks/team"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "Team - Soncresity Industries",
  description: "Meet the Soncresity Industries team",
}

export default function TeamPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen relative">
        <Header/>
        
        <Team/>
        
        <Footer/>
      </main>
    </PageWrapper>
  )
}