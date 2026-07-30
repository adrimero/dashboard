import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IndicatorUIProps {
  title: string;
  description: string;
}

export default function IndicatorUI({
  title,
  description,
}: IndicatorUIProps) {
  return (
    <Card
      sx={{
        height: "100%",
        minHeight: 120,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{ fontWeight: 600 }}
        >
          {description}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}