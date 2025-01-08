import { SVGProps } from "react";

export const IconDashboard = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 28C18.2091 28 20 26.2091 20 24C20 21.7909 18.2091 20 16 20C13.7909 20 12 21.7909 12 24C12 26.2091 13.7909 28 16 28Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M16 20V13.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M29.3334 17.3333C29.3334 9.96953 23.3638 4 16 4C8.63622 4 2.66669 9.96953 2.66669 17.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
