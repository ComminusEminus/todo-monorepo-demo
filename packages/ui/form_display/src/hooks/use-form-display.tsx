import {useUIContext} from '@ui/contexts'

export const useFormDisplay = () => {
    const {state} = useUIContext()
    const {formType} = state
    
    return {formType} as const;

}