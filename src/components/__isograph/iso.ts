import type { IsographEntrypoint } from '@isograph/react';
import { type Blog__BlogCreate__param } from './Blog/BlogCreate/param_type';
import { type Blog__BlogTitle__param } from './Blog/BlogTitle/param_type';
import { type Mutation__CreateBlog__param } from './Mutation/CreateBlog/param_type';
import { type Query__BlogsPage__param } from './Query/BlogsPage/param_type';
import { type Query__HomePage__param } from './Query/HomePage/param_type';
import entrypoint_Mutation__CreateBlog from '../__isograph/Mutation/CreateBlog/entrypoint';
import entrypoint_Query__BlogsPage from '../__isograph/Query/BlogsPage/entrypoint';
import entrypoint_Query__HomePage from '../__isograph/Query/HomePage/entrypoint';

// This is the type given to regular client fields.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes one parameter
// of type TParam.
type IdentityWithParam<TParam extends object> = <TClientFieldReturn>(
  clientField: (param: TParam) => TClientFieldReturn
) => (param: TParam) => TClientFieldReturn;

// This is the type given it to client fields with @component.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes two parameters.
// The first has type TParam, and the second has type TComponentProps.
//
// TComponentProps becomes the types of the props you must pass
// whenever the @component field is rendered.
type IdentityWithParamComponent<TParam extends object> = <
  TClientFieldReturn,
  TComponentProps = Record<PropertyKey, never>,
>(
  clientComponentField: (data: TParam, componentProps: TComponentProps) => TClientFieldReturn
) => (data: TParam, componentProps: TComponentProps) => TClientFieldReturn;

type WhitespaceCharacter = ' ' | '\t' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

// This is a recursive TypeScript type that matches strings that
// start with whitespace, followed by TString. So e.g. if we have
// ```
// export function iso<T>(
//   isographLiteralText: T & MatchesWhitespaceAndString<'field Query.foo', T>
// ): Bar;
// ```
// then, when you call
// ```
// const x = iso(`
//   field Query.foo ...
// `);
// ```
// then the type of `x` will be `Bar`, both in VSCode and when running
// tsc. This is how we achieve type safety — you can only use fields
// that you have explicitly selected.
type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Blog.BlogCreate', T>
): IdentityWithParamComponent<Blog__BlogCreate__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Blog.BlogTitle', T>
): IdentityWithParamComponent<Blog__BlogTitle__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Mutation.CreateBlog', T>
): IdentityWithParamComponent<Mutation__CreateBlog__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.BlogsPage', T>
): IdentityWithParamComponent<Query__BlogsPage__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.HomePage', T>
): IdentityWithParamComponent<Query__HomePage__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Mutation.CreateBlog', T>
): typeof entrypoint_Mutation__CreateBlog;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.BlogsPage', T>
): typeof entrypoint_Query__BlogsPage;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.HomePage', T>
): typeof entrypoint_Query__HomePage;

export function iso(_isographLiteralText: string):
  | IdentityWithParam<any>
  | IdentityWithParamComponent<any>
  | IsographEntrypoint<any, any>
{
  throw new Error('iso: Unexpected invocation at runtime. Either the Babel transform ' +
      'was not set up, or it failed to identify this call site. Make sure it ' +
      'is being used verbatim as `iso`.');
}