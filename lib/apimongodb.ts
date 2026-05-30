const BASE_URL = "/api";

const request = async (
  endpoint: string,
  options?: RequestInit
) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      options
    );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.error ||
          "Something went wrong"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "API Error:",
      error
    );

    throw error;
  }
};

export const api = {
  get: (endpoint: string) =>
    request(endpoint),

  post: (
    endpoint: string,
    body: unknown
  ) =>
    request(endpoint, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(body),
    }),

  put: (
    endpoint: string,
    body: unknown
  ) =>
    request(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(body),
    }),

  delete: (
    endpoint: string,
    body?: unknown
  ) =>
    request(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(body),
    }),
};