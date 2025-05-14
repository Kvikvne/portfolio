"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import React from "react";

export function EmailButton() {
    const [count, setCount] = React.useState(0);

    const handleCopy = async () => {
        setCount((prev) => prev + 1);
        try {
            await navigator.clipboard.writeText("kaianderson9@gmail.com");
            if (count >= 4) {
                toast("s̷̲̗͒ţ̸̊͜ǫ̸̂̈́p̵̖̌ ̴͉̝͆̋c̷̛̠̏l̷̥̎̎i̸̛͉c̶͚͝k̶̰̎̇ͅi̵̱̞͝ņ̶̌g̵̢̏ ̴̒́͜t̴̪͛̕h̵̺̠̕ė̸̪̤ ̷̩̀̕b̷̢̤͑u̸͍̔͆t̶̲͊t̸̺̟̕o̸͈̊n̸͙͙͠");
            } else {
                toast("Email copied to clipboard.", {
                    description: "I hope you&apos;re not a scammer :)",
                });
            }
        } catch (err) {
            toast.error("Failed to copy email.");
            console.error(err);
        }
    };

    return (
        <Button className="cursor-pointer" variant="ghost" onClick={handleCopy}>
            <Mail />
            Email
        </Button>
    );
}
