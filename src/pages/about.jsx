import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Chris Edgington</title>
        <meta
          name="description"
          content="I’m Chris Edgington. I live in Bunker Hill, Indiana, between two corn fields, where I solve hard problems from my basement office."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
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
              I’m Chris Edgington. I live in Bunker Hill, Indiana, between two
              corn fields, where I solve hard problems in software architecture
              from my basement office.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
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
                learning constantly since then.</p>
                <p>After being discouraged to pursue software by my high school guidance counselor, "There is no future in computers," is what she said in 1987, I started a pre-medicine path in college.
                I quickly discovered that my love for software had not changed, as I wrote custom software to solve chemistry lab problems, I knew this was what I needed to do. After transitioning to computer science, I determined that I was
                self-teaching faster than the college process so I dropped out to write software. Within a few years, I started remote working back here in Indiana, before it was a thing (actually before the internet existed). We would use Fedex
                to send CDs of source code back and forth.
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
                Now in the empty-nest stage of life, I still love learning new technologies, tinkering with new software "toys", and any kind of adventure.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/EdgingtonC" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/edgingtonchris/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/ChrisEdgington" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/chris-edgington-46973533/" icon={LinkedInIcon} className="mt-4">
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
          </div>
        </div>
      </Container>
    </>
  )
}
