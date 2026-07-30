import Box from "@mui/material/Box";
import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

interface WeatherRow {
  id: number;
  date: string;
  hour: string;
  temperature: number;
  humidity: number;
}

interface TableUIProps {
  arrLabels: string[];
  arrValues1: number[];
  arrValues2: number[];
}

function combineArrays(
  arrLabels: string[],
  arrValues1: number[],
  arrValues2: number[]
): WeatherRow[] {
  return arrLabels
    .slice(0, 24)
    .map((dateTime, index) => ({
      id: index + 1,
      date: dateTime.slice(0, 10),
      hour: dateTime.slice(11, 16),
      temperature: arrValues1[index],
      humidity: arrValues2[index],
    }));
}

const columns: GridColDef<WeatherRow>[] = [
  {
    field: "id",
    headerName: "N.º",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Fecha",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "hour",
    headerName: "Hora",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "temperature",
    headerName: "Temperatura (°C)",
    type: "number",
    minWidth: 160,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "humidity",
    headerName: "Humedad (%)",
    type: "number",
    minWidth: 140,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

export default function TableUI({
  arrLabels,
  arrValues1,
  arrValues2,
}: TableUIProps) {
  const rows = combineArrays(
    arrLabels,
    arrValues1,
    arrValues2
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6, 12, 24]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}