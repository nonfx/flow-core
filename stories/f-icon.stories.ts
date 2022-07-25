import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

export default {
  title: "f-icon",
} as Meta;

const Template: Story<unknown> = () => {
  return html`
    <f-icon source="i-user"></f-icon> &nbsp; <f-icon source="i-alarm"></f-icon>
  `;
};

export const basic = Template.bind({});
