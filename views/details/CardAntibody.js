import ChartAntibody from "@/components/patients/details/ChartAntibody";

export default function CardTemperature({ patient }) {
  return (
    <div className="col-span-4 flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <ChartAntibody patient={patient} />
    </div>
  );
}
