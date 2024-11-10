
export type Query__HomePage__param = {
  readonly data: {
    readonly blogs: {
      /**
A list of edges.
      */
      readonly edges: (ReadonlyArray<({
        /**
The item at the end of the edge.
        */
        readonly node: ({
          readonly id: string,
          readonly createTime: string,
          readonly updateTime: (string | null),
          readonly title: string,
          readonly slug: string,
          readonly description: (string | null),
          readonly tagline: (string | null),
          readonly ownerID: (string | null),
          readonly featured: (boolean | null),
        } | null),
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
