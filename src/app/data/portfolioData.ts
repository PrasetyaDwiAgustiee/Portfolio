import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    brand: 'Prasetya Dwi Agustie',
    name: 'Prasetya Dwi Agustie',
    role: 'Telecom Operations & Enterprise Systems Professional',
    headline: 'IT Service Operations & Enterprise Systems Engineer',
    subheadline: 'Specializing in Telecom Platforms, Production Support, SQL Analytics and Internal Tools Development.',
    availability: 'Open to IT Service Operations, Enterprise Support, and Telecom Technology Roles',
    location: 'Depok, Indonesia',
    yearsExperience: '5+ Years',
    systemsSupported: 'Telecom & Enterprise Platforms',
    email: 'prasetyadwiagustie@gmail.com',
    phone: '+62 851 5523 9333',
    phoneHref: '+6285155239333',
    linkedin: 'https://linkedin.com/in/prasetyadwiagustie',
    github: 'https://github.com/prasetyadwiagustie',
    image: 'assets/portrait2.png',
    fallbackImage: 'assets/portrait2.svg',
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
    'IT Service Operations and Service Assurance professional with 5+ years of experience supporting telecom and enterprise systems in high-availability environments. Experienced in incident management, production support, root cause investigation, SLA monitoring, and operational service delivery.',

    'Currently responsible for maintaining internal support platforms, developing operational tools, performing SQL and PL/SQL analysis, and supporting critical business services. Combining operational expertise with application development capabilities to improve service reliability, operational efficiency, and issue resolution processes.'
  ],
    stats: [
      { value: '5+ Yrs', label: 'IT Service Operations' },
      { value: '24/7', label: 'Production Support' },
      { value: 'Oracle', label: 'SQL & PL/SQL Analytics' },
      { value: 'ASP.NET', label: 'Internal Tools Development' }
    ]
  },

  achievements: [
    {
      metric: 'Tools',
      title: 'Internal Tools Development',
      description: 'Built internal operational applications that simplified ticket investigations, subscriber validation, SLA tracking, and reporting activities.'
    },
    {
      metric: 'Support',
      title: 'Service Assurance Support',
      description: 'Supported telecom transaction services through incident investigation, service monitoring, and escalation coordination.'
    },
    {
      metric: 'Process',
      title: 'Operational Process Improvement',
      description: 'Consolidated multiple operational checks into a single dashboard, making investigations easier for support teams.'
    },
    {
      metric: 'Ops',
      title: 'Production Support',
      description: 'Maintained business-critical applications and supported issue resolution in production environments.'
    }
  ],

  experience: [
    {
      company: 'PT XLSmart Telecom',
      position: 'IT Service Operation',
      period: 'Apr 2025 – Present',
      impact: 'Supported operational continuity of telecom services through production support, SQL investigation, and development of internal operational tools.',
      responsibilities: [
        'Investigated production incidents affecting telecom services and application stability.',
        'Developed and maintained internal operational applications using ASP.NET Web Forms and Oracle Database.',
        'Built dashboards supporting ticket monitoring, SLA compliance tracking, and service assurance processes.',
        'Performed production support and application troubleshooting in enterprise environments.',
        'Collaborated with NOC, Service Assurance, IT Operations, and Business teams.',
        'Managed deployment and maintenance through Microsoft IIS.',
        'Created SQL and PL/SQL queries for reporting, validation, and operational analytics.'
      ],
      technologies: ['ASP.NET Web Forms', 'Oracle Database', 'Microsoft IIS', 'SQL/PL-SQL', 'ServiceNow', 'SLA Tracking']
    },
    {
      company: 'PT Smartfren Tbk',
      position: 'IT Operation Center',
      period: 'Mar 2022 – Apr 2025',
      impact: 'Provided shift-based service monitoring and alert investigations for core transaction platforms.',
      responsibilities: [
        'Monitored transaction logs for top-up services, data voucher activations, and MDN registrations.',
        'Investigated system alerts from Zabbix and Nagios, creating tickets and notifying engineering groups.',
        'Prepared daily and bi-hourly system health logs for technical operations management review.'
      ],
      technologies: ['Zabbix', 'Nagios', 'Grafana', 'ServiceNow', 'System Monitoring']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Project Lead',
      period: 'Jan 2022 – Mar 2022',
      impact: 'Coordinated user acceptance checks and post-release support for distributor systems.',
      responsibilities: [
        'Supported pre-release user acceptance testing (UAT) checklists and validated production build stability.',
        'Coordinated release timelines and daily status updates with developers and third-party vendors.',
        'Wrote technical support transition notes and system checks for incoming operational teams.'
      ],
      technologies: ['UAT Coordination', 'DMS', 'Release Management', 'Support Handover']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Application Support',
      period: 'Jan 2021 – Dec 2021',
      impact: 'Resolved database questions and level-2 system queries for distributors.',
      responsibilities: [
        'Troubleshot system database errors using custom SQL queries and log analysis.',
        'Escalated application bugs to software suppliers and verified hotfix updates in test environments.',
        'Updated internal documentation detailing common database workarounds and recovery procedures.'
      ],
      technologies: ['SQL Troubleshooting', 'Log Analysis', 'Vendor Support Escalation']
    },
    {
      company: 'PT Pratesis',
      position: 'CC & Complain Master (COSTER)',
      period: 'Apr 2020 – Dec 2020',
      impact: 'Tracked customer service tickets and managed the daily complaint log.',
      responsibilities: [
        'Logged, tracked, and updated support cases throughout their operational lifecycle.',
        'Monitored ticket progress to prevent SLA violations, checking status updates with technical groups.',
        'Prepared operational spreadsheets summarizing ticket resolution rates and outstanding cases.'
      ],
      technologies: ['SLA Tracking', 'Ticket Lifecycle', 'Operations Support']
    }
  ],

  competencies: [
    {
      category: 'Operations & Service Assurance',
      level: 95,
      items: ['Service Assurance', 'NOC Shift Support', 'Incident Management', 'Problem Management', 'Ticket Lifecycle Management', 'SLA Monitoring']
    },
    {
      category: 'Enterprise Support',
      level: 90,
      items: ['Production Support', 'Application Support', 'Root Cause Analysis', 'Performance Monitoring', 'Operational Handovers']
    },
    {
      category: 'Database & SQL Development',
      level: 90,
      items: ['Oracle Database', 'SQL Development', 'PL/SQL', 'Log Tracing', 'Data Verification']
    },
    {
      category: 'Tools & Dashboarding',
      level: 85,
      items: ['ServiceNow', 'Zabbix / Nagios', 'Grafana Alerts', 'Daily Status Reports']
    }
  ],

  caseStudies: [
    {
      title: 'Enterprise IT Service Desk & SLA Monitoring Platform',
      situation: 'Operational teams relied on multiple systems to investigate customer complaints, review subscriber information, monitor SLA status, and track ticket progress.',
      challenge: 'Switching between disconnected systems increased ticket investigation times and reduced visibility into overall SLA compliance.',
      actions: [
        'Designed and developed an internal ASP.NET Web Forms application integrated with an Oracle Database.',
        'Built dashboard modules for SLA tracking, ticket aging views, and real-time incident queues.',
        'Developed subscriber lookup and price plan validation features querying core database tables.',
        'Deployed and maintained the web application on Microsoft IIS servers.',
        'Wrote custom SQL and PL/SQL procedures for automated operational reporting.'
      ],
      outcome: 'Support teams gained a centralized operational dashboard that simplified investigations and improved visibility into ticket status and SLA compliance.',
      businessValue: 'Centralized tools reduced manual status tracking steps, faster subscriber lookups, and improved support team daily productivity.'
    },
    {
      title: 'Telecom Transaction Outage Investigation.',
      situation: 'Prepaid recharge transaction rates dropped suddenly during a high-traffic hour, stopping mobile applications and validation services.',
      challenge: 'Customer complaint tickets spiked. We needed to isolate the transaction bottleneck quickly without disrupting active system processes.',
      actions: [
        'Checked database locks and transaction execution queues using Grafana dashboards.',
        'Identified database pool limit exhaustion, escalated the block to database administrators, and redirected transaction queues to a standby service node.',
        'Managed alert status logs and provided progress updates to internal client support teams.'
      ],
      outcome: 'Restored transaction processing and resolved connection limits, clearing the pending transaction queues.',
      businessValue: 'Worked with database administrators and operations teams to restore transaction processing and clear pending transaction queues.'
    },
    {
      title: 'B2B Release Validation',
      situation: 'A database schema update was scheduled for deployment across regional nodes of a Distributor Management System (DMS).',
      challenge: 'Deployment checks had to be completed within a short overnight maintenance window, leaving no room for database locks past start of business.',
      actions: [
        'Ran pre-release verification scripts and coordinated checks between testing teams and external developers.',
        'Monitored migration locks and coordinated with third-party software developers when schema deployment slowed down.',
        'Ran post-migration data queries to confirm regional node synchronization.'
      ],
      outcome: 'Completed database release and verified system status within the scheduled window.',
      businessValue: 'Ensured distributor platform was available before daily business operations started.'
    },
    {
      title: 'Improving Shift Handover and Status Reporting',
      situation: 'Open incident tickets and pending vendor actions were tracked informally during shift handovers, causing communication gaps.',
      challenge: 'Critical issues (recharge failures, voucher validation alerts) required continuous tracking across shift rotations.',
      actions: [
        'Created a standardized shift handover template based on open ServiceNow ticket status.',
        'Set up validation logs to record core system health checks every two hours.',
        'Conducted structured shift-to-shift reviews to hand over pending logs and active tickets.'
      ],
      outcome: 'Established a consistent daily reporting routine with clear ownership of open incidents.',
      businessValue: 'Reduced ticket handover friction and ensured continuous tracking of pending vendor hotfixes.'
    }
  ],

  techStack: {
    title: 'Technologies & Platforms',
    subtitle: 'Technologies, platforms, and tools used throughout telecom operations, service assurance, and enterprise application development.',
    groups: [
      {
        category: 'Programming',
        items: ['C#', 'JavaScript', 'SQL', 'PL/SQL']
      },
      {
        category: 'Frontend',
        items: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery']
      },
      {
        category: 'Backend',
        items: ['ASP.NET Web Forms', 'REST API']
      },
      {
        category: 'Database',
        items: ['Oracle Database', 'SQL Optimization', 'PL/SQL']
      },
      {
        category: 'Infrastructure',
        items: ['Microsoft IIS', 'Windows Server']
      },
      {
        category: 'Operations',
        items: ['Incident Management', 'Problem Management', 'Service Assurance', 'SLA Monitoring', 'Ticket Management', 'Production Support']
      },
      {
        category: 'Monitoring & Reporting',
        items: ['Operational Dashboards', 'Ticket Tracking', 'Reporting Systems', 'Performance Monitoring']
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

export {};
