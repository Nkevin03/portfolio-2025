// app/mdx-provider.tsx
'use client'

import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '@mdx-components'

export function MDXWrapper({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({})
  return <MDXProvider components={components}>{children}</MDXProvider>
}
