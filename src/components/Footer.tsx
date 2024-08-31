import { Link, Stack, SxProps, Typography } from "@mui/material";

const linkStyle: SxProps = {
  color: '#FFFFFFA5',
  textDecoration: 'none',
  '&:hover': {
    color: '#FFFFFF',
  },
};

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      gap={1}
      sx={{
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#262626',
        color: '#FFFFFFA5',
        padding: .2,
        fontSize: 10,
        textAlign: 'right',
      }}
    >
      <Typography variant="caption">
        Made by <Link sx={linkStyle} href="https://www.linkedin.com/in/agustinferres/">Agustin Ferres |</Link>
      </Typography>
      <Typography variant="caption">
        Find me on {` `}
        <Link sx={linkStyle} href="https://github.com/AgustinFerres">GitHub |</Link>
      </Typography>
      <Typography variant="caption">
        &copy; 2024 Agustin Ferres.
      </Typography>
    </Stack>
  );
}
