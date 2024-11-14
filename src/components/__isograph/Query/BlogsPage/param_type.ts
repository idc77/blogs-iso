
export type Query__BlogsPage__param = {
  readonly data: {
    readonly posts: {
      /**
Identifies the total count of items in the connection.
      */
      readonly totalCount: number,
      /**
A list of edges.
      */
      readonly edges: (ReadonlyArray<({
        /**
The item at the end of the edge.
        */
        readonly node: ({
          readonly id: string,
        } | null),
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
