const soak_test = {
  executor: "ramping-vus",
  stages: [
    { duration: "5m", target: 100 },
    { duration: "30m", target: 100 },
    { duration: "5m", target: 0 },
  ],
};

export default soak_test;
