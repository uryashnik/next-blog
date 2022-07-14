import {useState, useMemo} from 'react';
import axios from 'axios';

const initialParams = {
    method: 'post',
    responseType: 'json',
};

export const useRequest = (userSettings, isClearpreviousResponseData = false) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const params = useMemo(() => ({...initialParams, ...userSettings}), [userSettings]);

    const load = async (data) => {
        try {
            setIsLoading(true);
            setErrorMsg(null);
            if (isClearpreviousResponseData) {
                setResponse(null);
            }
            params.data = data;
            console.log(params);
            const response = await axios(params);
            setResponse(response);
        } catch (e) {
            setErrorMsg(e.toString());
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return {isLoading, response, errorMsg, load};
};
