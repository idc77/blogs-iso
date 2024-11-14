import React from "react";
import { iso } from "@iso";

export const HomePage = iso(`
  field Query.HomePage @component {
    blogs{
      edges{
        node {
          id
          BlogTitle
        }
      }
    }
  }
`)(function HomePageComponent({ data }) {
  return (
    <>
      <h1>Blogs</h1>
      {data &&
        data.blogs?.edges?.map((edge) => {
          const node = edge?.node;
          if (node) {
            return <node.BlogTitle key={node?.id} />;
          }
        })}
    </>
  );
});
