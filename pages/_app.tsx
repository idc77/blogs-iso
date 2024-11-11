import {Suspense, useMemo} from "react";
import type {AppProps} from "next/app";
import {createIsographEnvironment, createIsographStore, IsographEnvironmentProvider,} from "@isograph/react";

function makeNetworkRequest<T>(
  queryText: string,
  variables: unknown
): Promise<T> {
  return fetch("http://localhost:8081/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({query: queryText, variables}),
  }).then(async (response) => {
    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw new Error("NetworkError", {
        cause: json,
      });
    }
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequest,
        // Optional missing field handler
        null,
        // Optional logger
        console.log
      ),
    []
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Suspense fallback="loading">
        <Component {...pageProps} />
      </Suspense>
    </IsographEnvironmentProvider>
  );
}
