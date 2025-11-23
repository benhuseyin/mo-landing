import { CSSProperties, ReactNode } from "react"

interface Props {
    wrapperStyle?: CSSProperties
    children: ReactNode
}

const SectionWrapper = ({ wrapperStyle, children }: Props) => {

    return (
        <section
            id="tour-dates"
            className="relative py-24 px-4 bg-no-repeat bg-cover bg-center"
            style={wrapperStyle}
        >
            {children}
        </section>
    )

}

export default SectionWrapper