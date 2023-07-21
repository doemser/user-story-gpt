import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

interface Prompt {
  feature: string;
  app: string;
  techStack: { id: string; name: string }[];
}

export async function createUserStory(prompt: Prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      temperature: 0.5,
      messages: [
        {
          role: "system",
          content: `
APP: ${prompt.app}
TECHSTACK: ${prompt.techStack.map((tech) => tech.name).join(", ")}
TASK: userStory,<=10 acceptanceCriteria,<=10 tasks,complexity(xs-xl),
SCOPE: "${prompt.feature}"
OUTPUT: JSON Format using this interface:
interface UserStory {
valueProposition: string[]; // ["As a user,", "I want to...", "So that..."]
complexity: string; // xs-xl
acceptanceCriteria: string[]; // ["1. ...", "2. ...", "3. ..."]
tasks: string[]; // ["1. ...", "2. ...", "3. ..."]
title: string; // "Feature 1"
}
NEVER: Answer like this: {userStory: ...}
ALWAYS: Start like this: {valueProposition: ...}
`,
        },
      ],
      max_tokens: 2048,
    });

    return response.data.choices[0].message;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
