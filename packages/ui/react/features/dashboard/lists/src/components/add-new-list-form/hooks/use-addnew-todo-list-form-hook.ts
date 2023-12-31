import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IAddNewTodoListFormResponse } from '@core/entities'
import { useAddNewTodoListUI } from './use-add-new-todo-list-ui'

type FormValues = {
    title: string;
}


const schema = yup.object().shape({
    title: yup.string().required(),
}).required();

export const useAddNewTodoListFormHook = () => {
    const { addNewTodoListApiHandler, addNewListApiState } = useAddNewTodoListUI()

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const onSubmit = handleSubmit(async (data: IAddNewTodoListFormResponse) => {
        const { title } = data
        addNewTodoListApiHandler({ title })
    });

    return { onSubmit, register, handleSubmit, errors, addNewListApiState } as const
}
