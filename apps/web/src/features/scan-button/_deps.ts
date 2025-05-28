import { createStrictContext, useStrictContext } from "@/shared/lib/react";

export type ScanButtonDeps = {
    onScanButtonClick: () => void;
};

export const ScanButtonDepsContext = createStrictContext<ScanButtonDeps>();

export const useScanButtonDeps = () => {
    return useStrictContext(ScanButtonDepsContext);
};