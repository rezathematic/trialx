export default function PatientAllergy({ patient }) {
  return (
    <div>
      <h2 className="text-xl font-medium tracking-wide text-slate-500">
        Allergies
      </h2>
      <div className="mt-4 flex flex-col text-slate-700">
        <table className="border-separate border-spacing-y-3">
          <tbody>
            {patient.allergies.map((allergy, index) => (
              <tr key={index}>
                <td>{allergy.drug}</td>
                <td>{allergy.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
