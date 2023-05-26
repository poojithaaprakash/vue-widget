
import type { Meta, StoryObj } from "@storybook/vue3";

import skeletonCard from "./skeletonCard.vue";

const meta: Meta<typeof skeletonCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "skeletonCard",
  component: skeletonCard,
};

export default meta;
type Story = StoryObj<typeof skeletonCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { skeletonCard },
    setup() {
      return { args };
    },
    template: '<skeletonCard v-bind="args" />',
  }),
  args: {
    mode: true,
  },
};
