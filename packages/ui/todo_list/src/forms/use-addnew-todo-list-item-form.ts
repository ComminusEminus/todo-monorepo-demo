import { IAddNewTodoListItemFormResponse } from '@core/entities'
import { addNewListItem } from '@core/di'
import { useUIContext } from '@ui/contexts';
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


type FormValues = {
    title: string;
    description: string;
}


const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
}).required();

export const useAddNewTodoListItemForm = () => {
    const { setUpdate, userProfile, viewTodoList } = useUIContext()
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const onSubmit = (data: IAddNewTodoListItemFormResponse) => {
        if (!userProfile) {
            return;
        }
        if (!viewTodoList) {
            return;
        }
        try {
            const response = addNewListItem.execute(viewTodoList, data, userProfile.id)
            setUpdate?.(`New item has been added`)
        } catch {
            //create error boudary
            console.log('An error occured adding new todo item')
        }
    };

    return { onSubmit, register, handleSubmit, errors }
}