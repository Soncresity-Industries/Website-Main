'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    url: "https://discord.gg/uqbQvAHHve",
    icon: "/icons/discord.png",
    description: "Join our community and chat with other members",
    color: "#5865F2"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@SoncresityIndustries", 
    icon: "/icons/youtube.png",
    description: "Watch our videos and tutorials",
    color: "#FF0000"
  },
  {
    name: "GitHub",
    url: "https://github.com/Soncresity-Industries",
    icon: "/icons/github.png",
    description: "Explore our open source projects",
    color: "#181717"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@soncresityindustries",
    icon: "/icons/tiktok.png",
    description: "Follow our latest short-form content", 
    color: "#000000"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/soncresityindustries",
    icon: "/icons/twitch.png",
    description: "Watch our live streams",
    color: "#9146FF"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/soncresityindustries",
    icon: "/icons/instagram.png",
    description: "Check out our visual updates",
    color: "#E4405F"
  },
  {
    name: "Modrinth",
    url: "https://modrinth.com/organization/soncresityindustries",
    icon: "/icons/modrinth.png",
    description: "Download our mods and modpacks",
    color: "#1bd96a"
  },
  {
    name: "CurseForge",
    url: "https://www.curseforge.com/members/soncresityindustries/projects",
    icon: "/icons/curseforge.png",
    description: "Find our mods and modpacks",
    color: "#F16436"
  }
];

export default function SocialLinks() {
  return (
    <div className="social-links-section">
      <h3>Connect With Us</h3>
      <p style={{ color: '#e0e0e0', marginBottom: '2rem', textAlign: 'center' }}>
        Follow us on social media to stay updated with our latest projects and announcements
      </p>
      
      <div className="social-links-grid">
        {socialLinks.map((social, index) => (
          <div key={social.name} className="social-link-card">
            <div className="social-icon">
              <Image
                src={social.icon}
                alt={`${social.name} icon`}
                width={48}
                height={48}
                className="social-icon-image"
              />
            </div>
            <h4>{social.name}</h4>
            <p className="social-description">{social.description}</p>
            <Link 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-button"
              style={{ 
                backgroundColor: social.color,
                borderColor: social.color
              }}
            >
              Visit {social.name} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}