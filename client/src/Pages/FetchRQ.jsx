import { NavLink } from "react-router-dom";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

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

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 10,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error:{error.message}</h1>;
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
    </div>
  );
};
