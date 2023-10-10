import { sleep } from "k6";

//test thresholds
import thresholds from "./config/thresholds.js";

//test scenario
import smoke_test_scenario from "./config/smoke_test_scenario.js";
import average_load_scenario from "./config/average_load_scenario.js";
import stress_test_scenario from "./config/stress_test_scenario.js";
import soak_test_scenario from "./config/soak_test_scenario.js";
import spike_test_scenario from "./config/spike_test_scenario.js";
import breakpoint_test_scenario from "./config/breakpoint_test_scenario.js";

//test group
import apiGroup from "./group/apiGroup.js";

const scenarioList = {
  smoke: smoke_test_scenario,
  avarage: average_load_scenario,
  stress: stress_test_scenario,
  soak: soak_test_scenario,
  spike: spike_test_scenario,
  breakpoint: breakpoint_test_scenario,
};

export const options = {
  thresholds,
  scenarios: {
    current_scenario: scenarioList[__ENV.SCENARIO] || smoke_test_scenario,
  },
};

export default function () {
  apiGroup();

  sleep(1);
}
