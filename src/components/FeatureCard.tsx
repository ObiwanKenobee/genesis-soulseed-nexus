
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  to: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
  gradient,
  to,
  className,
}: FeatureCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className={cn("absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10", gradient)} />
      
      <div className="relative z-10">
        <div className={cn("p-3 w-14 h-14 rounded-xl mb-4 flex items-center justify-center", color)}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
        
        <div className="mt-4 text-sm font-medium text-primary">
          Explore {title} →
        </div>
      </div>
    </Link>
  );
}
