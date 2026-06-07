import { useEffect, useRef, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  role: string[]
  tech: string[]
  caseStudyHref?: string
  demoHref?: string
  badge?: string
}

interface Screenshot {
  title: string
  description: string
  image: string | string[]
  annotations: string[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const credibilitySignals: string[] = [
  'Reduced organizational dependency on tribal knowledge',
  'Built production AI workflow infrastructure',
  'Designed scalable governance and escalation systems',
  'Created operational visibility and reporting frameworks',
  'Led cross-functional operational transformation initiatives',
  'Shipped tools teams actually adopted',
]

const skills: string[] = [
  'AI Workflow Automation',
  'Customer Operations Leadership',
  'Process Architecture',
  'Workflow Optimization',
  'Operational Systems Design',
  'Documentation & SOP Systems',
  'Human-in-the-Loop Governance',
  'Cross-Functional Coordination',
  'Operational Reporting',
  'Escalation Architecture',
  'Internal Tooling',
  'Process Governance',
]

const projects: Project[] = [
  {
    title: 'AI-Enabled Customer Operations Platform',
    subtitle: 'Production AI Workflow Automation & Governance Infrastructure',
    badge: 'Flagship',
    description:
      'Identified systemic operational dysfunction across a customer support organization — manual triage, tribal knowledge dependency, disconnected systems, inconsistent response quality — and designed and shipped a production AI-enabled operations platform from the ground up.',
    highlights: [
      'Built multi-agent AI workflow architecture for triage, policy interpretation, QA governance, and response generation',
      'Designed and deployed embedded desk companion app to eliminate staff context switching',
      'Implemented OCR document analysis pipeline for automated billing data extraction',
      'Engineered human-in-the-loop QA safeguards, confidence scoring, and escalation logic',
      'Created operational reporting and visibility infrastructure',
      'Reduced repetitive manual processing and standardized response quality at scale',
    ],
    role: [
      'System architecture & technical design',
      'Workflow design & process mapping',
      'Product requirements & scope definition',
      'Prompt systems engineering',
      'Technical implementation leadership',
      'Debugging & QA',
      'Vercel deployment & infrastructure',
      'Operational rollout & staff enablement',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Vercel', 'Anthropic API', 'OCR Workflows', 'Ticketing Integration'],
    caseStudyHref: '#case-study',
  },
  {
    title: 'Ambiguity Assassin',
    subtitle: 'AI Communication Risk Analysis Tool',
    badge: 'Applied AI Product',
    description:
      'Designed and built an AI-powered workplace communication analysis prototype that detects ambiguity, surfaces hidden assumptions, predicts downstream workflow confusion, and generates clarifying questions — so teams spend less time misaligned and more time executing.',
    highlights: [
      'Detects ambiguous phrasing and missing context in workplace communications',
      'Predicts downstream confusion and operational workflow risk before messages send',
      'Generates targeted clarifying questions to resolve ambiguity at the source',
      'Produces executive translation layer — "what they actually mean"',
      'Ambiguity scoring and risk classification across multiple severity levels',
      'Multiple interaction modes including professional and direct/unfiltered analysis',
    ],
    role: [
      'Product concept & UX interaction design',
      'Prompt architecture & evaluation logic',
      'Ambiguity scoring model & risk classification framework',
      'Structured AI response rendering',
      'Frontend implementation',
      'Product branding & positioning',
    ],
    tech: ['React', 'TypeScript', 'Anthropic API', 'Prompt Architecture', 'Vercel'],
    demoHref: 'mailto:amy@kmkoptometry.com?subject=Demo%20Request%20-%20Ambiguity%20Assassin',
  },
  {
    title: 'Operational Documentation & SOP Systems',
    subtitle: 'Scalable Knowledge Infrastructure',
    description:
      'Diagnosed a knowledge infrastructure gap — no standardized SOPs, inconsistent escalation paths, undocumented tribal knowledge — and built the organization\'s first end-to-end operational documentation and governance framework.',
    highlights: [
      "Designed and built the organization's first SOP documentation framework from scratch",
      'Created QA governance systems, escalation structures, and compliance checkpoints',
      'Standardized ticket categorization, routing logic, and reporting systems',
      'Built coaching enablement resources and onboarding workflow materials',
      'Reduced knowledge transfer friction and improved new staff adoption speed',
    ],
    role: [
      'Documentation architecture & framework design',
      'SOP authoring & workflow mapping',
      'QA governance system design',
      'Escalation logic & policy documentation',
      'Cross-functional stakeholder coordination',
    ],
    tech: ['Notion', 'Zoho Desk', 'Google Workspace', 'Internal Admin Systems', 'Reporting Dashboards', 'LMS', 'Spreadsheet Tooling'],
    caseStudyHref: '#case-study-ops-infrastructure',
  },
  {
    title: 'Bedlam Social (Bedlam Gaming)',
    subtitle: 'Co-Founder · Systems & Operations Architecture · Beta',
    description:
      "Co-founder of Bedlam Social, a beta-stage multiplayer product (Bedlam Gaming). Established the LLC and operational business structure, led content strategy, and implemented an AI-driven content creation library to automate prompt generation and new question-pack pipelines for playtesting and scaling.",
    highlights: [
      'Operational systems planning and architecture',
      'AI-assisted workflow implementation',
      'Collaborative product development and roadmap coordination',
      'Scalable infrastructure planning and process design',
    ],
    role: [
      'Operational systems design',
      'Product coordination & requirements',
      'AI workflow implementation',
      'Process architecture',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Prompt Automation', 'Vercel'],
  },
]

function OperationsInfrastructureCaseStudySection() {
    const diagnosisItems = [
      {
        title: 'Single-point dependency',
        body: 'All exception decisions, cross-team coordination, and student escalations routed informally through one person — with no backup, no documentation, and no defined process.',
      },
      {
        title: 'Undifferentiated work',
        body: 'Routine delegatable tasks and senior judgment calls were treated identically. Remote operations staff had no framework for knowing what to execute versus what to escalate.',
      },
      {
        title: 'Invisible compliance risk',
        body: 'Financial exceptions, policy decisions, and student-facing commitments were documented only in ad hoc channels — creating no accountability trail and no precedent governance.',
      },
    ]

    const architectureItems = [
      {
        number: '01',
        title: 'Building Organizational Memory',
        body: 'Created the first operational knowledge infrastructure supporting Support, Coaching, Engineering, and Leadership — turning undocumented institutional knowledge into reusable operating assets.',
      },
      {
        number: '02',
        title: 'Formal Ownership Paths',
        body: 'Established ownership paths for financial, policy, cross-team, and student-facing exception handling so operational decisions had clear resolution routes instead of informal escalation loops.',
      },
      {
        number: '03',
        title: 'Execution Boundaries',
        body: 'Defined which work could be executed remotely, which work required senior judgment, and where authority lived — reducing ambiguity around delegation and protecting judgment-heavy operations.',
      },
      {
        number: '04',
        title: 'Governance Evidence Trail',
        body: 'Created standards for documenting policy decisions, surfacing recurring exception patterns, and preventing one-off decisions from silently becoming organization-wide precedent.',
      },
    ]

    const artifacts = [
      'LMS Operations Manual',
      '5-section SOP library',
      'Escalation decision framework',
      'Role boundary definitions',
      'Onboarding enablement materials',
      'Glossary & contact directory',
      'Cohort calendar reference',
    ]

    const outcomes = [
      {
        headline: '0 → 1',
        body: 'First operational knowledge infrastructure the organization had ever had',
      },
      {
        headline: '4 teams',
        body: 'Cross-functional alignment across Support, Coaching, Engineering, and Leadership',
      },
      {
        headline: 'Cycle-ready',
        body: 'Remote staff onboarding framework designed for quarterly exam cycle operations',
      },
    ]

    const skillsDemonstrated = [
      'Operational architecture',
      'Knowledge management systems',
      'SOP design & governance',
      'Escalation framework design',
      'Role clarity & delegation systems',
      'Onboarding infrastructure',
      'Cross-functional coordination',
      'Compliance risk reduction',
      'Documentation governance',
      'Workflow standardization',
    ]

    return (
      <section id="case-study-ops-infrastructure" className="space-y-12 scroll-mt-28">
        <AnimatedSection>
          <div className="rounded-3xl border border-cyan-900/40 bg-gradient-to-br from-zinc-900/70 via-zinc-900/30 to-cyan-950/10 p-8 md:p-10 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-cyan-800/40 bg-cyan-950/30 px-3 py-1 text-[10px] font-semibold tracking-widest text-cyan-400 uppercase">
                Case Study Branch · Organizational Memory
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">
                Building Organizational Memory
              </h3>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
                Critical operational knowledge existed in people rather than systems. I designed the infrastructure that made execution less dependent on individual staff members: documentation, escalation design, governance, and onboarding architecture.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Industry', 'Optometry Board Exam Prep'],
                ['Scope', 'LMS · Coaching Ops · Support Escalation'],
                ['Deliverable', 'Operations Manual + Governance System'],
                ['Role', 'Student Success Manager / AI Systems Architecture Lead'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">{label}</p>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-zinc-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4" open>
            <summary className="grid cursor-pointer items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Challenge</span>
              </div>
              <div className="md:col-span-4">
                <span className="text-sm text-zinc-400">No documented operational infrastructure for a complex, multi-cycle program.</span>
              </div>
            </summary>

            <div className="mt-4 grid items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1" />
              <div className="space-y-4 md:col-span-4">
                <p className="text-sm leading-relaxed text-zinc-300">
                  A multi-cycle optometry board exam preparation company operated a complex program spanning LMS administration, coaching coordination, student support, billing, and engineering — with no documented operational infrastructure.
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Operational knowledge existed in the heads of a small group of staff, workflows were executed inconsistently, escalation paths were undefined, and the organization&apos;s ability to function was tightly coupled to the availability of a single senior operations person.
                </p>
              </div>
            </div>
          </details>
        </AnimatedSection>

        <AnimatedSection>
          <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4" open>
            <summary className="grid cursor-pointer items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Diagnosis</span>
              </div>
              <div className="md:col-span-4">
                <span className="text-sm text-zinc-400">Three structural risks were named and mapped before solution design.</span>
              </div>
            </summary>

            <div className="mt-4 grid items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1" />
              <div className="grid gap-3 md:col-span-4 md:grid-cols-3">
                {diagnosisItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                    <h5 className="text-sm font-semibold text-cyan-400">{item.title}</h5>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </AnimatedSection>

        <AnimatedSection>
          <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4" open>
            <summary className="grid cursor-pointer items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Architecture</span>
              </div>
              <div className="md:col-span-4">
                <span className="text-sm text-zinc-400">A governance model for converting undocumented institutional knowledge into scalable operational assets.</span>
              </div>
            </summary>

            <div className="mt-4 grid items-start gap-8 md:grid-cols-5">
              <div className="pt-1 md:col-span-1" />
              <div className="space-y-5 md:col-span-4">
                <p className="text-sm leading-relaxed text-zinc-300">
                  The solution was not a documentation project. It was an organizational memory system: a way to capture what the company knew, clarify who owned decisions, and make recurring execution repeatable.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {architectureItems.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">{item.number}</p>
                      <h5 className="mt-1 text-sm font-semibold text-zinc-100">{item.title}</h5>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {artifacts.map((artifact) => (
                    <span key={artifact} className="rounded-full border border-cyan-800/30 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-400/90">
                      {artifact}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid items-start gap-8 md:grid-cols-5">
            <div className="pt-1 md:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Outcomes</span>
            </div>
            <div className="space-y-5 md:col-span-4">
              <div className="grid gap-3 md:grid-cols-3">
                {outcomes.map((outcome) => (
                  <div key={outcome.headline} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 text-center">
                    <p style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-normal text-cyan-400">{outcome.headline}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{outcome.body}</p>
                  </div>
                ))}
              </div>
              <blockquote className="rounded-2xl border-l-2 border-cyan-700/70 bg-zinc-900/30 p-5">
                <p style={{ fontFamily: 'var(--font-display)' }} className="text-base italic leading-relaxed text-zinc-300">
                  “This manual documents operational workflows executable by remote operations staff. It does not cover student-facing support, financial case handling, extension decisions, cross-functional coordination, institutional knowledge, or policy exception authority. Those functions require US-based senior operations presence.”
                </p>
                <cite className="mt-3 block text-xs not-italic text-zinc-600">— Operations Manual, Role Boundary Definitions section</cite>
              </blockquote>
              <p className="text-sm leading-relaxed text-zinc-400">
                The result is an organization that can distinguish between what it knows and what it doesn&apos;t — the precondition for scaling operational capacity without scaling risk.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid items-start gap-8 md:grid-cols-5">
            <div className="pt-1 md:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Skills Demonstrated</span>
            </div>
            <div className="flex flex-wrap gap-2 md:col-span-4">
              {skillsDemonstrated.map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    )
  }
const projectScreenshots: Screenshot[] = [
  {
    title: 'Embedded Desk Companion App',
    description:
      'Companion workflow embedded directly into the ticketing environment — staff process cases, review triage, validate QA checkpoints, and send responses without leaving their active workspace.',
    image: ['/images/companion-slide-1.png', '/images/companion-slide-2.png'],
    annotations: ['Embedded workflow', 'Reduced context switching', 'Ticket-based processing', 'Staff adoption design'],
  },
  {
    title: 'Operations Dashboard',
    description:
      'Centralized customer operations dashboard featuring workflow visibility, QA guidance, operational metrics, case counts, and routing infrastructure.',
    image: '/images/supportops-dashboard.png',
    annotations: ['Operational visibility', 'Workflow routing', 'QA guidance systems'],
  },
  {
    title: 'AI Workflow Governance & Draft Generation',
    description:
      'Triage output showing confidence scoring, human verification checkpoints, QA safeguard flags, escalation awareness, and AI-assisted draft response generation.',
    image: '/images/supportops-governance.png',
    annotations: ['AI confidence scoring', 'Human verification workflow', 'QA safeguards', 'Draft response generation'],
  },
  {
    title: 'Quick Process Intake',
    description:
      'Structured intake workflow supporting ticket lookup, student email triage, invoice screenshot uploads, and automated processing pipeline.',
    image: '/images/supportops-quick-process.png',
    annotations: ['Structured intake', 'Ticket-based workflow', 'OCR-ready uploads', 'AI-assisted processing'],
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
    { label: 'Transformations', href: '#projects' },
    { label: 'Case Studies', href: '#case-study' },
    { label: 'How I Work', href: '#how-i-work' },
    { label: 'Philosophy', href: '#philosophy' },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 opacity-90 hover:opacity-100"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.9)' : 'rgba(9,9,11,0.5)',
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
    return () => { if (target) observer.unobserve(target) }
  }, [])

  return ref
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useIntersectionObserver()
  return <div ref={ref} className={`anim-start ${className}`}>{children}</div>
}

function ProjectCard({ project }: { project: Project }) {
  const [showRole, setShowRole] = useState(false)

  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-10 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {project.badge && (
                <span className="rounded-full bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-cyan-400 uppercase">
                  {project.badge}
                </span>
              )}
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal tracking-tight text-zinc-100">
              {project.title}
            </h4>
            <p className="mt-1 text-xs font-medium tracking-widest text-zinc-500 uppercase">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed text-sm">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-6 pt-1">
          {/* Highlights */}
          <div>
              <h5 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">What I Built</h5>
            <ul className="space-y-2 text-zinc-300 text-sm">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="mt-0.5 text-cyan-500 shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role + Tech */}
          <div className="space-y-5">
            <div>
              <button
                onClick={() => setShowRole(!showRole)}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 hover:text-zinc-300 transition-colors"
              >
                My Role
                <span className="text-zinc-600">{showRole ? '▲' : '▼'}</span>
              </button>
              {showRole && (
                <ul className="space-y-1.5 text-zinc-300 text-sm mb-4">
                  {project.role.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="mt-0.5 text-zinc-600 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h5 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">Stack</h5>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 text-xs text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
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

          {project.demoHref && (
            <div className="pt-2">
              <a
                href={project.demoHref}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-800/40 bg-transparent hover:bg-cyan-950/30 transition-all duration-200 px-4 py-2 text-xs font-medium text-cyan-400"
              >
                Prototype / Demo →
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

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setFading(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length, isHovering])

  return (
    <div 
      className={`relative bg-zinc-950 border-b border-zinc-800 overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-video'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
        <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-normal text-zinc-100">{shot.title}</h4>
        <div className={`grid gap-3 text-sm leading-relaxed ${featured ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
          <div className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">What You're Seeing</p>
            <p className="mt-1 break-words text-zinc-300">{shot.title}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">Why It Matters</p>
            <p className="mt-1 break-words text-zinc-400">{shot.description}</p>
          </div>
          <div className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">Operational Impact</p>
            <p className="mt-1 break-words text-zinc-400">{shot.annotations.slice(0, 3).join(' · ')}</p>
          </div>
        </div>
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

function WhatIBuildSection() {
  const buildAreas = [
    {
      title: 'AI Operations Infrastructure',
      body: 'Workflow automation, governance, QA systems, operational tooling, and human-in-the-loop execution models that help teams move faster without losing control.',
    },
    {
      title: 'Knowledge Infrastructure',
      body: 'Documentation systems, SOP ecosystems, onboarding assets, and institutional memory structures that reduce reliance on tribal knowledge.',
    },
    {
      title: 'Organizational Systems',
      body: 'Escalation design, process architecture, cross-functional ownership paths, and execution standards that make operations more scalable and less person-dependent.',
    },
  ]

  return (
    <section className="space-y-6">
      <AnimatedSection>
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">What I Build</span>
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">
            Operational infrastructure for teams that need to scale.
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
            My work turns operational complexity into systems: clearer decisions, repeatable workflows, documented knowledge, and tooling people can actually adopt.
          </p>
        </div>
      </AnimatedSection>
      <div className="grid gap-4 md:grid-cols-3">
        {buildAreas.map((area) => (
          <AnimatedSection key={area.title}>
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal text-zinc-100">{area.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{area.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

function FeaturedTransformationSection() {
  const beforeItems = ['Manual triage', 'Tribal knowledge dependency', 'Inconsistent quality', 'Limited visibility']
  const afterItems = ['AI workflow orchestration', 'Embedded governance', 'Human-in-the-loop QA', 'Operational reporting']

  return (
    <section className="space-y-6">
      <AnimatedSection>
        <div className="rounded-[2rem] border border-cyan-800/30 bg-zinc-900/40 p-8 md:p-10 shadow-2xl shadow-black/20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1.4fr]">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Featured Transformation</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal leading-tight text-zinc-100">
                Production AI Operations Platform
              </h3>
              <p className="text-lg font-semibold leading-relaxed text-zinc-100">
                Built to replace fragmented support operations with scalable AI-enabled execution infrastructure.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Designed as an operational system, not just a tool: intake, triage, OCR, QA, policy interpretation, response generation, and governance integrated into one execution model.
              </p>
              <a href="#case-study" className="inline-flex rounded-xl border border-cyan-800/40 bg-cyan-950/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:border-cyan-600">
                Read the flagship case study →
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/35 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Before</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {beforeItems.map((item) => <li key={item}>› {item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/35 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">After</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {afterItems.map((item) => <li key={item}>› {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function OperationalScopeSection() {
  const scopeItems = [
    'Multi-department operational ownership',
    'Support, coaching, engineering, and finance coordination',
    'Thousands of student support interactions annually',
    'Complex policy and compliance workflows',
    'AI-enabled production support operations',
  ]

  return (
    <section className="space-y-6">
      <AnimatedSection>
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Operational Scope</span>
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">The problems were organizational, not task-level.</h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">The work sat across functions, policies, systems, and recurring student-facing operations — the kind of operating environment where undocumented knowledge becomes business risk.</p>
        </div>
      </AnimatedSection>
      <div className="grid gap-3 md:grid-cols-5">
        {scopeItems.map((item) => (
          <AnimatedSection key={item}>
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 text-sm leading-relaxed text-zinc-300">
              {item}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

function ComplexityTranslationSection() {
  const items = [
    'Leadership and execution teams',
    'Technical and non-technical stakeholders',
    'Policy and operational practice',
    'Customer needs and internal systems',
    'Human workflows and AI-enabled processes',
  ]

  return (
    <AnimatedSection>
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Complexity Translation</span>
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-normal text-zinc-100">I translate between the people who define the work and the systems that make it executable.</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-4 text-sm text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

// ─── Case Study ───────────────────────────────────────────────────────────────

function CaseStudySection() {
  const problemItems = [
    'Inconsistent response quality',
    'Slow turnaround times',
    'High cognitive load on staff',
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
      title: 'AI-Enabled Customer Operations Platform',
      body: 'Centralized operational dashboard supporting workflow intake, ticket triage, OCR document analysis, escalation routing, QA safeguards, confidence scoring, and AI-assisted response drafting.',
    },
    {
      title: 'Embedded Desk Companion App',
      body: 'Companion application embedded directly into the ticketing environment. Staff process tickets, review AI recommendations, validate QA checkpoints, and send responses without leaving their existing workflow. Reducing context switching was a first-class design constraint.',
    },
    {
      title: 'Governance & QA Infrastructure',
      body: 'AI confidence scoring, human verification checkpoints, escalation awareness, QA flagging, contextual risk indicators, and policy-review prompts — all designed to support staff judgment rather than bypass it.',
    },
  ]
  const myRole = [
    'System architecture & technical design',
    'Workflow design & process mapping',
    'Product requirements & scope definition',
    'Prompt systems engineering',
    'Technical implementation leadership',
    'Debugging & QA',
    'Vercel deployment & infrastructure',
    'Operational rollout & staff enablement',
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
          <span className="text-xs font-medium tracking-widest text-cyan-400/70 uppercase">Case Study</span>
          <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">
            AI-Enabled Customer Operations Platform
          </h3>
          <p className="text-zinc-500 text-sm max-w-2xl">
            How I identified operational dysfunction, designed the solution architecture, and shipped
            a production AI-enabled workflow system — and why governance was a first-class design constraint.
          </p>
        </div>
      </AnimatedSection>

      {/* My Role */}
      <AnimatedSection>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1 pt-1">
            <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">My Role</span>
          </div>
          <div className="md:col-span-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest">I personally owned end-to-end:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {myRole.map((item) => (
                  <div key={item} className="flex gap-2.5 items-start text-sm text-zinc-300">
                    <span className="mt-0.5 text-cyan-500 shrink-0">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Problem */}
      <AnimatedSection>
        <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
          <summary className="grid md:grid-cols-5 gap-8 items-start cursor-pointer">
            <div className="md:col-span-1 pt-1">
              <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Problem</span>
            </div>
            <div className="md:col-span-4">
              <span className="text-zinc-400 text-sm">Manual triage, fragmented systems, and high cognitive load on staff.</span>
            </div>
          </summary>

          <div className="mt-3 grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 pt-1" />
            <div className="md:col-span-4 space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                When I stepped into customer support operations, a significant portion of the workflow
                depended on manual triage, institutional knowledge, and repetitive decision-making
                spread across multiple disconnected systems.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Staff were manually categorizing tickets, checking account and payment context,
                reviewing communication history, identifying escalation paths, verifying policy
                requirements, and drafting repetitive responses — all while context-switching
                constantly between tools to complete even straightforward cases.
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
        </details>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Approach */}
      <AnimatedSection>
        <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
          <summary className="grid md:grid-cols-5 gap-8 items-start cursor-pointer">
            <div className="md:col-span-1 pt-1">
              <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Approach</span>
            </div>
            <div className="md:col-span-4">
              <span className="text-zinc-400 text-sm">Human-in-the-loop governance, confidence scoring, and QA checkpoints.</span>
            </div>
          </summary>

          <div className="mt-3 grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 pt-1" />
            <div className="md:col-span-4 space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                The goal was never to automate staff out of the loop. It was to build AI as operational
                decision-support infrastructure — improving consistency and reducing repetitive work
                while keeping human judgment at the center of every consequential decision.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Governance was a first-class design constraint, not an afterthought. Confidence scoring,
                human verification checkpoints, QA flagging, and escalation-awareness shaped the
                architecture from day one.
              </p>
              <blockquote className="border-l-2 border-cyan-700/50 pl-4 text-zinc-400 text-sm italic">
                "Operational tools only create value if they integrate naturally into real staff workflows.
                Adoption is a design problem, not a training problem."
              </blockquote>
            </div>
          </div>
        </details>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* What I built */}
      <AnimatedSection>
        <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
          <summary className="grid md:grid-cols-5 gap-8 items-start cursor-pointer">
            <div className="md:col-span-1 pt-1">
              <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">What I Built</span>
            </div>
            <div className="md:col-span-4">
              <span className="text-zinc-400 text-sm">Centralized dashboard, embedded desk companion, and governance & QA infrastructure.</span>
            </div>
          </summary>

          <div className="mt-3 grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 pt-1" />
            <div className="md:col-span-4 space-y-4">
              {builtItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-2">
                  <h5 style={{ fontFamily: 'var(--font-display)' }} className="text-lg font-normal text-zinc-100">{item.title}</h5>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </details>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Outcome */}
      <AnimatedSection>
        <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
          <summary className="grid md:grid-cols-5 gap-8 items-start cursor-pointer">
            <div className="md:col-span-1 pt-1">
              <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase">The Outcome</span>
            </div>
            <div className="md:col-span-4">
              <span className="text-zinc-400 text-sm">Reduced manual work, standardized routing, and stronger QA governance.</span>
            </div>
          </summary>

          <div className="mt-3 grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 pt-1" />
            <div className="md:col-span-4 space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                The platform significantly improved operational workflow structure and consistency —
                reducing manual triage, standardizing routing logic, improving ticket categorization
                visibility, and supporting faster, higher-quality response drafting.
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
        </details>
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
    <div className="brand-site min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="about" className="brand-hero-card space-y-8 rounded-[2rem] p-8 md:p-12">
          <div className="anim-start animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-700/40 bg-cyan-500/8 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
              Operational Systems Builder
            </span>
          </div>

          <div className="anim-start animate-fade-in-up delay-200 space-y-4">
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-6xl md:text-[5.5rem] leading-[1.1] tracking-tight text-zinc-50">
              I Build Operational Systems That Scale Organizations
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              I design the infrastructure behind high-performing teams: AI-enabled workflows,
              operational governance, knowledge systems, customer operations, and process architecture.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
              I translate chaos into systems, tribal knowledge into infrastructure, policy into execution, and AI capability into usable workflows.
            </p>
            <p className="text-sm font-medium tracking-wide text-cyan-400">Transforming operational chaos into scalable systems people can actually use.</p>
          </div>

          {/* Fast credibility signals */}
          <div className="anim-start animate-fade-in-up delay-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-2xl">
              {credibilitySignals.map((signal) => (
                <div key={signal} className="flex gap-2 items-start">
                  <span className="mt-0.5 text-cyan-500 shrink-0 text-xs">›</span>
                  <span className="text-zinc-400 text-xs leading-relaxed">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="anim-start animate-fade-in-up delay-400 flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 px-7 py-3 text-base font-semibold text-zinc-950 shadow-lg shadow-cyan-500/30"
            >
              View Transformations
            </a>
            <a
              href="mailto:amy@kmkoptometry.com?subject=Resume%20Request"
              onClick={() => {
                window.location.href = 'mailto:amy@kmkoptometry.com?subject=Resume%20Request'
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 px-7 py-3 text-base font-semibold text-zinc-100"
            >
              Request Resume ↓
            </a>
            <button
              type="button"
              onClick={openLinkedIn}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200 px-7 py-3 text-base font-semibold text-zinc-200"
            >
              LinkedIn ↗
            </button>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── What I Build ────────────────────────────────────────────────── */}
        <WhatIBuildSection />

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Featured Transformation ─────────────────────────────────────── */}
        <FeaturedTransformationSection />

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Built, Not Theorized (Credibility) ───────────────────────────── */}
        <AnimatedSection>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal text-zinc-100">Pattern Recognition, Made Operational</h3>
                <p className="text-zinc-500 text-sm">How I identify hidden friction, capture knowledge, and turn messy workflows into usable systems.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <h5 className="text-sm font-semibold text-zinc-100">Built production AI workflow infrastructure</h5>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <h5 className="text-sm font-semibold text-zinc-100">Operational transformation leadership</h5>
                <p className="text-zinc-400 text-xs mt-1">Identified workflow dysfunction and rebuilt scalable execution systems.</p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <h5 className="text-sm font-semibold text-zinc-100">Designed multi-agent orchestration systems</h5>
                <p className="text-zinc-400 text-xs mt-1">Structured agent workflows for triage, policy interpretation, QA governance, and response generation.</p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <h5 className="text-sm font-semibold text-zinc-100">Implemented human-in-the-loop AI governance</h5>
                <p className="text-zinc-400 text-xs mt-1">Designed confidence scoring, escalation logic, verification checkpoints, and QA safeguards.</p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <h5 className="text-sm font-semibold text-zinc-100">Shipped internal tools teams actually adopted</h5>
                <p className="text-zinc-400 text-xs mt-1">Embedded decision-support tooling directly into operational workflows to reduce friction.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Operational Scope ───────────────────────────────────────────── */}
        <OperationalScopeSection />

        {/* ── How I Work ───────────────────────────────────────────────────── */}
        <AnimatedSection>
          <div id="how-i-work" className="grid md:grid-cols-5 gap-12 items-start scroll-mt-28">
            <div className="md:col-span-2 space-y-4">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-normal text-zinc-100">
                How I Work
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I look for the hidden patterns underneath operational mess: where knowledge lives,
                where decisions stall, where handoffs break, and where teams are compensating for
                missing systems with memory, heroics, or vibes.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Then I translate that into maps, documentation, workflows, tools, governance,
                and AI-enabled infrastructure people can actually use.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I look for undocumented knowledge, unclear ownership, escalation ambiguity,
                process bottlenecks, reporting blind spots, and adoption friction — then turn
                those findings into systems that scale beyond individual contributors.
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">What I Look For</h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'Knowledge trapped in people',
                  'Undefined ownership',
                  'Escalation ambiguity',
                  'Workflow bottlenecks',
                  'Reporting blind spots',
                  'Tool adoption friction',
                ].map((signal) => (
                  <div
                    key={signal}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2.5 text-xs text-zinc-400 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-200"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Projects ─────────────────────────────────────────────────────── */}
        <section id="projects" className="space-y-8">
          <AnimatedSection>
            <div className="space-y-2">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">
                Operational Transformations
              </h3>
              <p className="text-zinc-500 text-sm max-w-2xl">
                Production AI systems, applied AI products, operational infrastructure, and workflow
                automation — built and shipped, not theorized.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title}>
                <div style={{ animationDelay: `${i * 80}ms` }}>
                  <ProjectCard project={project} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Case Study ───────────────────────────────────────────────────── */}
        <CaseStudySection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        
        {/* ── Case Study Branch: Operations Infrastructure ─────────────────── */}
        <OperationsInfrastructureCaseStudySection />

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Platform Showcase ────────────────────────────────────────────── */}
        <section className="space-y-8">
          <AnimatedSection>
            <div className="space-y-2">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-normal text-zinc-100">
                Platform Interface Showcase
              </h3>
              <p className="text-zinc-500 text-sm max-w-2xl">
                Interface views from the AI-enabled customer operations platform demonstrating
                workflow routing, operational visibility, escalation infrastructure, and AI-assisted
                intake and draft generation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ScreenshotCard shot={projectScreenshots[0]} featured />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {projectScreenshots.slice(1).map((shot) => (
              <AnimatedSection key={shot.title}>
                <ScreenshotCard shot={shot} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Complexity Translation ──────────────────────────────────────── */}
        <ComplexityTranslationSection />

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Philosophy ───────────────────────────────────────────────────── */}
        <AnimatedSection>
          <div id="philosophy" className="max-w-3xl space-y-5">
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal text-zinc-100">
              Operational systems are products.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              The best operational infrastructure is invisible when it works and obvious when it
              doesn't. I build systems that are sustainable, well-documented, governance-aware,
              and designed for the humans who actually have to use them every day — not just the
              ones who approved the budget.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                'Documentation is infrastructure.',
                'Governance enables scale.',
                'AI should amplify human judgment.',
                'Every recurring problem deserves a system.',
                'Operational clarity compounds over time.',
                'Sustainable systems outperform heroic effort.',
              ].map((principle) => (
                <div key={principle} className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3 text-sm text-zinc-300">
                  {principle}
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm italic">
              Also occasionally an artist, cellist, gaming founder, and operational cryptid quietly
              reorganizing workflow ecosystems in the background.
            </p>
          </div>
        </AnimatedSection>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        <AnimatedSection>
          <div id="contact" className="pb-16 space-y-6">
            <div className="space-y-2">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal text-zinc-100">
                Let's Connect
              </h3>
              <p className="text-zinc-500 text-sm max-w-lg">
                Open to conversations around customer operations leadership, AI systems, workflow
                automation, support transformation, and operational product design.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/amy-kurkosky-6a55388a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 px-6 py-3 text-base font-semibold text-zinc-950"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:amy@kmkoptometry.com"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200 px-6 py-3 text-base font-medium text-zinc-200"
              >
                Email
              </a>
              <a
                href="mailto:amy@kmkoptometry.com?subject=Resume%20Request"
                onClick={() => {
                  window.location.href = 'mailto:amy@kmkoptometry.com?subject=Resume%20Request'
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200 px-6 py-3 text-base font-medium text-zinc-200"
              >
                Request Resume ↓
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
