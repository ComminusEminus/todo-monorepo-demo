type FormValues = {
    userName: string;
    password: string;
};
interface ILoginUserFormResponse {
    userName: string;
    password: string;
}
export declare const useLoginUserForm: () => {
    onSubmit: (data: ILoginUserFormResponse) => Promise<void>;
    register: import("react-hook-form").UseFormRegister<FormValues>;
};
export {};
