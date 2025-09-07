import Image from "next/image";
import Banner from "./components/Banner";
import PortfolioSection from "./components/PortfolioSection";
import MyServerdClients from "./components/MyServerdClients";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PortfolioSection></PortfolioSection>
      <MyServerdClients></MyServerdClients>
    </div>
  );
}
