import "./App.css";

import { useState } from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import useFetchData from "./hooks/useFetchData";

import AlertUI from "./components/AlertUI";
import ChartUI from "./components/ChartUI";
import HeaderUI from "./components/HeaderUI";
import IndicatorUI from "./components/IndicatorUI";
import SelectorUI from "./components/SelectorUI";
import TableUI from "./components/TableUI";

function App() {
  const [selectedOption, setSelectedOption] =
    useState<string | null>(null);

  const { data, loading, error } =
    useFetchData(selectedOption);

  const selectedCity =
    selectedOption ?? "Guayaquil";

  return (
    <Grid
      className="dashboard"
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {/* Encabezado */}
      <Grid
        className="dashboard-header"
        size={{ xs: 12 }}
      >
        <HeaderUI />
      </Grid>

      {/* Alerta informativa */}
      <Grid
        container
        size={{ xs: 12 }}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <AlertUI description="No se prevén lluvias" />
      </Grid>

      {/* Selector */}
      <Grid
        className="dashboard-selector"
        size={{ xs: 12, md: 3 }}
      >
        <SelectorUI
          onOptionSelect={setSelectedOption}
        />
      </Grid>

      {/* Indicadores */}
      <Grid
        className="dashboard-indicators"
        container
        spacing={2}
        size={{ xs: 12, md: 9 }}
      >
        {data && (
          <>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <IndicatorUI
                title="Temperatura (2 m)"
                description={`${data.current.temperature_2m} ${data.current_units.temperature_2m}`}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <IndicatorUI
                title="Temperatura aparente"
                description={`${data.current.apparent_temperature} ${data.current_units.apparent_temperature}`}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <IndicatorUI
                title="Velocidad del viento"
                description={`${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <IndicatorUI
                title="Humedad relativa"
                description={`${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}`}
              />
            </Grid>
          </>
        )}
      </Grid>

      {/* Mensaje de carga sin desmontar la interfaz */}
      {loading && (
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              py: 2,
            }}
          >
            <CircularProgress size={24} />

            <Typography color="text.secondary">
              Actualizando datos de {selectedCity}...
            </Typography>
          </Box>
        </Grid>
      )}

      {/* Error sin ocultar todo el dashboard */}
      {error && (
        <Grid size={{ xs: 12 }}>
          <Alert severity="error">
            {error}
          </Alert>
        </Grid>
      )}

      {/* Gráfico */}
      <Grid
        className="dashboard-chart"
        size={{ xs: 12, md: 6 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {data ? (
          <ChartUI
            arrLabels={data.hourly.time}
            arrValues1={
              data.hourly.temperature_2m
            }
            arrValues2={
              data.hourly.relative_humidity_2m
            }
          />
        ) : (
          !loading &&
          !error && (
            <Typography>
              No hay datos disponibles.
            </Typography>
          )
        )}
      </Grid>

      {/* Tabla */}
      <Grid
        className="dashboard-table"
        size={{ xs: 12, md: 6 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {data ? (
          <TableUI
            arrLabels={data.hourly.time}
            arrValues1={
              data.hourly.temperature_2m
            }
            arrValues2={
              data.hourly.relative_humidity_2m
            }
          />
        ) : (
          !loading &&
          !error && (
            <Typography>
              No hay datos disponibles.
            </Typography>
          )
        )}
      </Grid>

      {/* Ciudad seleccionada */}
      <Grid size={{ xs: 12 }}>
        <Box className="selected-city">
          Ciudad seleccionada:{" "}
          <strong>{selectedCity}</strong>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;