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
      <div className="sm:relative">
        <PageTitle>Patient Details</PageTitle>
        <div className="absolute top-3 right-4 sm:top-0 sm:right-0">
          <CreateRecordModal id={patient.uid} />
        </div>
      </div>
      <Grid className="gap-4 pb-12">
        <div className="order-2 col-span-full grid grid-cols-12 gap-4 md:order-1 md:col-span-6 lg:col-span-9">
          <CardBP patient={patient} />
          <CardTemperature patient={patient} />
          <CardAntibody patient={patient} />
          <CardADR patient={patient} />
        </div>
        <div className="order-1 col-span-full md:order-2 md:col-span-6 lg:col-span-3">
          <CardBasicInfo patient={patient} />
          <CardAllergy patient={patient} />
        </div>
      </Grid>
    </>
  );
}
