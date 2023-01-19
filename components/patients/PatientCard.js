// compponent imports
import PatientCardAvatar from "@/components/patients/PatientCardAvatar";
import PatientCardName from "@/components/patients/PatientCardName";
import PatientCardId from "@/components/patients/PatientCardId";
import PatientCardStatus from "@/components/patients/PatientCardStatus";
import PatientCardAddInfo from "@/components/patients/PatientCardAddInfo";

export default function PatientCard({ patient }) {
  const { id, name, image, status, sex, age, phone } = patient;

  return (
    <div className="flex aspect-[16/9] flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200 xl:col-span-2">
      <div className="flex">
        <PatientCardAvatar src={image} name={name} />
        <div>
          <PatientCardName name={name} />
          <PatientCardId id={id} />
          <PatientCardStatus status={status} />
        </div>
      </div>
      <PatientCardAddInfo sex={sex} age={age} phone={phone} />
    </div>
  );
}
