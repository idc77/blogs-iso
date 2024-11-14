import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Blog__BlogTitle__param } from './param_type';
import { BlogTitle as resolver } from '../../../Blog/BlogTitle';

const readerAst: ReaderAst<Blog__BlogTitle__param> = [
  {
    kind: "Scalar",
    fieldName: "id",
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
    fieldName: "tagline",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "description",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  Blog__BlogTitle__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Blog.BlogTitle",
  resolver,
  readerAst,
};

export default artifact;
