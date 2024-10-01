const nextjsTopics = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    description: 'Learn how to set up a Next.js project, including installation and project structure, to build your first web application quickly.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    slug: 'understanding-pages-and-routing',
    title: 'Understanding Pages and Routing',
    description: 'Discover how Next.js handles routing through file-based routing and dynamic routes, enabling easy navigation in your app.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    slug: 'data-fetching-in-nextjs',
    title: 'Data Fetching in Next.js',
    description: 'Explore how to fetch data in your Next.js applications using built-in methods like `getStaticProps` and `getServerSideProps`.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    slug: 'static-site-generation',
    title: 'Static Site Generation (SSG)',
    description: 'Understand the concept of Static Site Generation and how it improves performance and SEO in Next.js applications.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    slug: 'server-side-rendering',
    title: 'Server-Side Rendering (SSR)',
    description: 'Learn how Server-Side Rendering works in Next.js and when to use it for dynamic data fetching on each request.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    slug: 'api-routes-in-nextjs',
    title: 'API Routes in Next.js',
    description: 'Find out how to create API routes in your Next.js app for backend functionality without needing a separate server.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 7,
    slug: 'css-in-nextjs',
    title: 'Styling Your Next.js App',
    description: 'Learn about various styling options in Next.js, including CSS Modules, styled-components, and global styles.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 8,
    slug: 'using-environment-variables',
    title: 'Using Environment Variables',
    description: 'Understand how to manage sensitive information and configurations using environment variables in Next.js.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 9,
    slug: 'image-optimization',
    title: 'Image Optimization in Next.js',
    description: 'Discover the built-in Image Optimization features in Next.js to automatically optimize images for faster loading times.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 10,
    slug: 'nextjs-and-typescript',
    title: 'Next.js with TypeScript',
    description: 'Get started with TypeScript in your Next.js projects to enhance code quality and development experience.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 11,
    slug: 'internationalization',
    title: 'Internationalization (i18n) in Next.js',
    description: 'Learn how to add multiple languages to your Next.js app, allowing you to reach a broader audience.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 12,
    slug: 'custom-server-in-nextjs',
    title: 'Custom Server in Next.js',
    description: 'Understand how to set up a custom server for more control over your application’s routing and middleware.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 13,
    slug: 'deploying-nextjs-apps',
    title: 'Deploying Next.js Applications',
    description: 'Learn best practices and methods for deploying your Next.js applications to platforms like Vercel and Netlify.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 14,
    slug: 'using-redux-with-nextjs',
    title: 'Using Redux with Next.js',
    description: 'Integrate Redux for global state management in your Next.js applications, simplifying complex data flows.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 15,
    slug: 'nextjs-and-authentication',
    title: 'Authentication in Next.js',
    description: 'Implement authentication flows in your Next.js applications, ensuring secure access for users.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 16,
    slug: 'using-swr-for-data-fetching',
    title: 'Using SWR for Data Fetching',
    description: 'Learn about SWR, a React Hooks library for data fetching that enhances performance and UX in Next.js apps.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id         : 17,
    slug       : 'optimizing-nextjs-performance',
    title      : 'Optimizing Performance in Next.js',
    description: 'Explore strategies for optimizing your Next.js app\'s performance, including code splitting and lazy loading.',
    image      : 'https://via.placeholder.com/150'
  },
  {
    id: 18,
    slug: 'building-a-blog-with-nextjs',
    title: 'Building a Blog with Next.js',
    description: 'Follow a comprehensive guide to create a blog from scratch using Next.js, covering pages, posts, and styling.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 19,
    slug: 'nextjs-and-pwa',
    title: 'Next.js and Progressive Web Apps (PWA)',
    description: 'Transform your Next.js application into a Progressive Web App, providing offline capabilities and improved performance.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 20,
    slug: 'using-next-auth-for-authentication',
    title: 'Using NextAuth.js for Authentication',
    description: 'Utilize NextAuth.js to simplify authentication implementation in your Next.js applications.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 21,
    slug: 'creating-a-custom-document',
    title: 'Creating a Custom Document in Next.js',
    description: 'Learn how to customize the default HTML document structure in your Next.js app to suit your needs.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 22,
    slug: 'nextjs-with-tailwindcss',
    title: 'Using Tailwind CSS with Next.js',
    description: 'Set up Tailwind CSS in your Next.js project for utility-first styling and rapid UI development.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 23,
    slug: 'advanced-routing-in-nextjs',
    title: 'Advanced Routing in Next.js',
    description: 'Explore advanced routing techniques in Next.js, including nested routes and custom route handling.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 24,
    slug: 'creating-a-nextjs-e-commerce-site',
    title: 'Creating a Next.js E-Commerce Site',
    description: 'Learn how to build a fully functional e-commerce site using Next.js, covering product pages, cart, and checkout.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 25,
    slug: 'nextjs-for-static-sites',
    title: 'Using Next.js for Static Sites',
    description: 'Discover why Next.js is an excellent choice for static site generation and how to implement it effectively.',
    image: 'https://via.placeholder.com/150'
  }
];

export default nextjsTopics;
