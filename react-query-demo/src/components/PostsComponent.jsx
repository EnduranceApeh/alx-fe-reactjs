import { useState } from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  const [page, setPage] = useState(1);

  const fetchPosts = async ({ queryKey }) => {
    const [_key, page] = queryKey;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery(
    ["posts", page],
    fetchPosts,
    {
      staleTime: 1000 * 60, // 1 minute
      cacheTime: 1000 * 60 * 5, // 5 minutes in cache
      refetchOnWindowFocus: false, // prevent auto refetch on tab focus
      keepPreviousData: true, // keep old data while fetching new page
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (Page {page})</h2>

      {isFetching && <p>Updating...</p>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostsComponent;