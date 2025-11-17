import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const SectionParent = ({ children }: Props) => {
    return (
        <div className="container mx-auto max-w-6xl relative z-10 space-y-10">
            {children}
        </div>
    );
}

export default SectionParent