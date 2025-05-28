'use client';

import { ScannerButtonContext } from "@/features/scan-button/context/ScannerButtonContext";
import React, {useRef, useState} from 'react';

export type ScannerButtonType = 'capture' | 'scan' | 'cancel' | 'loading';

/**
 * Provides handleClick and registerClickHandler functions.
 * registerClickHandler is used to set function
 * that will be called when handleClick is called (click on ScanButton).
 * So, we can use this button to run actions in any feature.
 *
 * @param children
 * @constructor
 */
export const ScannerButtonProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [buttonType, setButtonType] = useState<ScannerButtonType>('capture');
    const onClickRef = useRef<() => void>(() => {});

    const registerClickHandler = (fn: () => void) => {
        onClickRef.current = fn;
    };

    const handleClick = () => {
        onClickRef.current?.();
    };


    return (
        <ScannerButtonContext.Provider value={{
            buttonType,
            setButtonType,
            handleClick,
            registerClickHandler,
        }}>
            {children}
        </ScannerButtonContext.Provider>
    );
};
