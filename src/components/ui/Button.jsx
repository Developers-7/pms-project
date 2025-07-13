
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
        primary: 'bg-primary text-white hover:bg-red-700 focus:ring-red-500',
        outline: 'border border-primary text-primary hover:bg-primary focus:ring-primary hover:text-white',
        ghost: 'bg-transparent text-primary-800 hover:bg-primary-100 focus:ring-primary',
        icon: 'bg-primary hover:bg-primary-200 focus:ring-primary-300',
        label: 'text-primary cursor-default',
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
