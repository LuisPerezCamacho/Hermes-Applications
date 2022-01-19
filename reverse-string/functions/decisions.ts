//Evaluates a Boolean field in a Workflow
import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const UserDecision = DefineFunction(
  "userdecision",
  {
    title: "User decision",
    description: "Returns user decision as a string",
    input_parameters: {
      required: ["decisionBoolean"],
      properties: {
        decisionBoolean: {
          type: Schema.types.boolean,
          description: "The boolean user decision",
        },
      },
    },
    output_parameters: {
      required: ["userDecisionString"],
      properties: {
        userDecisionString: {
          type: Schema.types.string,
          description: "A string with the user decision",
        },
      },
    },
  },
  async ({ inputs, env }) => {
    console.log(`Building answer for decision ${inputs.decisionBoolean}.`);
    console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

    const userDecisionString = (inputs.decisionBoolean)
      ? "Your decision is YES"
      : "Your decision is NO";
    return await {
      outputs: { userDecisionString },
    };
  },
);
