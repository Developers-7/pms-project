
'use client';

import Link from 'next/link';
import { cn } from "@/lib/utils";

// your button component code...


/**
 * @typedef {'primary' | 'outline' | 'ghost' | 'icon' | 'label'} Variant
 * @typedef {'sm' | 'md' | 'lg' | 'icon'} Size
 * @typedef {'left' | 'right'} IconPosition
 * @typedef {'button' | 'a' | 'Link'} AsType
 */

/**
 * @param {{
 *  variant?: Variant,
 *  size?: Size,
 *  icon?: React.ReactNode,
 *  iconPosition?: IconPosition,
 *  children?: React.ReactNode,
 *  className?: string,
 *  as?: AsType,
 *  href?: string,
 *  [key: string]: any
 * }} props
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    children,
    className = '',
    as = 'button',
    href,
    ...props
}) {
    const base =
        'cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-0',
    };

    const variants = {
        primary: 'bg-[#AB323C] text-white hover:bg-[#9A2D36] focus:ring-[#AB323C]',
        outline: 'border border-[#AB323C] text-[#AB323C] hover:bg-[#AB323C] focus:ring-[#AB323C] hover:text-white',
        ghost: 'bg-transparent text-[#494A57] hover:bg-gray-100 focus:ring-[#AB323C]',
        icon: 'bg-[#AB323C] hover:bg-[#9A2D36] focus:ring-[#AB323C]',
        label: 'text-[#AB323C] cursor-default',
    };

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className={children ? 'mr-2' : ''}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className={children ? 'ml-2' : ''}>{icon}</span>
            )}
        </>
    );

    const classes = cn(base, sizes[size], variants[variant], className);

    if (as === 'a') {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    if (as === 'Link') {
        return (
            <Link href={href} className={classes} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
}
