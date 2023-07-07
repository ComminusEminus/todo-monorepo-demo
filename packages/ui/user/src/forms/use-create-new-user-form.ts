import {createNewUser} from '@core/di'
import {useUIContext} from '@ui/contexts';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
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

export const useCreateNewUserForm = () => {
    const {setUpdate, userProfile} = useUIContext()
    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});

    const onSubmit = handleSubmit((data: ICreateUserResponse) => {
        const {firstName, lastName, userName, password} = data
        try{
            const response = createNewUser.execute(firstName, lastName, userName, password)
            setUpdate?.(`New user has been added`)
        }catch{
            //create error boudary
            console.log('An error occured adding new user')
        }
    });

    return {onSubmit, register, handleSubmit, errors}
}