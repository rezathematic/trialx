import cn from "classnames";

export default function AllergySeverityPill({ severity }) {
  return (
    <p
      className={cn(
        "inline-block rounded-[3px] p-1 text-[11px] font-bold uppercase leading-none tracking-wide antialiased",
        {
          "bg-indigo-100 text-indigo-800": severity === "Mild",
          "bg-yellow-100 text-yellow-800": severity === "Moderate",
          "bg-red-100 text-red-800": severity === "Severe",
        }
      )}
    >
      {severity}
    </p>
  );
}
