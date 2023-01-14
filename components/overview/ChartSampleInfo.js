import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "Jan, 14",
    male: 6,
    female: 5,
  },
  {
    date: "Jan, 15",
    male: 6,
    female: 5,
  },
  {
    date: "Jan, 16",
    male: 6,
    female: 5,
  },
  {
    date: "Jan, 17",
    male: 6,
    female: 6,
  },
  {
    date: "Jan, 18",
    male: 6,
    female: 6,
  },
];

export default function ChartSampleInfo() {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex h-full w-full flex-col rounded-lg border border-slate-100 bg-white py-8 px-4 shadow-lg">
        <h2 className="text-xl font-semibold tracking-wide text-slate-700">
          Sample Details
        </h2>
        <div className="mt-8 h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
              <Bar dataKey="male" fill="#8884d8" />
              <Bar dataKey="female" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
