import { FieldValues } from "react-hook-form";

import { toast } from "sonner";
import { loginUser, registerUser } from "../services/AuthServices";

// register in a user using nexiosInstance
export const useUserRegistration = async (userData: FieldValues) => {
  const res = await registerUser(userData);
  if (res.success) {
    toast.success(res.message);
  } else {
    toast.error(res.message);
  }

  return res;
};

// log in a user using nexiosInstance
export const useUserLogin = async (userData: FieldValues) => {
  const res = await loginUser(userData);

  if (res.success) {
    toast.success(res.message);
  } else {
    toast.error(res.message);
  }
  return res;
};
