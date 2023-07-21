import useStore from "@/hooks/useStore";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useLocalStorageConfig } from "@/hooks/useLocalStorage";

export function SettingsModal() {
  const handleInputs = useStore((state) => state.handleInputs);
  const techStackInput = useStore((state) => state.techStackInput);
  const handleTechStackInput = useStore((state) => state.handleTechStackInput);
  const config = useStore((state) => state.config);
  const settings = useStore((state) => state.settings);
  const handleSettings = useStore((state) => state.handleSettings);
  const handleAddTechStack = useStore((state) => state.handleAddTechStack);
  const handleDeleteTechStack = useStore(
    (state) => state.handleDeleteTechStack
  );

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal open={settings} onClose={() => handleSettings(false)}>
      <Card sx={modalStyle}>
        <CardHeader
          avatar={<SettingsIcon fontSize="large" />}
          action={
            <IconButton onClick={() => handleSettings(false)}>
              <CloseIcon />
            </IconButton>
          }
          title="Settings"
          subheader="Write User Stories with ease."
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <AppsIcon sx={{ mr: 1 }} /> <Typography>App</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="caption">
              Providing a more specific context will lead to a better outcome.
            </Typography>
            <TextField
              required
              multiline
              fullWidth
              id="app"
              name="app"
              label="Describe your App as best as possible"
              maxRows={6}
              sx={{ mt: 2 }}
              value={config.app}
              onChange={(event) => handleInputs("app", event.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <LayersIcon sx={{ mr: 1 }} />
            <Typography>Tech Stack</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="caption">
              Set your Techstack to get more relevant suggestions.
            </Typography>
            <Stack direction="row" sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
              {config.techStack.map((stack) => (
                <Chip
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
              id="techStack"
              name="techStack"
              label="Set tech-stack and relevant technology buzzwords"
              sx={{ mt: 2 }}
              value={techStackInput}
              onChange={(event: any) => {
                handleTechStackInput(event.target.value);
              }}
            />
            <Button type="button" onClick={handleAddTechStack}>
              Add Technology
            </Button>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Modal>
  );
}
