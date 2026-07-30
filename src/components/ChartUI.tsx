import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";

interface ChartUIProps {
  arrLabels: string[];
  arrValues1: number[];
  arrValues2: number[];
}

export default function ChartUI({
  arrLabels,
  arrValues1,
  arrValues2,
}: ChartUIProps) {

  const labels24Hours = arrLabels
    .slice(0, 24)
    .map((dateTime) => dateTime.slice(11, 16));

  const temperatures24Hours =
    arrValues1.slice(0, 24);

  const humidity24Hours =
    arrValues2.slice(0, 24);

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        Temperatura y humedad en las próximas 24 horas
      </Typography>

      <LineChart
        height={350}
        series={[
          {
            data: temperatures24Hours,
            label: "Temperatura (°C)",
            showMark: false,
          },
          {
            data: humidity24Hours,
            label: "Humedad relativa (%)",
            showMark: false,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: labels24Hours,
            label: "Hora",
          },
        ]}
      />
    </>
  );
}