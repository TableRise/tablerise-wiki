import { useMemo, useState } from 'react';
import WikiContext from 'src/context/WikiContext';
import ChildrenNode from 'src/types/shared/children';

export default function WikiProvider({ children }: ChildrenNode): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const value = useMemo(() => ({
        loading,
        setLoading
    }), [
        loading
    ]);

    return (
        <WikiContext.Provider value={value}>
            {children}
        </WikiContext.Provider>
    );
};
