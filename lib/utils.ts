import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const ROUTES = {
  BUSINESS_ASSESSMENT: "/business-assessment",
  CONTACT_US: "/contact",
  // add more routes here
};
