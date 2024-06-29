import { GitHub, OpenInBrowser, VideogameAsset } from '@mui/icons-material';
import SocialLink from '@/app/ui/social-link';
import Tags from '@/app/ui/tags';
import { ReactElement } from 'react';
import Link from 'next/link';
import batteryassault from '@/app/images/battery-assault.png';
import morningcoffeehit from '@/app/images/morning-coffee-hit.png';
import nobnobsharvestheist from '@/app/images/nobnobs-harvest-heist.png';
import personaldeliveryconglomerate from '@/app/images/personal-delivery-conglomerate.png';
import pickyplants from '@/app/images/picky-plants.png';
import finalchants from '@/app/images/final-chants.png';
import todoapp from '@/app/images/todoapp.png';
import Image, { StaticImageData } from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const project_categories = [
  {
    heading: 'Web',
    projects: [
      {
        name: 'Blog',
        description:
          "A personal blogging site built in Astro where I write about interesting projects I've done.",
        tags: ['Astro', 'Frontend', 'Typescript', 'Tailwind CSS'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/blog"
            shadow={true}
          />,
          <SocialLink
            key="Visit"
            label="Visit"
            icon={<OpenInBrowser />}
            href="https://blog.chybby.com"
            shadow={true}
          />,
        ],
      },
      {
        name: 'Portfolio',
        description: "The site you're currently on! Built using Next.js.",
        tags: ['Next.js', 'React', 'Frontend', 'Typescript', 'Tailwind CSS'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/chybby.com"
            shadow={true}
          />,
        ],
      },
      {
        name: 'Tutorifull',
        description:
          'A site I built and ran while at UNSW that would alert you when a free spot opened up in a full class.',
        tags: ['Python', 'Flask', 'Sass', 'Frontend', 'Docker', 'PostgreSQL'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/tutorifull"
            shadow={true}
          />,
        ],
      },
    ],
  },
  {
    heading: 'Apps',
    projects: [
      {
        name: 'To-Do App',
        description:
          'A simple todo list app where you can organize todo items in multiple lists and get a reminder notification at a chosen time or place. Written in Kotlin and using Jetpack Compose, Room, Hilt and the Google Maps Places API.',
        tags: ['Android', 'Jetpack Compose', 'Kotlin'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/Todo-App"
            shadow={true}
          />,
        ],
        image: { src: todoapp, alt: 'Todo App list screen' },
      },
    ],
  },
  {
    heading: 'Games',
    projects: [
      {
        name: 'Final Chants',
        description: (
          <>
            Summon spirits to help you solve challenges in this atmospheric
            platformer. Built in 72 hours in a team of two for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/55/final-chants">
              Ludum Dare 55: Summoning
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/ldjam55"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/finalchants"
            shadow={true}
          />,
        ],
        image: { src: finalchants, alt: 'Final Chants cover image' },
      },
      {
        name: 'Picky Plants',
        description: (
          <>
            A relaxing puzzle game where you organize plants in terrariums.
            Built in 72 hours in a team of two for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/54/picky-plants">
              Ludum Dare 54: Limited space
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/ldjam54"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/pickyplants"
            shadow={true}
          />,
        ],
        image: { src: pickyplants, alt: 'Picky Plants cover image' },
      },
      {
        name: 'Personal Delivery Conglomerate™',
        description: (
          <>
            Organize incoming parcels to make sure you can get them to customers
            as quickly as possible. Built in 72 hours in a team of two for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/53/personal-delivery-conglomeratetm">
              Ludum Dare 53: Delivery
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/ldjam53"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/personal-delivery-conglomerate"
            shadow={true}
          />,
        ],
        image: {
          src: personaldeliveryconglomerate,
          alt: 'Personal Delivery Conglomerate cover image',
        },
      },
      {
        name: "NobNob's Harvest Heist",
        description: (
          <>
            Help NobNob feed their hungry babies by collecting fresh vegetables
            from around the farm while avoiding the farmer&apos;s dogs and
            machines. Built in 72 hours in a team of four for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/52/nobnobs-harvest-heist">
              Ludum Dare 52: Harvest
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/freejelliott/ldjam52"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/nobnobs-harvest-heist"
            shadow={true}
          />,
        ],
        image: {
          src: nobnobsharvestheist,
          alt: "NobNob's Harvest Heist cover image",
        },
      },
      {
        name: 'Morning Coffee Hit',
        description: (
          <>
            A frantic barista sim where you need to satisfy customer&apos;s
            increasingly complicated coffee orders. Built in 72 hours in a team
            of two for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/51/morning-coffee-hit">
              Ludum Dare 51: Every 10 seconds
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/ldjam51"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/morning-coffee-hit"
            shadow={true}
          />,
        ],
        image: { src: morningcoffeehit, alt: 'Morning Coffee Hit cover image' },
      },
      {
        name: 'Battery Assault',
        description: (
          <>
            A space strategy game where you need to defeat enemies while
            efficiently using your limited battery. Built in 72 hours in a team
            of two for{' '}
            <Link href="https://ldjam.com/events/ludum-dare/50/battery-assault">
              Ludum Dare 50: Delay the inevitable
            </Link>
            .
          </>
        ),
        tags: ['Godot', 'Ludum Dare'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/ldjam50"
            shadow={true}
          />,
          <SocialLink
            key="Play"
            label="Play"
            icon={<VideogameAsset />}
            href="https://chybby.itch.io/battery-assault"
            shadow={true}
          />,
        ],
        image: { src: batteryassault, alt: 'Battery Assault gameplay' },
      },
    ],
  },
  {
    heading: 'Other',
    projects: [
      {
        name: 'kilo-rust',
        description: (
          <>
            A terminal text editor built by following the{' '}
            <Link href="https://viewsourcecode.org/snaptoken/kilo/">
              Build Your Own Text Editor
            </Link>{' '}
            tutorial but translating to Rust as I went.
          </>
        ),
        tags: ['Rust'],
        links: [
          <SocialLink
            key="Github"
            label="Github"
            icon={<GitHub />}
            href="https://github.com/chybby/kilo-rust"
            shadow={true}
          />,
        ],
      },
    ],
  },
];

function Project({
  name,
  description,
  tags,
  links,
  image,
}: {
  name: string;
  description: ReactElement | string;
  tags: string[];
  links: ReactElement[];
  image?: { src: StaticImageData; alt: string };
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-transparent dark:ring-2 dark:ring-zinc-600 md:w-[49%]">
      <h3 className="text-4xl">{name}</h3>
      <p className="text-lg [&_a]:text-indigo-600 [&_a]:underline [&_a]:dark:text-indigo-400">
        {description}
      </p>
      {image !== undefined && (
        <Image
          className="mx-auto w-full max-w-96 rounded-xl"
          src={image.src}
          alt={image.alt}
        />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 text-xl">
          {links.map((link) => {
            return link;
          })}
        </div>
        <Tags items={tags} />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      {project_categories.map(({ heading, projects }) => {
        return (
          <div key={heading}>
            <h2 className="pb-5 pt-20 text-center text-5xl text-indigo-800 dark:text-indigo-300">
              {heading}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:flex">
              {projects.map((project) => {
                return (
                  <Project
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    tags={project.tags}
                    links={project.links}
                    image={'image' in project ? project.image : undefined}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
