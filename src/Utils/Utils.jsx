import { postRequestAuth } from "../Services/AuthControllerWithoutToken";
import { getRequest } from "../Services/ApiController";

const getProfileFromPayload = (payload, callBackFunction, { setisLogin, setUserName, setRole }) => {
    postRequestAuth("/auth/token/", (err, res) => {
        callBackFunction();
        if (err) {
            console.error("Error in authentication:", err);
        } else {
            const accessToken = res?.data?.access_token;
            if (accessToken) {
                localStorage.setItem("access_token", accessToken);
                getRequest("/api/profile/", (err, res) => {
                    if (err) {
                        console.log("error ", err);
                    } else {
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
