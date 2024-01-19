import NavLinks from './nav-links';
import ThemeIcon from './theme-icon';

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-6 px-4 py-4">
      <NavLinks />
      <div className="flex w-fit rounded-full bg-white p-2 shadow-sm shadow-zinc-300 dark:shadow-black">
        <ThemeIcon />
      </div>
    </div>
  );
}
