import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__HomePage__param} from './param_type';
import {Query__HomePage__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query HomePage  {\
  blogs {\
    edges {\
      node {\
        id,\
        description,\
        slug,\
        tagline,\
        title,\
      },\
    },\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "blogs",
    arguments: null,
    concreteType: "BlogConnection",
    selections: [
      {
        kind: "Linked",
        fieldName: "edges",
        arguments: null,
        concreteType: "BlogEdge",
        selections: [
          {
            kind: "Linked",
            fieldName: "node",
            arguments: null,
            concreteType: "Blog",
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "description",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "slug",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "tagline",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "title",
                arguments: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
const artifact: IsographEntrypoint<
  Query__HomePage__param,
  Query__HomePage__output_type
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Query",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
