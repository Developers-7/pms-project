import React from 'react';

export default function AvatarGroup({ avatars, maxVisible = 3, className = '' }) {
    // Calculate visible avatars based on screen size
    const mobileMaxVisible = Math.min(maxVisible, 3); // Show fewer on mobile
    const desktopMaxVisible = maxVisible;

    // Create arrays for different screen sizes
    const visibleAvatars = avatars.slice(0, desktopMaxVisible);
    const mobileVisibleAvatars = avatars.slice(0, mobileMaxVisible);

    // Calculate remaining counts
    const remainingCount = avatars.length - desktopMaxVisible;
    const mobileRemainingCount = avatars.length - mobileMaxVisible;

    return (
        <div className={`inline-flex flex-nowrap overflow-hidden ${className}`}>
            {/* For mobile screens */}
            <div className="flex -space-x-3 rtl:space-x-reverse sm:hidden">
                {mobileVisibleAvatars.map((src, index) => (
                    <img
                        key={`mobile-${index}`}
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        className="inline-block w-8 h-8 border-2 border-white rounded-full"
                    />
                ))}

                {mobileRemainingCount > 0 && (
                    <span
                        className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full"
                        title={`${mobileRemainingCount} more`}
                    >
                        +{mobileRemainingCount}
                    </span>
                )}
            </div>

            {/* For larger screens */}
            <div className="hidden sm:flex -space-x-4 rtl:space-x-reverse">
                {visibleAvatars.map((src, index) => (
                    <img
                        key={`desktop-${index}`}
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        className="inline-block w-10 h-10 border-2 border-white rounded-full"
                    />
                ))}

                {remainingCount > 0 && (
                    <span
                        className="inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full"
                        title={`${remainingCount} more`}
                    >
                        +{remainingCount}
                    </span>
                )}
            </div>
        </div>
    );
}
