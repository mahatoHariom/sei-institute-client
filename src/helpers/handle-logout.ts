import { useDispatch } from "react-redux";
import { clearUser } from "@/store/slices/userSlice";
import { toast } from "sonner";
import { Messages } from "@/constants/messages";
// import { useRouter } from "next/router"; // If you are using Next.js for routing

const useLogout = () => {
  const dispatch = useDispatch();
  //   const router = useRouter();

  const handleLogout = () => {
    dispatch(clearUser());
    toast.error(Messages.logout.success);

    // router.push("/login");
  };

  return handleLogout;
};

export default useLogout;
