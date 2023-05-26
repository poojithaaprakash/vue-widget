
import type { Meta, StoryObj } from "@storybook/vue3";

import SkeletonCard from "./SkeletonCard.vue";

const meta: Meta<typeof SkeletonCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SkeletonCard",
  component: SkeletonCard,
};

export default meta;
type Story = StoryObj<typeof SkeletonCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { SkeletonCard },
    setup() {
      return { args };
    },
    template: '<SkeletonCard v-bind="args" />',
  }),
  args: {
    mode: true,
  },
};
