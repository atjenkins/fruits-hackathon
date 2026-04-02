import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Schedule from "@/components/sections/schedule";
import ProjectIdeas from "@/components/sections/project-ideas";
import ToolsResources from "@/components/sections/tools-resources";
import Guides from "@/components/sections/guides";
import Rules from "@/components/sections/rules";
import FAQ from "@/components/sections/faq";
import Registration from "@/components/sections/registration";
import { supabase } from "@/lib/supabase";
import { connection } from "next/server";

const Home = async () => {
  await connection();

  const { data: attendees } = await supabase
    .from("registrations")
    .select("name, team_preference")
    .order("created_at", { ascending: true });

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Schedule />
        <ProjectIdeas />
        <ToolsResources />
        <Guides />
        <Rules />
        <FAQ />
        <Registration attendees={attendees ?? []} />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>
          Made with juice by{" "}
          <span className="font-semibold text-primary">Neural Nectar</span>
        </p>
      </footer>
    </>
  );
};

export default Home;
