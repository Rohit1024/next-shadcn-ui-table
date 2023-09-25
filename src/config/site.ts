export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shadcn Table",
  description:
    "Shadcn table component with server side sorting, pagination, and filtering",
  mainNav: [
    {
      title: "Client-Controlled",
      href: "/",
    },
    {
      title: "Server-Controlled",
      href: "/server-controlled",
    },
  ],
  links: {
    github: "https://github.com/Rohit1024/next-shadcn-ui-table",
  },
}