export type WorkProject = {
  slug: string
  name: string
  logo: string
  logoWidth: number
  logoHeight: number
  siteName?: string
  internalPage: boolean
  indexable?: boolean
  slideCount: number
  imageFormat?: 'jpg' | 'png'
  content: string[]
}

export const projects: WorkProject[] = [
  {
    slug: 'hellotax',
    name: 'hellotax',
    logo: '/work-logos/hellotax-logo.svg',
    logoWidth: 150,
    logoHeight: 50,
    siteName: 'app.hellotax.com',
    internalPage: true,
    slideCount: 18,
    imageFormat: 'png',
    content: [
      'hellotax is a VAT compliance automation software tailored towards multi-channel merchants across Europe.',
      'The company already had a functioning web app but needed a professional to create an entirely new experience with the latest technologies to leverage speed and provide an optimal user experience as their customers were increasing. At the core of the product is data so there was heavy data transformation and manipulation involved and they needed to make that process as fast as possible.',
      'With this information in mind, I examined the existing platform, started documenting flaws and identifying strategies to tackle them. We settled to use Vue as their in-house team was more familiar with it. I bootstrapped the project, and within a few weeks the designated MVP which included a partial component library optimized for accessibility was ready.',
      'Usually, systems that require loads of data manipulation and all sorts of computations settle to perform these operations server-side. But since we were dealing with really huge data (reaching megabytes at times), the round trip time (RTT) was in high numbers which resulted in delayed updates. To tackle this, I had to implement a lot of the processing and manipulation logic on the frontend, leaving special computation work and business logic for the backend.',
      "Now, it's easy to go wrong and pollute data in these computations which made it clear that we needed solid assertion mechanisms so I created a bunch of fail-safe optimized utility libraries which implemented solid type-checks and validation techniques to ensure fast, yet accurate data diffing and transformation work to preserve the integrity of the information displayed and minimize runtime errors and unusability.",
      'After nine months of work, we were finally ready to go live and the beta version was launched. It not only met but exceeded the expectations and beat the previous version at speed, accessibility and reliabilty.',
    ],
  },
  {
    slug: 'conectar',
    name: 'Conectar',
    logo: '/work-logos/conectar-logo.svg',
    logoWidth: 170,
    logoHeight: 44.07,
    internalPage: true,
    slideCount: 18,
    imageFormat: 'jpg',
    content: [
      'Conectar is an e-learning platform that connects people looking to learn English to professional native English speakers. We had to bring the entire classroom experience to the web and make it feel as immersive as possible.',
      'To achieve that, we needed to build multiple apps into the system like comms (video, audio, messagging), a scheduling system (for appointments) etc so I joined the company as a Frontend Engineer to build these products.',
      'User experience was quite critical for a learning platform so I got a professional to whip up a new identity and mockups, drafted a <a href="https://docs.google.com/document/d/1jl72mN3IvXzw0rAIT607MGTrtHS1QP8blejRi9lC090/edit?usp=sharing" target="_blank" rel="noopener noreferrer">proposal</a>, based on that I built the design system and a brand new marketing site following those guidelines.',
      'I designed all the UIs on the dashboard integrating REST APIs and built the front-end of major apps from the ground up like the messaging system which was based off of the API from our Rails backend. It was quite challenging integrating all these features while keeping an eye out for performance and usability. There were back-and-forths but eventually it was stable and had a bunch of the core features of Facebook Messenger which was really beautiful.',
      'I also worked with a colleague to build an appointment scheduling system for the product then went ahead to work on the classroom app which had lots of interesting features like a customizable realtime whiteboard built totally from scratch, video and audio comms and other tools to facilitate seamless tutor-student interaction.',
      'The project was huge and housed hundreds of thousands of lines of code powered by multiple technologies like React, Rails, Sass, Redux, Webpacker, GoLang, Java etc and we often had to re-evaluate strategies regarding certain topics like state management, performance and development workflow. I was able to work across different segments from design to DevOps to strategy and implementation.',
      "I was the Lead Frontend engineer so I got to work with other engineers and contractors on various tools. It certainly was a great learning experience. Unfortunately, the product hasn't made it yet to the real world and I absolutely hope that it does someday.",
      'Design work was done by my friend, <a href="https://twitter.com/AbstractOnion" target="_blank" rel="noopener noreferrer">Caleb</a> with a little assist from me. He\'s absolutely talented and currently available for hire.',
    ],
  },
  {
    slug: 'john-deere',
    name: 'John Deere',
    logo: '/work-logos/deere-logo.svg',
    logoWidth: 180,
    logoHeight: 33.65,
    siteName: 'atu300.deere.com',
    internalPage: true,
    indexable: false,
    slideCount: 0,
    content: ['Coming soon.'],
  },
  {
    slug: 'personal-website',
    name: 'Personal Website',
    logo: '/work-logos/olaolu-logo.svg',
    logoWidth: 110,
    logoHeight: 45,
    siteName: 'olaolu.dev',
    internalPage: false,
    slideCount: 0,
    content: [],
  },
  {
    slug: 'pixel2html',
    name: 'Pixel2HTML',
    logo: '/work-logos/pixel-logo.svg',
    logoWidth: 170,
    logoHeight: 59.59,
    siteName: 'pixel2html.netlify.app',
    internalPage: true,
    indexable: false,
    slideCount: 0,
    content: ['Coming soon.'],
  },
  {
    slug: 'dropd',
    name: 'dropd',
    logo: '/work-logos/dropd-logo.svg',
    logoWidth: 110,
    logoHeight: 42.44,
    siteName: 'npm.im/react-dropd',
    internalPage: false,
    slideCount: 0,
    content: [],
  },
  {
    slug: 'dignisia',
    name: 'Dignisia',
    logo: '/work-logos/dignisia-logo.svg',
    logoWidth: 120,
    logoHeight: 173.33,
    siteName: 'dignisia.com',
    internalPage: true,
    indexable: false,
    slideCount: 0,
    content: ['Coming soon.'],
  },
]

export function getProject(slug: string) {
  return projects.find(project => project.slug === slug)
}
