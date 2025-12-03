import { Home, Search, Bell, Mail, Bookmark, List, User, MoreHorizontal, HelpCircle } from 'lucide-react';

export default function Cu_Sidebar() {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Bookmark, label: 'Quizzes' },
    { icon: List, label: 'pdfs' },
    { icon: User, label: 'Q-gen' },
  ];

  return (
    
      <nav className="absolute top-[88px] w-full flex flex-col items-center gap-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-102 active:scale-95"
            aria-label={item.label}
            id={index.toString()+"_sidebar-item"}
          >
            <item.icon className="w-6 h-6" size={10} strokeWidth={1}/>
          </button>
        ))}
      </nav>

  );
}