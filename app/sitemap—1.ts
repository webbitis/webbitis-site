import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webbitis.com",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/ai-integration",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/seo",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/web-design",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/web-invitations",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/website-redesign",
      lastModified: new Date(),
    },
    {
      url: "https://webbitis.com/services/workflow-automation",
      lastModified: new Date(),
    },
  ];
}