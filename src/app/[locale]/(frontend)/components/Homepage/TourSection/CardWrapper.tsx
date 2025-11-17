import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const CardWrapper = ({ children }: Props) => {
    return (
        < div
            className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group border border-white/20 rounded-2xl relative bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/15 hover:border-white/30"
        >
            {children}
        </div >
    )
}

export default CardWrapper;