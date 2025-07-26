import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us/contact-us";
import Header from "@/components/header-footer/header";
import ProjectContainer from "@/containers/projectContainer";
import Services from "@/containers/services";
import Blogs from "@/containers/blogs";
import Brands from "@/components/brands";
import Footer from "@/components/header-footer/footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>در حال بارگذاری خدمات...</p>}>
        <Services />
      </Suspense>
      <Suspense fallback={<p>در حال بارگذاری پروژه...</p>}>
        <ProjectContainer />
      </Suspense>

      <AboutUs />
      <ContactUs />
      <Suspense fallback={<p>در حال بارگذاری بلاگ...</p>}>
        <Blogs />
      </Suspense>

      <Brands />
      <Footer />
    </div>
  );
}
