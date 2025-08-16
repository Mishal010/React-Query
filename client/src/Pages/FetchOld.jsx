import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

export const FetchOld = () => {
  const [post, setPosts] = useState([]);
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);
      setPosts(res);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>
      <ul className="section-accordion">
        {post?.map((curElem) => {
          return (
            <li key={curElem.id}>
              <p>{curElem.title}</p>
              <p>{curElem.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
