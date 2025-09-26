import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgButtons(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 41 40" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><rect x={0.25} width={40} height={40} rx={20} fill="#FFF1F6" /><mask id="mask0_4432_13807" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={8} y={8} width={25} height={24}><rect x={8.25} y={8} width={24} height={24} fill="#D9D9D9" /></mask><g mask="url(#mask0_4432_13807)"><path d="M19.25 21H13.25V19H19.25V13H21.25V19H27.25V21H21.25V27H19.25V21Z" /></g></svg>;
}