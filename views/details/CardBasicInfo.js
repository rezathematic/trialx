// Component Imports
import PatientAvatar from "@/components/patients/basicInfo/PatientAvatar";
import PatientName from "@/components/patients/basicInfo/PatientName";
import PatientStatus from "@/components/patients/basicInfo/PatientStatus";
import PatientTable from "@/components/patients/basicInfo/PatientTable";

export default function CardBasicInfo({ patient }) {
  const {
    basicInfo: { firstName, lastName, status, image },
  } = patient;
  const name = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200">
      <PatientAvatar src={image} name={name} />
      <PatientName name={name} />
      <PatientStatus status={status} />
      <PatientTable {...patient} />
    </div>
  );
}
