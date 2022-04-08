import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Story from "../components/Story";
import { getTopStories } from "../utils/apis";

function HomePage() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopStories()
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      {stories.map((story, index) => (
        <Story index={index} key={story.id} story={story} />
      ))}
    </Layout>
  );
}

export default HomePage;
