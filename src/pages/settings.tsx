import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Settings({ config, onConfig }: SettingsProps) {
  return (
    <Stack alignItems="center" mt={2}>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={<SettingsIcon fontSize="large" />}
          action={
            <Link href="/" legacyBehavior>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          }
          title="Settings"
          subheader="Provide more info about your apps needs"
        />
        <CardContent sx={{ px: 2 }}>
          <Card>
            <CardHeader
              avatar={<AppsIcon />}
              title="App"
              subheader="Providing a more specific context of your app will lead to a better outcome."
            />
            <CardContent>
              <TextField
                required
                multiline
                fullWidth
                id="app"
                name="app"
                label="Describe your App as best as possible"
                rows={6}
                value={config.app}
                onChange={(event) => onConfig("app", event.target.value)}
              />
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardHeader
              avatar={<LayersIcon />}
              title="Techstack"
              subheader="Set your Techstack to get more relevant suggestions."
            />
            <CardContent>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {config.techStack.map((stack) => (
                  <Chip
                    size="small"
                    key={stack.id}
                    label={stack.name}
                    variant="outlined"
                    onDelete={() =>
                      onConfig(
                        "techStack",
                        config.techStack.filter(
                          (_stack) => _stack.id !== stack.id
                        )
                      )
                    }
                  />
                ))}
              </Stack>

              <Box
                component="form"
                id="techStackForm"
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = event.target as HTMLFormElement;
                  onConfig("techStack", [
                    ...config.techStack,
                    {
                      id: nanoid(),
                      name: form.techStack.value,
                    },
                  ]);
                  form.reset();
                }}
              >
                <TextField
                  required
                  fullWidth
                  size="small"
                  id="techStack"
                  name="techStack"
                  label="Set tech-stack and relevant technology buzzwords"
                  sx={{ mt: 2 }}
                />
              </Box>
            </CardContent>
            <CardActions>
              <Button type="submit" form="techStackForm" size="small">
                Add Technology
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Stack>
  );
}
