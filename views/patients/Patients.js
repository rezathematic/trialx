// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";

// View imports
import CardPatient from "@/views/patients/CardPatient";

export default function Patients({ patients }) {
  return (
    <>
      <PageTitle>Patients List</PageTitle>
      <Grid>
        {patients.map((patient, i) => (
          <CardPatient key={i} patient={patient} />
        ))}
      </Grid>
    </>
  );
}
