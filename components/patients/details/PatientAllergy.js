import { useState } from "react";
import Router from "next/router";

// Component Imports
import AllergySeverityPill from "@/components/patients/details/AllergySeverityPill";
import { Button } from "@/components/utils/Buttons";

export default function PatientAllergy({ patient }) {
  const { allergy } = patient;

  // states
  const [newAllergy, setNewAllergy] = useState({
    allergy: "",
    severity: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // handlers
  const handleFormShow = () => {
    setShowForm(!showForm);
  };

  const handleCancel = () => {
    setNewAllergy({
      allergy: "",
      severity: "",
    });
    setIsLoading(false);
    setShowForm(false);
  };

  const handleChange = (e) => {
    setNewAllergy({
      ...newAllergy,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/patients/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: patient.uid,
          allergy: [...allergy, newAllergy],
        }),
      });
      const data = await res.json();
      Router.reload();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-medium tracking-wide text-slate-700">
        Allergies
      </h2>
      <div className="flex flex-col">
        <table className="border-separate border-spacing-y-4">
          <tbody className="text-sm text-slate-500">
            {allergy.map((allergy, index) => (
              <tr key={index}>
                <td className="font-medium text-slate-600">
                  {allergy.allergy}
                </td>
                <td>
                  <AllergySeverityPill severity={allergy.severity} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* add new allergy */}
      <div className="mt-2">
        {!showForm ? (
          <button
            className="rounded-md  text-sm font-medium tracking-wide text-slate-500 hover:underline"
            onClick={handleFormShow}
          >
            + Add Allergy
          </button>
        ) : (
          <form className="flex flex-col text-sm">
            <label className="mt-2 mb-1 text-slate-700" htmlFor="allergy">
              Allergy
            </label>
            <input
              type="text"
              name="allergy"
              id="allergy"
              placeholder="Aspirin"
              className="rounded-md border border-slate-300 px-2 py-2"
              onChange={handleChange}
              required
            />
            <label className="mt-2 mb-1 text-slate-700" htmlFor="severity">
              Severity
            </label>
            <select
              name="severity"
              id="severity"
              className="rounded-md border border-slate-300 px-1 py-2"
              onChange={handleChange}
              value={newAllergy.severity}
              required
            >
              <option value="" disabled>
                Choose severity
              </option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
            <div className="mt-4 flex">
              <Button variant="default" className="mr-3" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleSave}
                isLoading={isLoading}
              >
                Add
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
