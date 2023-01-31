import Image from "next/image";

export default function PatientAvatar({ src, name }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src ? src : "/assets/images/userp.png"}
        alt={name}
        width={100}
        height={100}
        className="h-full max-h-60 w-full rounded-sm object-cover shadow-sm"
      />
    </div>
  );
}
