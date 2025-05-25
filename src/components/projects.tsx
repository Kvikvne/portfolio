import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, CircleAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projectCards = [
    {
        title: "Cartana",
        description:
            "Cartana is a modular analytics platform designed to help e-commerce store owners understand and optimize user behavior. It includes a custom JavaScript SDK that logs high-fidelity user events (e.g. product views, cart actions, checkouts) and routes them to a backend pipeline for processing and storage. A snapshot system and Redis caching are used to power fast, query-efficient dashboards. AI-driven insights help surface abandonment patterns, user segmentation, and optimization opportunities—turning behavioral data into clear, actionable recommendations.",
        thumb: "/cartana-logo-v1-cropped.png",
        link: null,
        badgeItems: [
            "Next.js",
            "Django",
            "FastAPI",
            "MongoDB",
            "PostgreSQL",
            "Redis",
            "RQ",
        ],
        misc: "Note: Codebase is private due to planned commercialization, but I'm happy to demo the product or discuss technical details on request.",
    },
    {
        title: "Fully Automated E-commerce",
        description:
            "Integrated Stripe's API for secure payment processing and leveraged Printify's API to efficiently listproducts and manage order fulfillment. The checkout process seamlessly stores user carts in the database, directing them to a secure Stripe page for payment and shipping details. Upon checkout, a webhook triggers a streamlined request to Printify, automating the production and shipment of orders for a seamless end-to-end user experience.",
        thumb: "/ecom-thumb.jpg",
        link: "https://github.com/Kvikvne/photo-ecom/tree/refactor",
        badgeItems: [
            "React.js",
            "Express.js",
            "MongoDB",
            "Stripe",
            "Printify API",
        ],
        misc: null,
    },
    {
        title: "SocketLogger",
        description:
            "A lightweight desktop tool made for capturing telemetry from robotics hardware over TCP sockets. Built with Python and Tkinter, it listens for incoming messages, stores them in-memory, and exports clean, timestamped CSVs for analysis. Originally developed for a robotics company to automate log collection during testing.",
        thumb: "/socketLoggerThumb.png",
        link: "https://github.com/Kvikvne/socket-csv",
        badgeItems: ["Python", "Pandas", "Tkinter"],
        misc: null,
    },
];

export function Projects() {
    return (
        <section className="py-5 md:py-20 px-6 flex flex-col items-center">
            <h4 className="text-4xl font-bold mt-12">Projects</h4>
            <p className="max-w-2xl my-6 text-base text-muted-foreground leading-relaxed">
                Each project highlights my ability to solve real world problems
                through thoughtful design, clean code, and modern development
                practices. From full stack applications to developer tools,
                these builds reflect both my technical strengths and product
                thinking.
            </p>
            {projectCards.map((card, idx) => (
                <Card key={idx} className="w-full max-w-4xl mb-3">
                    <CardHeader>
                        <div className="flex justify-center md:justify-between items-start gap-4">
                            {/* Left: Title + Optional Tooltip */}
                            <CardTitle className="text-xl flex items-center gap-2">
                                {card.title}
                                {card.misc && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <CircleAlert className="text-muted-foreground h-5 w-5" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="max-w-md text-xs">
                                                    {card.misc}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </CardTitle>

                            {/* Right: Optional external link */}
                            {card.link && (
                                <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0"
                                    asChild
                                >
                                    <Link
                                        href={card.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SquareArrowOutUpRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center md:items-start  gap-4">
                            <Image
                                src={card.thumb}
                                alt={card.title}
                                width={175}
                                height={50}
                                className="rounded-md w-full md:w-45"
                            />
                            <div className="flex flex-wrap gap-2">
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {card.description}
                                </p>
                                {card.badgeItems.map((item, i) => (
                                    <Badge
                                        variant={"secondary"}
                                        key={i}
                                        className="text-xs"
                                    >
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
