type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export default function ExperienceItem({ title, company, date, description }: ExperienceItemProps) {
  return (
    <li className="border-l-2 border-foreground/10 pl-4">
      <div className="font-bold">{title} @ {company}</div>
      <div className="text-sm text-foreground/60">{date}</div>
      <div className="text-foreground/80">{description}</div>
    </li>
  );
} 