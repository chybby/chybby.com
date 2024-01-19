import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center">
      <p className="text-sm text-indigo-900/60 dark:text-indigo-200/60">
        © {new Date().getFullYear()} Dome - Built with{' '}
        <Link
          className="text-indigo-600/80 dark:text-indigo-400/80"
          href="https://nextjs.org/"
        >
          Next.js
        </Link>
      </p>
    </footer>
  );
}
