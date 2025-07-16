type ProjectCardProps = {
  name: string;
  tech: string;
  description: string;
  link: string;
};

export default function ProjectCard({ name, tech, description, link }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-background/60 shadow-sm">
      <div className="font-bold mb-1">{name}</div>
      <div className="text-sm text-foreground/60 mb-2">{tech}</div>
      <div className="text-foreground/80 mb-2">{description}</div>
      <a href={link} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
} 