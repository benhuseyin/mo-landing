import { ReactNode } from "react";

interface Props {
    preHeader?: ReactNode
    title: string
    description: string
}

const SectionHeader = ({ preHeader, title, description }: Props) => {

    return (<div className="text-center space-y-4">

        {preHeader && preHeader}
        <h2 className="font-display text-5xl md:text-6xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
        </p>
    </div>)

}

export default SectionHeader;