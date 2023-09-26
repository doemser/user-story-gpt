// useStore

interface Prompt {
  feature: string;
  app: string;
  techStack: { id: string; name: string }[];
}
interface UsePromptState {
  prompt: Prompt;
  settings: boolean;
  techStackInput: string;
  handleTechStackInput: (techStackInput: string) => void;
  handleSettings: (settings: boolean) => void;
  handleInputs: (key: string, value: string) => void;
  handleAddTechStack: () => void;
  handleDeleteTechStack: (id: string) => void;
}

// useUserStories

interface UserStory {
  id: string;
  title: string;
  complexity: string;
  valueProposition: string[];
  acceptanceCriteria: string[];
  tasks: string[];
}

interface Reviews {
  valueProposition: string[][];
  acceptanceCriteria: string[][];
  tasks: string[][];
}

interface UseUserStoriesState {
  userStory: UserStory;
  loading: boolean;
  reviews: Reviews;
  reviewInputValue: string;
  setReviewInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getUserStory: (body: {
    feature: string;
    app: string;
    techStack: { id: string; name: string }[];
  }) => void;
}

// OpenAI Prompts

interface UserStoryPrompt {
  feature: string;
  app: string;
  techStack: { id: string; name: string }[];
}

// UserStory Component

type Aspect = "valueProposition" | "acceptanceCriteria" | "tasks";

// Props

interface VersionTabsProps {
  reviews: string[][];
  aspect: Aspect;
}

interface SettingsProps {
  config: Config;
  onConfig: (
    type: string,
    value: string | { id: string; name: string }[]
  ) => void;
}

// Config

interface Config {
  feature: string;
  app: string;
  techStack: { id: string; name: string }[];
}
