import React, { FC } from 'react'
import { Navbar as NavB, Nav } from 'react-bootstrap';
import Link from 'next/link';

interface IAppLink {
  url: string;
  className?: string;
  name: string;
}

const AppLink: FC<IAppLink> = ({ url, name, className = '' }) =>
  <Link href={url}>
    <a className={`mr-3 nav-link ${className}`}>
      {name}
    </a>
  </Link>


const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavB expand="lg" className="navbar-dark fj-mw9">
        <Link href="/">
          <a className="navbar-brand mr-3 font-weight-bold">Vasia Pupkin</a>
        </Link>
        <NavB.Toggle />
        <NavB.Collapse>
          <Nav>
            {Object.entries({
              "Home": '/',
              "Portfolios": '/portfolios',
              "Forum": '/forum/categories',
              "Cv": '/',
            }).map((item, i) => <AppLink name={item[0]} url={item[1]} key={Math.random() + i} />)}
          </Nav>
          <Nav className="ml-auto">
            <AppLink name="Sign In" url="/login" />
            <AppLink name="Sign Up" url="/" className="btn-success bg-green-2 bright" />
          </Nav>
        </NavB.Collapse>
      </NavB>
    </div>
  )
}

export default Navbar
