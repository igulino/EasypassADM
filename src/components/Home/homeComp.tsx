import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { color } from '@mui/system';
import { Btn } from "../Button";


export function HomeComp() {
    return(<>
        <Box sx={{
            minHeight: '80vh',
            minWidth: '90vw',
            display: 'flex',
            JustifyContent: 'center',
            alignItems: 'center',
            marginLeft: '5vw',
            border: 1,
        }}>
            {/*empresa*/}
            <Box sx={{
                backgroundColor: 'red',
                minHeight: '60vh',
                minWidth: '30vw',
                margin: '5vw',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Btn name={'empresa'} route={'/empresa'} cl={'white'} m={'auto'} mb={'10vh'}/>
            </Box>
            {/*ADM*/}
            <Box sx={{
                backgroundColor: 'purple',
                minHeight: '60vh',
                minWidth: '30vw',
                marginLeft: '15vw',
                JustifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}><Btn name={'administrador'} route={'/adm'} cl={'white'} m={'auto'} mb={'10vh'}/></Box>
        </Box></>)
}