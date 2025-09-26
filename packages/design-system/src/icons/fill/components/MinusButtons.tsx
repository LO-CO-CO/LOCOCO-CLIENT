import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgMinusButtons(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 41 40" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><rect x={0.5} width={40} height={40} rx={20} fill="#FFF1F6" /><g clipPath="url(#clip0_4432_18702)"><rect x={13.5} y={20} width={14} height={2} fill="#FF488F" /></g><defs><clipPath id="clip0_4432_18702"><rect width={14} height={14} fill="white" transform="translate(13.5 13)" /></clipPath></defs></svg>;
}