import Header from '@/layouts/common/header/Header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-mono',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'SPA Project 🗂️🇹🇸⚛️🇿',
	description: '🇹🇸 Typescript | ⚛️ React/Next | 🇿 Zustand',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono bg-[#111827] text-white`}
			>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
