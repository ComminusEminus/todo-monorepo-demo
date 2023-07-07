import {createNewUser} from '@core/di'

export const useCreateNewUserProfile = () => {
    const createNewUserHandler = async (firstName: string, lastName: string, userName: string, password: string) => {
        try{
            createNewUser.execute(firstName, lastName, userName, password)
        }catch(err){
            console.log('An error occured in creating new profile: ' + err)
        }
    }

    return {createNewUserHandler} as const 
}