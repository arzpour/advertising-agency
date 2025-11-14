import React from "react";
import { getProjectById } from "@/apis/client/projects";
import { getAllCategories } from "@/apis/client/categories";
import Image from "next/image";
import { sanitizeHTML } from "@/utils/sanitizeHtml";
import { getImageSrc } from "@/utils/getImageSrc";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header-footer/header";
import Footer from "@/components/header-footer/footer";
import { notFound } from "next/navigation";

export const revalidate = 1800;

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  let projectData: IProjectRes | null = null;
  let categoryData: ICategory | null = null;

  try {
    const response = await getProjectById(params.id);
    projectData = response.data.projectById;
  } catch (err) {
    console.error("🚀 ~ ProjectDetailPage ~ err:", err);
    notFound();
  }

  if (!projectData) {
    notFound();
  }

  try {
    const categoriesResponse = await getAllCategories({
      page: 1,
      limit: 9999,
      type: "all",
    });
    categoryData =
      categoriesResponse.data.categories.find(
        (cat) => cat._id === projectData?.category
      ) || null;
  } catch (err) {
    console.error("🚀 ~ ProjectDetailPage ~ err:", err);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white" dir="rtl">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 mb-6 transition-colors"
          >
            <ArrowRight />
            بازگشت به پروژه‌ها
          </Link>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative h-60 md:h-72 rounded-lg overflow-hidden whitespace-nowrap mb-3">
              <Image
                src={getImageSrc(
                  projectData.thumbnail,
                  process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL ?? ""
                )}
                alt={projectData.name}
                fill
                className="object-contain rounded-lg overflow-hidden whitespace-nowrap"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
                  {projectData.name}
                </h1>
                {categoryData && (
                  <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm font-medium">
                    {categoryData.name}
                  </span>
                )}
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  توضیحات
                </h2>
                <div
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(projectData.description),
                  }}
                />
              </div>

              {projectData.images && projectData.images.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    تصاویر بیشتر
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projectData.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                      >
                        <Image
                          src={getImageSrc(
                            image,
                            process.env.NEXT_PUBLIC_PROJECT_IMAGE_URL ?? ""
                          )}
                          alt={`${projectData.name} - تصویر ${index + 1}`}
                          fill
                          className="object-contain !h-full !w-full rounded-lg overflow-hidden whitespace-nowrap"
                          loading="lazy"
                          quality={95}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
