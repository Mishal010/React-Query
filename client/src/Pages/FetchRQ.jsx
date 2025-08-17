import { NavLink } from "react-router-dom";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const FetchRQ = () => {
  //   const getPostData = async () => {
  //     try {
  //       const res = await fetchPosts();
  //       console.log(res);
  //       return res.status === 200 ? res.data : [];
  //     } catch (error) {
  //       console.log(error);
  //       return [];
  //     }
  //   };
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    staleTime: 1000 * 60 * 10,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error:{error.message}</h1>;
  if (data?.length === 0) {
    setPageNumber((prev) => prev - 10);
  }

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          return (
            <li key={curElem.id}>
              <NavLink to={`/rq/${curElem.id}`}>
                <p>{curElem.id}</p>
                <p>{curElem.title}</p>
                <p>{curElem.body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="pagination-section container">
        <button
          onClick={() => setPageNumber((prev) => prev - 10)}
          disabled={pageNumber / 10 + 1 === 1}
        >
          Prev
        </button>
        <p>{pageNumber / 10 + 1}</p>
        <button
          onClick={() => setPageNumber((prev) => prev + 10)}
          // disabled={data?.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};
