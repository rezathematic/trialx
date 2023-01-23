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

export default function ChartBP({ patient }) {
  const { bloodPressure } = patient;

  const data = bloodPressure.map((item) => {
    return {
      date: dayjs(item.date).format("MMM, DD"),
      systolic: item.systolic,
      diastolic: item.diastolic,
    };
  });

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
