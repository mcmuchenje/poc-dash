import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF00FF"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Dashboard = () => (
  <Grid sx={{ mt: 1 }} container spacing={2}>
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <Title title="Dashboard" />   
        <CardContent>
            <Typography variant="h5" component="div">
                Top 5 Users
            </Typography>
          {/* <p>Welcome to the dashboard!</p> */}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
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
