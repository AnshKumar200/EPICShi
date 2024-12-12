import './navbar.css';
import github from '../Images/github.png'

export default function Navbar() {
    return (
        <div className='cont'>
            <div className='title'>
                <img className='logo' src={github} />
                <div>Epics Project</div>
            </div>

            <ul>
                <li className='list-item'>Our Vision</li>
                <li className='list-item'>Research & Tech</li>
                <li className='list-item'>Values</li>
                <li className='list-item'>Articles</li>
                <li className='contact-us'>Contact Us</li>
            </ul>
        </div>
    );
}