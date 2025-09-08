import Image from "next/image";
import Banner from "./components/Banner";
import PortfolioSection from "./components/PortfolioSection";
import MyServerdClients from "./components/MyServerdClients";
import MyInsights from "./components/MyInsights";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PortfolioSection></PortfolioSection>
      <MyInsights></MyInsights>
      <MyServerdClients></MyServerdClients>
    </div>
  );
}
