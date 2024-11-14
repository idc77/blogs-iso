import React from "react";
import { iso } from "@iso";
import Link from 'next/link';

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
        <h1><Link href={{
            pathname: '/blogs/[blog_slug]',
            query: {blog_slug: data.slug},
        }}>{data.title}</Link></h1>
      <div>

      </div>
    </>
  );
});
