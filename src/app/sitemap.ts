import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://peal-26.github.io',
      lastModified: new Date(),
    },
    {
      url: 'https://peal-26.github.io/biografia',
      lastModified: new Date(),
    },
    {
      url: 'https://peal-26.github.io/projectos',
      lastModified: new Date(),
    },
    {
      url: 'https://peal-26.github.io/posts',
      lastModified: new Date(),
    },
    {
      url: 'https://peal-26.github.io/hobbes',
      lastModified: new Date(),
    },
  ]
}
