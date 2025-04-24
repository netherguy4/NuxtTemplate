// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import customConfig from "./eslint.config";

export default withNuxt().prepend(customConfig);
// Your custom configs here
