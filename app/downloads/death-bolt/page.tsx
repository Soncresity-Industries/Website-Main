import {Metadata} from "next"
import {PageWrapper} from "@/components/page-wrapper";
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";

export const metadata: Metadata = {
  title: "SI: Death Bolt - Downloads - Soncresity Industries",
  description: "Download SI: Death Bolt, a Mod by Soncresity Industries that summons a lightning bolt upon player death",
  openGraph: {
    title: "SI: Death Bolt - Downloads - Soncresity Industries",
    description: "Download SI: Death Bolt, a Mod by Soncresity Industries that summons a lightning bolt upon player death",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/assets/si-logo-transparent.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function Death_Bolt_DownloadPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serephixBold mb-6">Download SI: Death Bolt</h1>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Work in Progress</h2>
          <p className="text-muted-foreground">
            This section is currently under development. Please check back later.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}
