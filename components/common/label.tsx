import { LabelHTMLAttributes, ReactNode } from "react";
import { de } from "zod/v4/locales";


type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode
}

const Label = ({ children, ...props }: LabelProps) => {
    return (
        <label {...props} className={`block text-sm font-medium text-slate-700 ${props.className || ""}`}>
            {children}
        </label>
    )
}

export default Label;