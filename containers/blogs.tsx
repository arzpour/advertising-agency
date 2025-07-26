import React from "react";
import BlogCard from "../components/blogs/blog-card";
import { getBlogs } from "@/apis/client/blogs";

const Blogs = async () => {
  const blogData = await getBlogs({ page: 1, limit: 4 });

  const blogs = blogData.data.blogs;

  return (
    <section className="max-w-6xl mx-auto space-y-5 md:space-y-7 xl:mt-14 px-5 md:px-10 xl:px-0">
      {blogs.length > 0 && (
        <>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 md:gap-7">
            {blogs[0] && <BlogCard {...blogs[0]} width="w-full sm:w-1/3" />}
            {blogs[1] && <BlogCard {...blogs[1]} width="w-full sm:w-2/3" />}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 md:gap-7">
            {blogs[2] && <BlogCard {...blogs[2]} width="w-full sm:w-2/3" />}
            {blogs[3] && <BlogCard {...blogs[3]} width="w-full sm:w-1/3" />}
          </div>
        </>
      )}
    </section>
  );
};

export default Blogs;
