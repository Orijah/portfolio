import { createStyleObject } from "@capsizecss/core";
import fontMetricsMono from "@capsizecss/metrics/iBMPlexMono";
import fontMetricsSans from "@capsizecss/metrics/iBMPlexSans";
import styled from "@emotion/styled";

const sizes = [10, 11, 12, 13, 14, 16, 18, 20, 22, 25, 28, 32, 36, 40, 46, 52];

const Text = styled.p(({ size, ...props }) => {
  const pxSize = sizes[typeof size === "number" ? size : 2];

  return {
    color: props.theme[props.color || "normal"],
    fontWeight: props.bold ? "bold" : props.weight,
    textAlign: props.align,
    fontFamily: props.sans
      ? '"IBM Plex Sans", sans-serif, "OpenMoji Color", "Apple Color Emoji"'
      : '"IBM Plex Mono", monospace, "OpenMoji Color", "Apple Color Emoji"',
    ...createStyleObject({
      capHeight: pxSize,
      lineGap: Math.floor(pxSize * (props.tight ? 0.5 : 1.4)),
      fontMetrics: props.sans ? fontMetricsSans : fontMetricsMono,
    }),
  };
});

export default Text;
