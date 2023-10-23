import { Manifest } from "deno-slack-sdk/mod.ts";
import CreateIssueDefinition from "./functions/create_issue/definition.ts";
import CreateNewIssueWorkflow from "./workflows/create_new_issue.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Workflows for GitHub",
  description: "Bringing oft-used GitHub functionality into Slack",
  icon: "assets/default_new_app_icon.png",
  functions: [CreateIssueDefinition],
  workflows: [CreateNewIssueWorkflow],
  outgoingDomains: ["api.github.com"],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
