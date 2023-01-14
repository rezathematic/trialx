// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";

// View imports
import CardTrialInfo from "@/views/overview/CardTrialInfo";
import CardSampleInfo from "@/views/overview/CardSampleInfo";
import CardAdr from "@/views/overview/CardAdr";

export default function Overview() {
  return (
    <>
      <PageTitle>Overview</PageTitle>
      <Grid>
        <CardTrialInfo />
        <CardSampleInfo />
        <CardAdr />
      </Grid>
    </>
  );
}
