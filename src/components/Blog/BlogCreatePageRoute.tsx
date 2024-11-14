import React from "react";
import { useLazyReference, useResult } from "@isograph/react";
import { iso } from "@iso";

export default function BlogCreatePageRoute() {
    const { fragmentReference } = useLazyReference(
        iso(`entrypoint Query.BlogCreatePage`),
        {
            /* query variables */
        }
    );
    const BlogCreatePage = useResult(fragmentReference);
    return <BlogCreatePage />;
}
