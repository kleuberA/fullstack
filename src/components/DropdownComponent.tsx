'use client'
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AvatarContainer from './Avatar';
import { LogoutButton } from './buttons.component';


const DropdownMenuCotainer = () => {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-green-400 bg-white outline-none "
                    aria-label="Customise options"
                >
                    <AvatarContainer />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] bg-white rounded-md p-[10px]"
                    sideOffset={5}
                >
                    <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] relative select-none outline-none">
                        <LogoutButton />
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuCotainer;