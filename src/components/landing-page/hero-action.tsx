import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { googleFormLink } from "@/lib/constants";



export default function HeroAction() {
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const link = googleFormLink +`?emailAddress=`+email;
        const win = window.open(link, '_blank');
        if (win != null) {
            win.focus();
        }
    }

    return (
        <Card className="max-w-2xl mx-auto md:p-12 md:border-dashed rounded-3xl shadow-md">
            <CardContent className="p-12 border rounded-3xl shadow-md">
            <form onSubmit={handleFormSubmit}>
                <Input onChange={e => setEmail(e.currentTarget.value)} type="email" className="mb-4 text-center text-md border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent" placeholder="Enter Your Email to Join the Waitlist" />
                <Button className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">Request Access</Button>
            </form>
            </CardContent>
        </Card>
    )
}