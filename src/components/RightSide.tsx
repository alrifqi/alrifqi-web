import ExperienceDatas from "@/models/experienceData";
import ExperienceItemComponent from "./ExperienceItem";

export default function RightSideComponent() {
    return (
        <main className="w-7/12 h-screen overflow-y-show flex flex-col">
            <p className="w-full pt-24">
                I Started my journey as Software Engineer at 2012. My Journey started from company in my city Bandung.
            </p>
            {ExperienceDatas.map((exp) => (
                <ExperienceItemComponent {...exp} />
            ))}
        </main>
    )
}