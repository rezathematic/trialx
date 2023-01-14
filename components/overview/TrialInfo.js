// Lib imports
import { removeUnderscoreStartCase } from "@/lib/utils";

const trialInfo = {
  title: "RC31/10022891",
  primary_purpose: "Treatment",
  trial_type: "Interventional",
  intervention_type: "Drug",
  method: "Randomized Controlled Trial",
  medical_condition: "Pneumonia",
  phase: "Phase 3",
};

export default function TrialInfo() {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex h-full w-full flex-col rounded-lg border border-slate-100 bg-white py-8 px-4 shadow-lg">
        <h2 className="text-xl font-semibold tracking-wide text-slate-700">
          Trial Info
        </h2>
        <div className="mt-8 flex flex-col">
          {Object.keys(trialInfo).map((key) => (
            <div className="mb-4 flex" key={key}>
              <h3 className="min-w-[150px] font-medium text-slate-700">
                {removeUnderscoreStartCase(key)}
              </h3>
              <p className="ml-6 font-light tracking-wide text-slate-700">
                {trialInfo[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
