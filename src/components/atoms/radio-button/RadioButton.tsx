import { 
    Radio as MuiRadio,
    RadioProps as MuiRadioProps
} from "@mui/material";
import React from "react";

type RadioBaseProps = Pick<MuiRadioProps, 'color' | 'checked' | 'size' >;

interface RadioProps extends RadioBaseProps{}

const Radio : React.FC<RadioProps> = ({...rest}) => (
    <MuiRadio {...rest}/>
);

export {
    Radio
}