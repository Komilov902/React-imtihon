import men1 from '../img/javohir.jpg';
import './mentors.css';

function Mentors() {
  return (
    <div className="marq">
      <marquee height='300px' direction="">
        <div className="marq1">
          <img className='sm' src={men1} alt="Mentor" />
        </div>
      </marquee>
    </div>
  );
}

export default Mentors;
