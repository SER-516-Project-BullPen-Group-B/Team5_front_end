const data = {
  leadTime: {
    name: "Lead Time",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/lead-time?slug=",
    requestSuccess: "Viz for Lead Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Lead Time",
  },
  activeTime: {
    name: "Active Time",
    endpoint: "https://itiparna.pythonanywhere.com/happiness/",
    requestSuccess: "Viz for Active Time is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Active Time",
  },
  nikoNiko: {
    name: "Niko Niko",
    endpoint: "https://itiparna.pythonanywhere.com/happiness/",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
  },
};

export const map = {
  "Lead Time": data.leadTime,
  "Active Time": data.activeTime,
  Happiness: data.nikoNiko,
};
