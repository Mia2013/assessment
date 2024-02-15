interface QueryData {
    [key: string]: string | number;
  }
  const axiosInstance = axios.create({
    baseUrl: BACKEND_URL
});

  export async function getData<T>(endpoint: string, query?: Partial<QueryData>) {
    try {
        const response = await axiosInstance.get(endpoint, {
            params: query
        });
        if (response.status === 200) {
            const result = response.data;
            return result;
        }
    } catch (error) {
        throw new Error(error)
    }
}
