'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CardButton = ({
    children,
    variant = 'primary', // 'primary' (red) or 'outline' (white with border)
    size = 'default', // 'default', 'sm', 'lg'
    icon,
    iconPosition = 'right',
    as = 'button',
    href,
    onClick,
    disabled = false,
    className,
    backgroundColor,
    textColor,
    borderColor,
    hoverBackgroundColor,
    hoverTextColor,
    ...props
}) => {
    // Base button styles
    const baseStyles = 'inline-flex items-center justify-center font-semibold text-center rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer';

    // Size variants
    const sizeVariants = {
        sm: 'px-4 py-2 text-sm h-[36px] min-w-[100px]',
        default: 'px-6 py-3 text-base h-[48px] min-w-[146px]',
        lg: 'px-8 py-4 text-lg h-[56px] min-w-[160px]'
    };

    // Variant styles
    const variantStyles = {
        primary: {
            default: 'bg-[#AB323C] text-white border border-[#AB323C] hover:bg-[#9A2D36] hover:border-[#9A2D36] focus:ring-[#AB323C]',
            custom: ''
        },
        outline: {
            default: 'bg-white text-[#AB323C] border-2 border-[#AB323C] hover:bg-[#AB323C] hover:text-white focus:ring-[#AB323C]',
            custom: ''
        }
    };

    // Custom color styles if provided
    const customStyles = backgroundColor || textColor || borderColor || hoverBackgroundColor || hoverTextColor ?
        `${backgroundColor ? `bg-[${backgroundColor}]` : ''} 
         ${textColor ? `text-[${textColor}]` : ''} 
         ${borderColor ? `border-[${borderColor}] border-2` : ''} 
         ${hoverBackgroundColor ? `hover:bg-[${hoverBackgroundColor}]` : ''} 
         ${hoverTextColor ? `hover:text-[${hoverTextColor}]` : ''}`.trim() : '';

    // Gap for icon spacing
    const gapStyles = 'gap-2.5';

    // Leading and tracking styles
    const typographyStyles = 'leading-[150%] tracking-[-0.02em]';

    // Combine all styles
    const buttonStyles = cn(
        baseStyles,
        sizeVariants[size],
        customStyles || variantStyles[variant].default,
        gapStyles,
        typographyStyles,
        className
    );

    // Content with icon positioning
    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className="flex-shrink-0">
                    {icon}
                </span>
            )}
            <span className="flex-1 text-center">
                {children}
            </span>
            {icon && iconPosition === 'right' && (
                <span className="flex-shrink-0">
                    {icon}
                </span>
            )}
        </>
    );

    // Render as Link component if href is provided
    if (as === 'Link' && href) {
        return (
            <Link href={href} className={buttonStyles} {...props}>
                {content}
            </Link>
        );
    }

    // Render as button element
    return (
        <button
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
};

export default CardButton;
