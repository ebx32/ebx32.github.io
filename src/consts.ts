import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
import Bluesky from "@/assets/icons/bluesky.svg"

export const SITE = {
  title: "Kyle Atwood",
  description: "Security, programming and physics blog.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
    defaultPostImage: "/static/placeholder.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/authors", label: "Authors" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/ebx32", label: "GitHub", icon: GitHub },
  { href: "https://bsky.app/profile/astrokyle.bsky.social", label: "Bluesky", icon: Bluesky },
  { href: "mailto:ebx32@proton.me", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
