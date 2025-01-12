import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "keshav-writes-code",
  DESCRIPTION: "Welcome to keshav-writes-code's Portfolio, a portfolio and blog of my thoughts on Stuff",
  AUTHOR: "Keshav",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "dhimankeshav201@gmail.com",
    HREF: "mailto:dhimankeshav201@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Keshav-writes-code",
    HREF: "https://github.com/Keshav-writes-code"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/keshav-dhiman-547b5b238",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

