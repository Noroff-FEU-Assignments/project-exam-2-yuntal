
import { useContext } from "react";
import {useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {Navbar, Container, Nav } from "react-bootstrap";
import { FiUsers} from 'react-icons/fi';
import { FiUser} from 'react-icons/fi';
import {BsHouse} from 'react-icons/bs';
import {BsList} from 'react-icons/bs';

function NavigationBar() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<> 
		<Navbar expand="lg text-white"  style={{backgroundColor:'#212121', color:'#fff'}}>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="basic">
        <Nav className="">            
        <Nav.Link href="/"></Nav.Link>
            {auth ? (
                <>
                 <Nav.Link href="/"></Nav.Link> <button className="logout"onClick={logout}>Log out</button> 
                </>
            ) : (
                <Nav.Link href="/Login" style={{marginTop:'1rem'}}><FiUser style={{fontSize:'26px', marginRight:'15px', marginLeft:'2rem'}}/>login</Nav.Link>   
            )}
                <Nav.Link href="/PostFeed" style={{marginTop:'1rem'}}><BsList style={{fontSize:'26px', marginRight:'15px', marginLeft:'2rem'}}/>Social</Nav.Link>   
                <Nav.Link href="/Friends" style={{marginTop:'1rem'}}><FiUsers style={{fontSize:'26px', marginRight:'15px', marginLeft:'2rem'}}/>Friends</Nav.Link>   
                <Nav.Link href="/myprofile" style={{marginTop:'1rem'}}><BsHouse style={{fontSize:'26px', marginRight:'15px', marginLeft:'2rem'}}/>Home</Nav.Link>                
        </Nav>
        </Navbar.Collapse>
    </Navbar>
	</>
	);
}

export default NavigationBar;





