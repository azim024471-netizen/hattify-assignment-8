"use client";
import React, { useState } from "react";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdMessage } from "react-icons/md";
import { toast } from "react-toastify";

export function PlaceBookingNow() {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
     
    toast.success("Booking placed successfully! We will contact you soon.");

       setIsOpen(false);

  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      
     
      <Button
        onPress={() => setIsOpen(true)}
        className="w-full bg-green-900 hover:bg-green-700 text-white font-bold py-6 rounded-2xl"
      >
        Place Booking Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon>
                <MdMessage />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                  
                  <TextField isRequired name="name">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter Your Name" />
                    <FieldError />
                  </TextField>

 <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email Address" />
                    <FieldError />
                  </TextField>
                      
                        <TextField isRequired name="phone" type="number">
                    <Label>Phone</Label>
                    <Input placeholder="Enter Your Phone Number" />
                    <FieldError />
                  </TextField>



                      <TextField isRequired name="address" type="text">
                    <Label>Address</Label>
                    <Input placeholder="Enter Your Address" />
                    <FieldError />
                  </TextField>

                  

                  <Button type="submit">Submit</Button>

                </Form>

                
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}