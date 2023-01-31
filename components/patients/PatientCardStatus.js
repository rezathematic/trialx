import cn from "classnames";

export default function PatientCardStatus({ status }) {
  return (
    <div className="mt-2 flex items-center">
      <div
        className={cn("flex h-4 w-4 items-center justify-center rounded-full", {
          "bg-green-100": status === "Healthy",
          "bg-blue-100": status === "Mild",
          "bg-yellow-100": status === "Moderate",
          "bg-orange-100": status === "Severe",
          "bg-red-100": status === "Critical",
        })}
      >
        <svg
          className={cn("h-2 w-2", {
            "text-green-500": status === "Healthy",
            "text-blue-500": status === "Mild",
            "text-yellow-500": status === "Moderate",
            "text-orange-500": status === "Severe",
            "text-red-500": status === "Critical",
          })}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      </div>
      <p
        className={cn("ml-2 text-sm font-medium tracking-wide", {
          "text-green-500": status === "Healthy",
          "text-blue-500": status === "Mild",
          "text-yellow-500": status === "Moderate",
          "text-orange-500": status === "Severe",
          "text-red-500": status === "Critical",
        })}
      >
        {status}
      </p>
    </div>
  );
}
