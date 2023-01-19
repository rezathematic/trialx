import Image from "next/image";

export default function PatientCardAvatar({ src, name }) {
  return (
    <div className="relative mr-4 h-20 w-20">
      <Image
        src={src ? src : "/assets/images/userp.png"}
        alt={name}
        width={100}
        height={100}
        className="absolute inset-0 h-full w-full rounded-full object-cover"
      />
    </div>
  );
}
