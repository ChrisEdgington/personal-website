import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/photo-1.jpg'
import image2 from '@/images/photos/photo-2.jpg'
import image3 from '@/images/photos/photo-3.jpg'
import image4 from '@/images/photos/photo-4.jpg'
import image5 from '@/images/photos/photo-5.jpg'
import logoAptiv from '@/images/logos/aptiv.png'
import logoRoadiq from '@/images/logos/roadiq.png'
import logoZinc from '@/images/logos/zinc.png'
import logoPhotodex from '@/images/logos/photodex.png'
import logoAircore from '@/images/logos/aircore-logo.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Aircore, Inc. / Cantina Inc.',
      title: 'Staff Software Engineer, Web Team',
      logo: logoAircore,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Zinc Technologies',
      title: 'Core Software Engineer',
      logo: logoZinc,
      start: '2019',
      end: '2023',
    },
    {
      company: 'Road-iQ',
      title: 'Staff Software Engineer',
      logo: logoRoadiq,
      start: '2015',
      end: '2019',
    },
    {
      company: 'Delphi Electronics (now Aptiv)',
      title: 'Senior Software Engineer',
      logo: logoAptiv,
      start: '2011',
      end: '2015',
    },
    {
      company: 'Photodex',
      title: 'Staff Software Engineer',
      logo: logoPhotodex,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="https://cedgington.dev/ChrisEdgington-resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Chris Edgington - Software architect, expert problem solver, and
          adventure lover.
        </title>
        <meta
          name="description"
          content="I’m Chris, a software architect and problem solver based in rural Indiana."
        />
      </Head>
      <Container className="mt-2 sm:mt-4">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software architect, expert problem solver, and adventure lover.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              I’m Chris, a software architect and problem solver based in rural
            Indiana. I love solving hard problems in software and in life, and
            especially enjoy coaching others on solving their own problems and
            finding adventure in the process. I’m also the founder and director
            of The Lighthouse, where me and roughly thirty of my friends spend
            time weekly with local teenagers, getting to know them and helping
            them find their way to the life they were made for. I also love
            playing music, going on wilderness adventures and playing ultimate
            frisbee.
              </p>
              <p>
                I am a guy who gets things done. My greatest strength is coming
                into situations where projects are in trouble, people have left,
                schedules are behind, etc., quickly determining the “reality” of
                the project and leading the way out of chaos. Experience at all
                levels of information technology (from hardware design to large
                team management) enables me to quickly adapt to new and
                unpredictable circumstances.
              </p>
              <p>
                After being discouraged to pursue software by my high school
                guidance counselor, {'"'}There is no future in computers,{'"'} is what
                she said in 1987, I started a pre-medicine path in college. I
                quickly discovered that my love for software had not changed, as
                I wrote custom software to solve chemistry lab problems, I knew
                this was what I needed to do. After transitioning to computer
                science, I determined that I was self-teaching faster than the
                college process so I dropped out to write software. Within a few
                years, I started remote working back here in Indiana, before it
                was a thing (actually before the internet existed). We would use
                Fedex to send CDs of source code back and forth.
              </p>
              <p>
                I now have thirty-three years of hands-on development, research,
                architecture and communication experience in the global software
                industry. I have deep experience designing and implementing
                solutions in most modern languages and advanced debugging skills
                using both high-end debug tools and just plain-old-logging.
                Doing contract work for over a decade helped me become very
                adept at quickly coming up to speed on large sets of source code
                and solving problems within that source code in a short amount
                of time. I have also developed solid technical writing skills
                from years of writing technical proposal, design, and research
                documents. I also have many years of non-technical public
                speaking and leadership experience.
              </p>
              <p>
                Here are some things folks I have worked with have to say:<br></br><br></br>
                <div className="pl-2">
                  <h3 className="italic pb-2">Chris is the guy you want on your team to make sure your product ships. ~ Mark Moeller, CTO of Velvac / Road-iQ</h3>
                  <h3 className="italic pb-2">In addition to his strong software skills, Chris draws from a deep well of leadership experience, enabling him to act as the nuanced voice of reason in the midst of challenging project scenarios. ~ Xiang Li, CEO of Zinc Technologies</h3>
                  <h3 className="italic">Chris is one of the most intentional, honest, and dedicated engineers that I have ever had the pleasure of working with. ~ Eric Swanson, CTO of Zinc Technologies</h3>
                </div>
              </p>
              <p>
                Now in the empty-nest stage of life, I still love learning new
                things, tinkering with new software {'"'}toys{'"'}, and any kind
                of adventure. I love {'"'}finishing{'"'} things - especially shipping software.
              </p>
            </div>
          </div>
          <div className="lg:pl-20 text-zinc-800 dark:text-zinc-100">
            <ul role="list">
              <SocialLink
                href="https://x.com/EdgingtonC"
                icon={TwitterIcon}
              >
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/edgingtonchris/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/ChrisEdgington"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/chris-edgington-46973533/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:chris@cedgington.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chris@cedgington.dev
              </SocialLink>
            </ul>
        <div className="mt-8">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter /> */}
          <Resume />
          {/* </div> */}
        </div>
          </div>

        </div>
      </Container>
      {/* <Container className="mt-9">
      <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="max-w-2xl">
        <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software architect, expert problem solver, and adventure lover.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I’m Chris, a software architect and problem solver based in rural
            Indiana. I love solving hard problems in software and in life, and
            especially enjoy coaching others on solving their own problems and
            finding adventure in the process. I’m also the founder and director
            of The Lighthouse, where me and roughly thirty of my friends spend
            time weekly with local teenagers, getting to know them and helping
            them find their way to the life they were made for. I also love
            playing music, going on wilderness adventures and playing ultimate
            frisbee.
          </p>
              <p>
                I am a guy who gets things done. My greatest strength is coming
                into situations where projects are in trouble, people have left,
                schedules are behind, etc., quickly determining the “reality” of
                the project and leading the way out of chaos. Experience at all
                levels of information technology (from hardware design to large
                team management) enables me to quickly adapt to new and
                unpredictable circumstances.
              </p>
              <p>
                I dreamed of owning a computer when I was in elementary school,
                long before the internet and before people had computers in
                their homes. I would goto our local library and read every book
                and magazine they had about computers and software. My dad
                bought me my first computer, an Atari 800, which had an 8-bit
                processor, 16K of RAM, and ran at a whopping 1.79 Mhz. I taught
                myself how to program in BASIC on that Atari and have been
                learning constantly since then.
              </p>
              <p>
                After being discouraged to pursue software by my high school
                guidance counselor, {'"'}There is no future in computers,{'"'} is what
                she said in 1987, I started a pre-medicine path in college. I
                quickly discovered that my love for software had not changed, as
                I wrote custom software to solve chemistry lab problems, I knew
                this was what I needed to do. After transitioning to computer
                science, I determined that I was self-teaching faster than the
                college process so I dropped out to write software. Within a few
                years, I started remote working back here in Indiana, before it
                was a thing (actually before the internet existed). We would use
                Fedex to send CDs of source code back and forth.
              </p>
              <p>
                I have thirty-three years of hands-on development, research,
                architecture and communication experience in the global software
                industry. I have deep experience designing and implementing
                solutions in most modern languages and advanced debugging skills
                using both high-end debug tools and just plain-old-logging.
                Doing contract work for over a decade helped me become very
                adept at quickly coming up to speed on large sets of source code
                and solving problems within that source code in a short amount
                of time. I have also developed solid technical writing skills
                from years of writing technical proposal, design, and research
                documents. I also have many years of non-technical public
                speaking and leadership experience.
              </p>
              <p>
                Now in the empty-nest stage of life, I still love learning new
                technologies, tinkering with new software {'"'}toys{'"'}, and any kind
                of adventure.
              </p>
              </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
        </div>
      </Container> */}
      <Photos />
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
