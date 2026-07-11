export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyen Xuan Loc',
  alternateName: 'Moonlorddev',
  url: 'https://moonlorddev-portfolio.vercel.app',
  jobTitle: 'Senior Fullstack Developer',
  image: 'https://moonlorddev-portfolio.vercel.app/opengraph-image.png',
  sameAs: ['mailto:moonlorddev@gmail.com', 'tel:+84376971543'],
  knowsAbout: [
    'Fullstack Development',
    'AI Engineering',
    'Cloud Infrastructure',
    'Microservices',
    'Kubernetes',
    'Real-time Systems',
    'Node.js',
    'React',
    'Vue.js',
    'TypeScript',
  ],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Viettel Group',
      url: 'https://viettel.com.vn',
    },
  ],
  educationDetails: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'IBM Full Stack Software Developer',
      issuingOrganization: 'Coursera',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuingOrganization: 'Oracle',
      validFrom: '2025-10',
      validUntil: '2027-10',
    },
  ],
  award: [
    'Advanced Worker Award - Viettel (2025)',
    'Employee of the Year - Blameo (2022)',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Moonlorddev Portfolio',
  url: 'https://moonlorddev-portfolio.vercel.app',
  description:
    'Senior Fullstack Developer with 5+ years building production systems: AI platforms, enterprise chatbots, cloud infrastructure.',
  sameAs: [
    'https://github.com/moonlorddev',
    'mailto:moonlorddev@gmail.com',
  ],
}

export const breadcrumbSchema = (currentPath: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://moonlorddev-portfolio.vercel.app',
    },
    ...(currentPath !== '/'
      ? [
          {
            '@type': 'ListItem',
            position: 2,
            name: currentPath,
            item: `https://moonlorddev-portfolio.vercel.app${currentPath}`,
          },
        ]
      : []),
  ],
})
