/*import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "../functions/reverse.ts";

export const ReverseEchoString = DefineWorkflow("reverse_echo", {
  title: "Reverse, echo",
  description: "Reverses a string, echos it out",
  input_parameters: {
    required: ["stringToReverse", "channel"],
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to echo the reversed string",
      },
    },
  },
});

const reverseStep = ReverseEchoString.addStep(ReverseString, {
  stringToReverse: ReverseEchoString.inputs.stringToReverse,
});

ReverseEchoString.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ReverseEchoString.inputs.channel,
  message: `Your string in reverse is *${reverseStep.outputs.reverseString}*`,
});
*/

import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "../functions/reverse.ts";
import { UserDecision } from "../functions/decisions.ts";

export const ReverseEchoString = DefineWorkflow("reverse_echo", {
  title: "Reverse, echo",
  description: "Reverses a string, echos it out",
  input_parameters: {
    required: ["stringToReverse", "channel"],
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to echo the reversed string",
      },
      decisionBoolean: {
        type: Schema.types.boolean,
        description: "Make a decision.",
        default: false,
      },
    },
  },
});

const decisionStep = ReverseEchoString.addStep(UserDecision, {
  decisionBoolean: ReverseEchoString.inputs.decisionBoolean,
});

ReverseEchoString.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ReverseEchoString.inputs.channel,
  message: decisionStep.outputs.userDecisionString,
});

const reverseStep = ReverseEchoString.addStep(ReverseString, {
  stringToReverse: ReverseEchoString.inputs.stringToReverse,
});

ReverseEchoString.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ReverseEchoString.inputs.channel,
  message: `Your string in reverse is *${reverseStep.outputs.reverseString}*`,
});
