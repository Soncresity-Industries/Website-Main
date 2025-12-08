'use client';

import {useState} from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  youtubeUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 4,
    title: "SI Aftermath Weekly Update #4 - Combat System Overhaul",
    excerpt: "This week we've been working on completely redesigning the combat mechanics for a more engaging and strategic gameplay experience.",
    date: "2025-12-08",
    tags: ["SI Aftermath", "Game Development", "Combat", "Weekly Update"],
    image: "/blogs/si_aftermath_weekly_4.jpg",
    youtubeUrl: "https://youtu.be/Z3vgH5ml1AM"
  },
  {
    id: 3,
    title: "SI Aftermath Weekly Update #3 - Environment & World Building",
    excerpt: "Exploring the post-apocalyptic landscapes and the intricate world-building process that brings our vision to life.",
    date: "2025-12-01",
    tags: ["SI Aftermath", "Game Development", "Environment", "Weekly Update"],
    image: "/blogs/si_aftermath_weekly_3.jpg",
    youtubeUrl: "https://youtu.be/Z3vgH5ml1AM"
  },
  {
    id: 2,
    title: "SI Aftermath Weekly Update #2 - Character Development & Story",
    excerpt: "Deep dive into character progression systems and the narrative elements that drive our immersive storytelling.",
    date: "2025-11-24",
    tags: ["SI Aftermath", "Game Development", "Story", "Weekly Update"],
    image: "/blogs/si_aftermath_weekly_2.jpg",
    youtubeUrl: "https://youtu.be/Z3vgH5ml1AM"
  },
  {
    id: 1,
    title: "SI Aftermath Weekly Update #1 - Project Announcement",
    excerpt: "Welcome to our development journey! Get the first look at SI Aftermath and what we're building for the gaming community.",
    date: "2025-11-17",
    tags: ["SI Aftermath", "Game Development", "Announcement", "Weekly Update"],
    image: "/blogs/si_aftermath_weekly_1.jpg",
    youtubeUrl: "https://youtu.be/Z3vgH5ml1AM"
  }
];

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = activeTag
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;

  const copyToClipboard = async (postId: number) => {
    const url = `${window.location.origin}${window.location.pathname}#post-${postId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(postId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <h2 style={{textAlign: 'center', color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '3rem'}}>
            Development Blog
          </h2>

          {/* Blog Filters */}
          <div className="blog-filters">
            <h3>Filter by Tag</h3>
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

          {/* Blog Posts */}
          <div className="blog-posts-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <article id={`post-${post.id}`} key={post.id} className="blog-post-item">
                  <div className="blog-post-image-container">
                    <div className="blog-post-image">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-post-buttons">
                      <button
                        className="blog-share-btn"
                        onClick={() => copyToClipboard(post.id)}
                        title="Share this post"
                      >
                        <Image
                          src="/icons/share.png"
                          alt="Share"
                          width={16}
                          height={16}
                          className="button-icon"
                        />
                        {copiedId === post.id ? 'Copied!' : 'Share'}
                      </button>
                      <a
                        href="https://discord.gg/uqbQvAHHve"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-discord-btn"
                        title="Join our Discord"
                      >
                        <Image
                          src="/icons/discord.png"
                          alt="Discord"
                          width={16}
                          height={16}
                          className="button-icon"
                        />
                        Discord
                      </a>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <div className="blog-post-header">
                      <h3 className="blog-post-title">{post.title}</h3>
                      <div className="blog-post-meta">
                        <span className="blog-post-date">{formatDate(post.date)}</span>
                        <span className="blog-post-time">{formatTime(post.date)}</span>
                      </div>
                    </div>

                    <p className="blog-post-excerpt">{post.excerpt}</p>

                    <div className="blog-post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={post.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-watch-btn"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-posts">
                <p>No posts found for the selected tag.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
