import PatientADR from "@/components/patients/details/PatientADR";

export default function CardADR({ patient }) {
  return (
    <div className="col-span-4 flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <PatientADR patient={patient} />
    </div>
  );
}
