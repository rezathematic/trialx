export default function PatientCardAddInfo({ sex, age, phone }) {
  return (
    <div className="mt-8 flex flex-col text-sm">
      <div className="mb-1 flex">
        <p className="min-w-[48px] font-medium text-slate-700">Sex</p>
        <p className="ml-4 font-light tracking-wide text-slate-700">{sex}</p>
      </div>
      <div className="mb-1 flex">
        <p className="min-w-[48px] font-medium text-slate-700">Age</p>
        <p className="ml-4 font-light tracking-wide text-slate-700">{age}</p>
      </div>
      <div className="mb-1 flex">
        <p className="min-w-[48px] font-medium text-slate-700">Phone</p>
        <p className="ml-4 font-light tracking-wide text-slate-700">{phone}</p>
      </div>
    </div>
  );
}
