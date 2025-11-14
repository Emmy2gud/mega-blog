"use client";

import { useState } from "react";
import { Heart, MessageCircle, MoreHorizontal, Reply, Send, ThumbsUp, ThumbsDown } from "lucide-react";

const Comment = ({ comment, isNested = false }) => {
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
    console.log("Reply submitted:", replyContent);
    setIsReplying(false);
    setReplyContent("");
  };

  return (
    <div className={`${isNested ? 'mt-4 sm:mt-6 pl-6 sm:pl-12 border-l-2 border-gray-100' : 'mt-6'}`}>
      <div className="flex space-x-2 sm:space-x-3">
        <div className="flex-shrink-0">
          <img
            src={comment.avatar || "/images/avatar/02.jpg"}
            alt={comment.author}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex items-start sm:items-center justify-between gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-gray-900 truncate">{comment.author}</h4>
                {comment.isAuthor && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 w-fit">
                    Author
                  </span>
                )}
              </div>
              <button className="p-1 h-auto text-gray-400 hover:text-gray-600 flex-shrink-0">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-gray-700 break-words">
              {comment.content}
            </p>
          </div>
          
          <div className="mt-2 flex items-center flex-wrap gap-3 sm:gap-4 text-xs">
            <span className="text-gray-500">{comment.timeAgo}</span>
            <button 
              className="flex items-center gap-1 p-1 h-auto text-gray-500 hover:text-red-500"
              onClick={handleLike}
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{likesCount}</span>
            </button>
            <button 
              className="flex items-center gap-1 p-1 h-auto text-gray-500 hover:text-blue-500"
              onClick={() => setIsReplying(!isReplying)}
            >
              <Reply className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Reply</span>
            </button>
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-3 sm:mt-4">
              <div className="flex space-x-2 sm:space-x-3">
                <div className="flex-shrink-0">
                  <img
                    src="/images/avatar/01.jpg"
                    alt="Your avatar"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <textarea
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent p-2 sm:p-3 text-sm resize-none"
                    rows={3}
                  />
                  <div className="mt-2 flex justify-end gap-2">
                    <button 
                      onClick={() => setIsReplying(false)}
                      className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleReply}
                      className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                      disabled={!replyContent.trim()}
                    >
                      <Send className="w-3.5 h-3.5" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div>
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} isNested={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CommentSection() {
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState("newest");

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
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8 sm:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Comments (12)</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-500">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs sm:text-sm rounded-lg border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent px-2 py-1"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Comment Form */}
      <div className="mb-8 sm:mb-10">
        <div className="flex space-x-2 sm:space-x-4">
          <div className="flex-shrink-0">
            <img
              src="/images/avatar/01.jpg"
              alt="Your avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent p-3 text-sm resize-none"
              rows={4}
            />
            <div className="mt-3 flex justify-end">
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                disabled={!newComment.trim()}
              >
                <Send className="w-4 h-4" />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} isNested={false} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 sm:mt-10 text-center">
        <button className="px-6 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
          Load More Comments
        </button>
      </div>
    </div>
  );
}