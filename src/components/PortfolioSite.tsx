import { useEffect, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  caseStudyHref?: string
}

interface Screenshot {
  title: string
  description: string
  image: string | string[]
  annotations: string[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills: string[] = [
  'AI Workflow Automation',
  'Product Operations',
  'Process Architecture',
  'Workflow Optimization',
  'Operational Systems',
  'Documentation Systems',
  'SOP Development',
  'Cross-Functional Coordination',
  'Operational Reporting',
  'Human-in-the-Loop Systems',
  'Escalation Architecture',
  'Process Governance',
]

const projects: Project[] = [
  {
    title: 'AI Support Operations Platform',
    subtitle: 'Operational Workflow Automation & Governance Infrastructure',
    description:
      'Designed and deployed a production AI-enabled support operations platform and embedded desk companion app supporting workflow automation, OCR invoice analysis, escalation routing, operational reporting, QA safeguards, and policy-driven communication systems.',
    highlights: [
      'Built multi-agent AI workflow architecture',
      'Created an embedded companion app inside the ticketing workflow to reduce staff context switching',
      'Implemented OCR invoice analysis and operational triage workflows',
      'Designed human-in-the-loop QA safeguards and escalation logic',
      'Created operational reporting visibility systems',
      'Improved workflow consistency and reduced repetitive manual work',
    ],
    tech: [
      'React',
      'TypeScript',
      'Supabase',
      'Vercel',
      'Anthropic API',
      'OCR Workflows',
      'Ticketing Integration',
    ],
    caseStudyHref: '#case-study',
  },
  {
    title: 'Operational Documentation & SOP Systems',
    subtitle: 'Scalable Knowledge Infrastructure',
    description:
      'Developed standardized SOP frameworks, QA systems, workflow documentation, coaching enablement resources, and operational governance materials supporting scalable process consistency across departments.',
    highlights: [
      "Built KMK's first SOP documentation framework",
      'Created QA governance systems and escalation structures',
      'Standardized ticket categorization and reporting systems',
      'Improved knowledge transfer and workflow adoption',
    ],
    tech: ['Documentation Systems', 'QA Governance', 'Workflow Design'],
  },
  {
    title: 'Interactive Gaming Platform',
    subtitle: 'Co-Founder & Systems Architecture',
    description:
      'Co-founding a multiplayer social gaming platform focused on scalable interactive experiences, collaborative systems, and long-term operational infrastructure.',
    highlights: [
      'Operational systems planning',
      'AI-assisted workflow implementation',
      'Collaborative product development',
      'Scalable infrastructure planning',
    ],
    tech: ['Product Coordination', 'Operational Strategy', 'AI Workflows'],
  },
]

const projectScreenshots: Screenshot[] = [
  {
    title: 'Embedded Desk Companion App',
    description:
      'Companion workflow embedded directly into the ticketing environment so staff could process support cases, generate triage, review safeguards, and send responses without leaving their active workspace.',
    image: ['/images/companion-slide-1.png', '/images/companion-slide-2.png'],
    annotations: [
      'Embedded workflow',
      'Reduced context switching',
      'Ticket-based processing',
      'Staff adoption design',
    ],
  },
  {
    title: 'Operations Dashboard',
    description:
      'Centralized support operations dashboard featuring workflow visibility, QA guidance, operational metrics, and routing infrastructure.',
    image: '/images/supportops-dashboard.png',
    annotations: ['Operational visibility', 'Workflow routing', 'QA guidance systems'],
  },
  {
    title: 'AI Workflow Governance & Draft Generation',
    description:
      'AI-assisted operational workflow demonstrating confidence scoring, human verification checkpoints, QA safeguards, escalation awareness, and draft response generation.',
    image: '/images/supportops-governance.png',
    annotations: [
      'AI confidence scoring',
      'Human verification workflow',
      'QA safeguards',
      'Draft response generation',
    ],
  },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.85)' : 'rgba(9,9,11,0.5)',
          backdropFilter: 'blur(12px)',
          border: scrolled ? '1px solid rgba(63,63,70,0.8)' : '1px solid rgba(63,63,70,0.3)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-zinc-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.classList.remove('anim-start')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const target = ref.current
    if (target) observer.observe(target)
    return () => {
      if (target) observer.unobserve(target)
    }
  }, [])

  return ref
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useIntersectionObserver()
  return (
    <div ref={ref} className={`anim-start ${className}`}>
      {children}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="space-y-5">
        <div>
          <h4
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-2xl font-normal tracking-tight text-zinc-100"
          >
            {project.title}
          </h4>
          <p className="mt-1.5 text-xs font-medium tracking-widest text-cyan-400/80 uppercase">
            {project.subtitle}
          </p>
        </div>

        <p className="text-zinc-400 leading-relaxed text-sm">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div>
            <h5 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
              Key Contributions
            </h5>
            <ul className="space-y-2 text-zinc-400 text-sm">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="mt-0.5 text-cyan-500 shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
              Tools & Systems
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.caseStudyHref && (
          <div className="pt-2">
            <a
              href={project.caseStudyHref}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-800/50 bg-cyan-950/30 hover:bg-cyan-950/60 hover:border-cyan-700 transition-all duration-200 px-4 py-2 text-xs font-medium text-cyan-400"
            >
              View Case Study →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function CyclingImage({ images, alt, featured }: { images: string[]; alt: string; featured: boolean }) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setFading(false)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={`relative bg-zinc-950 border-b border-zinc-800 overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-video'}`}>
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ opacity: fading ? 0 : 0.9, transition: 'opacity 0.4s ease' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '16px' : '6px',
              height: '6px',
              background: i === current ? 'rgba(6,182,212,0.9)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ScreenshotCard({ shot, featured = false }: { shot: Screenshot; featured?: boolean }) {
  const images = Array.isArray(shot.image) ? shot.image : [shot.image]

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-zinc-700">
      {images.length > 1 ? (
        <CyclingImage images={images} alt={shot.title} featured={featured} />
      ) : (
        <div className={`relative bg-zinc-950 border-b border-zinc-800 overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-video'}`}>
          <img src={images[0]} alt={shot.title} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
        </div>
      )}
      <div className="p-6 space-y-3">
        <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-normal text-zinc-100">
          {shot.title}
        </h4>
        <p className="text-zinc-400 text-sm leading-relaxed">{shot.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {shot.annotations.map((item) => (
            <span key={item} className="rounded-full bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-0.5 text-xs text-cyan-400">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Case Study ───────────────────────────────────────────────────────────────

function CaseStudySection() {
  const problemItems = [
    'Inconsistent response quality',
    'Slower turnaround times',
    'High cognitive load',
    'Repeated escalations',
    'Operational bottlenecks',
    'Tribal knowledge dependency',
  ]

  const outcomeItems = [
    'Reduced manual triage work',
    'Standardized routing logic',
    'Faster response drafting',
    'Stronger QA framework',
    'Reduced workflow fragmentation',
    'Scalable operational infrastructure',
  ]

  const builtItems = [
    {
      title: 'AI Support Operations Platform',
      body: 'A centralized operational dashboard supporting workflow intake, ticket triage, OCR invoice analysis, escalation routing, operational reporting, QA safeguards, confidence scoring, and AI-assisted response drafting.',
    },
    {
      title: 'Embedded Desk Companion App',
      body: 'A companion application embedded directly into the ticketing environment so staff could process tickets, review AI recommendations, validate QA checkpoints, and send responses without leaving the systems they already worked in daily. Reducing context switching was a core design priority.',
    },
    {
      title: 'Governance & QA Infrastructure',
      body: 'AI confidence scoring, human verification checkpoints, escalation awareness, QA flagging, contextual risk indicators, and policy-review prompts — all structured to support staff decision-making rather than bypass it.',
    },
  ]

  const themes = [
    'AI as operational infrastructure',
    'Human-in-the-loop governance',
    'Workflow adoption & usability',
    'Process standardization',
    'Operational scalability',
    'Decision-support systems',
    'Cross-functional workflow design',
    'Operational clarity over automation',
  ]

  return (
    <section id="case-study" className="space-y-12">
      <AnimatedSection>
        <div className="space-y-2">
          <span className="text-xs font-medium tracking-widest text-cyan-400/70 uppercase">
            Case Study
          </span>
          <h3
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl font-normal text-zinc-100"
          >
            AI Support Operations Platform
          </h3>
          <p className="text-zinc-500 text-sm max-w-2xl">
            How I designed and deployed a production AI-enabled workflow system inside a real
            operational environment — and why governance decisions mattered as much as the technology.
          </p>
        </div>
      </AnimatedSection>

      {/* Problem */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Problem</span>
          </div>
          <div className="md:col-span-4 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              When I stepped into student support operations, a significant portion of the workflow
              depended on manual triage, institutional knowledge, and repetitive decision-making
              spread across multiple disconnected systems.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Staff were spending meaningful time manually categorizing tickets, checking account and
              payment context, reviewing communication history, identifying escalation paths,
              verifying policy requirements, and drafting repetitive responses — all while switching
              constantly between systems to complete even straightforward cases.
            </p>
            <div className="grid sm:grid-cols-3 gap-2 pt-2">
              {problemItems.map((item) => (
                <div key={item} className="rounded-xl border border-red-900/30 bg-red-950/20 px-3 py-2.5 text-xs text-red-400/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Approach */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Approach</span>
          </div>
          <div className="md:col-span-4 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              The goal was never to automate staff out of the loop. It was to build AI as operational
              decision-support infrastructure — something that improved consistency and reduced
              repetitive work while keeping human judgment at the center of every consequential action.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              That meant governance had to be a first-class design concern, not an afterthought.
              Confidence scoring, human verification checkpoints, QA flagging, and escalation-awareness
              weren't bolted on at the end — they shaped how the entire system was architected from the start.
            </p>
            <blockquote className="border-l-2 border-cyan-700/50 pl-4 text-zinc-400 text-sm italic">
              "Operational tools only create value if they integrate naturally into real staff workflows.
              Adoption is a design problem, not a training problem."
            </blockquote>
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* What I built */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">What I Built</span>
          </div>
          <div className="md:col-span-4 space-y-4">
            {builtItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-2">
                <h5 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-normal text-zinc-100">
                  {item.title}
                </h5>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Outcome */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Outcome</span>
          </div>
          <div className="md:col-span-4 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              The platform significantly improved operational workflow structure and consistency —
              reducing repetitive manual triage, standardizing routing logic, improving ticket
              categorization visibility, and supporting faster response drafting.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              More importantly, it created scalable operational infrastructure that reduced reliance
              on undocumented tribal knowledge and made workflows easier to support and extend long-term.
            </p>
            <div className="grid sm:grid-cols-3 gap-2 pt-2">
              {outcomeItems.map((item) => (
                <div key={item} className="rounded-xl border border-cyan-900/30 bg-cyan-950/20 px-3 py-2.5 text-xs text-cyan-400/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Key themes */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">Key Themes</span>
          </div>
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-2">
              {themes.map((item) => (
                <span key={item} className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PortfolioSite() {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/amy-kurkosky-6a55388a', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-28">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="about" className="space-y-8 pt-12">
          <div className="anim-start animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-700/40 bg-cyan-500/8 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
              AI Operations · Product Operations · Workflow Systems
            </span>
          </div>

          <div className="anim-start animate-fade-in-up delay-200 space-y-4">
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-[4.5rem] leading-[1.05] tracking-tight text-zinc-50"
            >
              Amy Kurkosky-Landis
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              Building scalable operational systems, AI-enabled workflows, and process infrastructure
              that improve execution, visibility, and organizational clarity.
            </h2>
          </div>

          <p className="anim-start animate-fade-in-up delay-300 text-zinc-500 leading-relaxed max-w-2xl">
            Systems-oriented operations strategist focused on workflow optimization, operational
            architecture, AI-assisted automation, governance-minded process design, and scalable
            infrastructure. Experienced building operational ecosystems that reduce friction, improve
            consistency, and help organizations function more effectively.
          </p>

          <div className="anim-start animate-fade-in-up delay-400 flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <button
              type="button"
              onClick={openLinkedIn}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200 px-6 py-2.5 text-sm font-semibold text-zinc-300"
            >
              LinkedIn ↗
            </button>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── About / Skills ───────────────────────────────────────────────── */}
        <AnimatedSection>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl font-normal text-zinc-100"
              >
                Systems Thinking
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I naturally gravitate toward identifying fragmented workflows, operational
                bottlenecks, and inconsistent systems — then redesigning them into scalable
                processes teams can realistically adopt and sustain.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                My work sits at the intersection of AI systems, operational design, process
                architecture, governance, documentation, and execution strategy. I'm especially
                interested in how thoughtfully implemented AI systems can improve efficiency and
                visibility without sacrificing usability, operational clarity, or human oversight.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2.5 text-xs text-zinc-400 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Projects ─────────────────────────────────────────────────────── */}
        <section id="projects" className="space-y-8">
          <AnimatedSection>
            <div className="space-y-2">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-4xl font-normal text-zinc-100"
              >
                Featured Projects
              </h3>
              <p className="text-zinc-500 text-sm max-w-2xl">
                AI-enabled operational systems, workflow automation infrastructure, documentation
                architecture, and scalable process design.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title}>
                <div style={{ animationDelay: `${i * 100}ms` }}>
                  <ProjectCard project={project} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Case Study ───────────────────────────────────────────────────── */}
        <CaseStudySection />

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Platform Showcase ────────────────────────────────────────────── */}
        <section className="space-y-8">
          <AnimatedSection>
            <div className="space-y-2">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-4xl font-normal text-zinc-100"
              >
                Platform Interface Showcase
              </h3>
              <p className="text-zinc-500 text-sm max-w-2xl">
                Selected interface views from the AI-enabled support operations platform and
                embedded desk companion app demonstrating workflow routing, operational visibility,
                escalation infrastructure, ticket-based processing, and AI-assisted intake systems.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ScreenshotCard shot={projectScreenshots[0]} featured />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {projectScreenshots.slice(1).map((shot) => (
              <AnimatedSection key={shot.title}>
                <ScreenshotCard shot={shot} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Philosophy ───────────────────────────────────────────────────── */}
        <AnimatedSection>
          <div id="philosophy" className="max-w-2xl space-y-4 pb-4">
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-2xl font-normal text-zinc-100"
            >
              Operational systems are products.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              I'm interested in building AI-enabled operational ecosystems that improve execution,
              coordination, scalability, and usability across organizations. My work focuses on
              practical systems thinking: creating infrastructure that is sustainable,
              well-documented, governance-aware, and genuinely useful for the humans interacting
              with it every day.
            </p>
            <p className="text-zinc-600 text-sm italic">
              Also occasionally an artist, cellist, gaming founder, and operational cryptid quietly
              reorganizing workflow ecosystems in the background.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        <AnimatedSection>
          <div id="contact" className="pb-16 space-y-4">
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-2xl font-normal text-zinc-100"
            >
              Get in touch
            </h3>
            <p className="text-zinc-500 text-sm max-w-md">
              Open to conversations about operations, AI systems, and workflow infrastructure.
            </p>
            <a
              href="https://www.linkedin.com/in/amy-kurkosky-6a55388a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-cyan-700 hover:text-cyan-400 transition-all duration-200 px-5 py-2.5 text-sm font-medium text-zinc-300"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
