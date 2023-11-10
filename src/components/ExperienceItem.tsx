import { ExperienceItemProp } from "@/models/experience";

export default function ExperienceItemComponent({ startYear, endYear, position, company, description, link, skills }: ExperienceItemProp) {
    return (
        <div className="pt-10 grid grid-cols-6">
            <div className="col-span-1 text-slate-500 text-xs font-semibold flex flex-col justify-start pt-1 w-32">
                { startYear } - { endYear }
            </div>
            <div className="col-span-5 flex flex-col">
                <div className="font-medium text-base">{ company }</div>
                <div className="font-medium text-slate-500">{ position }</div>
                <p>
                    { description }
                </p>
            </div>
        </div>
    )
}