import type { SVGProps } from "react";
import markAsset from "@/assets/tekravio-mark.png.asset.json";

/**
 * Brand mark — Tekravio.
 * Uses the unified Tekravio mark image asset across all pages.
 */
export function TekravioLogo({
  className,
  title = "Tekravio",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <img
      src={markAsset.url}
      alt={title}
      title={title}
      className={className}
      {...(props as Record<string, unknown>)}
    />
  );
}

/**
 * Academy — stacked layers / mortarboard abstraction.
 */
export function AcademyLogo({
  className,
  title = "Tekravio Academy",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Mortarboard top */}
        <path d="M4 16 L20 9 L36 16 L20 23 Z" />
        {/* Tassel */}
        <path d="M33 17 V26" />
        <circle cx="33" cy="28" r="1.6" fill="currentColor" stroke="none" />
        {/* Base / cohort */}
        <path d="M10 21 V28 C10 30.5 14.5 32 20 32 C25.5 32 30 30.5 30 28 V21" />
      </g>
    </svg>
  );
}

/**
 * Studio — code brackets framing a build cursor.
 */
export function StudioLogo({
  className,
  title = "Tekravio Studio",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 11 L6 20 L14 29" />
        <path d="M26 11 L34 20 L26 29" />
        <path d="M23 9 L17 31" />
      </g>
    </svg>
  );
}

/**
 * Labs — hex flask / accelerator kit.
 */
export function LabsLogo({
  className,
  title = "Tekravio Labs",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Hex outline */}
        <path d="M20 4 L33 11 V25 L20 32 L7 25 V11 Z" />
        {/* Flask inside */}
        <path d="M16 12 H24" />
        <path d="M17.5 12 V19 L13 28 C12.4 29.2 13.2 30.5 14.5 30.5 H25.5 C26.8 30.5 27.6 29.2 27 28 L22.5 19 V12" />
        {/* Bubbles */}
        <circle cx="18" cy="26" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="22" cy="24" r="0.7" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
