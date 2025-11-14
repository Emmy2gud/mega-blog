"use client";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Frown, Meh, Smile, Laugh, Angry } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bookmark,
  Calendar,
  Folder,
  MessageCircleMore,
  Plus,
  Reply,
  Send,
  Share,
} from "lucide-react";
import PostCard from "@/components/PostCard";
import CommentSection from "@/components/CommentSection";

export default function page() {
  const users = [
    {
      id: 1,
      name: "James",
      image_url: "/images/avatar/01.jpg",
    },
    {
      id: 2,
      name: "Louis Hoebregts",
      image_url: "/images/avatar/02.jpg",
    },
    {
      id: 3,
      name: "Mary",
      image_url: "/images/avatar/03.jpg",
    },
    {
      id: 4,
      name: "Jon Kantner",
      image_url: "/images/avatar/04.jpg",
    },
    {
      id: 5,
      name: "Linda",
      image_url: "/images/avatar/05.jpg",
    },
    {
      id: 6,
      name: "Cassie Evans",
      image_url: "/images/avatar/06.jpg",
    },
    {
      id: 7,
      name: "Patricia",
      image_url: "/images/avatar/07.jpg",
    },
  ];

  const topposts = [
    {
      id: 1,
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      image: "/images/car/03.jpg",
      subtitle: "Subhead",

      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      image: "/images/animal/04.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      image: "/images/dance/06.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      image: "/images/food/04.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
    {
      id: 5,
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      image: "/images/sport/05.jpg",
      subtitle: "Subhead",
      date: "2022-12-06",
    },
  ];

  const [selected, setSelected] = useState(null);

  const reactions = [
    { id: 1, icon: <Angry />, color: "text-red-500" },
    { id: 2, icon: <Frown />, color: "text-orange-400" },
    { id: 3, icon: <Meh />, color: "text-yellow-400" },
    { id: 4, icon: <Smile />, color: "text-green-500" },
    { id: 5, icon: <Laugh />, color: "text-blue-500" },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

    const popularposts = [
    {
      id: 1,
      title: "Opening Day of Boating Season, Seattle WA",
      content:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is...",
      user: users[0].name,
      image: "/images/sport/05.jpg",
      user_profile: users[0].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to choose the right laptop for programming",
      content:
        "Choosing the right laptop for programming can be a tough process. It's easy to get confused...",
      user: users[1].name,
      image: "/images/technology/07.jpg",
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How we built the first real self-driving car",
      content:
        "Electric self-driving cars will save millions of lives and significantly accelerate the world's...",
      user: users[2].name,
      image: "/images/car/02.jpg",
      user_profile: users[2].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "How to Persuade Your Parents to Buy Fast Food",
      content:
        "Parents often don't want to buy fast food. They may be worried that it's too expensive, unhealthy...",
      user: users[3].name,
      image: "/images/food/07.jpg",
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];
  return (
    <div>
      <header className=" ">
        {/* Category Tags */}
        <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/docs/components">Featured</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className={"lg:col-span-3 shadow-none border-0"}>
            <CardHeader>
              <CardTitle className={"text-2xl sm:text-3xl md:text-4xl"}>
                How to Spend the Perfect Day on Croatia's Most Magical Island
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div>
                  <Image
                    src={"/images/sport/05.jpg"}
                    alt={""}
                    width={1072}
                    height={598}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4">
                  <span className="flex items-center text-sm sm:text-base">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 pr-1 sm:pr-2" />
                    July 14 , 2022
                  </span>
                  <span className="flex items-center text-sm sm:text-base">
                    {" "}
                    <MessageCircleMore className="w-5 h-5 sm:w-6 sm:h-6 pr-1 sm:pr-2" />
                    comments : 35
                  </span>
                  <span className="flex items-center text-sm sm:text-base">
                    <Folder className="w-5 h-5 sm:w-6 sm:h-6 pr-1 sm:pr-2" />
                    Category : sport
                  </span>
                </div>
                <div className="mt-5">
                  <p className="font-extrabold text-lg sm:text-xl">
                    Don't wait. The purpose of our lives is to be happy!
                  </p>
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6">
                    Upon arrival, your senses will be rewarded with the pleasant
                    scent of lemongrass oil used to clean the natural wood found
                    throughout the room, creating a relaxing atmosphere within
                    the space.
                    <br />
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine.
                    <br />I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-full h-auto overflow-hidden rounded-lg flex-shrink-0 px-4 sm:px-10 py-6 sm:py-10 mt-6">
                  <Image
                    src={"/images/sport/01.jpg"}
                    alt={""}
                    width={872}
                    height={486}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>

                <div className="mt-5">
                  <p className="font-extrabold text-lg sm:text-xl">
                    Not how long, but how well you have lived is the main thing!
                  </p>
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6">
                    When you are ready to indulge your sense of excitement,
                    check out the range of water- sports opportunities at the
                    resort's on-site water-sports center. Want to leave your
                    stress on the water? The resort has kayaks, paddleboards, or
                    the low-key pedal boats. Snorkeling equipment is available
                    as well, so you can experience the ever-changing undersea
                    environment.
                    <br />
                    Not only do visitors to a bed and breakfast get a unique
                    perspective on the place they are visiting, they have
                    options for special packages not available in other hotel
                    settings. Bed and breakfasts can partner easily with local
                    businesses for a smoothly organized and highly personalized
                    vacation experience. The Fife and Drum Inn offers options
                    such as the Historic Triangle Package that includes three
                    nights at the Inn, breakfasts, and admissions to historic
                    Williamsburg, Jamestown, and Yorktown. Bed and breakfasts
                    also lend themselves to romance.
                    <br />
                    Part of the charm of a bed and breakfast is the uniqueness;
                    art, décor, and food are integrated to create a complete
                    experience. For example, the Fife and Drum retains the
                    colonial feel of the area in all its guest rooms. Special
                    features include antique furnishings, elegant four poster
                    beds in some guest rooms, as well as folk art and artifacts
                    from the restoration period of the historic area available
                    for guests to enjoy.
                  </p>
                </div>
              </div>
            </CardContent>
          <CommentSection/>
          </Card>

          <div className={"lg:col-span-1 "}>
            <div className=" gap-2 px-2 w-full rounded-lg flex flex-wrap items-center justify-center sm:justify-between py-2 mt-0">
              <Button className="py-1 text-sm w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 bg-gray-100">
                <span>
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 pl-1 text-black " />
                </span>
                <p className="pr-2 text-black">Share</p>
              </Button>
              <Button className="py-1 text-sm w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 bg-gray-100">
                <span>
                  <Bookmark className="w-5 h-5 sm:w-6 sm:h-6  text-black pl-1" />
                </span>
                <p className="pr-2 text-black">Marking</p>
              </Button>
              <Button className="py-1 text-sm w-full sm:w-auto bg-gray-100">
                <span>
                  <MessageCircleMore className="w-5 h-5 sm:w-6 sm:h-6 pl-1 text-black" />
                </span>
                <p className="pr-2 text-black">Comment</p>
              </Button>
            </div>
            <div className="bg-gray-100 w-full max-w-sm flex items-center gap-4 p-4 rounded-lg mt-4 shadow-sm">
              <Image
                src="/images/avatar/01.jpg"
                alt="Louis Hoebregts"
                width={60}
                height={60}
                className="rounded-lg object-cover flex-shrink-0 w-15 h-15 sm:w-20 sm:h-20"
              />

              <div className="flex flex-col flex-grow justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">
                      Louis Hoebregts
                    </p>
                    <Button className="mt-2 py-1 text-sm w-auto bg-red-500">
                      <span>
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 pl-1" />
                      </span>
                      <p className="pr-2">Follow</p>
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 whitespace-nowrap self-start">
                    27 posts
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 w-full max-w-sm mt-4 rounded-lg p-3 ">
              <div className="flex">
                <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
                <p>Tags</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 text-xs sm:text-sm">
                <span className="bg-white px-2 py-1 rounded">Montenegro</span>
                <span className="bg-white px-2 py-1 rounded">Visit Croatia</span>
                <span className="bg-white px-2 py-1 rounded">Luxury Travel</span>
                <span className="bg-white px-2 py-1 rounded">Travel Log</span>
                <span className="bg-white px-2 py-1 rounded">Paradise Island</span>
                <span className="bg-white px-2 py-1 rounded">Travel Info</span>
              </div>
            </div>

            <div className="bg-gray-100 w-full max-w-sm mt-4 rounded-lg p-3 ">
              <div className="flex">
                <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
                <p>Top post</p>
              </div>

              <div className="flex flex-col gap-3 mt-2 text-sm">
                {topposts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div>
                      <p className="font-bold text-xs mb-1 sm:mb-2 text-gray-800 line-clamp-2">
                        {post.title}
                      </p>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {post.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

                {/* popular posts */}
                      <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
                        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
                          <h2 className="text-2xl font-bold mb-6 flex">
                            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
                            Related Posts
                          </h2>
              
                          <div className="relative w-full">
                            <Carousel
                              opts={{
                                align: "start",
                                loop: true,
                              }}
                              className="w-full"
                            >
                              {/* Controls inside Carousel but visually placed at top right */}
                              <div className="absolute top-0 right-0 z-10 flex gap-2 p-2">
                                <CarouselPrevious className="static h-8 w-8 border rounded-full" />
                                <CarouselNext className="static h-8 w-8 border rounded-full" />
                              </div>
              
                              <CarouselContent className="pt-10">
                                {popularposts.map((post) => (
                                  <CarouselItem
                                    key={post.id}
                                    className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                                  >
                                    <Card className="border-none shadow-none bg-transparent">
                                      <CardContent className="flex items-center justify-center p-2">
                                        <PostCard post={post} />
                                      </CardContent>
                                    </Card>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </div>
                      </div>
      </main>
    </div>
  );
}