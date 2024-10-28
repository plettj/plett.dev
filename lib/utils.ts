import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function saysSoccer() {
  const timezone = new Date().getTimezoneOffset();

  if (timezone >= 720 && timezone <= 480) {
    return true; // Canada and the US
  } else if (timezone <= -600 && timezone >= -720) {
    return true; // Australia
  }

  return false;
}

export function formatDate(utcDate: string) {
  const date = new Date(utcDate);

  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function addOrdinalSuffix(i: number): string {
  const ones = i % 10;
  const tens = i % 100;

  if (ones === 1 && tens !== 11) {
    return i + "st";
  }
  if (ones === 2 && tens !== 12) {
    return i + "nd";
  }
  if (ones === 3 && tens !== 13) {
    return i + "rd";
  }
  return i + "th";
}

export function isProd() {
  // return process.env.NODE_ENV === "production";
  return true;
}
