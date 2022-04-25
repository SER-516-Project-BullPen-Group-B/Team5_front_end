import {
  XIcon,
  DocumentReportIcon,
  BadgeCheckIcon,
  RefreshIcon
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
      "It is used to identify number of active tasks and number of tasks that are read to be tested per user",
    icon: DocumentReportIcon,
  },
  {
    name: "Scope Change",
    description:
      "It tracks the user stories which are added before an and after planning for each sprint.",
    icon: RefreshIcon,
  },
  {
    name: "Accepte Work Spread",
    description:
      "It helps to check if a user is following a Divide and Conquer approach or collaborating with the team.",
    icon: BadgeCheckIcon,
  },
];

export const metrics = [
  {
    id: 1,
    stat: "stat #1",
    emphasis: "Lorem ipsum",
  },
  {
    id: 2,
    stat: "stat #2",
    emphasis: "Lorem ipsum",
  },
  {
    id: 3,
    stat: "stat #3",
    emphasis: "Lorem ipsum",
  },
  {
    id: 4,
    stat: "stat #4",
    emphasis: "Lorem ipsum",
  },
];
