import PatientAllergy from "@/components/patients/details/PatientAllergy";

export default function CardAllergy({ patient }) {
  return (
    <div className="flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <PatientAllergy patient={patient} />
    </div>
  );
}
