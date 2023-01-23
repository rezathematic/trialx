// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";
import CreateRecordModal from "@/components/patients/details/modals/CreateRecordModal";

// View imports
import CardBasicInfo from "@/views/details/CardBasicInfo";
import CardAllergy from "@/views/details/CardAllergy";
import CardBP from "@/views/details/CardBP";
import CardTemperature from "@/views/details/CardTemperature";
import CardADR from "@/views/details/CardADR";
import CardAntibody from "@/views/details/CardAntibody";

export default function Details({ patient }) {
  return (
    <>
      <div className="relative">
        <PageTitle>Patient Details</PageTitle>
        <div className="absolute top-0 right-0">
          <CreateRecordModal id={patient.uid} />
        </div>
      </div>
      <Grid>
        <div className="col-span-10 grid grid-cols-12">
          <CardBP patient={patient} />
          <CardTemperature patient={patient} />
          <CardADR patient={patient} />
          <CardAntibody patient={patient} />
        </div>
        <div className="col-span-2">
          <CardBasicInfo patient={patient} />
          <CardAllergy patient={patient} />
        </div>
      </Grid>
    </>
  );
}
