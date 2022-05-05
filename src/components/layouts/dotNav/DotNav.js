import React from 'react';
import { Link } from 'react-scroll';

export default function DotNav() {
  const pages = ['trip', 'driver', 'vehicle', 'map'];

  return (
    <ul className='dot-nav'>
      {pages.map((el, idx )=> (
        <Link
          activeClass="active"
          key={idx}
          to={`${el}`}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className='dot-nav-li'>
          </li>
        </Link>
        ))}
    </ul>
  )
}
