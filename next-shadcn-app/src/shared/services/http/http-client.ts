export type HttpClientOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>
}

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly payload?: unknown
  ) {
    super(message)
  }
}

export async function httpClient<TResponse>(
  path: string,
  options: HttpClientOptions = {}
): Promise<TResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? ""
  const url = new URL(path, baseUrl || "http://localhost")

  Object.entries(options.query ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value))
    }
  })

  const response = await fetch(baseUrl ? url : `${url.pathname}${url.search}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  const payload = await response.json().catch(() => undefined)

  if (!response.ok) {
    throw new HttpError("Backend request failed", response.status, payload)
  }

  return payload as TResponse
}
