import { getAllBookmarks } from "./services/bookmark";
import { useQuery } from "react-query";

export default function App() {
  const { data, isLoading, isError } = useQuery(["bookmarks"], getAllBookmarks);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong!</div>;

  return (
    <>
      <ul>
        {data!.map((item) => {
          return <li key={item.id}>{item.url}</li>;
        })}
      </ul>
    </>
  );
}
