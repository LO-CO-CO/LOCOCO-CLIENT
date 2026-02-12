import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgNewLogo(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 30 30" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_6650_63648)"><path d="M13.9707 5.03466V0H10.2063C6.09924 0 2.5513 3.25368 2.5513 7.51451V23.2954C2.5513 23.2954 2.67875 27.4953 0 27.4953V30H14V24.9901H7.65505V9.49389C7.65505 9.49389 7.65505 5.30406 12.3156 5.00986C12.7582 4.98168 13.4672 5.03466 13.9707 5.03466Z" /><path d="M16.2691 24.9653V30H20.0335C24.1406 30 27.688 26.7463 27.688 22.4855V6.70462C27.688 6.70462 27.5605 2.50465 30.2393 2.50465V0H16.2393V5.00986H22.5842V20.5067C22.5842 20.5067 22.5842 24.6965 17.9237 24.9907C17.481 25.0189 16.772 24.9659 16.2685 24.9659L16.2691 24.9653Z" /></g><defs><clipPath id="clip0_6650_63648"><rect width={30} height={30} fill="white" /></clipPath></defs></svg>;
}