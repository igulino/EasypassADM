import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Btn } from '../bases/buttons/Button';
import { AdmLogin } from './connections';
import { useNavigate } from 'react-router-dom';

export function AdmComp() {
    const navigator = useNavigate();
    const [showPassword, showPassword1] = useState(false);
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const handleClickShowPassword = () => showPassword1((show) => !show);

    async function fun() {
      var sa = AdmLogin(email, password);
      const prom = Promise.resolve(sa);
      prom.then((value) => {
        console.log(value);
        navigator(value)
      });
    };
    
    return(<>
          <Box sx={{
            minHeight: '80vh',
            minWidth: '90vw',
            display: 'flex',
            JustifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '5vw',
      
        }}>
            <Box sx={{
                boxShadow: 3,
                minHeight: '60vh',
                minWidth: '30vw',
                margin: '5vw',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TextField variant='standard' onChange={(i) => setemail(i.target.value)} sx={{m: 5, width: '25ch'}} label='Email'></TextField>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={i => setpassword(i.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Btn name='continue>>' fun={fun} ml='15vw' Mt='5vh'></Btn>
            </Box>
        </Box>
</>)}