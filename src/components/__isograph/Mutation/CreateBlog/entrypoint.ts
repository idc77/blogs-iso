import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Mutation__CreateBlog__param} from './param_type';
import {Mutation__CreateBlog__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'mutation CreateBlog ($input: CreateBlogInput!) {\
  createBlog____input___v_input: createBlog(input: $input) {\
    id,\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "createBlog",
    arguments: [
      [
        "input",
        { kind: "Variable", name: "input" },
      ],
    ],
    concreteType: "Blog",
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        arguments: null,
      },
    ],
  },
];
const artifact: IsographEntrypoint<
  Mutation__CreateBlog__param,
  Mutation__CreateBlog__output_type
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Mutation",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
