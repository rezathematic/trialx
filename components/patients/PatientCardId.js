export default function PatientCardId({ id }) {
  return (
    <p className="mt-1 text-sm text-slate-500">
      <span className=" font-medium">ID: </span>
      {id}
    </p>
  );
}
