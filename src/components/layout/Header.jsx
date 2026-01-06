import { Icon } from "@iconify/react";

export default function Header({ onMenuClick }) {
    return (
        <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-transparent px-8 text-text-main">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="rounded-md p-2 hover:bg-primary-light text-primary md:hidden"
                >
                    <Icon icon="material-symbols:menu-rounded" width="28" height="28" />
                </button>

                <div className="hidden md:block">
                    <h1 className="text-4xl font-bold text-primary mb-1">Dashboard</h1>
                    <p className="text-text-muted font-semibold">Welcome back!</p>
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
                <button className="relative rounded-full p-2.5 bg-primary-light text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Icon icon="material-symbols:notifications-outline-rounded" width="24" height="24" />
                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full border-2 border-white ring-2 ring-primary-light overflow-hidden shadow-md">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Robert Smith"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <span className="hidden sm:block font-bold text-primary">Robert Smith</span>
                </div>
            </div>
        </header>
    );
}

