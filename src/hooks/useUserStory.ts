import axios from "axios";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export function useUserStory() {
  const [data, setData] = useLocalStorageState("currentUserStory", {
    defaultValue: {
      valueProposition: [],
      acceptanceCriteria: [],
      complexity: "",
      tasks: [],
      title: "",
    },
  });
  const [loading, setLoading] = useState(false);

  async function getUserStory(body: {
    feature: string;
    app: string;
    techStack: { id: string; name: string }[];
  }) {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/user-story", { body });
      console.log(data.response.content);
      setData(JSON.parse(data.response.content));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, getUserStory };
}
