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
  nikoNiko: {
    name: "Niko Niko",
    endpoint: "https://itiparna.pythonanywhere.com/happiness/",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
    localForageKey: "nikoNiko",
  },
};

export const map = {
  "Lead Time": data.leadTime,
  Happiness: data.nikoNiko,
  "Active Tasks": data.activeTasks,
};
