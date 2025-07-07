import { FOOTER_COPYRIGHT } from '../../constant/footer';

export default function FooterBottom() {
  return (
    <p className="text-en-body1 bg-[color:var(--color-pink-100)] font-medium text-[color:var(--color-pink-500)]">
      {FOOTER_COPYRIGHT}
    </p>
  );
}
