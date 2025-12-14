import { Metadata } from 'next'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/next"
import {PageWrapper} from "@/components/page-wrapper"
import Header from "@/components/blocks/header"
import HomeBlock from "@/components/blocks/home"
import Team from "@/components/blocks/team"
import Footer from "@/components/blocks/footer"
import Projects from "@/components/blocks/projects"
import About from "@/components/blocks/about";
import Socials from "@/components/blocks/socials";
import Support from "@/components/blocks/support";
import Partners from "@/components/blocks/partners";
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";

export const metadata: Metadata = {
  title: "Soncresity Industries",
  description: "The official Website of Soncresity Industries",
  openGraph: {
    title: "Soncresity Industries",
    description: "The official Website of Soncresity Industries",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/assets/si-logo-transparent.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function Home() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen relative">
        <Header/>
        <SpeedInsights/>
        <Analytics/>

        <HomeBlock/>

        <About/>

        <Projects py={0} viewall={true}/>

        <Socials/>

        <Team/>

        <Support/>

        <Partners/>

        <Footer/>
      </main>
    </PageWrapper>
  )
}
