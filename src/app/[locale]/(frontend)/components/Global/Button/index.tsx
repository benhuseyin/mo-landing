import { ComponentProps, MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
    prefixIcon?: ReactNode
    suffixIcon?: ReactNode
    loadingIcon?: ReactNode
    buttonRef?: React.RefObject<HTMLButtonElement>
    stopPropagation?: boolean
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
    children,
    className,
    prefixIcon,
    suffixIcon,
    loadingIcon,
    buttonRef,
    stopPropagation = true,
    onClick,
    ...otherProps
}: Props & Omit<ComponentProps<'button'>, 'content'>) => {
    return (
        <button
            ref={buttonRef}
            onClick={(event) => {
                if (stopPropagation) {
                    event.stopPropagation()
                }
                onClick?.(event)
            }}
            className={twMerge(
                'flex items-center justify-center whitespace-nowrap rounded-[10px] bg-magic font-secondary text-sm font-bold leading-6 text-white transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white sm:text-base h-11 min-w-[128px] cursor-pointer',
                className,
            )}
            {...otherProps}
        >
            {prefixIcon && prefixIcon}
            {loadingIcon ? loadingIcon : (children as ReactNode)}
            {suffixIcon && suffixIcon}
        </button>
    )
}

export default Button
