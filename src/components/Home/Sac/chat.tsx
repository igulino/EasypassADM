import { Box, TextField } from "@mui/material";

export function Chat() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "red",
          height: "100vh",
          width: "25vw",
          ml: "20vw",
        }}
      >
        <Box>
            <TextField variant="standard" label="Pesquisar..."/>
        </Box>
      </Box>
    </>
  );
}
