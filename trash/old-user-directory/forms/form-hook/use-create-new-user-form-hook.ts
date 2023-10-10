import {useUIContext} from '@reactui/contexts';
import { UIACTIONS } from '@core/entities'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useCreateNewUserUI} from '../ui-interactions/use-create-new-user-ui'
import * as yup from "yup";

type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

interface ICreateUserResponse{
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
  }).required();


export interface IUseCreateNewUserFormHook{
    pageSwitchHandler: () => void;
}
export const useCreateNewUserFormHook = ({pageSwitchHandler}: IUseCreateNewUserFormHook) => {
    const {createNewUserApiHandler, requestState} = useCreateNewUserUI({pageSwitchHandler})

    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});

    const onSubmit = handleSubmit(async (data: ICreateUserResponse) => {
        const {firstName, lastName, userName, password} = data
        console.log('OnSubmit Create New User Handler')
        createNewUserApiHandler(firstName, lastName, userName, password)
        
    });

    return {onSubmit, register, errors, requestState}
}