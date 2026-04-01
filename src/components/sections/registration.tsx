"use client";

import { useActionState } from "react";
import { submitRegistration, type RegistrationState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const Registration = () => {
  const [state, formAction, isPending] = useActionState<
    RegistrationState,
    FormData
  >(submitRegistration, { success: false });

  if (state.success) {
    return (
      <section id="register" className="bg-juice py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <CheckCircle2 size={48} className="mx-auto text-primary mb-4" />
          <h2 className="font-heading text-3xl font-bold mb-2">
            You&apos;re in!
          </h2>
          <p className="text-muted-foreground">
            We&apos;ll send you details as the event gets closer. Get hyped.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="bg-juice py-20">
      <div className="mx-auto max-w-lg px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-4">
          Register
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Grab your spot. It takes 30 seconds.
        </p>

        <form action={formAction} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="team_preference">Solo or pair?</Label>
            <Select name="team_preference" required>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Flying solo</SelectItem>
                <SelectItem value="pair">Looking for a pair</SelectItem>
                <SelectItem value="either">Either works</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="experience">Experience level</Label>
            <Select name="experience" required>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Be honest, no wrong answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">New to this</SelectItem>
                <SelectItem value="some">Some experience</SelectItem>
                <SelectItem value="experienced">I build stuff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="project_idea">
              Project idea{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Textarea
              id="project_idea"
              name="project_idea"
              placeholder="What are you thinking about building? Totally fine if you don't know yet."
              rows={3}
              className="bg-white"
            />
          </div>

          {state.error && (
            <p className="text-sm text-destructive">{state.error}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="rounded-full text-base"
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Count me in"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
