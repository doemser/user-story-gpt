import BalanceIcon from "@mui/icons-material/Balance";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TitleIcon from "@mui/icons-material/Title";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Data {
  valueProposition: never[];
  acceptanceCriteria: never[];
  complexity: string;
  tasks: never[];
  title: string;
}

interface UserStoryProps {
  data: Data;
}

export function UserStory({ data }: UserStoryProps) {
  return (
    <>
      <Divider sx={{ my: 4 }} />
      <Stack gap={2}>
        <Card sx={{ p: 1 }}>
          <CardHeader
            avatar={<TitleIcon fontSize="large" />}
            action={<></>}
            title={data?.title}
            subheader={
              <>
                <Typography variant="caption">Complexity: </Typography>
                <Chip
                  size="small"
                  label={data.complexity.toUpperCase()}
                  variant="outlined"
                />
              </>
            }
          />
        </Card>
        <Card sx={{ p: 1 }}>
          <CardHeader
            avatar={<BalanceIcon fontSize="large" />}
            action={<></>}
            title="Value Proposition"
            subheader="Clarifies user needs and ensures value-driven product delivery."
          />
          <Stack p={2}>
            {data?.valueProposition?.map((value: string) => {
              return (
                <Typography key={value} variant="subtitle2">
                  {value}
                </Typography>
              );
            })}
          </Stack>
        </Card>
        <Card sx={{ p: 1 }}>
          <CardHeader
            avatar={<CheckBoxIcon fontSize="large" />}
            action={<></>}
            title="Acceptance Criteria"
            subheader="Specific conditions to be satisfied for a feature to be accepted"
          />
          <Stack p={2}>
            {data?.acceptanceCriteria?.map((criteria: string) => {
              return (
                <List dense disablePadding key={criteria}>
                  <ListItem>
                    <ListItemText>{criteria}</ListItemText>
                  </ListItem>
                </List>
              );
            })}
          </Stack>
        </Card>
        <Card sx={{ p: 1 }}>
          <CardHeader
            avatar={<ChecklistIcon fontSize="large" />}
            action={<></>}
            title="Tasks"
            subheader="Actionable steps needed to implement a feature."
          />
          <Stack p={2}>
            {data?.tasks?.map((task: string) => {
              return (
                <List dense disablePadding key={task}>
                  <ListItem>
                    <ListItemText>{task}</ListItemText>
                  </ListItem>
                </List>
              );
            })}
          </Stack>
        </Card>
      </Stack>
    </>
  );
}
