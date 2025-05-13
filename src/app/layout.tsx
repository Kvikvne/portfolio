import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "@/components/theme-toggle";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // adjust as needed
});

export const metadata = {
    title: "Kaikane Anderson - Software Engineer",
    description:
        "Full-stack engineer focused on building scalable, user-centric web apps using React, Next.js, Django, and FastAPI.",
    keywords: [
        "Kaikane Anderson",
        "Software Engineer",
        "Frontend Developer",
        "Next.js",
        "React.js",
        "Django",
        "FastAPI",
        "Full Stack Developer",
        "Portfolio",
        "React Developer",
        "Web Developer Portfolio",
        "Python",
        "JavaScript",
        "TypeScript",
    ],
    openGraph: {
        title: "Kaikane Anderson - Software Engineer",
        description:
            "Explore Kaikane's work building performant, accessible, and modern web apps with clean design and real-world impact.",
        url: "https://portfolio.kvikvne.com",
        siteName: "Kaikane Anderson",
        images: [
            {
                url: "/OG-preview-image.png",
                width: 1200,
                height: 630,
                alt: "Kaikane Anderson Portfolio Preview",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kaikane Anderson - Software Engineer",
        description:
            "Clean, thoughtful engineering. Explore Kaikane's personal work and commercial SaaS projects.",
        images: ["/OG-preview-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <link rel="icon" href="/favicon-32x32.png" sizes="any" />
                <head />
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="container mx-auto px-1 md:px-6 lg:px-12">
                            <ModeToggle />
                            {children}
                            <Toaster />
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
