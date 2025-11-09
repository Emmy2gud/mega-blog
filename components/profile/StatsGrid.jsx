import { Smile, Frown, Meh } from "lucide-react";

const stats = [
  { month: "August 2022", points: "20 Points", icon: <Smile className="text-green-500" /> },
  { month: "September 2022", points: "20 Points", icon: <Smile className="text-blue-500" /> },
  { month: "October 2022", points: "30 Points", icon: <Smile className="text-indigo-500" /> },
  { month: "May 2022", points: "20 Points", icon: <Meh className="text-yellow-500" /> },
  { month: "July 2022", points: "25 Points", icon: <Meh className="text-orange-500" /> },
  { month: "February 2022", points: "20 Points", icon: <Frown className="text-red-500" /> },
  { month: "March 2022", points: "20 Points", icon: <Frown className="text-rose-500" /> },
  { month: "April 2022", points: "20 Points", icon: <Smile className="text-green-600" /> }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 bg-white rounded-xl  p-2 text-center shadow-lg shadow-gray-300">
      {stats.map((item, i) => (
        <div
          key={i}
          className="p-3 border rounded-lg flex flex-col items-center bg-gray-50"
        >
            <p className="text-xs mt-1">{item.month}</p>
          {item.icon}
        
          <p className="text-[10px] text-gray-500">{item.points}</p>
        </div>
      ))}
    </div>
  );
}
