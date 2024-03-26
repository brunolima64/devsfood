import { ReactNode, createContext, useState } from "react";

type ResultContextType = {
    result: number;
    setResult: (n: number) => void;
}
export const ContextResults = createContext<ResultContextType | null>(null);

type Props = { children: ReactNode; } 
export const ResultProvider = ({children}: Props) => {
    const [result, setResult] = useState<number>(0);
    return (
        <ContextResults.Provider value={ {result, setResult} }>
            {children}
        </ContextResults.Provider>
    )
}