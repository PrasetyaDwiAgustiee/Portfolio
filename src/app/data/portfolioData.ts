import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    brand: 'Prasetya Dwi Agustie',
    name: 'Prasetya Dwi Agustie',
    role: 'Telecom Operations & Enterprise Systems Professional',
    headline: 'Ensuring stability for mission-critical telecom services and enterprise platforms.',
    subheadline: 'Telecom Operations & Enterprise Systems Professional with hands-on experience developing and supporting internal business-critical applications using ASP.NET, Oracle Database, IIS, SQL, and Service Assurance processes.',
    availability: 'Available for NOC, Support, & Ops Roles',
    location: 'Jakarta, Indonesia',
    yearsExperience: '5+ Years',
    systemsSupported: 'Telecom & Enterprise Platforms',
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
      'I oversee operational stability and application reliability for critical telecom services and internal enterprise systems. My background spans hands-on application support, database troubleshooting, and developer-operational coordination inside network operations centers (NOC).',
      'Equally active in both operations and support engineering, I have supported internal tools and customer-facing prepaid transaction paths (Top-Ups, Voucher distributions, MDN tracking). I focus on designing and deploying service assurance tooling, managing release rollouts, querying relational databases, and driving SLA compliance during incidents.'
    ],
    stats: [
      { value: 'SLA', label: 'Service Assurance Focus' },
      { value: '24/7', label: 'Operations Coverage' },
      { value: '5+ Yrs', label: 'Telecom & B2B Operations' },
      { value: 'Multi', label: 'Vendor Systems Integrated' }
    ]
  },

  achievements: [
    {
      metric: 'Apps',
      title: 'Enterprise Applications',
      description: 'Developed and supported internal operational systems used for telecom service assurance, ticket management, SLA monitoring, and subscriber validation.'
    },
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
    }
  ],

  experience: [
    {
      company: 'PT XLSmart Telecom',
      position: 'IT Service Operation',
      period: 'Apr 2025 – Present',
      impact: 'Oversees day-to-day service desk operations, incident ticket lifecycles, and internal operational tooling development.',
      responsibilities: [
        'Developed and maintained internal operational applications using ASP.NET Web Forms and Oracle Database.',
        'Built dashboards supporting ticket monitoring, SLA compliance tracking, and service assurance processes.',
        'Performed production support and application troubleshooting in enterprise environments.',
        'Collaborated with NOC, Service Assurance, IT Operations, and Business teams.',
        'Managed deployment and maintenance through Microsoft IIS.',
        'Created SQL and PL/SQL queries for reporting, validation, and operational analytics.'
      ],
      technologies: ['ASP.NET Web Forms', 'Oracle Database', 'IIS', 'SQL/PL-SQL', 'ServiceNow', 'SLA Tracking']
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
      category: 'Telecom Operations',
      level: 100,
      items: ['Service Assurance', 'NOC Shift Support', 'Incident Management', 'Problem Management', 'Ticket Lifecycle Management', 'SLA Monitoring']
    },
    {
      category: 'Enterprise Support',
      level: 100,
      items: ['Production Support', 'Application Support', 'Root Cause Analysis', 'Performance Monitoring', 'Operational Handovers']
    },
    {
      category: 'Database & SQL Development',
      level: 100,
      items: ['Oracle Database', 'SQL Development', 'PL/SQL', 'Log Tracing', 'Data Verification']
    },
    {
      category: 'Enterprise Development & Integration',
      level: 100,
      items: ['ASP.NET Web Forms', 'C#', 'Microsoft IIS', 'REST API Integration', 'System Integration']
    },
    {
      category: 'Tools & Dashboarding',
      level: 100,
      items: ['ServiceNow', 'Jira Service Desk', 'Zabbix / Nagios', 'Grafana Alerts', 'Daily Status Reports']
    }
  ],

  caseStudies: [
    {
      title: 'Enterprise IT Service Desk & SLA Monitoring Platform',
      situation: 'Designed and developed an internal operational platform used by telecom support teams for ticket monitoring, SLA management, service assurance activities, subscriber validation, and operational reporting.',
      challenge: 'Operations teams were using multiple disconnected systems to investigate customer complaints, service tickets, subscriber information, and SLA status. This resulted in longer investigation times and reduced operational visibility.',
      actions: [
        'Designed database integration with Oracle Database and created SQL and PL/SQL queries for data validation.',
        'Developed ASP.NET Web Forms modules for trouble ticket monitoring and subscriber lookup.',
        'Built dashboard modules for SLA compliance tracking and ticket aging visualization.',
        'Implemented REST API integration to pull live subscription status and validate price plans.',
        'Supported live production deployment and server configuration on Microsoft IIS.'
      ],
      outcome: 'Consolidated support cockpit resulting in faster ticket investigations, automated dashboard generation, and improved SLA compliance tracking.',
      businessValue: 'Reduced manual operational effort and increased service assurance team productivity.'
    },
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

  techStack: {
    title: 'Technology Stack',
    subtitle: 'Technologies, platforms, and tools used throughout telecom operations, service assurance, and enterprise application development.',
    groups: [
      {
        category: 'Backend',
        items: ['C#', 'ASP.NET Web Forms', 'REST APIs']
      },
      {
        category: 'Frontend',
        items: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery']
      },
      {
        category: 'Database',
        items: ['Oracle Database', 'SQL', 'PL/SQL']
      },
      {
        category: 'Infrastructure',
        items: ['Microsoft IIS', 'Windows Server']
      },
      {
        category: 'Operations',
        items: ['Incident Management', 'Service Assurance', 'SLA Monitoring', 'Ticket Management']
      },
      {
        category: 'Enterprise Tools',
        items: ['Service Desk Systems', 'Operational Dashboards', 'Reporting Platforms']
      }
    ]
  },

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
