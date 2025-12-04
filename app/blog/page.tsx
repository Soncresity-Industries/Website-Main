'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Minecraft Datapack Development",
    excerpt: "Learn the fundamentals of creating custom Minecraft datapacks, from basic commands to advanced mechanics.",
    author: "Soncresity Team",
    date: "2024-01-15",
    tags: ["Minecraft", "Development", "Tutorial"],
    featured: true
  },
  {
    id: 2,
    title: "The Future of Web Development: React and Next.js",
    excerpt: "Exploring the latest trends in web development and how React and Next.js are shaping the future of the web.",
    author: "Soncresity Team", 
    date: "2024-01-10",
    tags: ["Web Development", "React", "Next.js"],
    featured: false
  },
  {
    id: 3,
    title: "Building Efficient Development Tools",
    excerpt: "Best practices for creating development tools that enhance productivity and streamline workflows.",
    author: "Soncresity Team",
    date: "2024-01-05", 
    tags: ["Tools", "Development", "Productivity"],
    featured: false
  }
];

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  const filteredPosts = activeTag 
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;
    
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="page-overlay">
      <section className="blog-page">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '3rem' }}>
            Our Blog
          </h2>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="featured-posts">
              <h2>Featured Posts</h2>
              <div className="featured-posts-grid">
                {featuredPosts.map(post => (
                  <article key={post.id} className="blog-post-card">
                    <div className="featured-badge">Featured</div>
                    <Link href={`/blog/${post.id}`} className="blog-post-title">
                      {post.title}
                    </Link>
                    <div className="blog-post-meta">
                      <span className="blog-post-author">By {post.author}</span>
                      <span className="blog-post-date">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <div className="blog-post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`} className="read-more-btn">
                      Read More
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Blog Filters */}
          <div className="blog-filters">
            <h3>Filter by Topic</h3>
            <div className="tag-filters">
              <button
                className={`tag-filter ${activeTag === null ? 'active' : ''}`}
                onClick={() => setActiveTag(null)}
              >
                All Posts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div className="all-posts">
            <h2>
              {activeTag ? `Posts tagged with "${activeTag}"` : 'All Posts'}
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="blog-posts-grid">
                {filteredPosts.map(post => (
                  <article key={post.id} className="blog-post-card">
                    {post.featured && <div className="featured-badge">Featured</div>}
                    <Link href={`/blog/${post.id}`} className="blog-post-title">
                      {post.title}
                    </Link>
                    <div className="blog-post-meta">
                      <span className="blog-post-author">By {post.author}</span>
                      <span className="blog-post-date">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <div className="blog-post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`} className="read-more-btn">
                      Read More
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-posts">
                <p>No posts found for the selected topic.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}