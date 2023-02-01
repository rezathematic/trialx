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

const colors = {
  bronchitis: "#003f5c",
  diarrhea: "#2f4b7c",
  pharyngitis: "#665191",
  pruritus: "#a05195",
  rash: "#d45087",
  rhinitis: "#f95d6a",
  urticaria: "#ff7c43",
  patientId: "#ffa600",
};

export default function ChartAdr({ data }) {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex h-full w-full flex-col rounded-lg border border-slate-100 bg-white py-8 px-4 shadow-lg">
        <h2 className="text-xl font-semibold tracking-wide text-slate-700">
          Adverse Drug Reaction
        </h2>
        <div className="mt-8 h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={Array.isArray(data) ? data : [data]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="adr" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(data).map((key) => {
                if (key !== "patientId") {
                  return <Bar key={key} dataKey={key} fill={colors[key]} />;
                }
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
