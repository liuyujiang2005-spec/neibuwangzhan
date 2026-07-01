import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toThaiTime(utcStr: string | null | undefined): string {
  if (!utcStr) return "";
  const d = new Date(utcStr);
  const thai = new Date(d.getTime() + 7 * 60 * 60 * 1000);
  const y = thai.getUTCFullYear();
  const m = String(thai.getUTCMonth() + 1).padStart(2, "0");
  const day = String(thai.getUTCDate()).padStart(2, "0");
  const h = String(thai.getUTCHours()).padStart(2, "0");
  const min = String(thai.getUTCMinutes()).padStart(2, "0");
  return `${y}-${m}-${day} ${h}:${min}`;
}
