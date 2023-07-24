import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {addNewTodoList} from '@core/di'
import {IAddNewTodoListFormResponse} from '@core/entities'
import {useUIContext} from '@ui/contexts';


type FormValues = {
    title: string;
}


const schema = yup.object().shape({
    title: yup.string().required(),
  }).required();

export const useAddNewTodoListForm = () => {
    const {setUpdate, userProfile} = useUIContext()
    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});
    const onSubmit = handleSubmit((data: IAddNewTodoListFormResponse) => {
        if(!userProfile){
            return;
        }
        try{
            const response = addNewTodoList.execute(data, userProfile.id)
            setUpdate?.(`New list has been added`)
        }catch{
            //create error boudary
            console.log('An error occured adding new todo item')
        }
    });

    return {onSubmit, register, handleSubmit, errors} as const
}