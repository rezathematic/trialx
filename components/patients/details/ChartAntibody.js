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
  {
    date: "Jan, 12",
    IgM: 40.0,
    IgG: 24.0,
  },
  {
    date: "Jan, 13",
    IgM: 30.0,
    IgG: 13.98,
  },
  {
    date: "Jan, 14",
    IgM: 20.0,
    IgG: 98.0,
  },
  {
    date: "Jan, 15",
    IgM: 27.8,
    IgG: 39.0,
  },
  {
    date: "Jan, 16",
    IgM: 18.9,
    IgG: 48.0,
  },
  {
    date: "Jan, 17",
    IgM: 23.9,
    IgG: 38.0,
  },
  {
    date: "Jan, 18",
    IgM: 34.9,
    IgG: 43.0,
  },
];

export default function ChartAntibody() {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-wide text-slate-700">
        Antibody Levels
      </h2>
      <div className="mt-8 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis unit=" g/L" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="IgG"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              unit=" g/L"
            />
            <Line type="monotone" dataKey="IgM" stroke="#82ca9d" unit=" g/L" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
