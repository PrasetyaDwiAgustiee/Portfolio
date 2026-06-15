import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    brand: 'Prasetya Dwi Agustie',
    name: 'Prasetya Dwi Agustie',
    role: 'Telecom Operations & Service Assurance Professional',
    headline: 'Ensuring the stability of critical production systems and telecom services.',
    subheadline: 'Telecom operations specialist with 5+ years of experience in Service Assurance, Incident Response, NOC operations, and B2B Application Support. Skilled in monitoring platform alerts, troubleshooting transactions, and coordinating escalations to maintain strict SLA targets.',
    availability: 'Available for NOC & Service Assurance Roles',
    location: 'Jakarta, Indonesia',
    yearsExperience: '5+ Years',
    systemsSupported: 'Telecom & Production Platforms',
    email: 'prasetyadwiagustie@gmail.com',
    phone: '+62 851 5523 9333',
    phoneHref: '+6285155239333',
    linkedin: 'https://linkedin.com/in/prasetyadwiagustie',
    github: 'https://github.com/prasetyadwiagustie',
    image: 'assets/portrait.png',
    fallbackImage: 'assets/portrait.svg',
    cv: 'CV - Prasetya Dwi Agustiee.pdf'
  },

  navigation: [
    { label: 'Summary', href: '#summary' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' }
  ],

  executiveSummary: {
    narrative: [
      'I manage the daily operations and monitoring workflows that keep telecom services and business-critical systems stable. My background is built on shift-based operations inside network operations centers (NOC) and level-2 application support, where quick triage and accurate escalation are crucial.',
      'Throughout my roles, I have monitored high-volume transactions—such as top-ups and voucher distributions—managed system alerts, and coordinated issue resolution across database administrators, developers, and vendor support teams. I focus on maintaining strict SLA compliance and delivering clear, real-time status updates to management during critical incidents.'
    ],
    stats: [
      { value: 'SLA', label: 'Incident Triage Focus' },
      { value: '24/7', label: 'Shift Operations Coverage' },
      { value: '5+ Yrs', label: 'Technical Support & Ops' },
      { value: 'Multi', label: 'Vendor Platforms Managed' }
    ]
  },

  achievements: [
    {
      metric: 'MTTR',
      title: 'Incident Coordination',
      description: 'Streamlined communication flow between support desk and engineering teams to speed up incident resolution during critical system outages.'
    },
    {
      metric: '24/7',
      title: 'Telecom NOC Monitoring',
      description: 'Maintained continuous alert monitoring and status verification for nationwide prepaid recharge, transaction paths, and MDN management systems.'
    },
    {
      metric: 'SLA',
      title: 'Ticket Management',
      description: 'Ensured consistent ticket tracking and vendor follow-up to resolve system issues within target response times.'
    },
    {
      metric: 'Daily',
      title: 'Operational Status Reporting',
      description: 'Established regular status update logs to track system health metrics and incident summaries for engineering management.'
    }
  ],

  experience: [
    {
      company: 'PT XLSmart Telecom',
      position: 'IT Service Operation',
      period: 'Apr 2025 – Present',
      impact: 'Oversees day-to-day service desk operations, incident ticket lifecycles, and cross-team resolution paths.',
      responsibilities: [
        'Track and prioritize incoming customer complaint tickets for digital services and top-up transactions.',
        'Escalate unresolved system issues to backend engineering and external service providers.',
        'Compile daily status logs documenting incident counts, unresolved tickets, and system health status.'
      ],
      technologies: ['ServiceNow', 'Ticketing Systems', 'Incident Response', 'SLA Tracking']
    },
    {
      company: 'PT Smartfren Tbk',
      position: 'IT Operation Center',
      period: 'Mar 2022 – Apr 2025',
      impact: 'Maintained continuous service assurance checks and alert monitoring for core transaction systems.',
      responsibilities: [
        'Monitored transaction logs for system recharges, voucher validation, and MDN registrations.',
        'Delivered bi-hourly system health updates and incident reports to technical operations managers.',
        'Analyzed system monitoring alerts (Nagios/Zabbix) and initiated incident tickets for on-call engineers.'
      ],
      technologies: ['Zabbix', 'Nagios', 'Grafana', 'ServiceNow', 'System Monitoring']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Project Lead',
      period: 'Jan 2022 – Mar 2022',
      impact: 'Coordinated rollout checks and post-implementation support workflows for Distributor Management Systems.',
      responsibilities: [
        'Supervised User Acceptance Testing (UAT) checks and post-release validation runs for new software deployments.',
        'Facilitated daily triage calls between developers, business users, and support staff to track deployment issues.',
        'Drafted system handover checklists for level-1 and level-2 support teams to use post-release.'
      ],
      technologies: ['UAT Coordination', 'DMS', 'Release Management', 'Support Handover']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Application Support',
      period: 'Jan 2021 – Dec 2021',
      impact: 'Provided level-2 database and application support for distributor-facing database systems.',
      responsibilities: [
        'Investigated data discrepancies and system bugs using SQL queries and database error logs.',
        'Coordinated bug escalations with third-party software vendors and tracked emergency hotfixes.',
        'Maintained the internal troubleshooting knowledge base for recurring database and transaction errors.'
      ],
      technologies: ['SQL Troubleshooting', 'Log Analysis', 'Vendor Support Escalation']
    },
    {
      company: 'PT Pratesis',
      position: 'CC & Complain Master (COSTER)',
      period: 'Apr 2020 – Dec 2020',
      impact: 'Managed client-facing support workflows, ticket updates, and operational log tracking.',
      responsibilities: [
        'Logged, classified, and updated customer tickets through the complete resolution lifecycle.',
        'Monitored resolution progress with technical staff to protect agreed-upon SLA turnaround times.',
        'Prepared daily reports detailing resolved issues, pending tickets, and overall response performance.'
      ],
      technologies: ['SLA Tracking', 'Ticket Lifecycle', 'Operations Support']
    }
  ],

  competencies: [
    {
      category: 'Operations',
      level: 100,
      items: ['24/7 Shift Support', 'Service Continuity', 'Operational Handovers', 'NOC Workflows']
    },
    {
      category: 'Incident Management',
      level: 100,
      items: ['Incident Triage', 'SLA Compliance', 'Escalation Paths', 'Cross-team Coordination']
    },
    {
      category: 'Production Support',
      level: 100,
      items: ['UAT Validation', 'Release Support', 'Deployment Checks', 'Handover Documentation']
    },
    {
      category: 'Monitoring & Logs',
      level: 100,
      items: ['Zabbix', 'Nagios', 'Grafana Alerts', 'SQL Querying', 'Log Tracing']
    },
    {
      category: 'Tracking & Tools',
      level: 100,
      items: ['ServiceNow', 'Jira Service Desk', 'Daily Status Reports', 'Incident Summaries']
    }
  ],

  caseStudies: [
    {
      title: 'Resolving a Core Telecom Transaction Outage',
      situation: 'A sudden drop in successful prepaid recharge transactions occurred during peak hours, impacting both mobile apps and physical voucher validations.',
      challenge: 'The issue caused an immediate spike in customer complaints. Immediate database and transaction log verification was required to identify the root cause without impacting other services.',
      actions: [
        'Analyzed database pool levels and transaction logs in Grafana to isolate connection exhaustion.',
        'Initiated emergency escalation paths to database administrators and system administrators.',
        'Redirected transaction traffic to a standby server pool while connections were cleared.'
      ],
      outcome: 'Restored normal prepaid transaction processing and stabilized database connection pools.',
      businessValue: 'Minimized transaction revenue loss and met core telecom service SLA thresholds.'
    },
    {
      title: 'Coordinating Release Validation for B2B Systems',
      situation: 'A database schema update was scheduled for deployment across a Distributor Management System (DMS) database during a limited maintenance window.',
      challenge: 'Deployments required verification across regional nodes, with zero tolerance for extended database locks during business start times.',
      actions: [
        'Managed pre-deployment testing checklists and ran preliminary UAT validation scripts.',
        'Monitored migration locks and coordinated with third-party software developers when schema deployment slowed down.',
        'Ran post-migration data queries to confirm regional node synchronization.'
      ],
      outcome: 'Completed database release and verified system status within the scheduled window.',
      businessValue: 'Prevented ordering disruptions for distributor nodes and maintained system availability SLAs.'
    },
    {
      title: 'Improving Shift Handover and Status Reporting',
      situation: 'NOC shift handovers lacked standardized documentation, leading to delayed tracking of open tickets and pending engineering fixes.',
      challenge: 'Critical transaction alerts (Top-Ups, Voucher activations, MDN validation) required a structured tracking routine to prevent lingering tickets.',
      actions: [
        'Developed a standardized shift handover template based on ServiceNow incident metrics.',
        'Set up bi-hourly validation routines for core transaction systems to detect slow performance early.',
        'Conducted live status review walk-throughs between incoming and outgoing shifts.'
      ],
      outcome: 'Established a consistent daily reporting routine with clear ownership of open incidents.',
      businessValue: 'Reduced ticket handover friction and ensured continuous tracking of pending vendor hotfixes.'
    }
  ],

  certifications: [
    {
      name: 'Competency Certificate in Web Development',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      date: 'Feb 2025',
      highlight: true
    },
    {
      name: 'CAWD Non-Academic Certificate — Web Development',
      issuer: 'LKP Syntax Training Center',
      date: 'Feb 2025'
    },
    {
      name: 'Microsoft Excel Intermediate Certificate',
      issuer: 'Kaweroo Institute',
      date: 'Jun 2024'
    }
  ],

  contact: {
    heading: 'Let’s discuss opportunities in NOC, IT Operations, or Service Assurance.',
    body: 'Open to roles in Telecom Operations, Service Assurance, Production Support, and B2B Application Support.',
    email: 'prasetyadwiagustie@gmail.com',
    phone: '+62 851 5523 9333',
    linkedin: 'https://linkedin.com/in/prasetyadwiagustie',
    github: 'https://github.com/prasetyadwiagustie'
  }
};
