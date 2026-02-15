import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgZoom(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 14 14" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_6652_74929" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}><rect width={14} height={14} fill="#D9D9D9" /></mask><g mask="url(#mask0_6652_74929)"><path d="M1.75 12.25V8.75H2.91667V10.2667L4.725 8.45833L5.54167 9.275L3.73333 11.0833H5.25V12.25H1.75ZM9.275 5.54167L8.45833 4.725L10.2667 2.91667H8.75V1.75H12.25V5.25H11.0833V3.73333L9.275 5.54167Z" /></g></svg>;
}