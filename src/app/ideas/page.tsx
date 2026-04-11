import Nav from "@/components/nav";
import ProjectIdeas from "@/components/sections/project-ideas";

const IdeasPage = () => {
  return (
    <>
      <Nav />
      <main>
        <ProjectIdeas />
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

export default IdeasPage;
