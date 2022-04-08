import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStory } from "../utils/apis";
import Story from "../components/Story";

function ArticlePage() {
  const { articleId } = useParams();
  const [story, setStory] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStory(articleId, true)
      .then((story) => {
        setStory(story);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading || !story) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <Story story={story} showText />
    </Layout>
  );
}

export default ArticlePage;
