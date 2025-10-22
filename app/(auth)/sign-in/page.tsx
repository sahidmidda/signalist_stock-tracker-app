'use client';

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="form-title">Welcome back</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* INPUTS */}
                <InputField
                    name="email"
                    label="Email"
                    type='email'
                    placeholder="john@example.com"
                    register={register}
                    error={errors.email}
                    validation={{required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Please enter a valid email address.' }}
                />
                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter a strong password"
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: 8}}
                />

                {/* Submit Button */}
                <Button type='submit' disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Logging In': 'Log In'}
                </Button>

                {/* Footer Link */}
                <FooterLink text="Don't have an account?" linkText="Create one" href="sign-up" />

            </form>
        </>
    )
}

export default SignIn
