// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";
import AddPatientModal from "@/components/patients/details/modals/AddPatientModal";

// View imports
import CardPatient from "@/views/patients/CardPatient";

export default function Patients({ patients }) {
  return (
    <>
      <div className="relative">
        <PageTitle>Patients List</PageTitle>
        <div className="absolute top-0 right-0">
          <AddPatientModal />
        </div>
      </div>
      <Grid className="gap-4 pb-12">
        {patients.map((patient, i) => (
          <CardPatient key={i} patient={patient} />
        ))}
      </Grid>
    </>
  );
}
