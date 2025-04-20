"use client"; // Mark this component as a client component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// ایجاد QueryProvider که QueryClientProvider را wrap می‌کند
export function QueryProvider({ children }: { children: ReactNode }) {
  // ایجاد یک instance از QueryClient (درون state نگه می‌داریم تا بین رندرها ثابت بماند)
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
