import Image from "next/image";
import Banner from "./components/Banner";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PortfolioSection></PortfolioSection>
    </div>
  );
}
