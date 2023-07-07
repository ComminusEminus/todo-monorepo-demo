import {useUIContext} from '@ui/contexts'

export const useFormDisplay = () => {
    const {formsState} = useUIContext()
    
    return {formsState} as const;

}