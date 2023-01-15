import Image from "next/image";

const patinetInfo = {
  id: 1,
  name: "Sara Smith",
  image: "/assets/images/patient-1.jpg",
  status: "Healthy",
  sex: "Female",
  age: 25,
  phone: "123-456-7890",
};

export default function PatientCard() {
  return (
    <div className="flex aspect-[16/9] flex-col rounded-md border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200 xl:col-span-2">
      <div className="flex">
        {/* Avatar */}
        <div className="relative mr-4 h-20 w-20">
          <Image
            src={patinetInfo.image}
            alt={patinetInfo.name}
            width={100}
            height={100}
            className="absolute inset-0 h-full w-full rounded-full object-cover"
          />
        </div>
        {/* Avatar END */}
        {/* Patient Info */}
        <div>
          <p className="font-medium text-slate-700">{patinetInfo.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            <span className=" font-medium">ID: </span>
            {patinetInfo.id}
          </p>
          <div className="mt-2 flex items-center">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-2 w-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
            </div>
            <p className="ml-2 text-sm text-green-500">{patinetInfo.status}</p>
          </div>
        </div>
        {/* Patient Info END */}
      </div>
      <div className="mt-8 flex flex-col text-sm">
        <div className="mb-1 flex">
          <p className="min-w-[48px] font-medium text-slate-700">Sex</p>
          <p className="ml-4 font-light tracking-wide text-slate-700">
            {patinetInfo.sex}
          </p>
        </div>
        <div className="mb-1 flex">
          <p className="min-w-[48px] font-medium text-slate-700">Age</p>
          <p className="ml-4 font-light tracking-wide text-slate-700">
            {patinetInfo.age}
          </p>
        </div>
        <div className="mb-1 flex">
          <p className="min-w-[48px] font-medium text-slate-700">Phone</p>
          <p className="ml-4 font-light tracking-wide text-slate-700">
            {patinetInfo.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
