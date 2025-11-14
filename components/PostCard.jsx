import React from "react";
import Image from "next/image";
import { Clock, User, Tag, Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PostCard({ post }) {
  // Create a slug from the post title
  const slug = post.title ? post.title.toLowerCase().replace(/\s+/g, '-') : 'post';
  
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="overflow-hidden rounded-xl bg-white text-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <figure>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={240}
            className="aspect-video w-full object-cover"
          />
        </figure>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              <Tag className="w-3 h-3 mr-1" />
              {post.category || "General"}
            </span>
            <span className="inline-flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime || "5 min read"}
            </span>
          </div>

          <header className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
              {post.title}
            </h3>
          </header>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {post.content}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            {/* Author Info */}
            <div className="flex items-center">
              <div className="relative">
                <Image
                  src={post.user_profile || "/images/avatar/02.jpg"}
                  alt={post.user || "Author"}
                  width={32}
                  height={32}
                  className="rounded-full object-cover border-2 border-white shadow-sm w-8 h-8 sm:w-9 sm:h-9"
                />
                <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-2 sm:ml-3">
                <p className="text-sm font-semibold text-gray-900">
                  {post.user || "Anonymous"}
                </p>
                <p className="text-xs text-gray-500">
                  {post.date || "Jun 3, 2023"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-1 sm:space-x-2">
              <Button variant="ghost" size="sm" className="p-1 sm:p-2 h-auto text-gray-500 hover:text-red-500">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 sm:p-2 h-auto text-gray-500 hover:text-blue-500">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 sm:p-2 h-auto text-gray-500 hover:text-yellow-500">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}