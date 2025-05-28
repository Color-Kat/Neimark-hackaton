'use client';
import {Scan} from "@/entities/scan";
import {ScanCard} from "@/entities/scan/ui/ScanCard";
import React, {FC} from 'react';

type ScanListProps = {
    scans: Scan[];
    onScanSelect: (scan: Scan) => void;
}

export const ScanList: FC<ScanListProps> = ({
    scans,
    onScanSelect
}) => {
    return (
        <div className="white">

            {scans.length === 0 && (
                <div className="text-primary-dark">
                    <p className="text-2xl font-bold text-center mt-4">
                        Сканов пока нет
                    </p>
                    <p className="text-sm text-gray-600 text-center mt-2">
                        Вы - то, что вы едите
                    </p>
                </div>
            )}

            {scans.length > 0 &&
                <ul className="flex flex-col gap-y-3">
                    {scans.map((scan) => (
                        <li key={scan.id} className="">
                            <ScanCard
                                scan={scan}
                                onClick={onScanSelect}
                            />
                        </li>
                    ))}

                    <li className="">
                        <p className="text-lg font-semibold text-center mt-4">
                            Продолжайте сканировать, чтобы следить за своим здоровьем :)
                        </p>
                    </li>
                </ul>
            }
        </div>
    );
}