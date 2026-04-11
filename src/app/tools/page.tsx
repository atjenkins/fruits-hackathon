import Nav from "@/components/nav";
import ToolsResources from "@/components/sections/tools-resources";

const ToolsPage = () => {
  return (
    <>
      <Nav />
      <main>
        <ToolsResources />
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

export default ToolsPage;
