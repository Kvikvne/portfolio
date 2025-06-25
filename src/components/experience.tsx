import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Dot } from "lucide-react";
import Image from "next/image";

const experienceCards = [
    {
        title: "Agramont Worldwide Logistics",
        logo: "/Agramont-White-on-white-2048x476.png",
        jobTitle: "Frontend Developer",
        dateRange: "March 2024-Present",
        bullets: [
            "Develop internal and client-facing tools for warehouse, yard, and truck logistics using React.js, Django REST Framework, and PostgreSQL.",
            "Improved API efficiency and reduced frontend data load times by optimizing state management and caching using React Query.",
            "Implemented reusable component libraries and Tailwind CSS utility classes to accelerate development and ensure visual consistency.",
            "Work closely with logistics managers to gather requirements, iterate on features, and deploy updates using CI/CD pipelines.",
        ],
    },
    {
        title: "Universal Robots",
        logo: "/ur_logo.svg",
        jobTitle: "Freelance",
        dateRange: "August 2023",
        bullets: [
            "Built a Python app for Universal Robots automating live robotic data exports to Excel, reducing human error and improving traceability.",
            "Ran socket server in a background thread to maintain UI responsiveness and allow real-time TCP data capture.",
            "Built a simple UI for non-technical operators, improving usability and reducing friction in testing environments.",
            "Helped robotics engineers automate log collection—accelerating debugging and improving the quality of hardware diagnostics.",
        ],
    },
    {
        title: "Siren Creative Co.",
        logo: "/siren.svg",
        jobTitle: "Freelance",
        dateRange: "March 2022 - Present",
        bullets: [
            "Collaborated with designers and brand strategists to build websites that authentically reflect each client's brand identity.",
            "Developed and maintained responsive, visually rich websites that aligned with Siren Creative's design standards and creative direction.",
            "Translated brand concepts into functional digital experiences using modern web technologies.",
            "Supported early-stage branding projects by delivering front-end prototypes and interactive mockups that helped shape final design decisions.",
        ],
    },
];

export function Experience() {
    return (
        <section className="py-5 md:py-20 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                <div>
                    <h4 className="text-4xl font-bold mt-12">Experience</h4>
                    <p className="max-w-2xl mt-6 text-base text-muted-foreground leading-relaxed">
                        I've worked with a range of companies from logistics
                        operations to creative agencies building responsive,
                        user focused applications that solve real business
                        problems. These experiences have sharpened my skills in
                        full stack development, cross-team collaboration, and
                        product delivery across diverse industries.
                    </p>
                </div>
                {experienceCards.map((card, idx) => (
                    <Card key={idx} className="">
                        <CardHeader>
                            <div className="flex gap-5 justify-between items-center flex-wrap">
                                <div>
                                    <CardTitle className="text-lg">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-foreground">
                                        {card.jobTitle}
                                    </CardDescription>
                                    <CardDescription>
                                        {card.dateRange}
                                    </CardDescription>
                                </div>
                                <div className="relative m-auto md:m-0">
                                    <Image
                                        src={card.logo}
                                        alt={card.title}
                                        width={125}
                                        height={10}
                                        className="w-60 md:w-40 drop-shadow-sm "
                                    />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-3">
                                {card.bullets.map((bullet, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-4 h-3">
                                            <Dot className="mt-2 text-muted-foreground" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {bullet}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
