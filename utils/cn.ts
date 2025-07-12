// Import dependencies
import { ClassValue, clsx } from "clsx"; // clsx untuk penggabungan class secara kondisional
import { twMerge } from "tailwind-merge"; // twMerge untuk mengatasi konflik class Tailwind

/**
 * Utility function untuk menggabungkan class Tailwind CSS
 * - Menggunakan clsx untuk kondisi
 * - Menggunakan twMerge untuk menangani konflik class
 *
 * @param inputs - Array berisi nilai class yang akan digabungkan
 * @returns String hasil penggabungan class
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs)); // Gabungkan clsx dengan twMerge
}
