import Diversity2Icon from "@mui/icons-material/Diversity2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

interface StoryFormProps {
  config: Config;
  onConfig: (
    type: string,
    value: string | { id: string; name: string }[]
  ) => void;
  onUserStory: () => void;
  loading: boolean;
}

export function StoryForm({
  config,
  onConfig,
  onUserStory,
  loading,
}: StoryFormProps) {
  return (
    <>
      <Card
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          onUserStory();
        }}
        sx={{ p: 1 }}
      >
        <CardHeader
          avatar={<Diversity2Icon fontSize="large" />}
          action={<></>}
          title="User Story GPT"
          subheader="Write User Stories with ease."
        />
        <CardContent>
          <TextField
            multiline
            fullWidth
            id="feature"
            name="feature"
            label="Describe your feature as good as possible"
            maxRows={4}
            value={config.feature}
            onChange={(event) => onConfig("feature", event.target.value)}
          />
        </CardContent>

        <CardActions>
          <Button
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={20} /> : <PlayArrowIcon />
            }
            variant="contained"
            type="submit"
          >
            Generate User-Story
          </Button>

          <Link href="/settings" legacyBehavior>
            <IconButton aria-label="settings">
              <Tooltip title="App Seetings">
                <SettingsIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
