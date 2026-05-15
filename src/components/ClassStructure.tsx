import ScrollReveal from './ScrollReveal';
import { structure } from '@/data/structureData';

const ClassStructure = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {structure.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 100}>
          <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 card-glow">
            <h3 className="text-xl font-bold text-primary mb-3 text-center">
              {item.title}
            </h3>
            <div className="text-center space-y-1">
              {item.members.map((member, idx) => (
                <p key={idx} className="text-card-foreground">
                  {member}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ClassStructure;
