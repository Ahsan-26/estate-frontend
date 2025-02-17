import React from "react";
import BlogSection from "../components/Blogs/BlogSection";
import BlogSearchSection from "../components/Blogs/BlogSearchSection";
import BlogRecommendedSection from "../components/Blogs/BlogRecommendedSection";

const Blogs = () => {
    return (
      <div>
        <BlogSection/>
        <BlogSearchSection />
        <BlogRecommendedSection />
      </div>
    );
  };
  export default Blogs;