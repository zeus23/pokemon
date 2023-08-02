import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StoreProvider } from './store/storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokemon',
	description: 'Pokemon app using next js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</StoreProvider>
	)
}
