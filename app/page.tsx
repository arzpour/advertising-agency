import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us/contact-us";
import Header from "@/components/header-footer/header";
import Portfolio from "@/containers/portfolio";
import Services from "@/containers/services";
import Blogs from "@/containers/blogs";
import Brands from "@/components/brands";
import Footer from "@/components/header-footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <AboutUs />
      <ContactUs />
      <Blogs />
      <Brands />
      <Footer />
    </div>
  );
}
