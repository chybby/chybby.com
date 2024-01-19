'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';

const links = [
  { contents: 'About', href: '/' },
  { contents: 'Projects', href: '/projects' },
  {
    contents: (
      <p className="flex items-center">
        Blog
        <ArrowTopRightOnSquareIcon className="size-4" />
      </p>
    ),
    href: 'https://blog.chybby.com/',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex w-fit gap-1 rounded-full bg-white p-2 text-lg font-semibold text-black shadow-sm shadow-zinc-300 dark:shadow-black">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx('rounded-full px-4 py-1 hover:bg-indigo-100', {
              'bg-indigo-200 ring-2 ring-inset ring-indigo-300 hover:bg-indigo-200':
                link.href === pathname,
            })}
          >
            {link.contents}
          </Link>
        );
      })}
    </div>
  );
}
