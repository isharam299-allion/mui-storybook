import { Typography as MuiTypography, TypographyProps as MuiTypographyProps} from "@mui/material";

type TypgraphyBaseProps = Pick<MuiTypographyProps, 'variant'>

interface TypographyProps extends TypgraphyBaseProps {
    text: string;
}

const Typography: React.FC<TypographyProps> = ({text , ...rest}) => (
    <MuiTypography {...rest}>
        {text}
    </MuiTypography>
);

export {
    Typography
}