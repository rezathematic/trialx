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
    systolic: 120,
    diastolic: 80,
  },
  {
    date: "Jan, 13",
    systolic: 130,
    diastolic: 90,
  },
  {
    date: "Jan, 14",
    systolic: 140,
    diastolic: 100,
  },
  {
    date: "Jan, 15",
    systolic: 130,
    diastolic: 100,
  },
  {
    date: "Jan, 16",
    systolic: 130,
    diastolic: 90,
  },
  {
    date: "Jan, 17",
    systolic: 120,
    diastolic: 80,
  },
  {
    date: "Jan, 18",
    systolic: 120,
    diastolic: 80,
  },
];

export default function ChartBP() {
  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="text-xl font-semibold tracking-wide text-slate-700">
        Blood Pressure
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
            <YAxis unit="mmhg" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#82ca9d"
              unit="mmhg"
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              unit="mmhg"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
