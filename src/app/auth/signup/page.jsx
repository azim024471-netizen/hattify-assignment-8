'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())


        const { name, email, password, image } = userData;

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/",
        })

        if (error) {
            toast.error("Error: " + (error.message || "Something went wrong!"));
        } else {
            toast.success("Registration successful! Welcome to HattiFY.");
        }


    };


    const handleGoogleSignIn=async ()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });

    }


    
    return (

        <div className='mx-auto w-full max-w-md px-4 bg-gray-50 rounded-xl py-10 my-5 flex justify-center'>

            <Card className=" p-6">

                <Form onSubmit={onSubmit} className="w-full flex flex-col gap-4 > ">



                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>



                    <TextField
                        isRequired
                        name="image"
                        type='text'
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter Your Image URL" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter Your Email Address" />
                        <FieldError />
                    </TextField>



                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >

                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>


                    <div className="flex gap-2">
                        <Button type="submit">
                            <Checkbox />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>

                </Form>


                <p className="text-center  md:text-xl ">Or</p>
                <div className="w-full flex flex-col my-2  md:my-4 gap-3">



                    <Button onClick={handleGoogleSignIn} className="w-full py-2" variant="tertiary">
                        <FcGoogle />
                        Sign in with Google
                    </Button>

                </div>

            </Card>
        </div>
    );
};

export default SignUpPage;