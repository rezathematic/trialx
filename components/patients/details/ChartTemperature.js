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
    temperature: 100,
  },
  {
    date: "Jan, 13",
    temperature: 101,
  },
  {
    date: "Jan, 14",
    temperature: 96,
  },
  {
    date: "Jan, 15",
    temperature: 97,
  },
  {
    date: "Jan, 16",
    temperature: 96,
  },
  {
    date: "Jan, 17",
    temperature: 97,
  },
  {
    date: "Jan, 18",
    temperature: 96,
  },
];

export default function ChartTemperature() {
  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="text-xl font-semibold tracking-wide text-slate-700">
        Body Temperature
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
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis unit=" ℉" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#82ca9d"
              unit=" ℉"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
