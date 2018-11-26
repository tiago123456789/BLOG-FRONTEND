export default class ErrorResponseService {


    static getMsgErroInReponse(error) {
        if (!error.response) {
            return error;
        }
        return error.response.data.msg
    }
}