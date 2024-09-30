"use client";

export default function ErrorBoundry({error, reset}: {
    error: Error,
    reset: () => void,
}) {
    return (
        <>
          <h1>Error in reviewId which being {error.message}</h1>
          <button onClick={reset}>Try Again</button>
        </>
    );
}