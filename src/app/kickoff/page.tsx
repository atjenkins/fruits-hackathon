import type { Metadata } from "next";
import { KickoffDeck } from "@/components/kickoff/kickoff-deck";

export const metadata: Metadata = {
  title: "Kickoff — The Big Squeeze",
  description: "AI Hackathon Kickoff Presentation",
};

const KickoffPage = () => <KickoffDeck />;

export default KickoffPage;
