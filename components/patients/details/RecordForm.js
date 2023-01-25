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

export const AddNewPatient = ({ handleSave }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="grid w-full grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            First name
          </label>
          <input
            type="text"
            placeholder="First name"
            aria-invalid={errors.firstName ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          {errors.firstName?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              First name is required
            </p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              First name cannot exceed 80 characters
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name"
            aria-invalid={errors.lastName ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
          {errors.lastName?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Last name is required
            </p>
          )}
          {errors.lastName?.type === "maxLength" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Last name cannot exceed 100 characters
            </p>
          )}
        </div>

        {/* Sex */}
        <div className="flex flex-col">
          <label
            htmlFor="sex"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Sex
          </label>
          <select
            {...register("sex", { required: true })}
            aria-invalid={errors.sex ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.sex && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Please select the patient&apos;s sex
            </p>
          )}
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label
            htmlFor="age"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            min="1"
            placeholder="Age"
            aria-invalid={errors.age ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("age", {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
          />
          {errors.age?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Age is required
            </p>
          )}
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label
            htmlFor="weight"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Weight (kg)
          </label>
          <input
            type="number"
            min="1"
            placeholder="Weight (kg)"
            aria-invalid={errors.weight ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("weight", {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
          />
          {errors.weight?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Weight is required
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            aria-invalid={errors.phone ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("phone", { required: true, maxLength: 10 })}
          />
          {errors.phone?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Phone number is required
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Phone number cannot exceed 10 characters
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            aria-invalid={errors.email ? "true" : "false"}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Email is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Email is invalid
            </p>
          )}
        </div>

        {/* Health Status */}
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="mb-1 block text-xs font-medium tracking-wide text-gray-700"
          >
            Health Status
          </label>
          <select
            {...register("status", { required: true })}
            className="mb-4 block rounded-md border border-slate-300 px-2 py-2"
            aria-invalid={errors.status ? "true" : "false"}
          >
            <option value="Healthy">Healthy</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
            <option value="Critical">Critical</option>
          </select>
          {errors.status && (
            <p
              role="alert"
              className="mt-1 mb-4 text-sm font-medium text-red-500"
            >
              Please select the patient&apos;s health status
            </p>
          )}
        </div>
      </div>

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
