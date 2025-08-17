import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchIndvPost } from "../../API/api";

const FetchIndv = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchIndvPost(id),
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Error: {error}</h1>;
  return (
    <div>
      <ul className="section-accordion">
        <li>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </li>
      </ul>
      <NavLink to="/rq">
        <button>GO BACK</button>
      </NavLink>
    </div>
  );
};

export default FetchIndv;
