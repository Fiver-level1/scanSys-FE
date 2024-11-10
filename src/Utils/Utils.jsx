import { postRequestAuth } from "../Services/AuthControllerWithoutToken";
import { getRequest } from "../Services/ApiController";
import { toast } from "react-toastify";

const getProfileFromPayload = (payload, callBackFunction, { setisLogin, setUserName, setRole }) => {
    postRequestAuth("/auth/token/", (err, res) => {
        callBackFunction();
        if (err) {
            console.error("Error in authentication:", err);
            toast.error("Please retry to login");
        } else {
            const accessToken = res?.data?.access_token;
            if (accessToken) {
                localStorage.setItem("access_token", accessToken);
                getRequest("/api/profile/", (err, res) => {
                    if (err) {
                        console.log("error ", err);
                        toast.error("Please retry to login");
                    } else {
                        toast.success("logged In successfully!");
                        setisLogin(true);
                        setRole(res.data.type);
                        setUserName(res.data.first_name);
                    }
                });
            }
        }
    }, payload);
};

export { getProfileFromPayload };
