import Brands from "@/components/brands";
import Header from "@/components/header/header";
import Portfolio from "@/containers/portfolio";
import Services from "@/containers/services";

export default function Home() {
  return (
    <div className="mb-90">
      <Header />
      <Services />
      <Brands />
      <Portfolio />
    </div>
  );
}
