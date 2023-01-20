export default function PatientStatus({ status }) {
  return (
    <div className="my-2 flex items-center">
      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-2 w-2 text-green-500"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      </div>
      <p className="ml-2 text-sm text-green-500">{status}</p>
    </div>
  );
}
