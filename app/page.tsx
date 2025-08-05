import AboutUs from "@/components/about-us";
import Header from "@/components/header-footer/header";
import ProjectContainer from "@/containers/projectContainer";
import Services from "@/containers/services";
import Blogs from "@/containers/blogs";
import Brands from "@/components/brands";
import Footer from "@/components/header-footer/footer";
import { Suspense } from "react";
import { ServiceCardSkeleton } from "@/components/services/service-card";
import { ProjectCardSkeleton } from "@/components/projects/project-card";
import { BlogCardSkeleton } from "@/components/blogs/blog-card";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />

      <Suspense
        fallback={[...Array(5)].map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      >
        <Services />
      </Suspense>
 
      <Suspense
        fallback={[...Array(5)].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      >
        <ProjectContainer />
      </Suspense>

      <Suspense
        fallback={[...Array(5)].map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      >
        <Blogs />
      </Suspense>

      <Brands />
      <Footer />
    </>
  );
}
