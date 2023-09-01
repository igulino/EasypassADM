import Box from '@mui/material/Box';

export function AdmComp() {
    return(<>
          <Box sx={{
            minHeight: '80vh',
            minWidth: '90vw',
            display: 'flex',
            JustifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '5vw',
            border: 1,
        }}>
            <Box sx={{
                backgroundColor: 'red',
                minHeight: '60vh',
                minWidth: '30vw',
                margin: '5vw',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}></Box>
        </Box>
</>)}