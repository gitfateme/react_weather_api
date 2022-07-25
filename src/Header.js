import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
      <div className="row Header">
          <div className="col-lg-8 offset-lg-2 p-3">
            <div className="row">
              <div className="col-6 d-none d-sm-block p-3">
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> London, UK
              </span>
              </div>
              <div className="col-8 offset-2 text-center offset-sm-0 col-sm-6 text-sm-end pe-0 p-1">
                <div className="position-relative">
                <input type="search" className="search-input  p-2" placeholder="London"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon position-absolute"/>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Header;
