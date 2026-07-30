# Weather Dashboard

Dashboard meteorológico desarrollado con **React**, **TypeScript**, **Vite** y **Material UI**. La aplicación consume la API de **Open-Meteo** para mostrar información climática actual y un pronóstico horario de distintas ciudades de Ecuador.

## Funcionalidades

- Selección de ciudad entre Guayaquil, Quito, Manta y Cuenca.
- Consulta automática de datos meteorológicos al cambiar de ciudad.
- Manejo del estado de la petición mediante:
  - `data`: almacena la respuesta de la API.
  - `loading`: indica cuando los datos están cargando.
  - `error`: almacena posibles errores de la petición.
- Indicadores del clima actual:
  - Temperatura.
  - Temperatura aparente.
  - Humedad relativa.
  - Velocidad del viento.
- Gráfico de temperatura y humedad para las próximas 24 horas.
- Tabla paginada con el detalle horario.
- Diseño adaptable para diferentes tamaños de pantalla.
- Interfaz desarrollada con componentes de Material UI.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Material UI
- MUI X Charts
- MUI X Data Grid
- Open-Meteo API

## Estructura principal

```text
src/
├── components/
│   ├── AlertUI.tsx
│   ├── ChartUI.tsx
│   ├── HeaderUI.tsx
│   ├── IndicatorUI.tsx
│   ├── SelectorUI.tsx
│   └── TableUI.tsx
├── hooks/
│   └── useFetchData.tsx
├── types/
│   └── DashboardTypes.tsx
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresa a la carpeta del proyecto:

```bash
cd <NOMBRE_DEL_PROYECTO>
```

Instala las dependencias:

```bash
npm install
```

## Ejecución local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Después, abre en el navegador la dirección mostrada por Vite, normalmente:

```text
http://localhost:5173
```

## Construcción para producción

```bash
npm run build
```

La versión compilada se generará en la carpeta `dist`.

## Despliegue en GitHub Pages

El proyecto utiliza una rama `main` para el código fuente y una rama `gh-pages` para la versión publicada.

Primero guarda y sube los cambios a `main`:

```bash
git checkout main
git add .
git commit -m "feat: improve weather dashboard"
git push origin main
```

Después publica la aplicación:

```bash
npm run deploy
```

## Hook `useFetchData`

El hook personalizado recibe la ciudad seleccionada y realiza una petición asincrónica a Open-Meteo.

```tsx
const { data, loading, error } = useFetchData(selectedOption);
```

Su funcionamiento general es:

```text
Ciudad seleccionada
        ↓
useFetchData
        ↓
Consulta a Open-Meteo
        ↓
data, loading y error
        ↓
Indicadores, gráfico y tabla
```

## API utilizada

La aplicación utiliza el endpoint de pronóstico de Open-Meteo:

```text
https://api.open-meteo.com/v1/forecast
```

Los datos solicitados incluyen:

- `temperature_2m`
- `relative_humidity_2m`
- `apparent_temperature`
- `wind_speed_10m`

La latitud y longitud cambian dinámicamente según la ciudad seleccionada.

## Autores

- Adrian Pincay
- Domenica Amores 
