"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Heart, MessageCircle, MoreHorizontal, Reply, Send, ThumbsUp, ThumbsDown } from "lucide-react";

const Comment = ({ comment, depth = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes || 0);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleReply = () => {
    // Handle reply submission
    console.log("Reply submitted:", replyContent);
    setIsReplying(false);
    setReplyContent("");
  };

  // Limit nesting depth for visual clarity
  const maxDepth = 4;
  const currentDepth = Math.min(depth, maxDepth);
  const marginLeft = currentDepth * 16;

  return (
    <div className={`mt-4 sm:mt-6 ${depth > 0 ? 'border-l-2 border-gray-100 pl-3 sm:pl-4' : ''}`} style={{ marginLeft: `${marginLeft}px` }}>
      <div className="flex space-x-2 sm:space-x-3">
        <div className="flex-shrink-0">
          <Image
            src={comment.avatar || "/images/avatar/02.jpg"}
            alt={comment.author}
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-semibold text-gray-900">{comment.author}</h4>
                {comment.isAuthor && (
                  <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Author
                  </span>
                )}
              </div>
              <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-gray-700">
              {comment.content}
            </p>
          </div>
          
          <div className="mt-2 flex items-center space-x-3 sm:space-x-4 text-xs">
            <span className="text-gray-500">{comment.timeAgo}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1 h-auto text-gray-500 hover:text-red-500"
              onClick={handleLike}
            >
              <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="ml-1">{likesCount}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1 h-auto text-gray-500 hover:text-blue-500"
              onClick={() => setIsReplying(!isReplying)}
            >
              <Reply className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="ml-1">Reply</span>
            </Button>
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-3 sm:mt-4">
              <div className="flex space-x-2 sm:space-x-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/avatar/01.jpg"
                    alt="Your avatar"
                    width={28}
                    height={28}
                    className="rounded-full object-cover w-7 h-7 sm:w-8 sm:h-8"
                  />
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xs sm:text-sm"
                    rows={2}
                  />
                  <div className="mt-2 flex justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsReplying(false)}
                      className="rounded-lg text-xs sm:text-sm h-7 sm:h-9"
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleReply}
                      className="rounded-lg bg-orange-500 hover:bg-orange-600 text-xs sm:text-sm h-7 sm:h-9"
                      disabled={!replyContent.trim()}
                    >
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CommentSection() {
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: "James Wilson",
      avatar: "/images/avatar/01.jpg",
      content: "This is a fantastic article! I've been looking for this information for weeks. The examples are clear and the explanations are thorough. Thank you for sharing your expertise.",
      timeAgo: "2 hours ago",
      likes: 24,
      isAuthor: false,
      replies: [
        {
          id: 11,
          author: "Sarah Johnson",
          avatar: "/images/avatar/03.jpg",
          content: "I completely agree! This saved me so much time. I was struggling with the same concept and this article cleared everything up.",
          timeAgo: "1 hour ago",
          likes: 8,
          isAuthor: true,
          replies: [
            {
              id: 111,
              author: "Mike Chen",
              avatar: "/images/avatar/04.jpg",
              content: "Same here! I've bookmarked this for future reference.",
              timeAgo: "45 minutes ago",
              likes: 3,
              isAuthor: false,
              replies: []
            }
          ]
        },
        {
          id: 12,
          author: "Alex Rodriguez",
          avatar: "/images/avatar/05.jpg",
          content: "While I appreciate the effort, I think there's a simpler approach to this problem. Have you considered using the alternative method I mentioned in the previous discussion?",
          timeAgo: "30 minutes ago",
          likes: 2,
          isAuthor: false,
          replies: []
        }
      ]
    },
    {
      id: 2,
      author: "Emma Thompson",
      avatar: "/images/avatar/06.jpg",
      content: "Could you elaborate more on the performance implications of this approach? I'm working on a similar project and want to make sure I'm optimizing correctly.",
      timeAgo: "4 hours ago",
      likes: 12,
      isAuthor: false,
      replies: []
    },
    {
      id: 3,
      author: "David Park",
      avatar: "/images/avatar/07.jpg",
      content: "The section on error handling could be more comprehensive. What are your recommendations for handling edge cases in production environments?",
      timeAgo: "6 hours ago",
      likes: 7,
      isAuthor: false,
      replies: [
        {
          id: 31,
          author: "Lisa Anderson",
          avatar: "/images/avatar/08.jpg",
          content: "I'd recommend implementing a centralized error logging system with detailed context capture. This has helped us significantly in debugging production issues.",
          timeAgo: "5 hours ago",
          likes: 15,
          isAuthor: false,
          replies: []
        }
      ]
    }
  ];

  const handleSubmit = () => {
    if (newComment.trim()) {
      // Handle comment submission
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8 sm:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Comments (12)</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm text-gray-500">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs sm:text-sm rounded-lg border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent py-1 px-2"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Comment Form */}
      <div className="mb-6 sm:mb-10">
        <div className="flex space-x-3 sm:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="/images/avatar/01.jpg"
              alt="Your avatar"
              width={32}
              height={32}
              className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <div className="flex-1">
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xs sm:text-sm"
              rows={3}
            />
            <div className="mt-2 sm:mt-3 flex justify-end">
              <Button 
                onClick={handleSubmit}
                className="rounded-lg bg-orange-500 hover:bg-orange-600 text-xs sm:text-sm h-8 sm:h-10"
                disabled={!newComment.trim()}
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4 sm:space-y-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-6 sm:mt-10 text-center">
        <Button variant="outline" className="rounded-lg border-gray-200 text-xs sm:text-sm h-8 sm:h-10">
          Load More Comments
        </Button>
      </div>
    </div>
  );
}