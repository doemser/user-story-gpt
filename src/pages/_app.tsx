import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import useLocalStorageState from "use-local-storage-state";
import { useCallback } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [config, setConfig] = useLocalStorageState("user-story-gpt", {
    defaultValue: {
      feature: "",
      app: "",
      techStack: [
        { id: "1", name: "javascript" },
        { id: "2", name: "react" },
        { id: "3", name: "next.js" },
        { id: "4", name: "serverless functions" },
      ],
    },
  });

  const handleConfig = (
    type: string,
    value: string | { id: string; name: string }[]
  ) => {
    setConfig((prevConfig) => ({ ...prevConfig, [type]: value }));
  };

  return (
    <CssBaseline>
      <Component {...pageProps} config={config} onConfig={handleConfig} />
    </CssBaseline>
  );
}
