
"use client";
import {Button, FieldError, Form, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { MdMessage } from "react-icons/md";



export function PlaceBookingNow() {

const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        console.log('ok done', userData)

        

    

    };


  return (
    <Modal>


      <Button 
      className={'w-full bg-green-900 hover:bg-green-700 text-white font-bold  py-6 rounded-2xl transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-xl'} 
      >Place Booking Now</Button>



      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                 <MdMessage  >  </MdMessage>
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
              <Form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
               
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
                                       <Input name="name" placeholder="Enter Your Name" />
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
                                       <Input name="email" placeholder="Enter Your Email Address" />
                                       <FieldError />
                                   </TextField>
               
               
               
                                   <TextField
                                       isRequired
                                       name="phone"
                                       type='number'
                                   >
                                       <Label>Phone</Label>
                                       <Input name="phone" placeholder="Enter Your Phone Number" />
                                       <FieldError />
                                   </TextField>
               
                                   <TextField
                                       isRequired
                                       minLength={8}
                                       name="address"
                                       type="text"
                                
                                   >
               
                                       <Label>Address</Label>
                                       <Input name="address" placeholder="Enter Your Address" />
                                       <FieldError />
                                   </TextField>
               
               
                                   <div className="flex gap-2">
                                       <Button type="submit">
                                           
                                           Submit
                                       </Button>
                                       <Button type="reset" variant="secondary">
                                           Reset
                                       </Button>
                                   </div>
               
                               </Form>
               
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
