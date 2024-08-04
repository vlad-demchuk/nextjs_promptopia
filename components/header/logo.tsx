import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ withTitle = false, linkTo } : { withTitle?: boolean, linkTo: string }) {
  return (
    <div >
      <Link
        href={linkTo}
        className="flex items-center gap-1.5"
      >
        <div className="relative size-8 sm:size-8">
          <Image
            src={'/images/logo.svg'}
            alt="Promptopia Logo"
            fill
            className="object-contain"
          />
        </div>

        {withTitle && <p className="hidden sm:inline">Promptopia</p>}
      </Link>
    </div>
  );
}
