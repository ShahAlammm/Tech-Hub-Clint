"use client";
import FormContainer from '@/src/components/form/FormContainer';
import FormInput from '@/src/components/form/FormInput';
import { BackgroundBeamsWithCollision } from '@/src/components/ui/background-beams-with-collision';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserLogin } from '@/src/hooks/auth.hook';
import { useUser } from '@/src/context/userProvider';


const LogInPage = () => {

    const { setIsLoading } = useUser()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await useUserLogin(data);
        setIsLoading(true)
    };

    return (
        <>
            <BackgroundBeamsWithCollision>
                <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">


                    <h3 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Login with </h3>
                    <p className="m-4">Welcome Back! Let&lsquo;s Get Started</p>
                    <div className="w-[35%]">
                        <FormContainer
                            onSubmit={onSubmit}
                        // resolver={zodResolver(loginValidationSchema)}
                        >
                            <div className="py-3">
                                <FormInput name="email" label="Email" type="email" />
                            </div>
                            <div className="py-3">
                                <FormInput name="password" label="Password" type="password" />
                            </div>

                            <Button
                                className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                                size="lg"
                                type="submit"
                            >
                                Login
                            </Button>
                        </FormContainer>
                        <div className="text-center">
                            Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </>
    );
};

export default LogInPage;