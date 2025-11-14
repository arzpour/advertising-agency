import React from "react";
import { getBlogById } from "@/apis/client/blogs";
import Image from "next/image";
import { sanitizeHTML } from "@/utils/sanitizeHtml";
import { getImageSrc } from "@/utils/getImageSrc";
import { toPersianDate } from "@/utils/toPersianDate";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header-footer/header";
import Footer from "@/components/header-footer/footer";
import { notFound } from "next/navigation";

export const revalidate = 1800;

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  let blogData: IBlogRes | null = null;

  const id = await params.id;

  try {
    const response = await getBlogById(id);
    blogData = response.data.blogById;
  } catch (err) {
    console.error("🚀 ~ BlogDetailPage ~ err:", err);
    notFound();
  }

  if (!blogData) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white" dir="rtl">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 mb-6 transition-colors"
          >
            <ArrowRight />
            بازگشت به وبلاگ
          </Link>

          <div className="bg-white rounded-lg overflow-hidden">
            {/* Thumbnail */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden whitespace-nowrap mb-3">
              <Image
                src={getImageSrc(
                  blogData.thumbnail,
                  process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL ?? ""
                )}
                alt={blogData.name}
                fill
                className="object-contain rounded-lg overflow-hidden whitespace-nowrap"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
                  {blogData.name}
                </h1>
                <span className="text-sm text-gray-500">
                  {toPersianDate(blogData.updatedAt) ??
                    toPersianDate(blogData.createdAt)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  محتوا
                </h2>
                <div
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(blogData.description),
                  }}
                />
              </div>

              {/* Images Gallery */}
              {blogData.images && blogData.images.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-xl font-semibold text-gray-700 mb-6">
                    تصاویر بیشتر
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {blogData.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100"
                      >
                        <Image
                          src={getImageSrc(
                            image,
                            process.env.NEXT_PUBLIC_BLOG_IMAGE_URL ?? ""
                          )}
                          alt={`${blogData.name} - تصویر ${index + 1}`}
                          fill
                          className="object-contain"
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

export default BlogDetailPage;
