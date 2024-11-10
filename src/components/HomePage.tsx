import React, { useMemo } from "react";
import { iso } from "@iso";

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value != null;
}

function toSorted<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const sorted = [...arr];
  sorted.sort(comparator);
  return sorted;
}

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
  console.log("data:", data);
  return (
    <>
      <h1>Blogs</h1>
      {data &&
        data.blogs?.edges?.map((edge) => {
          const node = edge?.node;
          return <node.BlogTitle key={node?.id} />;
        })}
    </>
  );
});
