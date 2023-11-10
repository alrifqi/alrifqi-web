import { SkillItemProp } from "@/models/experience";

export default function SkillItemComponent({ skills }: SkillItemProp) {
    return (
        <div className="flex flex-row justify-start items-center gap-2 mt-2">
            {skills.map((skill, idx) => (
                <div className="flex items-center bg-emerald-800/50 text-emerald-400 px-2 py-1 rounded-full text-xs font-semibold align-middle" key={idx}>{skill}</div>
            ))}
        </div>
    )
}