import { Documentation } from "@/app/components/documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Documentation | hawkrix Agency",
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}
