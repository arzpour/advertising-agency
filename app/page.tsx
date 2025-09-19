export const revalidate = 1800;

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

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />

      <Suspense
        fallback={
          <div className="flex flex-wrap justify-center gap-5 mb-24 mt-24">
            {[...Array(6)].map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <Services />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex flex-wrap justify-center gap-5 my-10 mt-14">
            {[...Array(5)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProjectContainer />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex flex-wrap justify-center gap-5 my-10 mt-14">
            {[...Array(4)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <Blogs />
      </Suspense>

      <Brands />
      <Footer />
    </>
  );
}
