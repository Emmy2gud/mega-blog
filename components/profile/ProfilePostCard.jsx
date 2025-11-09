import React from "react";
import Image from "next/image";
import { Eye, NotebookPen, Star, Trash } from "lucide-react";
export default function ProfilePostCard({ post }) {
  return (
    <div className="">
      <div
        key={post.id}
        className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-20 p-2"
      >
        <figure>
          <Image
            src={post.image}
            alt="card image"
            width={400}
            height={300}
            className="aspect-video w-full rounded-lg object-cover mb-4"
          />
        </figure>

        <div className="">
          <header className="mb-4">
            <h3 className="text-lg font-semibold text-black">{post.title}</h3>
          </header>

      <div className="bg-gray-100 h-15 rounded-2xl flex justify-between items-center p-3">
  {/* Left side */}
  <div className="flex space-x-4 items-center">
    <div className="flex items-center space-x-1">
      <Eye className="w-4 h-4" />
      <span className="text-sm">15k</span>
    </div>
    <div className="flex items-center space-x-1">
      <Star className="w-4 h-4" />
      <span className="text-sm">4.5</span>
    </div>
  </div>

  {/* Right side */}
  <div className="flex space-x-3 items-center">
    <NotebookPen className="w-4 h-4 cursor-pointer" />
    <Trash className="w-4 h-4 cursor-pointer" />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
