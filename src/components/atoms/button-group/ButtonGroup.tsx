import { 
    ButtonGroup as MuiButtonGroup,
    ButtonGroupProps as MuiButtonGroupProps
 } from "@mui/material";
import React from "react";
import { Button } from "../button/Button";

type ButtonGroupBaseProps = Pick<MuiButtonGroupProps, 'color' | 'orientation' | 'variant'>;

interface ButtonGroupProps extends ButtonGroupBaseProps{
    buttonLabels : string[];
}

const ButtonGroup : React.FC<ButtonGroupProps> = ({buttonLabels , ...rest}) => (
    <MuiButtonGroup {...rest}>
       {
            buttonLabels && buttonLabels.map((label, index) => (
                <Button label={label} key={index}/>
            ))
        }
    </MuiButtonGroup>
);


export {
    ButtonGroup
}