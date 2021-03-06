const data = {
  leadTime: {
    name: "Lead Time",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/lead-time?slug=",
    requestSuccess: "Viz for Lead Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Lead Time",
    localForageKey: "leadTime",
    route: "/lead-time",
  },
  activeTasks: {
    name: "Active Tasks",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/active-tasks?slug=",
    requestSuccess: "Viz for Active Tasks is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Active Tasks",
    localForageKey: "activeTasks",
    route: "/active-tasks",
  },
  cycleTime: {
    name: "Cycle Time",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/cycle-time?slug=",
    requestSuccess: "Viz for Cycle Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Cycle Time",
    localForageKey: "cycleTime",
    route: "/cycle-time",
  },
  nikoNiko: {
    name: "Niko Niko",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/niko-niko?slug=",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
    localForageKey: "nikoNiko",
    route: "/niko-niko",
  },
  cfd: {
    name: "CFD",
    endpoint: "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/cfd",
    requestSuccess: "Viz for CFD is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for CFD",
    localForageKey: "cfd",
    route: "/cummulative-flow-diagram",
  },
  wip: {
    name: "WIP",
    endpoint: "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/cfd",
    requestSuccess: "Viz for WIP is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for WIP",
    localForageKey: "wip",
    route: "/work-in-progress",
  },
  throughput: {
    name: "Throughput",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/throughput?slug=",
    requestSuccess: "Viz for Throughput is ready!",
    requestFail: "An unexpected error occurec while processing the request",
    requestPending: "Generting Viz for Throughput",
    localForageKey: "throughput",
    route: "/throughput",
  },
  acceptedWorkSpread: {
    name: "Accepted Work Spread",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/accepted-workspread?slug=",
    requestSuccess: "Viz for Accepted Work Spread is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Accepted Work Spread",
    localForageKey: "acceptedWorkSpread",
    route: "/accepted-work-spread",
  },
  impediment: {
    name: "Impediment Tracker",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/impediment-tracker?slug=",
    requestSuccess: "Viz for Impediment Trakcer is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Impediment Tracker",
    localForageKey: "impediment",
    route: "/impediment-tracker",
  },
  scopeChange: {
    name: "Scope Change",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/scope-change?slug=",
    requestSuccess: "Viz for Scope Change is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Scope Change",
    localForageKey: "scopeChange",
    route: "/scope-change",
  },
};

export const map = {
  "Lead Time": data.leadTime,
  "Niko Niko": data.nikoNiko,
  "Active Tasks": data.activeTasks,
  CFD: data.cfd,
  "Cycle Time": data.cycleTime,
  WIP: data.wip,
  "Impediment Tracker": data.impediment,
  Throughput: data.throughput,
  "Accepted Work Spread": data.acceptedWorkSpread,
  "Scope Change": data.scopeChange,
};
