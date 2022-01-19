import { Link, useLoaderData } from "remix";

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1 ", body: "This is a test post " },
      { id: 2, title: "Post 2 ", body: "This is a test post " },
      { id: 3, title: "Post 3 ", body: "This is a test post " },
    ],
  };
  return data;
};
function Posts() {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>this is posts route </h1>

      <ul className="posts-list">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.id}>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Posts;
