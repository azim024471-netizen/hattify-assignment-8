"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { UpdateUserModal } from "../components/updateUser/UpdateUserModal";


const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="container mx-auto p-2 ">
      <Card className="h-[50vh]  mx-auto space-y-2.5 bg-green-50 flex flex-col items-center border my-5">
        <Avatar className="h-40 w-40">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">{user?.name}</h2>
        <p className="text-yellow-900 text-xl">{user?.email}</p>

        <UpdateUserModal></UpdateUserModal>
      </Card>
    </div>
  );
};

export default ProfilePage;