import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type SiteLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

export function SiteLink({ href, ...props }: SiteLinkProps) {
  if (process.env.NODE_ENV === "development") {
    // The v0 dev preview fails its cross-route RSC fetches; full document requests keep these static pages navigable.
    return <a href={href} {...props} />;
  }

  return <Link href={href} {...props} />;
}
