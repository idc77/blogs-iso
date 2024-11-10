import { type Blog__BlogTitle__output_type } from '../../Blog/BlogTitle/output_type';

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
          readonly BlogTitle: Blog__BlogTitle__output_type,
        } | null),
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
