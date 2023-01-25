import { useState } from "react";
import Router from "next/router";

// MUI Imports
import Modal from "@mui/material/Modal";

// Component Imports
import { Button } from "@/components/utils/Buttons";
import Spinner from "@/components/utils/Spinner";

// Form Imports
import { AddNewPatient } from "@/components/patients/details/RecordForm";

export default function AddPatientModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  const handleSave = async (e) => {
    setLoading(true);
    try {
      await fetch("/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
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
        + Add Patient
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-add-patient"
        aria-describedby="modal-add-new-patient"
      >
        <div className="absolute top-[50%] left-[50%] flex h-[70vh] w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-scroll bg-white p-6 shadow-md">
          {loading ? (
            <div className="flex h-full flex-col items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mt-2 pb-6">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-medium leading-6 text-slate-700">
                  Add New Patient
                </h2>
                <hr />
              </div>
              <p>Add a new patient to the trial.</p>
              <div className="my-12 flex flex-col gap-2 overflow-y-scroll pb-16">
                <AddNewPatient handleSave={handleSave} />
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
