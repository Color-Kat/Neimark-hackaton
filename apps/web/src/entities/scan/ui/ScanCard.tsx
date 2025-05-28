import { Scan, ScanType } from "@/entities/scan";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import React, { FC, memo } from 'react';

interface ScanCardProps {
    scan: Scan;
    onClick?: (scan: Scan) => void;
}

export const ScanCard: FC<ScanCardProps> = memo(({
    scan,
    onClick
}) => {

    return (
        <Card
            isPressable
            shadow="sm"
            onPress={() => onClick?.(scan)}
            className="w-full"
        >
            <CardBody className="grid grid-cols-12 gap-4">
                <div className="col-span-4">
                <Image
                    alt={scan.name || 'Фото продукта'}
                    className="object-cover aspect-square z-0"
                    radius="lg"
                    shadow="sm"
                    src={scan.photoUrl ?? ''}
                    width="100%"
                />
                </div>

                <div className="flex flex-col col-span-8">
                    <h1 className="text-xl font-bold text-zinc-800">
                        {scan.name}
                    </h1>
                    <p className="text-default-500 line-clamp-4 leading-tight text-xs">
                        {scan.composition}
                    </p>
                    {scan.analysis?.type === ScanType.FOOD && <p className="text-orange-500">
                        {scan.analysis.additivesDangerIndex} из 100
                    </p>}
                </div>
            </CardBody>

            {/*<CardFooter className="text-small flex flex-col gap-2">*/}
            {/*    <b>{scan.id}</b>*/}
            {/*    <p className="text-default-500">{scan.composition}</p>*/}
            {/*</CardFooter>*/}

        </Card>
    );
});