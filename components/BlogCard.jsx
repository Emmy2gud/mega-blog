import { Card } from "@/components/ui/card";



const BlogCard = ({ title, description, image, category, readTime, gradient }) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl h-[452px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className={`absolute inset-0 ${gradient} opacity-60 mix-blend-multiply`}></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm opacity-90">
            <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              {category}
            </span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="text-xl lg:text-xl font-medium leading-tight group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm opacity-80 line-clamp-2 group-hover:opacity-90 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;