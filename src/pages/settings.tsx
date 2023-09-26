import useStore from "@/hooks/useStore";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Settings() {
  const handleInputs = useStore((state) => state.handleInputs);
  const techStackInput = useStore((state) => state.techStackInput);
  const handleTechStackInput = useStore((state) => state.handleTechStackInput);
  const config = useStore((state) => state.config);
  const handleAddTechStack = useStore((state) => state.handleAddTechStack);
  const handleDeleteTechStack = useStore(
    (state) => state.handleDeleteTechStack
  );
  return (
    <Stack alignItems="center" mt={2}>
      <Card>
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
                maxRows={6}
                value={config.app}
                onChange={(event) => handleInputs("app", event.target.value)}
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
              <Typography variant="caption">
                Set your Techstack to get more relevant suggestions.
              </Typography>
              <Stack direction="row" sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
                {config.techStack.map((stack) => (
                  <Chip
                    size="small"
                    key={stack.id}
                    label={stack.name}
                    variant="outlined"
                    onDelete={() => handleDeleteTechStack(stack.id)}
                  />
                ))}
              </Stack>

              <TextField
                multiline
                fullWidth
                size="small"
                id="techStack"
                name="techStack"
                label="Set tech-stack and relevant technology buzzwords"
                sx={{ mt: 2 }}
                value={techStackInput}
                onChange={(event: any) => {
                  handleTechStackInput(event.target.value);
                }}
              />
            </CardContent>
            <CardActions>
              <Button type="button" size="small" onClick={handleAddTechStack}>
                Add Technology
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Stack>
  );
}
