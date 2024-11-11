import {iso} from '@iso';

export const BlogsPage = iso(`
  field Query.BlogsPage @component {
    posts {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`)(function BlogsPageComponent({ data }) {
    return (
        <>
            {data && data.posts?.edges?.map((edge) => (
                <div key={edge?.node?.id}>{edge?.node?.id}</div>
            ))}
        </>
    )
})
