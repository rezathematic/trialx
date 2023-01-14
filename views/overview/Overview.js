// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";

// View imports
import CardTrialInfo from "@/views/overview/CardTrialInfo";

export default function Overview() {
  return (
    <>
      <PageTitle>Overview</PageTitle>
      <Grid>
        <CardTrialInfo />
      </Grid>
    </>
  );
}
