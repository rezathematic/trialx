import { useForm } from "react-hook-form";

// Component Imports
import { Button } from "@/components/utils/Buttons";

export const AddBpForm = ({ handleSave }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <input
        {...register("systolic", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        min="0"
        placeholder="Systolic BP (mmHg)"
        aria-invalid={errors.systolic ? "true" : "false"}
        className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
        type="number"
      />
      {errors.systolic?.type === "required" && (
        <p role="alert" className="mt-1 mb-4 text-sm font-medium text-red-500">
          Systolic Blood Pressure is required
        </p>
      )}

      <input
        {...register("diastolic", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        min="0"
        placeholder="Diastolic BP (mmHg)"
        aria-invalid={errors.diastolic ? "true" : "false"}
        className="block rounded-md border border-slate-300 px-2 py-2"
        type="number"
      />
      {errors.diastolic?.type === "required" && (
        <p role="alert" className="mt-1 mb-2 text-sm font-medium text-red-500">
          Diastolic Blood Pressure is required
        </p>
      )}

      <Button
        variant="primary"
        className="mt-2 inline-flex items-center justify-center"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export const AddTemperature = ({ handleSave }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <input
        {...register("temperature", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        min="0"
        placeholder="Temperature (°F)"
        aria-invalid={errors.temperature ? "true" : "false"}
        className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
        type="number"
        step="0.5"
      />
      {errors.temperature?.type === "required" && (
        <p role="alert" className="mt-1 mb-4 text-sm font-medium text-red-500">
          Body Temperature is required
        </p>
      )}
      <Button
        variant="primary"
        className="mt-2 inline-flex items-center justify-center"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export const AddAntibody = ({ handleSave }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <input
        {...register("igg", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        min="0"
        placeholder="IgG Levels (g/L)"
        aria-invalid={errors.igg ? "true" : "false"}
        className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
        type="number"
      />
      {errors.igg?.type === "required" && (
        <p role="alert" className="mt-1 mb-4 text-sm font-medium text-red-500">
          IgG Levels are required
        </p>
      )}

      <input
        {...register("igm", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        min="0"
        placeholder="IgM Levels (g/L)"
        aria-invalid={errors.igm ? "true" : "false"}
        className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
        type="number"
      />
      {errors.igm?.type === "required" && (
        <p role="alert" className="mt-1 mb-2 text-sm font-medium text-red-500">
          IgM Levels are required
        </p>
      )}

      <Button
        variant="primary"
        className="mt-2 inline-flex items-center justify-center"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};
