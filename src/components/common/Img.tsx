import { Box, SxProps } from "@mui/material";


interface Props {
  src: string;
  alt?: string;
  w: number;
  h: number;
  sx?: SxProps;
}

export default function Img(props: Props) {
  return (
    <Box
      component="img"
      src={props.src}
      alt={props.alt}
      sx={{
        width: props.w,
        height: props.h,
        ...props.sx,
      }}
    />
  );
}
