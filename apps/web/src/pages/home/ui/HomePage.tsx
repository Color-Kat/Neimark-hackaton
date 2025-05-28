import { ROUTES } from "@/shared/constants";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";
import { NextPage } from 'next';

export const HomePage: NextPage = ({}) => {

    return (
        <div className="flex flex-col gap-10 justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-6xl text-shadow-md text-shadow-orange-300  text-orange-300">
                    POMELO
                </h1>

                <div className="p-4 rounded-4xl bg-white shadow-lg text-center my-5">
                    <h2 className="text-2xl font-semibold text-orange-300 mt-4">ЧТО ТАКОЕ ПОМЕЛО?!</h2>
                    <p className="font-medium text-xl text-[#77825a] max-w-xs text-center">
                        Это приложение для анализа состава продуктов по их фотографии
                    </p>
                </div>

                <Button
                    as={Link}
                    href={ROUTES.SCANNER}
                    className="bg-[#7a9c46] shadow-[#7a9c46]"
                    size="lg"
                    variant="shadow"
                    color="primary"
                >
                    Начать сканирование
                </Button>
            </div>
        </div>
    );
};