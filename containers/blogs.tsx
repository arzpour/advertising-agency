import React from "react";
import BlogCard from "../components/blogs/blog-card";

const blogsData = [
  {
    image: "/work.png",
    title: "عنوان ۱",
    description: "متن ۱...........................",
    time: "۱۴۰۴/۴/۴",
  },
  {
    image:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-01.jpg",
    title: "عنوان ۱",
    description: "متن ۱...........................",
    time: "۱۴۰۴/۴/۴",
  },
  {
    image: "/gettyimages-2149038061-612x612.jpg",
    title: "عنوان ۱",
    description: "متن ۱...........................",
    time: "۱۴۰۴/۴/۴",
  },
  {
    image: "/istockphoto-1385970223-1024x1024.jpg",
    title: "عنوان ۱",
    description: "متن ۱...........................",
    time: "۱۴۰۴/۴/۴",
  },
];

const Blogs = () => {
  return (
    <section className="max-w-6xl mx-auto space-y-7 mt-28">
      <div className="flex gap-7">
        <BlogCard {...blogsData[0]} width="w-1/3" />
        <BlogCard {...blogsData[1]} width="w-2/3" />
      </div>

      <div className="flex gap-7">
        <BlogCard {...blogsData[2]} width="w-2/3" />
        <BlogCard {...blogsData[3]} width="w-1/3" />
      </div>
    </section>
  );
};

export default Blogs;
