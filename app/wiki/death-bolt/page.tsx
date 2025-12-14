import {Metadata} from "next"
import WikiLayout from "@/components/wiki/layout"
import WikiPageTemplate from "@/components/wiki/page-template"
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";

export const metadata: Metadata = {
  title: "SI: Death Bolt - Wiki - Soncresity Industries",
  description: "Information about the SI: Death Bolt Minecraft Mod by Soncresity Industries",
  openGraph: {
    title: "SI: Death Bolt - Wiki - Soncresity Industries",
    description: "Information about the SI: Death Bolt Minecraft Mod by Soncresity Industries",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/assets/death-bolt/db-icon.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

// Sample markdown content for the wiki page
const wikiContent = `---

`

export default function Death_Bolt_WikiPage() {
  return (
    <WikiLayout>
      <WikiPageTemplate
        title="SI: Death Bolt"
        titleImage="/assets/death-bolt/db-icon.png"
        content={wikiContent}
        lastUpdated="July 26, 2025"
        breadcrumbs={[
          { title: "SI: Death Bolt", href: "/wiki/death-bolt" }
        ]}
        prevPage="#"
        nextPage="#"
        editUrl="https://github.com/SkyKingPX/SI-Website/edit/master/app/wiki/death-bolt/page.tsx"
      />
    </WikiLayout>
  )
}
