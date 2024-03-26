import { ReactNode, createContext, useState } from "react";

type CountContextType = {
    count: number;
    setCount: (n: number) => void;
}
export const ContextCount = createContext<CountContextType | null>(null);

type Props = { children: ReactNode; } 
export const CountProvider = ({children}: Props) => {
    const [count, setCount] = useState<number>(1);
    return (
        <ContextCount.Provider value={ {count, setCount} }>
            {children}
        </ContextCount.Provider>
    )
}