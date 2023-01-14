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
    date: "Adverse Drug Reaction",
    Rash: 11,
    Urticaria: 10,
    Diarrhea: 9,
    Pruritus: 8,
    Pharyngitis: 7,
    Bronchitis: 7,
    Rhinitis: 7,
  },
];

export default function ChartAdr() {
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
              {Object.keys(data[0]).map((key) => {
                if (key !== "date") {
                  return <Bar key={key} dataKey={key} fill="#8884d8" />;
                }
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
