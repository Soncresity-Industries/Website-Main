import ROWiki from "@/components/blocks/wiki/refined-obsidian";
import {Metadata} from "next";
import {metadataImageHeight, metadataImageWidth} from "@/components/variables";

export const metadata: Metadata = {
  title: "SI: Refined Obsidian - Wiki - Soncresity Industries",
  description: "Information about the SI: Refined Obsidian Minecraft Mod by Soncresity Industries",
  openGraph: {
    title: "SI: Refined Obsidian - Wiki - Soncresity Industries",
    description: "Information about the SI: Refined Obsidian Minecraft Mod by Soncresity Industries",
    images: [
      {
        url: "https://soncresityindustries.vercel.app/assets/refined-obsidian/ro-icon.png",
        width: metadataImageWidth,
        height: metadataImageHeight,
      },
    ],
  },
}

export default function Refined_Obsidian_WikiPage() {
    return (
        <ROWiki/>
    )
}