import {logoutUser} from '@core/di'
import {useUIContext} from '@ui/contexts';


export const useLogoutUser = () => {
    const {setUserProfile, userProfile} = useUIContext()
    const logoutHandler = async () => {
        if(!userProfile){
            return;
        }
        try{
            const response = await logoutUser.execute(userProfile.id)
            setUserProfile(undefined)
            
            
        }catch(err){
            console.log('An error occured logging out: ' + err)
        }
    }
    return {logoutHandler} as const;
}