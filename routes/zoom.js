import fetch from "node-fetch";
import base64 from "base-64";

const zoomAccountId = "";
const zoomClientId = "";
const zoomClientSecret = "";

const getAuthHeaders = () => {
    return {
        Authorization: `Basic ${base64.encode(
            `${zoomClientId}:${zoomClientSecret}`
        )}`,
        "Content-Type": "application/json",
    };
};

const generateZoomAccessToken = async () => {
    try {
        const response = await fetch(
            `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,
            {
                method: "POST",
                headers: getAuthHeaders(),
            }
        );

        const jsonResponse = await response.json();

        return jsonResponse?.access_token;
    } catch (error) {
        console.log("generateZoomAccessToken Error --> ", error);
        throw error;
    }
};
