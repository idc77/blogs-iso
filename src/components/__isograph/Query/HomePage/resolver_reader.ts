import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__HomePage__param } from './param_type';
import { HomePage as resolver } from '../../../HomePage';

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
                kind: "Scalar",
                fieldName: "createTime",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "updateTime",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "title",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "slug",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "description",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "tagline",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "ownerID",
                alias: null,
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "featured",
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
  Query__HomePage__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Query.HomePage",
  resolver,
  readerAst,
};

export default artifact;
