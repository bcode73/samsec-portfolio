import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { Figure } from "./Figure";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children, ...props }) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
  Callout,
  Figure,
};
