"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;

  if (!href) {
    return <a {...props}>{props.children}</a>;
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

type RoundedImageProps = ImageProps & {
  alt: string;
};

function RoundedImage(props: RoundedImageProps) {
  return (
    <Image {...props} alt={props.alt || "Blog image"} className="rounded-lg" />
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

export function MdxRenderer({ source }: { source: string }) {
  const Component = useMDXComponent(source);
  return <Component components={components} />;
}
