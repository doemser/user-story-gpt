import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Config {
  feature: string;
  app: string;
  techStack: { id: string; name: string }[];
}
interface StoreState {
  config: Config;
  techStackInput: string;
  handleTechStackInput: (techStackInput: string) => void;
  handleInputs: (key: string, value: string) => void;
  handleAddTechStack: () => void;
  handleDeleteTechStack: (id: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      config: {
        feature: "",
        app: "",
        techStack: [
          { id: "1", name: "javascript" },
          { id: "2", name: "react" },
          { id: "3", name: "next.js" },
          { id: "4", name: "serverless functions" },
        ],
      },
      techStackInput: "",
      handleTechStackInput: (techStackInput) => {
        set({ techStackInput });
      },
      handleInputs: (key, value) => {
        set((state) => ({ config: { ...state.config, [key]: value } }));
      },
      handleAddTechStack: () => {
        set((state) => ({
          config: {
            ...state.config,
            techStack: [
              ...state.config.techStack,
              { id: nanoid(), name: state.techStackInput },
            ],
          },
          techStackInput: "",
        }));
      },
      handleDeleteTechStack: (id) => {
        set((state) => ({
          config: {
            ...state.config,
            techStack: state.config.techStack.filter(
              (stack) => stack.id !== id
            ),
          },
          techStackInput: "",
        }));
      },
    }),
    { name: "userStoryGPT" }
  )
);

export default useStore;
