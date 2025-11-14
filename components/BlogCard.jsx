import { Card } from "@/components/ui/card";
import Link from "next/link";

const BlogCard = ({ title, description, image, category, readTime, gradient }) => {
  // Create a slug from the title
  const slug = title ? title.toLowerCase().replace(/\s+/g, '-') : 'post';
  
  return (
    <Link href={`/blog/${slug}`} className="block">
      <Card className="group relative overflow-hidden rounded-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[452px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
          <div className={`absolute inset-0 ${gradient} opacity-60 mix-blend-multiply`}></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
              <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                {category}
              </span>
              <span>{readTime}</span>
            </div>
            
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium leading-tight group-hover:text-white/90 transition-colors">
              {title}
            </h3>
            
            <p className="text-xs sm:text-sm md:text-base opacity-80 line-clamp-2 sm:line-clamp-3 group-hover:opacity-90 transition-opacity">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;