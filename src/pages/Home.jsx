import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="h-full w-full mt-4 text-center ">
        <Container>
          <div className="flex flex-wrap">
            <div className="mt-40 flex items-center justify-center p-2  w-full">
              <div>
              <h1 className="font-mono text-2xl font-bold hover:text-gray-500">
                Welcome to MegaBlogs
              </h1><br />
              <h4 className="font-mono text-gray-700">
                Login to read or create your own post
              </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Home;
