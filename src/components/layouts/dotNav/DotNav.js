import React from 'react';
import { Link } from 'react-scroll';

export default function DotNav() {
  const pages = ['trip', 'driver', 'vehicle', 'map'];

  return (
    <ul>
      {pages.map((el, key )=> (
        <li>
          <Link
            activeClass="active"
            to={`${el}`}
            // spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            >
            {el}
          </Link>
        </li>
        ))}
    </ul>
  )
}
