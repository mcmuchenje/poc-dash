import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
];

export const Dashboard = () => (
  <Grid sx={{ mt: 1 }} container spacing={2}>
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <Title title="Dashboard" />
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Grid>
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <CardContent>Graph two</CardContent>
      </Card>
    </Grid>
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <CardContent>Graph three</CardContent>
      </Card>
    </Grid>
  </Grid>
);
