import { useState } from "react";
import Router from "next/router";

// Component Imports
import { Button } from "@/components/utils/Buttons";

// Lib Imports
import { removeUnderscoreStartCase } from "@/lib/utils";

export default function PatientADR({ patient }) {
  const id = patient.uid;
  const [adr, setAdr] = useState({ ...patient.adr });
  const [isLoading, setIsLoading] = useState(false);

  const handleAdrChange = (e) => {
    setAdr({ ...adr, [e.target.name]: e.target.checked });
  };

  const handleAdrSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const body = { id, adr };
      await fetch("/api/patients/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      Router.reload();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
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
                {removeUnderscoreStartCase(key)}
              </label>
            </div>
          );
        })}
        <Button
          onClick={handleAdrSave}
          variant="primary"
          className="mt-3"
          isLoading={isLoading}
        >
          Save
        </Button>
      </div>
    </>
  );
}
