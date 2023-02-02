import { useState } from "react";
import Router from "next/router";

// MUI Imports
import Modal from "@mui/material/Modal";

// Component Imports
import { Button } from "@/components/utils/Buttons";
import Spinner from "@/components/utils/Spinner";

// Form Imports
import {
  AddBpForm,
  AddTemperature,
  AddAntibody,
} from "@/components/patients/details/RecordForm";

const reports = [
  { value: "bloodPressure", label: "Blood Pressure" },
  { value: "temperature", label: "Temperature" },
  { value: "antibody", label: "Antibody" },
];

export default function CreateRecordModal({ id }) {
  const [open, setOpen] = useState(false);
  const [reportType, setReportType] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setReportType(null);
    setLoading(false);
  };

  const handleReportType = (event) => {
    setReportType(event.target.value);
  };

  const handleSave = async (e) => {
    setLoading(true);
    try {
      const body = { id, [reportType]: e };
      await fetch("/api/patients/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      Router.reload();
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        className="inline-flex items-center text-xs uppercase"
        onClick={handleOpen}
      >
        + Add New Record
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-create-blood-pressure"
        aria-describedby="modal-create-new-blood-pressure"
      >
        <div className="absolute top-[50%] left-[50%] flex h-[85vh] w-[95vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-scroll bg-white p-6 shadow-md md:h-[85vh] md:w-[90vw] lg:h-[70vh] lg:w-1/2">
          {loading ? (
            <div className="flex h-full flex-col items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mt-2 pb-6">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-medium leading-6 text-slate-700">
                  Add New Record
                </h2>
                <hr />
              </div>
              <p>Add a new record for patient with ID {id}.</p>
              <div className="my-12 flex flex-col gap-2">
                <p className="text-sm font-medium text-slate-700">
                  Choose a record to add
                </p>

                <select
                  name="report-type"
                  id="report-type"
                  className="mb-4 w-1/2 rounded-md border border-slate-300 px-1 py-2"
                  onChange={handleReportType}
                  value={reportType}
                >
                  <option value="" selected disabled>
                    Select record type
                  </option>
                  {reports.map((report) => (
                    <option key={report.value} value={report.value}>
                      {report.label}
                    </option>
                  ))}
                </select>

                {reportType === "bloodPressure" && (
                  <div>
                    <AddBpForm handleSave={handleSave} />
                  </div>
                )}
                {reportType === "temperature" && (
                  <div>
                    <AddTemperature handleSave={handleSave} />
                  </div>
                )}
                {reportType === "antibody" && (
                  <div>
                    <AddAntibody handleSave={handleSave} />
                  </div>
                )}
              </div>
              <div className="fixed bottom-0 left-0 right-0 flex w-full flex-col justify-end bg-white p-6">
                <hr />
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="default"
                    className="inline-flex items-center"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
