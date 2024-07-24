import { 
    Checkbox as MuiCheckbox,
    CheckboxProps as MuiCheckboxProps
} from "@mui/material";
import React from "react";

type CheckboxBaseProps = Pick<MuiCheckboxProps, 'color' | 'checked' | 'size' >;

interface CheckboxProps extends CheckboxBaseProps{

}

const Checkbox : React.FC<CheckboxProps> = ({...rest}) => (
    <MuiCheckbox {...rest}/>
);

export {
    Checkbox
}