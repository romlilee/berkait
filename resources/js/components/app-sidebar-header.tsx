import { SidebarContent } from '@/components/sidebar-content';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useInitials } from '@/hooks/use-initials';
import { logout } from '@/routes';
import { type SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Bell, LogOut, Menu, Search, User } from 'lucide-react';

export function AppSidebarHeader() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const handleLogout = () => {
        router.flushAll();
        router.post(logout().url);
    };

    return (
        <header className="mb-4 flex w-full">
    <div className="relative flex w-full items-center justify-center rounded-[2rem] bg-white px-8 py-3 shadow-sm">

        {/* Mobile Menu */}
        <Sheet>
            <SheetTrigger asChild>
                <button className="absolute left-6 p-2 text-gray-500 hover:text-[#0D9488] md:hidden">
                    <Menu size={24} />
                </button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-[300px] border-r-0 bg-transparent p-0 shadow-none"
            >
                <div className="h-full w-full overflow-hidden rounded-r-[50px] bg-white">
                    <SheetTitle className="sr-only">
                        Navigation Menu
                    </SheetTitle>
                    <SidebarContent isMobile />
                </div>
            </SheetContent>
        </Sheet>

        {/* Judul */}
        <h1 className="text-2xl font-bold text-black">
            Berkat Samudra Biru
        </h1>

    </div>
</header>
    );
}
