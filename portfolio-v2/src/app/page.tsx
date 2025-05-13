import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <div className="w-full flex justify-center mt-10">
                <Link className="mx-auto" href="#home">
                    <Button className="cursor-pointer " variant={"outline"}>
                        Back to top <ArrowUp />
                    </Button>
                </Link>
            </div>
            <Footer />
        </main>
    );
}
