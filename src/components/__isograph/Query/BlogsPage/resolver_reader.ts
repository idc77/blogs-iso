import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__BlogsPage__param } from './param_type';
import { BlogsPage as resolver } from '../../../Blog/BlogsPage';

const readerAst: ReaderAst<Query__BlogsPage__param> = [
  {
    kind: "Linked",
    fieldName: "posts",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "totalCount",
        alias: null,
        arguments: null,
      },
      {
        kind: "Linked",
        fieldName: "edges",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Linked",
            fieldName: "node",
            alias: null,
            arguments: null,
            condition: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__BlogsPage__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.BlogsPage",
  resolver,
  readerAst,
};

export default artifact;
