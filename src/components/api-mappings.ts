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
  nikoNiko: {
    name: "Niko Niko",
    endpoint:
      "https://c2wmws294a.execute-api.us-west-2.amazonaws.com/dev/niko-niko?slug=",
    requestSuccess: "Viz for Niko Niko is ready!",
    requestFail: "An unexpected error occured while processing the request",
    requestPending: "Generating Viz for Niko Niko",
    localForageKey: "nikoNiko",
  },
};

export const map = {
  "Lead Time": data.leadTime,
  Happiness: data.nikoNiko,
};
