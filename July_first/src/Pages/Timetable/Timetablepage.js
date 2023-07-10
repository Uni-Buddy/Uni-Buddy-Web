import Timetable from './Timetable/Timetable';
import Semester from './Semester/Semester';
import Nav from './Nav/Nav';
import Logo from './img/Logo.png';
import './All.css';


function Timetablepage() {
    return (
        <>
            <div className='Header'>
                <img
                    src={Logo}
                    alt="Logo"
                    className="Logo"
                    onClick={() => window.location.reload()}
                />
            </div>
            <Nav />
            <div className='all'>
                <Semester />
                <Timetable />
            </div></>
    );
}

export default Timetablepage;