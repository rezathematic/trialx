// Component Imports
export default function PatientAllergy({ patient }) {
  const { allergies } = patient;

  return (
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
  );
}
