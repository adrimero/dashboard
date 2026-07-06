import { Grid } from '@mui/material';
import './App.css';

function App() {

  return (
      <Grid container spacing={5} sx={{ justifyContent: "flex-start", alignItems: "center" }}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>Elemento: Encabezado</Grid>

         {/* Alertas */}
         <Grid>Elemento: Alertass</Grid>

         {/* Selector */}
         <Grid size={{ xs: 12, md: 3  }}>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block"} }}>Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
  );
}

export default App
