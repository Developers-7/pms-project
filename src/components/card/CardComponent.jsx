/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 09 Jul 2025
 * Time: 12:03 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import { cn } from "@/lib/utils";

const CardComponent = ({
                           className,
                           children
                       }) => {
    return (
        <div
            className={cn("bg-white rounded-xl shadow-sm border p-4", className)}
        >
            {children}
        </div>
    );
};

export default CardComponent;




