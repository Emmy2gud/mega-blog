import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import PostCard from "@/components/PostCard";
import Link from "next/link";

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
  const categories = [
    {
      id: 1,
      name: "Food",
      image: "/images/tag/01.jpg",
    },
    {
      id: 2,
      name: "Animal",
      image: "/images/tag/02.jpg",
    },
    {
      id: 3,
      name: "Car",
      image: "/images/tag/08.jpg",
    },
    {
      id: 4,
      name: "Sport",
      image: "/images/tag/03.jpg",
    },
    {
      id: 5,
      name: "Music",
      image: "/images/tag/04.jpg",
    },
    {
      id: 6,
      name: "Technology",
      image: "/images/tag/05.jpg",
    },
    {
      id: 7,
      name: "Abstract",
      image: "/images/tag/06.jpg",
    },
  ];
  const regularPosts = [
    {
      id: 1,
      title: "How to Drive a Car Safely",
      description:
        "Essential tips and techniques for safe driving. Learn defensive driving strategies, proper vehicle maintenance, and road safety awareness.",
      category: "Automotive",
      readTime: "5 min read",
      image: "/images/car/05.jpg",
      gradient: "bg-gradient-tech",
    },
    {
      id: 2,
      title: "How to Make Dance Music",
      description:
        "Discover the art of electronic music production. From beat-making to mixing, learn the techniques used by professional producers.",
      category: "Music",
      readTime: "8 min read",
      image: "/images/music/08.jpg",
      gradient: "bg-gradient-secondary",
    },
  ];

  const featuredCarouselItems = [
    {
      id: 3,
      title: "Why I Stopped Using Multiple Monitors",
      description:
        "A deep dive into productivity setups. Exploring the benefits and drawbacks of multi-monitor configurations for developers and designers. This comprehensive guide covers workspace optimization, focus management, and the psychology behind effective work environments.",
      category: "Productivity",
      readTime: "6 min read",
      image: "/images/technology/01.jpg",
    },
    {
      id: 4,
      title: "The Future of Remote Work",
      description:
        "How distributed teams are reshaping the modern workplace. From communication tools to company culture, discover what makes remote work successful in the digital age.",
      category: "Technology",
      readTime: "7 min read",
      image: "/images/technology/01.jpg",
    },
  ];

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

  const newposts = [
    {
      id: 1,
      title: "12 Mobile UX Design Trends For 2018",
      image: "/images/technology/04.jpg",
      content:
        "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
      user: users[0].name,
      user_profile: users[0].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      image: "/images/animal/03.jpg",
      content:
        "Why it helps to know what it's like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      user: users[1].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "How to Become a Master Designer",
      image: "/images/abstract/06.jpg",
      content:
        "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition...",
      user: users[2].name,
      user_profile: users[2].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title: "No boat bottomfish: Jetty fishing on the Washington Coast",
      image: "/images/sport/01.jpg",
      content:
        "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home delicious.",
      user: users[3].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
    {
      id: 5,
      title: "Becoming a Self-Driving Car & Machine Learning Engineer",
      image: "/images/car/01.jpg",
      content:
        "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
      user: users[4].name,
      user_profile: users[4].image_url,
      date: "2022-12-06",
    },
    {
      id: 6,
      title:
        "This free course can teach you music programming basics in less than an hour",
      image: "/images/music/04.jpg",
      content:
        "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that.",
      user: users[5].name,
      user_profile: users[5].image_url,
      date: "2022-12-06",
    },
  ];

  const entertainment = [
    {
      id: 1,
      title: "12 Mobile UX Design Trends For 2018",
      image: "/images/technology/04.jpg",
      content:
        "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      image: "/images/animal/03.jpg",
      title: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      content:
        "Why it helps to know what it's like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      user: users[1].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];

  const trendyposts = [
    {
      id: 1,
      title: "How to build a self-driving car in one month",
      image: "/images/car/04.jpg",
      content:
        "Can I learn the necessary computer science to build the software part of a self-driving car in one month?",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "Self-Improvement Has Become An Extreme Sport",
      image: "/images/car/05.jpg",
      content:
        "What we're told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we're supposed to do",
      user: users[1].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "10 Cooking Lessons to Use in Everyday Life",
      image: "/images/food/04.jpg",
      content:
        "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
      user: users[2].name,
      user_profile: users[6].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title:
        "Typography can make or break your design: a process for choosing type",
      image: "/images/technology/06.jpg",
      content:
        "One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers …",
      user: users[3].name,
      user_profile: users[5].image_url,
      date: "2022-12-06",
    },
  ];
  const recentposts = [
    {
      id: 1,
      category: "Finance",
      title: "How to build a self-driving car in one month",
      image: "/images/car/02.jpg",
      content:
        " How Nigeria's Fintech Boom Is Empowering Millions and Redefining Money",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      category: "Technology",
      title: "Self-Improvement Has Become An Extreme Sport",
      image: "/images/car/05.jpg",
      content:
        "What we're told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we're supposed to do",
      user: users[1].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      category: "Food",
      title: "10 Cooking Lessons to Use in Everyday Life",
      image: "/images/food/04.jpg",
      content:
        "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
      user: users[2].name,
      user_profile: users[6].image_url,
      date: "2022-12-06",
    },
  ];
  const technology = [
    {
      id: 1,
      title: "How to build a self-driving car in one month",
      image: "/images/car/01.jpg",
      content:
        "Can I learn the necessary computer science to build the software part of a self-driving car in one month?",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "Self-Improvement Has Become An Extreme Sport",
      image: "/images/car/05.jpg",
      content:
        "What we're told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we're supposed to do",
      user: users[1].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
    {
      id: 3,
      title: "10 Cooking Lessons to Use in Everyday Life",
      image: "/images/food/02.jpg",
      content:
        "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
      user: users[1].name,
      user_profile: users[6].image_url,
      date: "2022-12-06",
    },
    {
      id: 4,
      title:
        "Typography can make or break your design: a process for choosing type",
      image: "/images/technology/02.jpg",
      content:
        "One of the most important skills you can learn as a designer is how to choose type. This is because text is one of the primary ways designers …",
      user: users[2].name,
      user_profile: users[4].image_url,
      date: "2022-12-06",
    },
  ];
  const topposts = [
    {
      id: 1,
      title: "House boating on Lake Shasta",
      image: "/images/sport/04.jpg",
      content:
        "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.",
      user: users[0].name,
      user_profile: users[1].image_url,
      date: "2022-12-06",
    },
    {
      id: 2,
      title: "How to choose the right laptop for programming",
      image: "/images/technology/03.jpg",
      content:
        "Choosing the right laptop for programming can be a tough process. It's easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
      user: users[4].name,
      user_profile: users[3].image_url,
      date: "2022-12-06",
    },
  ];
  return (
    <div>
      <header className="min-h-screen bg-gray-100">
        {/* Category Tags */}
        <div className="bg-white border-b border-gray-200 pt-4">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {categories.map((category) => (
                    <CarouselItem
                      key={category.id}
                      className="md:basis-1/2 lg:basis-1/7"
                    >
                      <Badge className="relative text-white cursor-pointer px-4 py-2 text-sm font-medium rounded-2 w-40 bg-transparent transition-colors flex items-center overflow-hidden">
                        <span
                          className="absolute inset-0 w-full h-full"
                          style={{
                            backgroundImage: `url(${category.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(1px)",
                            zIndex: 0,
                          }}
                          aria-hidden="true"
                        />
                        <span className="relative z-10 px-2 py-1 rounded bg-black/0">{`#${category.name}`}</span>
                      </Badge>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        {/* header card */}
        <div className="min-h-96 bg-white p-4 sm:p-6 md:p-10 pb-20 md:pb-30">
          <div className="max-w-7xl mx-auto">
            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 animate-float">
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row lg:col-span-2 gap-4">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </div>
              </div>

              {/* Right Column - Large Featured Carousel */}
              <div className="lg:col-span-4">
                <FeaturedCarousel items={featuredCarouselItems} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* popular posts */}
        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
          <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 flex">
              <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
              Popular Posts
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
                      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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
        <section className="relative min-h-[450px] w-full p-6 sm:p-8 md:p-12 lg:p-20 mb-10 md:mb-20 overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 opacity-90"></div>
          </div>

          <div className="absolute left-2 sm:left-4 top-6 sm:top-10 rounded-sm">
            <Image
              src="/images/banner/01.png"
              alt="Decorative element"
              width={100}
              height={100}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 floating-img w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
          </div>
          <div className="absolute top-32 sm:top-40 md:top-90 right-2 sm:right-4 transform -translate-y-1/2 rounded-sm">
            <Image
              src="/images/banner/02.png"
              alt="Decorative element"
              width={100}
              height={100}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 floating-img w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center z-10 relative">
            <div className="md:col-span-5 space-y-4 sm:space-y-6 text-right">
              <div className="">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none font-bebas">
                  THIS
                  <br />
                  MONTH
                  <br />
                  <span className="text-primary">HIGHLIGHT</span>
                </h1>
              </div>
              {/* Gradient Date */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold font-oswald">
                <span className="gradient-text">JAN</span>
                <span className="text-black">/25</span>
              </div>
            </div>

            {/* Right Content - Book Cover */}
            <div className="md:col-span-5 flex relative justify-center mt-8 md:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <Image
                  src="/images/banner/03.png"
                  alt="Through Fire & Stone Book Cover"
                  width={200}
                  height={240}
                  className="w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300 mr-0 sm:mr-6 mb-4 sm:mb-0"
                />
                {/* Book Info */}
                <div className="mt-4 sm:mt-6 max-w-xs">
                  <div className="ml-2 rounded-sm z-20">
                    <Image
                      src="/images/banner/04.png"
                      alt="Decorative icon"
                      width={30}
                      height={30}
                      className="object-contain hover:scale-110 transition-transform w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                   <p className="text-lg text-white mb-6 leading-relaxed p-4 rounded w-88 font-medium">
                    <b>The Honest Stories Teller</b> is a Vietnamese daily news
                    fashion and lifestyle magazine covering many topics
                    including fashion, beauty, culture, living, and runway based
                    in Hanoi.
                  </p>
                  {/* Glow Button */}
                  <Button
                    variant="default"
                    className="button-glow bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 font-semibold px-4 sm:px-6 h-8 sm:h-10 ml-2 sm:ml-5 transition-all duration-300 text-sm sm:text-base"
                  >
                    Read all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* new posts */}
        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            New Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
             {newposts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden flex rounded text-slate-500 shadow-md shadow-slate-20 p-2"
              >
                     <Image
                  src={post.image}
                  alt="card image"
                  width={250}
                  height={250}
                  className="aspect-video rounded-lg object-cover mr-3 w-24 h-16 sm:w-[250px] sm:h-[190px]"
                />

                <div className="">
                  <header className="mb-4">
                    <h3 className="text-lg font-semibold text-black ">
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
                        className="rounded-lg   "
                      />
                    </div>
                    <p className="text-sm pl-2">
                      <span className="text-sm font-semibold text-black ">
                        {post.user}
                      </span>
                      <p className=" text-slate-400 mt-1 text-sm">
                        jun 3, 2023
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* entertainment posts */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            Entertainments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="overflow-hidden rounded relative p-2 row-span-3 group">
              <Image
                src="/images/dance/05.jpg"
                alt="card image"
                width={744}
                height={544}
                className="rounded-lg w-full h-64 sm:h-80 object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-gray-100/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 rounded-lg">
                <header className="mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-black text-white">
                    How Music Affects Your Brain Plus 11 Artists To Listen To At
                    Work
                  </h3>
                </header>
                <p className="text-xs sm:text-sm mb-3 sm:mb-5 line-clamp-2 text-white">
                  You've read all your free member-only stories, become a member
                  to get unlimited access. Your membership fee supports the
                  voices you want to hear more from.
                </p>
              </div>
            </div>
            {entertainment.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden flex rounded text-slate-500 shadow-md shadow-slate-20 p-3 sm:p-4"
              >
         
           <Image
                  src={post.image}
                  alt="card image"
                  width={250}
                  height={250}
                  className="aspect-video rounded-lg object-cover mr-3 w-24 h-16 sm:w-[250px] sm:h-[190px]"
                />
                <div className="">
                  <header className="mb-2 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-black">
                      {post.title}
                    </h3>
                  </header>
                  <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-5 line-clamp-2">
                    {post.content}
                  </p>

                  <div className="bg-gray-100 rounded-xl sm:rounded-2xl flex p-2 sm:p-3">
                    <div>
                      <Image
                        src={post.user_profile}
                        alt="card image"
                        width={30}
                        height={30}
                        className="rounded-lg w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>
                    <p className="text-xs sm:text-sm pl-2">
                      <span className="text-xs sm:text-sm font-semibold text-black">
                        {post.user}
                      </span>
                      <p className="text-slate-400 mt-1 text-xs">
                        jun 3, 2023
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* trendy posts */}
        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            Trendy Posts
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
                {" "}
                {/* padding top so content clears the buttons */}
                {trendyposts.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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

        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            Top Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Top Posts Section - 3 columns on large screens with 2 larger cards */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {topposts.map((post) => (
                  <div
                    key={post.id}
                    className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-xl shadow-slate-300 p-4"
                  >
                    <figure>
                      <Image
                        src={post.image}
                        alt="card image"
                        width={600}
                        height={400}
                        className="aspect-video w-full rounded-xl object-cover mb-4 sm:mb-6"
                      />
                    </figure>

                    <div>
                      <header className="mb-3 sm:mb-5">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {post.title}
                        </h3>
                      </header>
                      <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                        {post.content}
                      </p>

                      <div className="bg-gray-100 rounded-xl sm:rounded-2xl flex items-center p-3 sm:p-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={post.user_profile}
                            alt={post.user}
                            width={40}
                            height={40}
                            className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                          />
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="text-sm sm:text-base font-semibold text-slate-900">
                            {post.user}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Jun 3, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg sticky top-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-slate-200">
                  Categories
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="transform transition-transform hover:scale-105"
                    >
                      <Badge className="relative text-white cursor-pointer px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-xl w-full bg-transparent transition-colors flex items-center overflow-hidden shadow-lg">
                        <span
                          className="absolute inset-0 w-full h-full"
                          style={{
                            backgroundImage: `url(${category.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(2px) brightness(0.7)",
                            zIndex: 0,
                          }}
                          aria-hidden="true"
                        />
                        <span className="relative z-10 font-bold text-sm sm:text-base">
                          #{category.name}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-slate-200">
                    Recent Posts
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {recentposts.map((post) => (
                      <div key={post.id} className="flex gap-3 sm:gap-4">
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <span className="inline-block text-xs bg-blue-500 text-center w-16 sm:w-20 p-1 rounded-sm text-white mb-2 sm:mb-3">
                            {post.category}
                          </span>

                          <p className="text-xs sm:text-sm text-black mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-3 font-semibold">
                            {post.content}
                          </p>

                          <span className="text-xs text-slate-500 font-medium">
                            {post.date}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24">
                          <Image
                            src={post.image || "/images/sport/05.jpg"}
                            alt={post.title}
                            width={96}
                            height={96}
                            className="w-full h-full rounded-lg object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* technology posts */}
        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            Technology
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
                {" "}
                {/* padding top so content clears the buttons */}
                {technology.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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

        {/* trendy posts */}
        <div className="max-w-7xl mx-auto px-4 py-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 flex">
            <div className="min-w-[4px] min-h-[10px] mr-2 bg-orange-600" />
            Trendy Posts
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
                {" "}
                {/* padding top so content clears the buttons */}
                {trendyposts.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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
      </main>
    </div>
  );
}