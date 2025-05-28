'use client';

import {
    Children,
    Context,
    createContext,
    createElement,
    isValidElement,
    ReactNode,
    startTransition,
    useContext,
    useEffect,
    useState,
} from "react";

/**
 * A hook that returns the value of a context. If the value is null, it throws an error.
 * @param context
 */
export function useStrictContext<T>(context: Context<T | null>) {
    const value = useContext(context);
    if (value === null) throw new Error("Strict context: context value not passed");
    return value as T;
}

export function createStrictContext<T>() {
    return createContext<T | null>(null);
}

export type SetState<T> =  React.Dispatch<React.SetStateAction<T>>

export function ComposeChildren({ children }: { children: ReactNode }) {
    const array = Children.toArray(children);
    const last = array.pop();
    return (
        <>
            {array.reduceRight(
                (child, element) =>
                    isValidElement(element)
                        ? createElement(element.type, element.props, child)
                        : child,
                last,
            )}
        </>
    );
}

type Fn<T extends any[], R> = (...args: T) => R;

export function useAppearanceDelay(
    show?: boolean,
    options = {} as {
        defaultValue?: boolean;
        appearanceDelay?: number;
        minDisplay?: number;
    },
) {
    const {
              minDisplay      = 500,
              defaultValue    = false,
              appearanceDelay = 500,
          } = options;

    const [delayedShow, setDelayedShow] = useState(defaultValue);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                startTransition(() => setDelayedShow(true));
            }, appearanceDelay);

            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                startTransition(() => setDelayedShow(false));
            }, minDisplay);

            return () => clearTimeout(timer);
        }
    }, [appearanceDelay, show, minDisplay]);

    return delayedShow;
}