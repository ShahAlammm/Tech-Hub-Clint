"use client";
import FormContainer from '@/src/components/form/FormContainer';
import FormInput from '@/src/components/form/FormInput';
import { BackgroundBeamsWithCollision } from '@/src/components/ui/background-beams-with-collision';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserRegistration } from '@/src/hooks/auth.hook';
import { useUser } from '@/src/context/userProvider';


const RegisterPage = () => {
    const { setIsLoading } = useUser()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const userData = {
            ...data,
            profilePhoto:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        };
        setIsLoading(true)
        try {
            await useUserRegistration(userData);
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <>
            <BackgroundBeamsWithCollision>
                <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center">
                    <h3 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Register with</h3>
                    <p className="mb-4">Help Lost Items Find Their Way Home</p>
                    <div className="w-[35%]">
                        <FormContainer
                            //! Only for development
                            defaultValues={{
                                name: "Md Me",
                                email: "me@gmail.com",
                                mobileNumber: "01711223344",
                                password: "123456",
                            }}
                            // resolver={zodResolver(registerValidationSchema)}
                            onSubmit={onSubmit}
                        >
                            <div className="py-3">
                                <FormInput label="Name" name="name" size="sm" />
                            </div>
                            <div className="py-3">
                                <FormInput label="Email" name="email" size="sm" />
                            </div>
                            <div className="py-3">
                                <FormInput label="Mobile Number" name="mobileNumber" size="sm" />
                            </div>
                            <div className="py-3">
                                <FormInput
                                    label="Password"
                                    name="password"
                                    size="sm"
                                    type="password"
                                />
                            </div>

                            <Button
                                className="my-3 w-full rounded-md bg-default-900 text-default"
                                size="lg"
                                type="submit"
                            >
                                Registration
                            </Button>
                        </FormContainer>
                        <div className="text-center">
                            Already have an account ? <Link href={"/login"}>Login</Link>
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </>
    );
};

export default RegisterPage;