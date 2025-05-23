import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <head>
    <title>Luli Pottery</title>
  </head>
  <body>
  <body>
        <div id="root">{children}</div>
      </body>
  </body>
</html>
  )
}