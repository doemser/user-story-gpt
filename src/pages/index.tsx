import { StoryForm } from "@/components/StoryForm";
import { UserStory } from "@/components/UserStory";
import { useUserStory } from "@/hooks/useUserStory";
import Container from "@mui/material/Container";
import Head from "next/head";

export default function Home({ config, onConfig }: SettingsProps) {
  const { data: userStory, loading, getUserStory } = useUserStory();
  async function handleUserStory() {
    await getUserStory(config);
  }

  return (
    <>
      <Head>
        <title>User Story GPT</title>
        <meta
          name="description"
          content="Generate perfect User-Stories using GPT-4"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <StoryForm
          config={config}
          onConfig={onConfig}
          onUserStory={handleUserStory}
          loading={loading}
        />
        <UserStory data={userStory} />
      </Container>
    </>
  );
}
