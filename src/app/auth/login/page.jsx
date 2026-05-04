'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const userData = Object.fromEntries(formData.entries())

       console.log('ok done', userData);
            
       const { data, error } = await authClient.signIn.email({
    email: userData.email, 
    password: userData.password, 
    rememberMe: true,
    callbackURL: "/",
});

// 
        if (error) {
            toast.error(error.message || "Login failed! Please check your credentials.");
        } else {
            toast.success("Welcome back! Login successful.");
        }

      
  };

    return (
           <div className='mx-auto w-full max-w-md px-4 bg-gray-50 rounded-xl py-10 my-5 flex justify-center'>
          
       <Card className="full p-6">

            <Form className="w-full flex flex-col gap-4"  onSubmit={onSubmit}>


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

      <Button className="w-full py-2" variant="tertiary">
        <FcGoogle />
        Sign in with Google
      </Button>
      
    </div>
          
           <div className=" items-center justify-center text-sm gap-3.5 flex font-medium text-gray-600">
          <p>Dont't Have An Account ?</p>
        <Link  href={'/auth/signup'} className="text-red-500  hover:underline"> 
        Register
        </Link>

        </div>



       </Card> 
        </div>
    );
};

export default LoginPage;