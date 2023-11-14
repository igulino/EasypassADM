import { Box, Card, CardMedia, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Typography, styled } from "@mui/material"
import ModalContext from "../../context/Modalcontext";
import { useContext, useState } from "react";
import theme from "../../assets/theme";
import { AccountCircle, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { BtnL } from "../bases/buttons/Button";
import colors from "../../assets/colors";
import buscad from "../../assets/buscad.jpg"
import { AdmLogin, EmpresaLogin } from "../login/connections";

export function HomeComp() {
    const { verify, themes, fundo } = useContext(ModalContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState('')
    const navigate = useNavigate();

    const StyledCardMedia = styled(CardMedia)(() => ({
        width: "120%",
        height: "100%",
        objectFit: "cover",
    }));
    async function fun() {
        var sa = AdmLogin(email, password);
        const prom = Promise.resolve(sa);
        prom.then((value) => {
          console.log(value);
          navigate(value)
        });
      };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const HandleForget = () => {
        navigate('/Cadastro/EsqueciaSenha')
    }

    async function LoginAdm() {
        setLoading(true)
        setDisable(true)
        const result = AdmLogin(email, password);
        const resolve = Promise.resolve(result);
        resolve.then((value) => {
            setLoading(false)
            setDisable(false)
            console.log(value);
            navigate(value)
        });
    };

    async function LoginEmpresa() {
        setLoading(true)
        setDisable(true)
        const result = EmpresaLogin(cnpj, password);
        const resolve = Promise.resolve(result);
        resolve.then((value) => {
            setLoading(false)
            setDisable(false)
            console.log(value);
            navigate(value)
        });
    };

    return (
        <>
            <Box sx={{
                background: verify ? '#121212' : 'white',
                height: "85vh",
                width: "100vw",
                zIndex: -1,
            }}>
                <Card sx={{
                    background: verify ? '#121212' : '#F0F0FF',
                    height: "80vh",
                    width: "65vw",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    flexDirection: "row",
                    [theme.breakpoints.down('md')]: {
                        height: "60vh",
                    }
                }}>
                    <Container id="cont1" sx={{
                        background: verify ? '#121212' : '#F0F0FF',
                        height: "80vh",
                        width: "65vw",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: 5,
                        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        flexDirection: "row",
                        overflow: "hidden"
                    }}>
                        <Container sx={{
                            marginLeft: "-22px",
                            width: "110%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        }}>
                            <StyledCardMedia
                                image={buscad}
                                sx={{
                                    backgroundPosition: "left",
                                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                }}
                            />
                        </Container>
                        <Container sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}>
                            <Typography sx={{
                                fontSize: {
                                    xs: "3.5vw",
                                    sm: "2.5vw",
                                    md: "2vw",
                                    lg: "2vw",
                                    xl: "2vw",
                                },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: '10px',
                                color: verify ? 'white' : '#222222'
                            }}>Login ADM</Typography>

                            <Typography sx={{
                                textAlign: 'center', mb: '40px', color: verify ? 'white' : '#666666', fontSize: {
                                    xs: "2.5vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                            }}>
                                Entre com um email e senha:
                            </Typography>
                            <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    Email
                                </InputLabel>
                                <Input
                                    inputProps={{ maxLength: 45 }}
                                    required
                                    id="input-with-icon-adornment"
                                    value={email}
                                    onChange={(event) => setEmail?.(event.target.value)}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    }
                                    sx={{
                                        fontSize: '14px', outline: 0
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '80%', mb: '40px' }}>
                                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                                <Input
                                    inputProps={{ maxLength: 20 }}
                                    required
                                    id="standard-adornment-password"
                                    value={password}
                                    onChange={(event) => setPassword?.(event.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    sx={{ fontSize: '14px' }}
                                />
                            </FormControl>
                            <BtnL handleLogin={fun()} loading={loading} dis={disable} name="Entrar" cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} mb={undefined} />
                            <Typography sx={{
                                textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                    xs: "2.5vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                            }}>
                                É uma empresa? Clique <Link
                                    sx={{
                                        fontSize: {
                                            xs: "2.5vw",
                                            sm: "1.5vw",
                                            md: "1.2vw",
                                            lg: "1vw",
                                            xl: "1vw",
                                        },
                                    }}
                                    component="button"
                                    variant="body2"
                                    onClick={() => setShowComponent(true)}
                                >
                                    aqui
                                </Link>
                                <Typography sx={{
                                    textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                        xs: "2vw",
                                        sm: "1.1vw",
                                        md: "1vw",
                                        lg: "0.8vw",
                                        xl: "0.8vw",
                                    },
                                }}>
                                    Esqueceu sua senha? Clique <Link
                                        sx={{
                                            fontSize: {
                                                xs: "2vw",
                                                sm: "1.1vw",
                                                md: "1vw",
                                                lg: "0.8vw",
                                                xl: "0.8vw",
                                            },
                                        }}
                                        component="button"
                                        variant="body2"
                                        onClick={HandleForget}
                                    >
                                        aqui
                                    </Link>
                                </Typography>
                                .
                            </Typography>
                        </Container>
                    </Container>
                    {/* Segundo Container */}
                    {showComponent && <Container id="cont1" sx={{
                        background: verify ? '#121212' : '#F0F0FF',
                        height: "80vh",
                        width: "65vw",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: 5,
                        boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        flexDirection: "row",
                        overflow: "hidden",
                    }}>
                        <Container sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}>
                            <Typography sx={{
                                fontSize: {
                                    xs: "3.5vw",
                                    sm: "2.5vw",
                                    md: "2vw",
                                    lg: "2vw",
                                    xl: "2vw",
                                },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: '10px',
                                color: verify ? 'white' : '#222222'
                            }}>Login Empresa</Typography>

                            <Typography sx={{
                                textAlign: 'center', mb: '40px', color: verify ? 'white' : '#666666', fontSize: {
                                    xs: "2.5vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                            }}>
                                Entre com seu CNPJ e sua senha:
                            </Typography>
                            <form style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <FormControl variant="standard" sx={{ width: '80%', mb: '20px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        CNPJ
                                    </InputLabel>
                                    <Input
                                        inputProps={{ maxLength: 16 }}
                                        required
                                        value={cnpj}
                                        placeholder="Insira seu CNPJ"
                                        onChange={(event) => {
                                            const { value } = event.target;
                                            const newValue = value.replace(/\D/g, '');
                                            setCnpj(newValue);
                                        }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ width: '80%', mb: '40px' }}>
                                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(event) => {
                                            const { value } = event.target;
                                            setPassword?.(value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        sx={{ fontSize: '14px' }}
                                    />
                                </FormControl>
                            </form>
                            <BtnL name="Enviar" loading={loading} dis={disable} handleLogin={LoginEmpresa} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />
                            <Typography sx={{
                                textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                    xs: "2.5vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                            }}>
                                É um ADM? Clique <Link
                                    sx={{
                                        fontSize: {
                                            xs: "2.5vw",
                                            sm: "1.5vw",
                                            md: "1.2vw",
                                            lg: "1vw",
                                            xl: "1vw",
                                        },
                                    }}
                                    component="button"
                                    variant="body2"
                                    onClick={() => setShowComponent(false)}
                                >
                                    aqui
                                </Link>
                                .
                            </Typography>
                            <Typography sx={{
                                textAlign: 'center', mt: '20px', color: '#666666', fontSize: {
                                    xs: "2vw",
                                    sm: "1.1vw",
                                    md: "1vw",
                                    lg: "0.8vw",
                                    xl: "0.8vw",
                                },
                            }}>
                                Esqueceu sua senha? Clique <Link
                                    sx={{
                                        fontSize: {
                                            xs: "2vw",
                                            sm: "1.1vw",
                                            md: "1vw",
                                            lg: "0.8vw",
                                            xl: "0.8vw",
                                        },
                                    }}
                                    component="button"
                                    variant="body2"
                                    onClick={HandleForget}
                                >
                                    aqui
                                </Link>
                                .
                            </Typography>
                        </Container>
                        <Container sx={{
                            marginRight: "-22px",
                            width: "110%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        }}>
                            <StyledCardMedia
                                image={buscad}
                                sx={{
                                    backgroundPosition: "right",
                                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                }}
                            />
                        </Container>
                    </Container>}
                </Card>
            </Box>
        </>
    )
}