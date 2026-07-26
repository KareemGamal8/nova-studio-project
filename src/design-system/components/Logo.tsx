import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="CodeKody logo"
      width={40}
      height={40}
      className="size-10 object-contain rounded-xl shadow-md"
    />
  );
}
