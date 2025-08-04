import React from "react";
import BlogCard from "../components/blogs/blog-card";
import { getBlogs } from "@/apis/client/blogs";

const Blogs = async () => {
  const blogData = await getBlogs({ page: 1, limit: 4 });

  const blogs = blogData.data.blogs;

  return (
    <section
      id="blogs"
      className="space-y-5 md:space-y-7 px-5 md:px-10 xl:px-0 bg-black py-14 pb-20 lg:pt-24 lg:pb-28"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-white mb-8">
          وبلاگ
        </h2>

        {blogs.length > 0 && (
          <div className="flex flex-wrap sm:flex-nowrap gap-4 md:gap-7 w-full">
            {blogs.slice(0, 3).map((el) => (
              <BlogCard key={el._id} {...el} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
