export default function PatientAllergy({ patient }) {
  const { allergies } = patient;

  return (
    <div>
      <h2 className="text-xl font-medium tracking-wide text-slate-500">
        Allergies
      </h2>
      <div className="flex flex-col">
        <table className="border-separate border-spacing-y-4">
          <tbody className="text-sm text-slate-500">
            {allergies.map((allergy, index) => (
              <tr key={index}>
                <td className="font-medium text-slate-600">{allergy.drug}</td>
                <td>{allergy.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
