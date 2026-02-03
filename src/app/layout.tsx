import { AppLayout } from '@/components/layouts/AppLayout'
import './globals.css'

export const metadata = {
  title: 'Rick and Morty Explorer',
  description: 'Browse Rick and Morty characters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
