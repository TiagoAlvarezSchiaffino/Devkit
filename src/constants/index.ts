import { NavigationCardProps } from "@/components/custom/NavigationCard"
import { BrainCircuit, ImageUp, Paintbrush2 } from "lucide-react"

export const NavLinks: {
    title: string,
    href: string,
    icon: any
}[] = [
    {
        title: "Image tools",
        href: "/images",
        icon: Paintbrush2
    },
    {
        title: "Color tools",
        href: "/colors",
        icon: ImageUp 
    },
    {
        title: "Ai Generation",
        href: "/ai",
        icon: BrainCircuit
    },
]

export const ImageNavLinks: NavigationCardProps[] = [
    {
        image: {
            src: "/public/compress.webp",
            alt: "Compress image"
        },
        title: "Compress image",
        description: "Compress image for faster Image load time",
        href: "/images/compress"
    },
    {
        image: {
            src: "/public/convert.webp",
            alt: "Convert image to webp"
        },
        title: "Convert image to webp",
        description: "Convert image types from one to another",
        href: "/images/convert"
    },
    {
        image: {
            src: "/logos/RemoveBG.png",
            alt: "background removal"
        },
        title: "Remove Background",
        description: "Remove background of an image",
        href: "/images/removebg"
    }
] 

export const aiNavLinks: NavigationCardProps[] = [
    {
        image: {
            src: "",
            alt: "Ai to json"
        },
        title: "Ai generate json",
        description: "Generate json easily with json, some dummy json or something else.",
        href: "/ai/json"
    },  
] 

export const colorsNavLinks: NavigationCardProps[] = [
    {
        image: {
            src: "/colorconvert.webp",
            alt: "Ai to json"
        },
        title: "Convert a color",
        description: "Convert one color type to another.",
        href: "/colors/convert"
    },
]
