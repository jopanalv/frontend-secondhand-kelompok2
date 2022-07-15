import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Button, Dropdown, Offcanvas } from "react-bootstrap";
import { FiLogIn, FiList, FiUser, FiBell } from "react-icons/fi";
import { addSearch } from "../slice/searchingSlice";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/action/loginAction';
import "../assets/style2.css"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    background: '#EEEEEE',
    borderRadius: '16px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    display: 'block',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '35ch',
        },
    },
}));

export default function Navigasi() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [searching, setSearching] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector(state => state.login)
    //change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    const handleSearch = () => {
        dispatch(
            addSearch(searching)
        )
    }

    window.addEventListener('scroll', changeColor)

    useEffect(() => {
        handleSearch();
    }, [searching]);

    const userState = useSelector(state => state.login)

    const handleSignOut = () => {
        dispatch(logout())
        navigate('/login', { replace: true })
    }

    const handleProfile = () => {
        navigate('/info-profile', { replace: true })
    }

    return (
        <>
            <Navbar expand="lg" className={color ? 'navbar-scroll' : 'navbar1'} >
                <Container className="home-navbar" >
                    <Navbar.Brand className="logo" href="/"></Navbar.Brand>
                    <div className="me-auto">
                        <Search>
                            <SearchIcon className="search-icon" />
                            <StyledInputBase
                                onChange={(e) => {
                                    setSearching(e.target.value)
                                }}
                                placeholder="Cari di sini …"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                    <div>
                        <Navbar.Toggle onClick={handleShow} aria-controls="off-canvas" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            {!user.isAuthenticated ? (
                                <Navbar.Offcanvas show={show} onHide={handleClose} id="off-canvas">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title className="title-navbar">Second Hand</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Button variant="success" className="btn-register" href="/login">
                                            <FiLogIn className="regis" />
                                            Masuk
                                        </Button>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>

                            ) : (
                                <>
                                    <FiList className="icon-list-header m-3" />
                                    <FiBell className="icon-bell-header m-3" />
                                    <div class="dropdown">
                                        <button class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FiUser className="icon-user-header" />
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><h5 class="dropdown-header">Hi, {userState.user.data.Profile.name} </h5></li>
                                            <li><button class="dropdown-item" type="button" onClick={() => handleProfile()}>Profile</button></li>
                                            <li><button class="dropdown-item" type="button">Another action</button></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><button class="dropdown-item" onClick={() => handleSignOut()}>
                                                Sign Out
                                            </button></li>
                                        </ul>
                                    </div>

                                    <Offcanvas show={show} onHide={handleClose} id="off-canvas">
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title className="title-navbar">Second Hand</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Dropdown.Item href="#/action-1">Notifikasi</Dropdown.Item>
                                            <Dropdown.Item className="mt-2" href="#/action-1">Daftar Jual</Dropdown.Item>
                                            <Dropdown.Item className="mt-2" href="/account">Akun Saya</Dropdown.Item>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </>
                            )
                            }
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>

    );
}