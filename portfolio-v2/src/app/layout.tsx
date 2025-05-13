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

export const metadata: Metadata = {
    title: "Kai's Portfolio",
    description: "Built by Kaikane Anderson",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body className="">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
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
