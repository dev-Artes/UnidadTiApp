import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    variant?: Variant
    type?: 'button' | 'submit' | 'reset' 
    onClick?: () => void
    disabled?: boolean
}

const variants = {
    red: 'bg-red-500 hover:bg-red-700 text-white',
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    gray: 'bg-gray-500 hover:bg-gray-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
}

type Variant = keyof typeof variants

const Button = ({ 
    children,
    variant = 'green',
    type = 'button', 
    onClick, 
    disabled 
}: ButtonProps) => {
    return (
        <button 
            type={ type }
            onClick = { onClick }
            disabled={ disabled}
            className={`
                px-4 py-2 rounded font-bold transition-colors
                ${variants[variant]}
            `}>
                {children}
        </button>
    )
}

export default Button
