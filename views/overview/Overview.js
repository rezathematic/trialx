// Component Imports
import PageTitle from "@/components/PageTitle";
import Grid from "@/components/utils/Grid";

// View imports
import CardTrialInfo from "@/views/overview/CardTrialInfo";
import CardSampleInfo from "@/views/overview/CardSampleInfo";
import CardGenderInfo from "@/views/overview/CardGenderInfo";
import CardAdr from "@/views/overview/CardAdr";
import CardAntibody from "@/views/overview/CardAntibody";

// Lib imports
import {
  genderDateCount,
  genderCount,
  antibodyAverage,
  adrCount,
} from "@/lib/utils";

export default function Overview({ trial }) {
  const genderCountData = genderCount(trial);
  const genderDateData = genderDateCount(trial);
  const antibodyData = antibodyAverage(trial);
  const adrData = adrCount(trial);
  return (
    <>
      <PageTitle>Overview</PageTitle>
      <Grid className="gap-4 pb-12">
        <CardTrialInfo />
        <CardSampleInfo sampleData={genderCountData} />
        <CardGenderInfo genderData={genderDateData} />
        <CardAdr adrData={adrData} />
        <CardAntibody antibodyData={antibodyData} />
      </Grid>
    </>
  );
}
