import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Dot } from "lucide-react";

const experienceCards = [
    {
        title: "Agramont Worldwide Logistics",
        logo: "/Agramont-White-on-white-2048x476.png",
        jobTitle: "Frontend Developer",
        dateRange: "March 2024-Present",
        bullets: [
            "Built internal web applications for yard, truck, and warehouse logistics, streamlining operations and improving efficiency.",
            "Partnered with UI/UX designers and backend developers to deliver responsive interfaces tailored to logistics teams and external partners.",
            "Integrated and optimized API communication between frontend and backend systems for faster data exchange.",
            "Led planning sessions with stakeholders to align on evolving business needs—resulting in higher adoption rates and more efficient workflows.",
        ],
    },
    {
        title: "Universal Robots",
        logo: "/ur_logo.svg",
        jobTitle: "Freelance",
        dateRange: "August 2023",
        bullets: [
            "Developed a lightweight desktop tool to capture and store telemetry from Universal Robots hardware via TCP sockets using Python and Tkinter.",
            "Ran socket server in a background thread to maintain UI responsiveness and allow real-time TCP data capture",
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
                            <div className="flex gap-5 justify-between items-center flex-wrap-reverse">
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
                                <img
                                    src={card.logo}
                                    alt={card.title}
                                    className="0 w-45 max-h-fit object-contain object-top drop-shadow-sm bg-accent p-4 dark:bg-card rounded-md"
                                />
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
