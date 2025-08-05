import React from "react";
import BlogCard from "../components/blogs/blog-card";
import { getBlogs } from "@/apis/client/blogs";

const Blogs = async () => {
  let blogData: IBlogResDto | null = null;

  try {
    blogData = await getBlogs({ page: 1, limit: 4 });
  } catch (err) {
    console.error("🚀 ~ Blogs ~ err:", err);
  }
  const blogs = blogData?.data.blogs || [];

  return (
    blogData &&
    blogs.length > 0 && (
      <section id="blogs">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-white bg-black rounded-t-md inline-block py-4 px-16">
            وبلاگ
          </h2>
        </div>

        <div className="bg-black px-5 md:px-10 xl:px-0 py-14 pb-20 lg:pt-24 lg:pb-28">
          <div className="container mx-auto max-w-7xl">
            {blogs.length > 0 && (
              <div className="flex flex-wrap sm:flex-nowrap gap-4 md:gap-7 w-full">
                {blogs.slice(0, 3).map((el) => (
                  <BlogCard key={el._id} {...el} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default Blogs;
