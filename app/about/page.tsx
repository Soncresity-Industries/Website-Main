import { Metadata } from 'next'
import {PageWrapper} from "@/components/page-wrapper"
import Header from "@/components/blocks/header"
import About from "@/components/blocks/about"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "About - Soncresity Industries",
  description: "Learn more about Soncresity Industries",
}

export default function AboutPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen relative">
        <Header/>
        
        <About/>
        
        <Footer/>
      </main>
    </PageWrapper>
  )
}