import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  endIcon?: ReactNode | JSX.Element;
  startIcon?: ReactNode | JSX.Element;
  text: string;
  variant?: "text" | "outlined" | "contained";
  type?: "button" | "submit" | "reset";
  sx?: SxProps;
  action?: Function;
}

export default function CustomButton(props: Props) {
  return (
    <Button
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      type={props.type ?? "button"}
      sx={{
        color: "white",
        backgroundColor: "#444",
        py: 1,
        px: 2,
        ...props.sx
      }}
      variant={props.variant ?? "contained"}
      onClick={() => props.action && props.action()}
    >
      {props.text}
    </Button>
  );
}
