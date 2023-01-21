import ChartBP from "@/components/patients/details/ChartBP";

export default function CardBP({ patient }) {
  return (
    <div className="col-span-4 flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <ChartBP patient={patient} />
    </div>
  );
}
