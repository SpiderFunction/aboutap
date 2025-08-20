'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded ${
        isActive ? 'text-primary overline' : 'hover:animate-pulse hover:text-primary line-through hover:overline transition-all duration-200'
      }`}
    >
      {children}
    </Link>
  );
}