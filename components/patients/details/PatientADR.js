import { useState } from "react";

export default function PatientADR({ patient }) {
  const [adr, setAdr] = useState({
    rash: false,
    urticaria: false,
    diarrhea: false,
    pruritus: false,
    pharyngitis: false,
    bronchitis: false,
    rhinitis: false,
  });

  const handleAdrChange = (e) => {
    setAdr({ ...adr, [e.target.name]: e.target.checked });
  };

  const handleAdrSave = () => {
    console.log(adr);
  };

  return (
    <>
      <h2 className="text-xl font-semibold tracking-wide text-slate-700">
        Adverse Drug Reaction
      </h2>
      <div className="mt-8">
        {Object.keys(adr).map((key) => {
          return (
            <div key={key} className="mb-1 items-center text-lg">
              <input
                type="checkbox"
                name={key}
                id={key}
                checked={adr[key]}
                onChange={handleAdrChange}
                className="cursor-pointer"
              />
              <label className="ml-2 cursor-pointer" htmlFor={key}>
                {key}
              </label>
            </div>
          );
        })}
        <button
          onClick={handleAdrSave}
          className="mt-3 rounded-md bg-blue-600 py-2 px-4 text-white"
        >
          Save
        </button>
      </div>
    </>
  );
}
