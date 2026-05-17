import { Instagram } from 'lucide-react';

interface StudentCardProps {
  name: string;
  noAbsen: number;
  image: string;
  instagram: string;
}

const StudentCard = ({ name, noAbsen, image, instagram }: StudentCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-glow">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2 flex flex-col items-center text-center">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            #{noAbsen}
          </span>
          <h3 className="text-sm md:text-base font-bold text-card-foreground">{name}</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90"
          >
            <Instagram className="w-3.5 h-3.5" />
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
