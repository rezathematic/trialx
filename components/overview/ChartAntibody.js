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
    IgM: 4000,
    IgG: 2400,
  },
  {
    date: "Jan, 13",
    IgM: 3000,
    IgG: 1398,
  },
  {
    date: "Jan, 14",
    IgM: 2000,
    IgG: 9800,
  },
  {
    date: "Jan, 15",
    IgM: 2780,
    IgG: 3908,
  },
  {
    date: "Jan, 16",
    IgM: 1890,
    IgG: 4800,
  },
  {
    date: "Jan, 17",
    IgM: 2390,
    IgG: 3800,
  },
  {
    date: "Page G",
    IgM: 3490,
    IgG: 4300,
  },
];

export default function ChartAntibody() {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex h-full w-full flex-col rounded-lg border border-slate-100 bg-white py-8 px-4 shadow-lg">
        <h2 className="text-xl font-semibold tracking-wide text-slate-700">
          Average Antibody Levels
        </h2>
        <div className="mt-8 h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="IgG"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="IgM" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
