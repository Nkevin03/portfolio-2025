import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-primary_green/80 text-6xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2  className="  font-bold text-primary_green pt-10">{children}</h2>
    ),

    p: ({ children }) => (
      <p className="text-white mt-10">{children}</p>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        width={1000}
        height={1000}
        className="rounded-lg md:my-10 my-5 shadow-lg"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
