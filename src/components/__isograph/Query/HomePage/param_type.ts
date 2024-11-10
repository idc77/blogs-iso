
export type Query__HomePage__param = {
  blogs: {
    /**
A list of edges.
    */
    edges: (({
      /**
The item at the end of the edge.
      */
      node: ({
        id: string,
        createTime: string,
        updateTime: (string | null),
        title: string,
        slug: string,
        description: (string | null),
        tagline: (string | null),
        ownerID: (string | null),
        featured: (boolean | null),
      } | null),
    } | null))[],
  },
};
