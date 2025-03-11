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
      <h1 className="text-white text-6xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="  font-bold text-white py-6">{children}</h2>
    ),
    
    separator: ({ children }) => (
      <div className="h-2 w-full bg-white">
        
      </div>
    ),  

    p: ({ children }) => <p className="text-white">{children}</p>,
    img: (props) => (
      <Image
        width={1000}
        height={1000}
        className="rounded-3xl w-full my-10 mx-auto"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
