import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const CardParent = ({ children }: Props) => {
    return (
        <div className="p-6 flex flex-col items-start gap-y-5">
            {children}
        </div>
    )
}

export default CardParent;