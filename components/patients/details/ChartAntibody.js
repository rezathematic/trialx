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
import dayjs from "dayjs";

export default function ChartAntibody({ patient }) {
  const { antibody } = patient;

  const data = antibody.map((item) => {
    return {
      IgM: item.igm,
      IgG: item.igg,
      date: dayjs(item.date).format("MMM, DD"),
    };
  });

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
