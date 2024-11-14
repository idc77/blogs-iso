export type Mutation__CreateBlog__parameters = {
  readonly input: {
    readonly authorIDs: (ReadonlyArray<string> | null),
    readonly categoryIDs: (ReadonlyArray<string> | null),
    readonly commentIDs: (ReadonlyArray<string> | null),
    readonly createTime: (string | null),
    readonly description: (string | null),
    readonly featured: (boolean | null),
    readonly ownerID: (string | null),
    readonly pageIDs: (ReadonlyArray<string> | null),
    readonly postIDs: (ReadonlyArray<string> | null),
    readonly slug: string,
    readonly subscriberIDs: (ReadonlyArray<string> | null),
    readonly tagIDs: (ReadonlyArray<string> | null),
    readonly tagline: (string | null),
    readonly title: string,
    readonly updateTime: (string | null),
  },
};
