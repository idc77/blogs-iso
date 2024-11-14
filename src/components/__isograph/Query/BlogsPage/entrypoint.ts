import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__BlogsPage__param} from './param_type';
import {Query__BlogsPage__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query BlogsPage  {\
  posts {\
    edges {\
      node {\
        id,\
      },\
    },\
    totalCount,\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "posts",
    arguments: null,
    concreteType: "PostConnection",
    selections: [
      {
        kind: "Linked",
        fieldName: "edges",
        arguments: null,
        concreteType: "PostEdge",
        selections: [
          {
            kind: "Linked",
            fieldName: "node",
            arguments: null,
            concreteType: "Post",
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                arguments: null,
              },
            ],
          },
        ],
      },
      {
        kind: "Scalar",
        fieldName: "totalCount",
        arguments: null,
      },
    ],
  },
];
const artifact: IsographEntrypoint<
  Query__BlogsPage__param,
  Query__BlogsPage__output_type
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
