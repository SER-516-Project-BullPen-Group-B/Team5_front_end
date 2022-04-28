const data = {
  leadTime: {
    name: "Lead Time",
    endpoint: "http://lead-time:8004",
    requestSuccess: "Viz for Lead Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Lead Time",
    localForageKey: "leadTime",
  },
  activeTasks: {
    name: "Active Tasks",
    endpoint: "http://active-tasks:8001",
    requestSuccess: "Viz for Active Tasks is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Active Tasks",
    localForageKey: "activeTasks",
  },
  cycleTime: {
    name: "Cycle Time",
    endpoint: "http://cycle-time:8003",
    requestSuccess: "Viz for Cycle Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Cycle Time",
    localForageKey: "cycleTime",
  },
  nikoNiko: {
    name: "Niko Niko",
    endpoint: "http://niko-niko:8002",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
    localForageKey: "nikoNiko",
  },
  cfd: {
    name: "CFD",
    endpoint: "http://cfd:8006",
    requestSuccess: "Viz for CFD is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for CFD",
    localForageKey: "cfd",
  },
  wip: {
    name: "WIP",
    endpoint: "http://wip:8005",
    requestSuccess: "Viz for WIP is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for WIP",
    localForageKey: "wip",
  },
};

export const map = {
  "Lead Time": data.leadTime,
  "Niko Niko": data.nikoNiko,
  "Active Tasks": data.activeTasks,
  CFD: data.cfd,
  "Cycle Time": data.cycleTime,
  WIP: data.wip,
};
