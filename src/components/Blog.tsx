import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 'welcome-to-our-blog',
    title: 'Welcome to the Soncresity Industries Blog',
    excerpt: 'We\'re excited to share our journey, insights, and updates with the community through our new blog platform.',
    content: `
# Welcome to the Soncresity Industries Blog

We're thrilled to launch our official blog! This platform will serve as a hub for sharing our development journey, technical insights, project updates, and industry thoughts.

## What to Expect

- **Development Updates**: Behind-the-scenes looks at our projects
- **Technical Tutorials**: Guides and tips for developers
- **Industry Insights**: Our thoughts on software development trends
- **Community Highlights**: Featuring amazing community contributions

Stay tuned for regular updates and feel free to engage with us through comments and social media.

Thank you for being part of our journey!
    `,
    author: 'Soncresity Team',
    date: '2025-12-02',
    tags: ['announcement', 'general'],
    featured: true
  },
  {
    id: 'height-datapack-generator-launch',
    title: 'Introducing the Height Datapack Generator',
    excerpt: 'Create custom Minecraft datapacks to modify world height limits with our new web-based tool.',
    content: `
# Introducing the Height Datapack Generator

We're excited to announce the launch of our Height Datapack Generator, now available in our Tools section!

## What It Does

This tool allows Minecraft players to easily create custom datapacks that modify world height limits. Whether you want to build massive skyscrapers or dig deeper underground, our generator makes it simple.

## Key Features

- Support for Minecraft versions 1.17.0 through 1.21.10
- Custom height limit configuration
- Instant datapack generation and download
- Proper formatting for compatibility
- Free to use with no registration required

## How to Use

1. Visit our Tools page
2. Select your Minecraft version
3. Set your desired height limits
4. Add a custom description
5. Generate and download your datapack

Try it out today and let us know what amazing builds you create!
    `,
    author: 'Development Team',
    date: '2025-11-30',
    tags: ['tools', 'minecraft', 'release'],
    featured: false
  }
];

function BlogPost({ post }: { post: BlogPost }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-post-card">
      {post.featured && <div className="featured-badge">Featured</div>}
      <div className="blog-post-header">
        <h2>
          <Link to={`/blog/${post.id}`} className="blog-post-title">
            {post.title}
          </Link>
        </h2>
        <div className="blog-post-meta">
          <span className="blog-post-author">By {post.author}</span>
          <span className="blog-post-date">{formatDate(post.date)}</span>
        </div>
      </div>
      <div className="blog-post-content">
        <p className="blog-post-excerpt">{post.excerpt}</p>
        <div className="blog-post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="blog-post-actions">
        <Link to={`/blog/${post.id}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </article>
  );
}

function BlogDetail({ postId }: { postId: string }) {
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="blog-page">
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <div className="container">
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        <article className="blog-post-full">
          <header className="blog-post-full-header">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-author">By {post.author}</span>
              <span className="blog-post-date">{formatDate(post.date)}</span>
            </div>
            <div className="blog-post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </header>
          <div className="blog-post-content">
            <div dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6} /g, (match) => {
                const level = match.trim().length;
                return `<h${level}>`;
              }).replace(/(<h[1-6]>.*?)(<br>)/g, '$1</h$2>')
            }} />
          </div>
        </article>
      </div>
    </div>
  );
}

function Blog() {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="blog-page">
      <header className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights, updates, and stories from the Soncresity Industries team</p>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="featured-posts">
              <h2>Featured Posts</h2>
              <div className="featured-posts-grid">
                {featuredPosts.map(post => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* Filter Tags */}
          <section className="blog-filters">
            <h3>Filter by Topic</h3>
            <div className="tag-filters">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="all-posts">
            <h2>{selectedTag === 'all' ? 'All Posts' : `Posts tagged "${selectedTag}"`}</h2>
            {filteredPosts.length > 0 ? (
              <div className="blog-posts-grid">
                {filteredPosts.map(post => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="no-posts">
                <p>No posts found for the selected tag.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Blog;
export { BlogDetail };