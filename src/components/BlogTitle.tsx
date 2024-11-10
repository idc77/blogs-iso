import React from "react";
import { iso } from "@iso";

export const BlogTitle = iso(`
    field Blog.BlogTitle @component {
    id
    title
    slug
    tagline
    description
    }
    `)(function BlogTitleComponent({ data }) {
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
});
