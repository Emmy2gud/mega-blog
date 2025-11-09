"use client";
import React, { useState } from "react";
import {
  Mail,
  Send,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
  Clock,
  Calendar,
  Heart,
  Bookmark,
  FileText,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    "Technology",
    "Design",
    "Business",
    "Lifestyle",
    "Travel",
    "Food",
  ];

  const recentPosts = [
    {
      title: "The Future of Web Development",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "Technology",
    },
    {
      title: "Design Systems That Scale",
      date: "Dec 18, 2024",
      readTime: "7 min read",
      category: "Design",
    },
    {
      title: "Remote Work Revolution",
      date: "Dec 15, 2024",
      readTime: "4 min read",
      category: "Business",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      likes: 245,
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      likes: 189,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      likes: 342,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      likes: 156,
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      likes: 298,
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      likes: 234,
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=300&h=300&fit=crop",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-white py-15 px-6 relative overflow-hidden mt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500  rounded-2xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-footer-text">
                  Stay Updated
                </h3>
              </div>
              <p className="text-white text-lg font-normal leading-relaxed max-w-md">
                Don't miss a beat in the fast-evolving world of technology and
                design. Join our thriving community of thousands of developers
                and designers who rely on our exclusive, in-depth articles and
                practical tutorials. We deliver crucial insights on emerging
                trends, essential best practices, and cutting-edge tools
                directly to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 bg-footer-text/5 border border-footer-border rounded-2xl text-footer-text placeholder-footer-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500  text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-smooth transform hover:scale-105 group whitespace-nowrap"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Subscribe
                  <Send
                    className={`w-5 h-5 transition-smooth ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-lg text-black font-semibold">
                Follow us on social media
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Youtube, label: "YouTube", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-500/20 hover:bg-primary/20 rounded-2xl flex items-center justify-center text-footer-muted hover:text-primary transition-smooth transform hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-footer-text flex items-center gap-3">
              <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
              Categories
            </h3>
            <div className="space-y-3">
              {categories.slice(0, 8).map((category, index) => (
                <a
                  key={category}
                  href="#"
                  className="block text-footer-muted hover:text-primary transition-smooth py-1 hover:translate-x-2 transform"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-footer-text flex items-center gap-3">
                <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
                Social Network
              </h3>
    <div className="flex space-x-3 items-center">
      <div className="flex items-center min-h-[40px] bg-gradient-to-r from-blue-700 to-pink-600 min-w-[64px] rounded-sm p-3 space-x-2">
        <Instagram className="w-5 h-5 text-white" />
        <p className="text-white">Instagram</p>
      </div>
      <div className="flex items-center justify-center min-h-[40px] bg-blue-700 min-w-[40px] rounded-sm p-3">
        <TwitterIcon />
      </div>
    </div>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-footer-text flex items-center gap-3">
              <FileText className="w-5 h-5 text-orange-500" />
              Recent Posts
            </h3>
            <div className="space-y-5">
              {recentPosts.map((post, index) => (
                <article key={index} className="group cursor-pointer">
                  <h4 className="font-semibold text-footer-text group-hover:text-primary transition-smooth mb-2 leading-snug">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-footer-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block mt-2 text-xs font-medium text-white bg-gray-500/20 px-2 py-1 rounded-lg">
                    {post.category}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-footer-text flex items-center gap-3">
              <Instagram className="w-5 h-5 text-pink-500" />
              Instagram
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {instagramPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="flex items-center gap-1 text-white text-sm font-medium">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-footer-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent">
                  <span className="text-2xl font-bold text-orange-500">
                    MEGA
                  </span>
                  <span className="text-2xl font-bold text-orange-500">
                    .news
                  </span>
                </h2>
                <div className="hidden sm:block w-px h-6 bg-orange-500 "></div>
                <p className="text-footer-muted">
                  Empowering creators with modern insights
                </p>
              </div>
              <p className="text-footer-muted text-sm">
                © 2024 BlogFootprint. All rights reserved. Made with ❤️ for the
                creative community.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm">
              <a
                href="#"
                className="text-footer-muted hover:text-primary transition-smooth"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-footer-muted hover:text-primary transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-footer-muted hover:text-primary transition-smooth"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-footer-muted hover:text-primary transition-smooth"
              >
                Contact
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-footer-muted hover:text-primary transition-smooth flex items-center gap-2 group"
              >
                Back to Top
                <ArrowRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-smooth" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
