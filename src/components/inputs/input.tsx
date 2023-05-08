'use client';

import { FormInput } from "@/app/login/components/FormAuth";
import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

interface InputProps {
    label: string;
    id: string | any;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FormInput>,
    errors: FieldErrors | Array<FieldErrors> | any;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    register,
    required,
    errors,
    type = 'text',
    disabled,
}) => {
    console.log(errors)
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(`form-input block w-full px-2 outline-none rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-300 sm:text-sm sm:leading-6`,
                        errors[id] && 'focus:ring-transparent border-red-400',
                        disabled && 'opacity-50 cursor-default'
                    )}
                />
                <span className="text-red-500">{errors[id]?.message}</span>
            </div>
        </div>
    );
}

export default Input;