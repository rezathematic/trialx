// Component Imports
import PatientAvatar from "@/components/patients/basicInfo/PatientAvatar";
import PatientName from "@/components/patients/basicInfo/PatientName";
import PatientCardStatus from "@/components/patients/PatientCardStatus";
import PatientTable from "@/components/patients/basicInfo/PatientTable";

export default function CardBasicInfo({ patient }) {
  const {
    basicInfo: { firstName, lastName, status, image },
  } = patient;
  const name = `${firstName} ${lastName}`;

  return (
    <div className="mb-4 flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <PatientAvatar src={image} name={name} />
      <PatientName name={name} />
      <PatientCardStatus status={status} />
      <PatientTable {...patient} />
    </div>
  );
}
