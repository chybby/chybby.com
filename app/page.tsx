import Image from 'next/image';
import Link from 'next/link';
import profile from '@/app/images/profile.png';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import SocialLink from '@/app/ui/social-link';
import Tags from '@/app/ui/tags';

const skills = [
  'Backend Development',
  'Operating Systems',
  'Android Development',
  'Linux',
  'Google Cloud',
  'Presentations',
  'SRE On-call',
];

const languages = ['Python', 'C/C++', 'Rust', 'Kotlin'];

const socials = [
  {
    icon: <GitHub />,
    name: 'Github',
    href: 'https://github.com/chybby',
  },
  {
    icon: <LinkedIn />,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/achyb/',
  },
  {
    icon: <FontAwesomeIcon className="size-6" icon={faItchIo} />,
    name: 'itch.io',
    href: 'https://chybby.itch.io/',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-start">
      <div className="flex flex-col items-center gap-16 py-16 md:basis-1/2">
        <Image
          className="size-80 rotate-6 rounded-2xl border-8 border-white shadow-sm shadow-zinc-300 dark:border-zinc-300 dark:shadow-black"
          src={profile}
          priority={true}
          alt="A picture of me"
        />
        <div className="hidden flex-col gap-3 text-2xl md:flex">
          {socials.map((social) => {
            return (
              <SocialLink
                key={social.href}
                label={social.name}
                icon={social.icon}
                href={social.href}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-8 md:basis-1/2">
        <div>
          <h1 className="text-6xl font-bold md:pt-16">Adam Chyb</h1>
          <h2 className="text-3xl text-indigo-400 dark:text-indigo-600">
            (AKA. Dome)
          </h2>
        </div>

        <div className="flex flex-row flex-wrap gap-4 md:hidden">
          {socials.map((social) => {
            return (
              <SocialLink
                key={social.href}
                icon={social.icon}
                href={social.href}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4 text-lg [&_a]:text-indigo-600 [&_a]:underline [&_a]:dark:text-indigo-400">
          <p>
            Madam, I&apos;m Adam. I&apos;m a computer science graduate from UNSW
            with an interest in using computers for making things and breaking
            things.
          </p>
          <p>
            I spent 5 years working at Google, 4 of which working as an SRE on{' '}
            <Link href="https://cloud.google.com/storage">
              Google Cloud Storage
            </Link>{' '}
            before becoming a software engineer working on{' '}
            <Link href="https://fuchsia.dev/">Fuchsia OS</Link>. I&apos;m
            currently a senior software engineer at{' '}
            <Link href="https://anduril.com">Anduril</Link>, working on
            autonomous defense systems.
          </p>
          <p>
            I&apos;m most experienced and interested in software development
            work focused on backend, OS/embedded or security. That said, I love
            learning and am always excited to try something new. Lately
            I&apos;ve been learning native{' '}
            <Link href="https://developer.android.com/jetpack/compose">
              Android app development with Compose
            </Link>{' '}
            and frontend/full-stack development with{' '}
            <Link href="https://astro.build/">Astro</Link> and{' '}
            <Link href="https://nextjs.org/">Next.js</Link>. I&apos;ve
            participated in the{' '}
            <Link href="https://ldjam.com/">Ludum Dare</Link> game jam several
            times with <Link href="https://godotengine.org/">Godot</Link> as my
            engine of choice. Check out my projects page to see more info on
            everything I&apos;ve built.
          </p>
          <p>
            When I&apos;m not in front of my computer I like playing indoor
            volleyball, singing, playing my ukulele, cosplay and gaming (OK,
            that last one is still in front of a computer).
          </p>
          <p>My favourite Pokemon is Cyndaquil 🔥.</p>
        </div>

        <h2 className="text-3xl">Skills</h2>
        <Tags items={skills} />

        <h2 className="text-3xl">Languages</h2>
        <Tags items={languages} />
      </div>
    </div>
  );
}
