import {
  XIcon,
  DocumentReportIcon,
  BadgeCheckIcon,
  RefreshIcon,
  ClockIcon,
  FolderIcon,
  TrendingUpIcon,
  CollectionIcon,
  BriefcaseIcon,
  EmojiHappyIcon,
  BanIcon,
  PresentationChartBarIcon,
  BellIcon
} from "@heroicons/react/outline";

export const features = [
  {
    name: "Niko Niko",
    description:
      "It provides the happiness factor of each task done by the user.",
    icon: XIcon,
  },
  {
    name: "Active Tasks",
    description:
      "It is used to identify number of active tasks and number of tasks that are read to be tested per user.",
    icon: DocumentReportIcon,
  },
  {
    name: "Scope Change",
    description:
      "It tracks the user stories which are added before an and after planning for each sprint.",
    icon: RefreshIcon,
  },
  {
    name: "Accepted Work Spread",
    description:
      "It helps to check if a user is following a Divide and Conquer approach or collaborating with the team.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Lead Time",
    description:
      "It is a measure of how much time was taken to complete a user story from when the user story was created.",
    icon: ClockIcon,
  },
  {
    name: "Cycle Time",
    description:
      "It is a measure of how much time it took to be “done” with a user story from when it was started to be worked upon.",
    icon: FolderIcon,
  },
  {
    name: "Throughput",
    description:
      "It is a measure of the amount of work done per unit time.",
    icon: TrendingUpIcon,
  },
  {
    name: "Cumulative Flow Diagram (CFD)",
    description: "CFD gives us a quick overview of what is happening in the project. It shows the no. of tasks in New, In Progress, Ready for Test, Done and Blocked states at any given date.",
    icon: CollectionIcon
  },
  {
    name: "Work in Progress (WIP)",
    description: "WIP gives us a quick overview of no. of tasks that are in the In Progress state at any date.",
    icon: BriefcaseIcon
  },
  {
    name: "Impediment Tracker",
    description: "Impediment tracker gives us the real time data of the impediments in project and the duration of these impediments in a timeline graph.",
    icon: BanIcon
  }
];

export const metrics = [
  {
    id: 1,
    icon: TrendingUpIcon,
    emphasis: "Throughput",
  },
  {
    id: 2,
    icon: EmojiHappyIcon,
    emphasis: "Customer Satisfaction",
  },
  {
    id: 3,
    icon: PresentationChartBarIcon,
    emphasis: "Process Improvement",
  },
  {
    id: 4,
    icon: BellIcon,
    emphasis: "Predictability",
  },
];
