import {createStrictContext, SetState, useStrictContext} from "@/shared/lib/react";
import {ScannerButtonType} from "@/features/scan-button/providers/ScannerButtonProvider";


export type ScannerButtonContextType = {
    buttonType: ScannerButtonType,
    setButtonType: SetState<ScannerButtonType>
    handleClick: () => void;
    registerClickHandler: (fn: () => void) => void;
};

export const ScannerButtonContext = createStrictContext<ScannerButtonContextType>();

export const useScannerButtonContext = () => {
    return useStrictContext(ScannerButtonContext);
};