import axios from "axios";

export const getStory = async (id) => {
  try {
    const { data: story } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    return story;
  } catch (error) {
    console.error("Error while getting a story.");
  }
};

export const getTopStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 15).map(getStory));

    return stories;
  } catch (error) {
    console.error("Error while getting list of stories.");
  }
};
