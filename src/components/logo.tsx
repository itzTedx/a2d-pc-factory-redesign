import Image from "next/image";

import logo from "@/components/assets/logo.png";

export const Logo = () => {
  return <Image src={logo} alt="A2D Pc Factory Logo" className="size-12" />;
};
