/*import { Project } from "slack-cloud-sdk/mod.ts";
import { CreateIncident } from "./functions/create_incident.ts";
import { NewIncidentWorkflow } from "./workflows/new_incident.ts";
import { NewIncidentShortcut } from "./triggers/new_incident_shortcut.ts";
// import the Reversals table and include it in the `tables` array
// below to store data via the Tables API
// import { Reversals } from "./tables/reversals.ts";

Project({
  name: "create-incident",
  description:
    "A demo showing how to use Slack workflows, functions, and triggers",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [CreateIncident],
  workflows: [NewIncidentWorkflow],
  triggers: [NewIncidentShortcut],
  tables: [],
  outgoingDomains: [],
});
*/

import { Project } from "slack-cloud-sdk/mod.ts";
import { CreateIncident } from "./functions/create_incident.ts";
import { NewIncidentWorkflow } from "./workflows/new_incident.ts";
import { NewIncidentShortcut } from "./triggers/new_incident_shortcut.ts";

Project({
  name: "Create a new Incident",
  description:
    "An app for incident management. Create new incidents, spin up new channels, and post incident details for engineering teams to assemble.",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public", "groups:write"],
  functions: [CreateIncident],
  workflows: [NewIncidentWorkflow],
  triggers: [NewIncidentShortcut],
  tables: [],
  outgoingDomains: [],
});
