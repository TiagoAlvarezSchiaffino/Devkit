import { designResources } from "./designResources"
import { developmentResources } from "./development"
import { TechnologiesResources } from "./technologiesResources"
import { ToolsResources } from "./toolsResources"
import { typographyResources } from "./typographyResources"
import { UpskillingResources } from "./upskillingResources"
import { youtubeResources } from "./youtubeResources"

export type ResourceProps = {
    logo: string
    name: string
    description: string
    category: "Design" | "Development" | "Typography" |  "Youtube" | "Technologies" | "Upskilling" | "Tools"
    tags?: string[],
    link: string
}

export const resources: ResourceProps[] = [
    ...designResources,
    ...TechnologiesResources,
    ...ToolsResources,
    ...typographyResources,
    ...UpskillingResources,
    ...youtubeResources,
    ...developmentResources
]