import {
  AlertCircle,
  BarChart,
  RefreshCw,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react";

export const steps = [
  {
    id: "process-documentation",
    title: "Process Documentation",
    shortTitle: "PROCESS",
    icon: <Settings className="w-4 h-4" />,
    color: "text-green-500",
  },
  {
    id: "team-scalability",
    title: "Team Scalability",
    shortTitle: "TEAM",
    icon: <Users className="w-4 h-4" />,
    color: "text-blue-500",
  },
  {
    id: "technology-automation",
    title: "Technology & Automation",
    shortTitle: "TECH",
    icon: <BarChart className="w-4 h-4" />,
    color: "text-purple-500",
  },
  {
    id: "compliance-confidence",
    title: "Compliance & Risk",
    shortTitle: "COMPLIANCE",
    icon: <Shield className="w-4 h-4" />,
    color: "text-orange-500",
  },
  {
    id: "performance-data",
    title: "Performance Data",
    shortTitle: "DATA",
    icon: <BarChart className="w-4 h-4" />,
    color: "text-cyan-500",
  },
  {
    id: "operations-review",
    title: "Operations Review",
    shortTitle: "REVIEW",
    icon: <RefreshCw className="w-4 h-4" />,
    color: "text-pink-500",
  },
  {
    id: "urgency-level",
    title: "Urgency Level",
    shortTitle: "URGENCY",
    icon: <AlertCircle className="w-4 h-4" />,
    color: "text-red-500",
  },
  {
    id: "partner-openness",
    title: "Partner Openness",
    shortTitle: "PARTNER",
    icon: <User className="w-4 h-4" />,
    color: "text-indigo-500",
  },
];

export const questions = [
  {
    id: "process-documentation",
    question:
      "How clearly documented and consistent are your key processes today?",
    options: [
      {
        value: "fully-documented",
        label: "Fully documented, updated, and followed by all teams.",
        score: 3,
        color: "green",
      },
      {
        value: "documented-inconsistent",
        label: "Documented but not consistently followed or updated.",
        score: 2,
        color: "yellow",
      },
      {
        value: "ad-hoc-documentation",
        label: "Some ad hoc documentation exists.",
        score: 2,
        color: "yellow",
      },
      {
        value: "not-documented",
        label: "Not documented - knowledge is mostly tribal.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "team-scalability",
    question:
      "How prepared is your team to handle more work or sudden changes in demand?",
    options: [
      {
        value: "extra-capacity",
        label: "We have extra capacity and can flex easily.",
        score: 3,
        color: "green",
      },
      {
        value: "handle-growth",
        label: "We handle growth but feel stretched.",
        score: 2,
        color: "yellow",
      },
      {
        value: "at-capacity",
        label: "We're at capacity — new demands strain us.",
        score: 1,
        color: "red",
      },
      {
        value: "constantly-scramble",
        label: "We constantly scramble or hire temp help.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "technology-automation",
    question:
      "How effectively are you using technology and automation to remove manual work?",
    options: [
      {
        value: "mostly-automated",
        label: "Most routine tasks are automated — minimal manual work.",
        score: 3,
        color: "green",
      },
      {
        value: "some-automation",
        label: "Some automation, but still too many manual tasks.",
        score: 2,
        color: "yellow",
      },
      {
        value: "mostly-manual",
        label: "Mostly manual processes.",
        score: 1,
        color: "red",
      },
      {
        value: "no-automation",
        label: "No meaningful automation yet.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "compliance-confidence",
    question:
      "How confident are you in your compliance, accuracy, and risk controls (E.g.: F&A, payroll, tax, reporting, etc.)?",
    options: [
      {
        value: "highly-confident",
        label:
          "Highly confident — robust controls, checks and audits in place.",
        score: 3,
        color: "green",
      },
      {
        value: "mostly-confident",
        label: "Mostly confident — minor issues sometimes.",
        score: 2,
        color: "yellow",
      },
      {
        value: "occasional-errors",
        label: "Occasional errors, compliance, and/or audit gaps.",
        score: 1,
        color: "red",
      },
      {
        value: "low-confidence",
        label: "Low confidence — errors happen and we fix them reactively.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "performance-data",
    question:
      "How quickly can you see accurate performance data to make decisions?",
    options: [
      {
        value: "real-time",
        label: "Real-time dashboards and clear KPIs.",
        score: 3,
        color: "green",
      },
      {
        value: "regular-reports",
        label: "Regular reports but sometimes outdated.",
        score: 2,
        color: "yellow",
      },
      {
        value: "manual-slow",
        label: "Mostly manual, slow reports.",
        score: 1,
        color: "red",
      },
      {
        value: "no-reliable-data",
        label: "No reliable performance data.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "operations-review",
    question:
      "When did you last review or optimize your back-office operations?",
    options: [
      {
        value: "within-year",
        label: "Within the past year.",
        score: 3,
        color: "green",
      },
      {
        value: "one-two-years",
        label: "1–2 years ago.",
        score: 2,
        color: "yellow",
      },
      {
        value: "over-three-years",
        label: "Over 3 years ago.",
        score: 1,
        color: "red",
      },
      {
        value: "never",
        label: "Never — still using the original setup.",
        score: 1,
        color: "red",
      },
    ],
  },
  {
    id: "urgency-level",
    question:
      "How urgent is it for you to fix or improve your back-office operations?",
    options: [
      {
        value: "very-urgent",
        label: "Very urgent — it slows us down today.",
        score: 1,
        color: "red",
      },
      {
        value: "somewhat-urgent",
        label: "Somewhat urgent — limits us but manageable.",
        score: 2,
        color: "yellow",
      },
      {
        value: "not-urgent",
        label: "Not urgent — we're fine for now.",
        score: 3,
        color: "green",
      },
    ],
  },
  {
    id: "partner-openness",
    question:
      "Would you consider a trusted external partner to help solve this?",
    options: [
      {
        value: "yes-definitely",
        label: "Yes, definitely.",
        score: 3,
        color: "green",
      },
      {
        value: "maybe-right-fit",
        label: "Maybe — if it's the right fit.",
        score: 2,
        color: "yellow",
      },
      {
        value: "not-at-this-time",
        label: "Not at this time.",
        score: 1,
        color: "red",
      },
    ],
  },
];
