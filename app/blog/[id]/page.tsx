import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: "Getting Started with Minecraft Datapack Development",
    content: `
      <h2>Introduction to Minecraft Datapacks</h2>
      <p>Minecraft datapacks are a powerful way to customize your Minecraft experience without the need for mods. They allow you to modify game mechanics, add new features, and create unique gameplay experiences using only vanilla Minecraft commands and data structures.</p>
      
      <h3>What are Datapacks?</h3>
      <p>Datapacks are collections of files that tell Minecraft how to modify or extend the base game. They can include:</p>
      <ul>
        <li>Custom recipes and advancements</li>
        <li>Loot tables for custom drops</li>
        <li>Functions with command sequences</li>
        <li>World generation features</li>
        <li>Custom structures and biomes</li>
      </ul>
      
      <h3>Setting Up Your Development Environment</h3>
      <p>To start developing datapacks, you'll need:</p>
      <ul>
        <li>A text editor (VS Code recommended)</li>
        <li>A Minecraft world for testing</li>
        <li>Basic understanding of JSON format</li>
        <li>Knowledge of Minecraft commands</li>
      </ul>
      
      <h3>Creating Your First Datapack</h3>
      <p>Let's create a simple datapack that adds a custom recipe. Start by creating a folder structure like this:</p>
      <pre>
my_datapack/
├── data/
│   ├── minecraft/
│   │   └── recipes/
│   │       └── custom_recipe.json
│   └── my_namespace/
│       └── functions/
│           └── init.mcfunction
└── pack.mcmeta
      </pre>
      
      <p>This tutorial will guide you through each step of the process, from basic setup to advanced techniques used in our Height Datapack Generator tool.</p>
    `,
    author: "Soncresity Team",
    date: "2024-01-15",
    tags: ["Minecraft", "Development", "Tutorial"]
  },
  2: {
    id: 2,
    title: "The Future of Web Development: React and Next.js",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>The web development landscape has evolved dramatically over the past decade. From simple HTML pages to complex single-page applications, the tools and frameworks we use continue to shape how we build for the web.</p>
      
      <h3>Why React Changed Everything</h3>
      <p>React introduced a component-based approach that revolutionized how we think about user interfaces. Key benefits include:</p>
      <ul>
        <li>Reusable components</li>
        <li>Virtual DOM for performance</li>
        <li>Strong ecosystem and community</li>
        <li>Excellent developer tools</li>
      </ul>
      
      <h3>Next.js: The React Framework for Production</h3>
      <p>Next.js builds upon React with additional features that are essential for modern web applications:</p>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>Built-in optimization</li>
        <li>API routes</li>
        <li>Automatic code splitting</li>
      </ul>
      
      <p>At Soncresity Industries, we've migrated our website to Next.js to take advantage of these performance and SEO benefits while maintaining the dynamic features our users love.</p>
    `,
    author: "Soncresity Team",
    date: "2024-01-10",
    tags: ["Web Development", "React", "Next.js"]
  },
  3: {
    id: 3,
    title: "Building Efficient Development Tools",
    content: `
      <h2>The Importance of Good Development Tools</h2>
      <p>Effective development tools can significantly improve productivity, reduce errors, and enhance the overall development experience. Our Height Datapack Generator is a perfect example of how specialized tools can simplify complex tasks.</p>
      
      <h3>Key Principles for Tool Development</h3>
      <ul>
        <li><strong>User-Centric Design:</strong> Focus on the user's workflow and pain points</li>
        <li><strong>Simplicity:</strong> Make complex tasks simple and intuitive</li>
        <li><strong>Reliability:</strong> Ensure consistent and predictable results</li>
        <li><strong>Performance:</strong> Optimize for speed and efficiency</li>
      </ul>
      
      <h3>Our Development Process</h3>
      <p>When creating tools at Soncresity Industries, we follow a structured approach:</p>
      <ol>
        <li>Identify the problem or inefficiency</li>
        <li>Research existing solutions and their limitations</li>
        <li>Design a user-friendly interface</li>
        <li>Implement with performance in mind</li>
        <li>Test extensively with real-world scenarios</li>
        <li>Iterate based on user feedback</li>
      </ol>
      
      <p>This methodology has helped us create tools that not only solve problems but also enhance the overall development experience for our users.</p>
    `,
    author: "Soncresity Team", 
    date: "2024-01-05",
    tags: ["Tools", "Development", "Productivity"]
  }
};

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const postId = parseInt(params.id);
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="page-overlay">
        <section className="content-section">
          <div className="container">
            <h2 style={{ color: '#fff', textAlign: 'center' }}>Post Not Found</h2>
            <p style={{ color: '#e0e0e0', textAlign: 'center' }}>
              The blog post you're looking for doesn't exist.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog" className="cta-button">
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <div className="blog-post-full">
            <Link href="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>
            
            <div className="blog-post-full-header">
              <h1>{post.title}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-author">By {post.author}</span>
                <span className="blog-post-date">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}