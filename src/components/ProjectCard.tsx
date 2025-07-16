type ProjectCardProps = {
  name: string;
  tech: string;
  description: string;
  link: string;
};

export default function ProjectCard({ name, tech, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white/30 backdrop-blur-lg border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg p-4">
      <div className="font-bold mb-1">{name}</div>
      <div className="text-sm text-foreground/60 mb-2">{tech}</div>
      <div className="text-foreground/80 mb-2">{description}</div>
      <a href={link} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
} 