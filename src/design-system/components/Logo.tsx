import Image from "next/image";
import LogoImg from "../../../public/logo.svg";

export function Logo() {
  return <Image src={LogoImg} alt="logo" width={100} height={100} />;
}
