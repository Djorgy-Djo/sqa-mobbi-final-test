const avarage_load_test = {
  executor: "ramping-vus",
  stages: [
    { duration: "5m", target: 100 },
    { duration: "30m", target: 100 },
    { duration: "5m", target: 0 },
  ],
};

export default avarage_load_test;
