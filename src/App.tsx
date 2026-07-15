import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import './App.css';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';

function App() {

  const dataFetcherOutput = useFetchData();

  return (

    <Grid container spacing={5} sx={{ justifyContent: "flex-start", alignItems: "center" }}>

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI></HeaderUI>
      </Grid>

      {/* Alertas */}
      <Grid container sx={{ justifyContent: "right", alignItems: "center" }}><AlertUI description="No se preveen lluvias" /></Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 9 }}>

          {/* Temperatura */}
          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput &&
                (<IndicatorUI
                    title='Temperatura (2m)'
                    description={ `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}` } />)
            }
        </Grid>



          {/* Temperatura aparente */}
          <Grid size={{ xs: 12, md: 3 }}>
              {
                dataFetcherOutput &&
                (<IndicatorUI
                  title='Temperatura Aparente'
                  description= {`${dataFetcherOutput.current.relative_humidity_2m}`}
                />)
              }
          </Grid>


          {/* Velocidad del viento */}
          <Grid size={{ xs: 12, md: 3 }}>
              <IndicatorUI
                  title="Velocidad del viento"
                  description={`${dataFetcherOutput?.current.wind_speed_10m}`}
              />
          </Grid>


          {/* Humedad relativa */}
          <Grid size={{ xs: 12, md: 3 }}>
              <IndicatorUI
                  title="Humedad relativa"
                  description={`${dataFetcherOutput?.current.relative_humidity_2m}`}
              />
          </Grid>

      </Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 6, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
              <ChartUI
              arrLabels={dataFetcherOutput?.hourly.time ?? []}
              arrValues1={dataFetcherOutput?.hourly.temperature_2m ?? []}
              arrValues2={dataFetcherOutput?.hourly.wind_speed_10m ?? []}

              />
           </Grid>

      {/* Tabla */}
      <Grid size={{ xs: 6, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
              <TableUI
                arrLabels={dataFetcherOutput?.hourly.time ?? [] }
                arrValues1={dataFetcherOutput?.hourly.temperature_2m ?? []}
                arrValues2={dataFetcherOutput?.hourly.wind_speed_10m ?? []}
              />
           </Grid>

      {/* Información adicional */}
      <Grid>Elemento: Información adicional</Grid>

    </Grid>
  );
}

export default App
