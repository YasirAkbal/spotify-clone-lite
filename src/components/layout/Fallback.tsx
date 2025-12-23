interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}
