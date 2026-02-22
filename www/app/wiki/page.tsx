import Header from "@/components/blocks/header"
import Footer from "@/components/blocks/footer"
import {PageWrapper} from "@/components/page-wrapper"
import Wiki from "@/components/blocks/wiki/wiki";
import {Metadata} from "next";
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";

export const metadata: Metadata = {
  title: "Wiki - Soncresity Industries",
  description: "All Wikis for Soncresity Industries' Projects",
  openGraph: {
    title: "Wiki - Soncresity Industries",
    description: "All Wikis for Soncresity Industries' Projects",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/assets/si-logo-transparent.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function WikiPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <main className="min-h-screen theme-transition">
        <Header/>

        <Wiki/>

        <Footer/>
      </main>
    </PageWrapper>
  )
}
