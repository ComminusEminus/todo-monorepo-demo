import {loginUser} from '@core/di'
import {useUIContext} from '@ui/contexts';
import {mapUserProfile} from '../services/user-ui-services'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormValues = {
    userName: string;
    password: string;
}

interface ILoginUserFormResponse{
    userName: string;
    password: string;
}

const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  }).required();

export const useLoginUserForm = () => {
    const {setUserProfile} = useUIContext()

    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});

    const onSubmit = async (data:ILoginUserFormResponse) => {
        const {userName, password} = data;
        try{
            const response = await loginUser.execute(userName, password)
            const mappedResponse = mapUserProfile(response);
            setUserProfile(mappedResponse)
        }catch{
            //create error boudary
            console.log('An error occured adding new user')
        }
    };



    return {onSubmit, register}
}