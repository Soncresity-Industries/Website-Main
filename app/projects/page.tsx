import {useAnimation} from "framer-motion";
import Header from "@/components/blocks/header"
import Footer from "@/components/blocks/footer"
import Projects from "@/components/blocks/projects"
import {PageWrapper} from "@/components/page-wrapper"
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Projects - Soncresity Industries",
  description: "All Projects of Soncresity Industries",
  openGraph: {
    title: "Projects - Soncresity Industries",
    description: "All Projects of Soncresity Industries",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/logo.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function ProjectsPage() {
  return (
    <PageWrapper backgroundInterval={45000}>
      <main className="min-h-screen relative">
        <Header/>

        <Projects py={0} viewall={false} />
        <div className="mb-14"/>

        <Footer/>
      </main>
    </PageWrapper>
  )
}
