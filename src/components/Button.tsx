import { Button } from "@mui/material";

interface BtnProps {
  name: string;
  route: string;
  cl: string | undefined;
  bc: string | undefined; // Prop 'bc' agora é opcional e pode ser do tipo string ou undefined
  bch: string | undefined;
  ml?: number | undefined;
  vis: string | undefined;
  mb: string | undefined;
  m: string | undefined;
  Mt: string | undefined;
  fun?: () => void;
}

export function Btn({ name, route, cl, bc, bch, fun, ml, vis, mb, m, Mt}: BtnProps) {
    return (
      <>
        <Button variant="contained" href={route} onClick={fun} sx={{
          color: cl,
          marginRight: 1,
          margin: m,
          background: bc,
          ml: ml,
          marginBottom: mb,
          marginTop: Mt,
          visibility: vis,
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid transparent', // adiciona a borda inicialmente
          transition: 'border-color 0.3s ease-in-out', // adiciona a transição para a animação
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          width: {
            xs: '15vw',
            sm: '15vw',
            md: '10vw',
            lg: '10vw',
            xl: '10vw',
          },
          fontSize: {
            xs: '2vw',  // (7.5 / 1200) * 600
            sm: '1.5vw',  // (7.5 / 1200) * 900
            md: '1.2vw',  // (7.5 / 1200) * 1200
            lg: '1vw',
            xl: '1vw',  // Manter o mesmo tamanho de lg para xl
          },
          '&:hover': {
            border: '2px solid #0fcd88', // muda a cor da borda na animação
            background: bch
          },
        }}>
          {name}
        </Button>
      </>
    )
  }