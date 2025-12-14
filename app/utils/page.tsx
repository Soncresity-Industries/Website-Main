import {Metadata} from "next";
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";
import {PageWrapper} from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Utilities - Soncresity Industries",
  description: "All online utilities provided by Soncresity Industries",
  openGraph: {
    title: "Utilities - Soncresity Industries",
    description: "All online utilities provided by Soncresity Industries",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/logo.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function UtilsPage() {
  return (
    <PageWrapper backgroundInterval={30000}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serephixBold mb-6">Utilities</h1>
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
