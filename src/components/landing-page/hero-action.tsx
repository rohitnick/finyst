import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "@/components/ui/card"

export default function HeroAction() {
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1); // Step 1: collect email, Step 2: collect plan

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);
        setMessage(''); // Clear any existing messages

        try {
            // Send the email to backend
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Proceed to Step 2: Collect usage plan
                setStep(2);
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("Network error. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePlanSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!plan) {
            setMessage("Please describe how you plan to use Finyst.");
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            // Send the email and plan to backend
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, plan }),
            });

            if (response.ok) {
                setStep(3); // Success step
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("Network error. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="max-w-2xl mx-auto md:p-10 md:border-none rounded-3xl drop-shadow-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition duration-300">
            <CardContent className="py-8 px-4 md:p-10 border rounded-3xl shadow-md">
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <Input
                            onChange={(e: { currentTarget: { value: string; }; }) => setEmail(e.currentTarget.value)} 
                            type="email" 
                            className="mb-4 text-center text-sm md:text-md border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent"
                            placeholder="Enter Your Email to Join the Waitlist"
                            value={email}
                        />
                        <Button 
                            className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Requesting..." : "Request Access"}
                        </Button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handlePlanSubmit}>
                        <Textarea
                            onChange={(e: { currentTarget: { value: string; }; }) => setPlan(e.currentTarget.value)} 
                            className="mb-4 text-center text-sm md:text-md border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent"
                            placeholder="Tell us how do you plan to use Finyst?"
                            value={plan}
                        />
                        <Button
                            className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Moving Up..." : "Move Up The Waitlist"}
                        </Button>
                    </form>
                )}
                {step === 3 && <p className="mt-4 text-center text-primary">You&apos;re in! We&apos;ll reach out soon</p>}
                {message && step !== 3 && <p className="mt-4 text-center text-sm">{message}</p>}
            </CardContent>
        </Card>
    );
}
