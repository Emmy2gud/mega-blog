import React from "react";
import Image from "next/image";
export default function PostCard({ post }) {
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
              <h3 className="text-lg font-semibold text-black">
                {post.title}
              </h3>
            </header>
            <p className="text-sm mb-5 line-clamp-2">{post.content}</p>

            <div className="bg-gray-100 h-15 rounded-2xl flex p-3">
              <div>
                <Image
                  src={post.user_profile}
                  alt="card image"
                  width={40}
                  height={40}
                  className="rounded-lg  mb-4 "
                />
              </div>
              <p className="text-sm pl-2">
                <span className="text-sm font-semibold text-black ">
                  {post.user}
                </span>
                <p className=" text-slate-400 mt-1 text-sm">jun 3, 2023</p>
              </p>
            </div>
          </div>
        </div>
   
    </div>
  );
}
