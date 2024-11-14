import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Mutation__CreateBlog__param } from './param_type';
import { createBlog as resolver } from '../../../Blog/BlogCreatePage';

const readerAst: ReaderAst<Mutation__CreateBlog__param> = [
  {
    kind: "Linked",
    fieldName: "createBlog",
    alias: null,
    arguments: [
      [
        "input",
        { kind: "Variable", name: "input" },
      ],
    ],
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
];

const artifact: ComponentReaderArtifact<
  Mutation__CreateBlog__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Mutation.CreateBlog",
  resolver,
  readerAst,
};

export default artifact;
