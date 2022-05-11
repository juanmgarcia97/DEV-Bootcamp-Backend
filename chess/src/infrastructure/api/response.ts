
export default interface ResponseBody<T> {
    status: string;
    message: string;
    body?: T
}