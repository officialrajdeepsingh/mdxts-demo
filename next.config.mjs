/** @type {import('next').NextConfig} */

import { createMdxtsPlugin } from "mdxts/next";

const withMdxts = createMdxtsPlugin({
  theme: "theme.json",
  gitSource: "git@github.com:officialrajdeepsingh/mdxts-demo",
});

export default withMdxts({});
