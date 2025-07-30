import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import z from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = authFormSchema({ type: 'sign-up' })

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    type?: string,
    label: string,
    placeholder?: string,
}

const CustomInput = ({
    control, name, label, placeholder, type = 'text'
}: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                type={type}
                                id={field.name}
                                autoComplete={type === 'password' ? 'current-password' : ''}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput