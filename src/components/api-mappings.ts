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
};

export const map = {
  "Lead Time": data.leadTime,
  Happiness: data.nikoNiko,
  "Active Tasks": data.activeTasks,
  CFD: data.cfd,
  "Cycle Time": data.cycleTime,
};
