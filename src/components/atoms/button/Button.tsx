import { Button as MuiButton , ButtonProps as MuiButtonProps} from "@mui/material";
import styled from "styled-components";

type ButtonBaseProps = Pick<MuiButtonProps, 'variant'| 'size'| 'color'>;

interface ButtonProps extends ButtonBaseProps{
    label : string;
}

const StyledMuiButton = styled(MuiButton)`
    letter-spacing: 0.4px;
`;

const Button: React.FC<ButtonProps> = ({label, ...rest}) => (
    <StyledMuiButton {...rest}>
        {label}
    </StyledMuiButton>
)

export {
    Button
}