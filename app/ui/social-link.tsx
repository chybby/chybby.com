import clsx from 'clsx';
import { ReactElement } from 'react';

export default function SocialLink({
  icon,
  href,
  label,
  shadow = false,
}: {
  icon: ReactElement;
  href: string;
  label?: string;
  shadow?: boolean;
}) {
  return (
    <a
      className={clsx(
        'flex flex-row items-center gap-2 rounded-full bg-white px-3 py-2 text-black hover:bg-slate-300',
        { 'shadow-sm shadow-zinc-300 dark:shadow-black': shadow },
      )}
      href={href}
    >
      {icon} {label !== undefined && label}
    </a>
  );
}
