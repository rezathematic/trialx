import Link from "next/link";

export default function PatientTable(props) {
  const id = props.uid;
  const { sex, age, weight, phone, email } = props.basicInfo;

  return (
    <table className="mt-2 border-separate border-spacing-1">
      <tbody className="text-sm text-slate-500">
        <tr>
          <td className="font-medium text-slate-600">ID</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td className="font-medium text-slate-600">Sex</td>
          <td>{sex}</td>
        </tr>
        <tr>
          <td className="font-medium text-slate-600">Age</td>
          <td>{age}</td>
        </tr>
        <tr>
          <td className="font-medium text-slate-600">Weight</td>
          <td>{weight} kg</td>
        </tr>
        <tr>
          <td className="font-medium text-slate-600">Phone</td>
          <td>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-slate-600">Email</td>
          <td>
            <Link href={`mailto:${email}`}>{email}</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
