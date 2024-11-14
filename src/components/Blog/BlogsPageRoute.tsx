import React from "react";
import { useLazyReference, useResult } from "@isograph/react";
import { iso } from "@iso";

export default function BlogsPageRoute() {
    const { fragmentReference } = useLazyReference(
        iso(`entrypoint Query.BlogsPage`),
        {
            /* query variables */
        }
    );
    const BlogsPage = useResult(fragmentReference);
    return <BlogsPage />;
}
