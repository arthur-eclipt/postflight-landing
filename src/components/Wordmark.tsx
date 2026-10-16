import Link from "next/link";

type Props = {
  className?: string;
  href?: string;
};

export default function Wordmark({ className, href = "/" }: Props) {
  const inner = (
    <>
      Post<span className="text-gold">Airborne</span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`font-display text-xl font-bold tracking-tight text-bone ${className ?? ""}`}
      >
        {inner}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`font-display text-xl font-bold tracking-tight text-bone ${className ?? ""}`}
    >
      {inner}
    </Link>
  );
}
