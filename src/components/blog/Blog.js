import React from "react";
import BlogCard from "./BlogCard";
import Back from "../common/back/Back";

const Blog = () => {
  return (
    <>
      <Back title="お知らせ" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
