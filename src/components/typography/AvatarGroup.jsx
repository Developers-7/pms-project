/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 10 Jul 2025
 * Time: 4:22 PM
 * Email: zishan.softdev@gmail.com
 */


import React from 'react';

export default function AvatarGroup({ avatars, maxVisible = 3 }) {
    const visibleAvatars = avatars.slice(0, maxVisible);
    const remainingCount = avatars.length - maxVisible;

    return (
        <div className="flex -space-x-4 rtl:space-x-reverse">
            {visibleAvatars.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Avatar ${index + 1}`}
                    className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                />
            ))}

            {remainingCount > 0 && (
                <span
                    className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    title={`${remainingCount} more`}
                >
          +{remainingCount}
        </span>
            )}
        </div>
    );
}
