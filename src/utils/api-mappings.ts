const data = {
  leadTime: {
    name: "Lead Time",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/lead-time?slug=",
    requestSuccess: "Viz for Lead Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Lead Time",
    localForageKey: "leadTime",
  },
  activeTasks: {
    name: "Active Tasks",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/active-tasks?slug=",
    requestSuccess: "Viz for Active Tasks is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Active Tasks",
    localForageKey: "activeTasks",
  },
  cycleTime: {
    name: "Cycle Time",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/cycle-time?slug=",
    requestSuccess: "Viz for Cycle Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Cycle Time",
    localForageKey: "cycleTime",
  },
  nikoNiko: {
    name: "Niko Niko",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/niko-niko?slug=",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
    localForageKey: "nikoNiko",
  },
  cfd: {
    name: "CFD",
    endpoint: "https://cfd-srvce.herokuapp.com/csv",
    requestSuccess: "Viz for CFD is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for CFD",
    localForageKey: "cfd",
  },
  wip: {
    name: "WIP",
    endpoint: "https://cfd-srvce.herokuapp.com/csv",
    requestSuccess: "Viz for WIP is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for WIP",
    localForageKey: "wip",
  },
  throughput: {
    name: "Throughput",
    endpoint: "https://mpattan.pythonanywhere.com/throughput?slug=",
    requestSuccess: "Viz for Throughput is ready!",
    requestFail: "An unexpected error occurec while processing the request",
    requestPending: "Generting Viz for Throughput",
    localForageKey: "throughput"
  }
};

export const map = {
  "Lead Time": data.leadTime,
  "Niko Niko": data.nikoNiko,
  "Active Tasks": data.activeTasks,
  CFD: data.cfd,
  "Cycle Time": data.cycleTime,
  WIP: data.wip,
  Throughput: data.throughput
};
