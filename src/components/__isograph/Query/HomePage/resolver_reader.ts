import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__HomePage__param } from './param_type';
import { HomePage as resolver } from '../../../HomePage';
import Blog__BlogTitle__resolver_reader from '../../Blog/BlogTitle/resolver_reader';

const readerAst: ReaderAst<Query__HomePage__param> = [
  {
    kind: "Linked",
    fieldName: "blogs",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
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
              {
                kind: "Resolver",
                alias: "BlogTitle",
                arguments: null,
                readerArtifact: Blog__BlogTitle__resolver_reader,
                usedRefetchQueries: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__HomePage__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.HomePage",
  resolver,
  readerAst,
};

export default artifact;
