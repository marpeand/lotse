"use client";

import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: any) => {
    const href = props.href;

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

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components: MDXComponents = {
    Image: RoundedImage,
    a: CustomLink,
};

export function MdxRenderer({ source }: { source: string }) {
    const Component = useMDXComponent(source);
    return <Component components={components} />;
}
