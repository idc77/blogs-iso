import React, { Suspense, useEffect, useState } from "react";
import { FragmentReader, useLazyReference, useResult } from "@isograph/react";
import { iso } from "@iso";
import { ErrorBoundary } from "./ErrorBoundary";

function HomePageRoute() {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Query.HomePage`),
    {
      /* query variables */
    }
  );
  return (
    <Suspense fallback="loading">
      <ErrorBoundary>
        <FragmentReader fragmentReference={fragmentReference} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default function () {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true));

  return visible ? <HomePageRoute /> : null;
}
