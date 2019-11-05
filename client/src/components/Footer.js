import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            {/* <h5 className="white-text">Bronnen</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p> */}
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Bronnen</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.enforex.com/spaans/taal/spaanse-verleden-onvoltooide-tijd.html"
                >
                  Verleden en onvoltooide tijd
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grey-text text-lighten-3"
                  href="https://www.fluentin3months.com/spanish-verb-conjugation/"
                >
                  Verleden tijd
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2019 De Gijs Lebesque
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/gijslebesque"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
