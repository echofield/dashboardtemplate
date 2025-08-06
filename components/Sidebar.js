"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Library,
    BarChart3,
    Settings,
    Sparkles,
    Sun,
    Moon
} from 'lucide-react';

// Main navigation items
const navItems = [
    { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/clients', icon: Users, label: 'Clients' },
    { href: '/content-hub', icon: Library, label: 'Content Hub' },
    { href: '/analytics', icon: BarChart3, label: 'Analytics' },
    { href: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 flex-shrink-0 bg-gray-900 text-white flex flex-col p-4">
            {/* Logo/Branding */}
            <div className="mb-10">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-teal-500 rounded-lg"></div>
                    <span className="text-xl font-bold">SYMI OS</span>
                </Link>
            </div>

            {/* Main Navigation */}
            <nav className="flex-grow">
                <ul>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href} className="mb-2">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                                        isActive
                                            ? 'bg-purple-600 text-white shadow-lg'
                                            : 'text-gray-400 hover:bg-purple-500/20 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Agent Command Center Button */}
            <div className="mb-4">
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-teal-500/20 text-teal-300 hover:bg-teal-500/40 hover:text-white transition-colors">
                    <Sparkles className="w-5 h-5" />
                    <span>Agent Center</span>
                </button>
            </div>

            {/* User Profile Section */}
            <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://i.pravatar.cc/150?u=sadia-k" // Placeholder image
                        alt="Sadia K"
                    />
                    <div>
                        <p className="font-semibold">Sadia K</p>
                        <p className="text-xs text-gray-400">Marketing Coach</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
