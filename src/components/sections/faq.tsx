"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "Nope! There are project ideas for every level — some don't require any code at all. You can build workflows with Make or Zapier, set up a Notion agent, or just craft killer prompts.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop (fully charged, charger too) and enthusiasm. That's it. We'll have wifi, power, and snacks.",
  },
  {
    q: "Can I work with someone else?",
    a: "Absolutely. Solo or pairs — your call. Pairs are great for bouncing ideas, but realistically one person drives the computer. Pick a focus and divide and conquer.",
  },
  {
    q: "What if I don't have a project idea?",
    a: "No worries! We have a whole list of ideas at every difficulty level. Arik will also be around to help you pick something that fits your interests and skill level.",
  },
  {
    q: "Do I need to prepare anything beforehand?",
    a: "Check the pre-event checklist below. At minimum, create a free Claude account so you're ready to go when we start.",
  },
  {
    q: "What if I don't finish my project?",
    a: "Totally fine. Unfinished is welcome. The point is to learn and build — show what you made, what worked, and what surprised you.",
  },
  {
    q: "How long are presentations?",
    a: "5 minutes each. Show your thing, explain how it works (one sentence), share what you learned. No slides needed.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-juice py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          FAQ
        </h2>

        <Accordion multiple={false} className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border bg-white px-6"
            >
              <AccordionTrigger className="font-heading text-left text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
