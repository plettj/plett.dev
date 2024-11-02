import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ipaddr from "ipaddr.js";
import { OGData } from "./types";
import { BASE_URL, META_TITLE_HOME } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOGData({
  type,
  url,
  title,
  description,
  previewImage,
}: OGData) {
  return {
    type: type || "website",
    siteName: "plett.dev",
    title: title !== META_TITLE_HOME ? `${title} | ${META_TITLE_HOME}` : title,
    description,
    url,
    images: [
      previewImage || {
        url: `${BASE_URL}/icons/favicon32.png`,
        width: 32,
        height: 32,
        alt: "J logo",
      },
    ],
  };
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

/**
 * Helper function for grouping public IP addresses.
 */
export function processIp(ip: string): string {
  const parsedIp = ipaddr.parse(ip);

  if (parsedIp.range() !== "private") {
    const [a, b] =
      parsedIp.kind() === "ipv4"
        ? (parsedIp as ipaddr.IPv4).octets
        : (parsedIp as ipaddr.IPv6).parts;
    ip = `${a}.${b}`;
  }

  return ip;
}

/**
 * Formats a Javascript date object to the format "YYYY/MM/DD".
 */
export function formatDateAbbr(date: Date) {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  const formatted = date.toISOString().split("T")[0].replaceAll("-", "/");
  return formatted;
}

export function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}
