import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface Props {
  arrLabels: string[];
  arrValues1: number[];
  arrValues2: number[];
}

export default function ChartUI({
    arrLabels,
    arrValues1,
    arrValues2,
}: Props) {
   return (
      <>
         <Typography variant="h5" component="div">
            Chart arrLabels vs arrValues1 & arrValues2
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: arrValues1, label: 'value1'},
               { data: arrValues2, label: 'value2'},
            ]}
            xAxis={[{ scaleType: 'point', data: arrLabels }]}
         />
      </>
   );
}
