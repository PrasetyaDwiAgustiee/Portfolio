import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    brand: 'Prasetya Dwi Agustie',
    name: 'Prasetya Dwi Agustie',
    role: 'Telecom Operations & Integration Professional',
    headline: 'Keeping Enterprise Systems Running at Scale.',
    subheadline: 'Telecom Operations, Incident Management, Service Assurance, and Enterprise Integration Professional with 5+ years of experience supporting mission-critical systems.',
    availability: 'Available for Senior & Lead Roles',
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
      'I operate at the intersection of telecom service assurance, enterprise application support, and integration reliability. My work focuses on keeping business-critical systems stable under real operational pressure: incidents, escalations, releases, monitoring events, and customer-facing service impact.',
      'Across telecom and B2B environments, I have supported 24/7 operations, coordinated cross-functional resolution, validated releases, monitored infrastructure signals, and translated technical conditions into clear operational reporting for leaders.'
    ],
    stats: [
      { value: '99.9%', label: 'Operational Stability' },
      { value: '24/7', label: 'Critical Support Coverage' },
      { value: '5+ Years', label: 'Telecom & IT Operations' },
      { value: 'Multi', label: 'Enterprise Platforms' }
    ]
  },

  achievements: [
    { 
      metric: '25%', 
      title: 'Reduced MTTR Flow',
      description: 'Strengthened escalation flow, ownership clarity, and monitoring-based response to reduce resolution friction in high-pressure telecom operations.' 
    },
    { 
      metric: '24/7', 
      title: 'Nationwide Telecom Operations',
      description: 'Worked across always-on operational environments covering customer complaints, transaction services, monitoring alerts, and service continuity.' 
    },
    { 
      metric: '98%+', 
      title: 'SLA-focused Handling',
      description: 'Maintained structured ticket follow-up, daily reporting, and cross-team coordination to protect service reliability and customer experience.' 
    },
    { 
      metric: '2h', 
      title: 'Executive Reporting Cycle',
      description: 'Produced recurring system health reports and operational summaries to support faster decision-making and reduce repeated service issues.' 
    }
  ],

  experience: [
    {
      company: 'PT XLSmart Telecom',
      position: 'IT Service Operation',
      period: 'Apr 2025 – Present',
      impact: 'Supports digital service operations and customer-facing enterprise systems in a major telecom environment.',
      responsibilities: [
        'Manage and follow up customer complaint tickets for digital services and transaction-related issues.',
        'Coordinate cross-functional teams for complex incident resolution and service restoration.',
        'Prepare daily operational reports covering incidents, service requests, and resolution effectiveness.'
      ],
      technologies: ['ServiceNow', 'Ticketing System', 'Excel Reporting', 'SLA Management']
    },
    {
      company: 'PT Smartfren Tbk',
      position: 'IT Operation Center',
      period: 'Mar 2022 – Apr 2025',
      impact: 'Contributed to 24/7 service assurance for critical telecom transactions and infrastructure monitoring.',
      responsibilities: [
        'Monitored service availability and critical transactions including Top Up, Vouchers, MDN, and system updates.',
        'Delivered bi-hourly real-time reports with operational analysis for technical and management stakeholders.',
        'Handled incident response, escalation, and complaint operations in a high-availability telecom setting.'
      ],
      technologies: ['Zabbix', 'Nagios', 'Grafana', 'ServiceNow', 'Excel Macro']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Project Lead',
      period: 'Jan 2022 – Mar 2022',
      impact: 'Led rollout and stabilization support for Distributor Management System business workflows.',
      responsibilities: [
        'Managed UAT, BAU releases, and implementation coordination for distributor-facing systems.',
        'Coordinated developers, business users, and support teams to resolve release issues within SLA windows.',
        'Improved release clarity through structured validation, issue tracking, and handover discipline.'
      ],
      technologies: ['DMS', 'UAT', 'ServiceNow', 'Excel', 'Release Support']
    },
    {
      company: 'PT Pratesis',
      position: 'B2B Application Support',
      period: 'Jan 2021 – Dec 2021',
      impact: 'Supported production applications and vendor escalations for B2B operational continuity.',
      responsibilities: [
        'Analyzed application issues through logs, database checks, validation, and repeatable troubleshooting.',
        'Supported helpdesk escalation paths and coordinated with third-party vendors for system recovery.',
        'Documented workarounds and resolution patterns to reduce repeated operational friction.'
      ],
      technologies: ['SQL', 'Debugging', 'Vendor Management', 'System Recovery']
    },
    {
      company: 'PT Pratesis',
      position: 'CC & Complain Master (COSTER)',
      period: 'Apr 2020 – Dec 2020',
      impact: 'Handled client-facing complaint workflows with SLA accountability and structured reporting.',
      responsibilities: [
        'Managed complaint tickets from intake through escalation and closure.',
        'Maintained SLA-oriented follow-up with internal technical teams.',
        'Produced daily reporting to improve operational visibility and service accountability.'
      ],
      technologies: ['SLA Tracking', 'Escalation', 'Reporting', 'Customer Operations']
    }
  ],

  competencies: [
    { category: 'Operations', level: 92, items: ['24/7 Support', 'Service Continuity', 'Operational Handover'] },
    { category: 'Incident Management', level: 90, items: ['Triage', 'Escalation', 'MTTR Discipline'] },
    { category: 'Enterprise Integration', level: 84, items: ['UAT', 'Release Support', 'System Handoff'] },
    { category: 'Database', level: 82, items: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle', 'MS SQL Server'] },
    { category: 'Monitoring', level: 88, items: ['Zabbix', 'Nagios', 'Grafana', 'Availability Signals'] },
    { category: 'Reporting', level: 86, items: ['Executive Reports', 'Excel Macro', 'Trend Analysis'] },
    { category: 'Automation', level: 74, items: ['Python', 'PHP', 'Workflow Support'] },
    { category: 'Service Assurance', level: 90, items: ['SLA', 'Complaint Ops', 'Root-cause Follow-up'] }
  ],

  caseStudies: [
    {
      title: 'Mission-Critical Telecom Incident Control',
      situation: 'Customer-facing telecom services require rapid response, ownership clarity, and reliable escalation during transaction or service disruptions.',
      challenge: 'Incidents can affect complaints, top-up transactions, voucher services, and subscriber workflows if signals are not acted upon quickly.',
      actions: [
        'Monitored operational signals through dedicated tools and recurring system health checks.',
        'Coordinated escalation between operations, support, vendors, and development teams.',
        'Delivered structured updates and follow-up reports for stakeholders.'
      ],
      outcome: 'Improved operational clarity, faster coordination, and stronger SLA discipline during high-priority service issues.',
      businessValue: 'Reduced ambiguity during incidents and protected customer experience in always-on telecom environments.'
    },
    {
      title: 'Enterprise Integration & Release Readiness',
      situation: 'Distributor-facing business systems required implementation support, user validation, and production stabilization.',
      challenge: 'Release windows needed coordination across users, development teams, vendors, and support groups while minimizing business disruption.',
      actions: [
        'Led UAT preparation, release validation, and issue tracking.',
        'Coordinated fixes and handovers across technical and business teams.',
        'Translated operational findings into actionable support notes.'
      ],
      outcome: 'More controlled releases, improved support readiness, and clearer ownership for production issues.',
      businessValue: 'Reduced release risk and improved confidence in distributor database workflow continuity.'
    },
    {
      title: 'Operational Reporting Control Loop',
      situation: 'Technical managers needed recurring visibility into incidents, service health, and repeated failure patterns.',
      challenge: 'Without clear reporting rhythm, teams risk delayed decisions and repeated unresolved operational issues.',
      actions: [
        'Produced scheduled operational reports and incident summaries.',
        'Tracked ticket patterns, escalation status, and service request effectiveness.',
        'Presented concise operational signals for faster decision-making.'
      ],
      outcome: 'Improved visibility into operational status, incident trends, and follow-up priorities.',
      businessValue: 'Enabled leaders to act on reliable operational intelligence rather than fragmented updates.'
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
    heading: 'Let’s discuss reliable operations, integration support, or database-focused roles.',
    body: 'Open to opportunities across IT Operations, Database Administration, Web Development, Enterprise Support, and Integration roles.',
    email: 'prasetyadwiagustie@gmail.com',
    phone: '+62 851 5523 9333',
    linkedin: 'https://linkedin.com/in/prasetyadwiagustie',
    github: 'https://github.com/prasetyadwiagustie'
  }
};
