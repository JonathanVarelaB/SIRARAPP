// REACT
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
// COMPONENTES
import unaLogo from '../../assets/logos/unaLogo.png';

class Footer extends Component {

  render(){
    return(
      <footer>
        <GridList padding={0} cellHeight={35} cols={4} id="redesSociales">
          <GridTile>
            <a href="https://www.facebook.com" target="blank"><i className="fab fa-facebook-f"></i></a>
          </GridTile>
          <GridTile>
            <a href="https://www.twitter.com" target="blank"><i className="fab fa-twitter"></i></a>
          </GridTile>
          <GridTile>
            <a href="https://www.instagram.com" target="blank"><i className="fab fa-instagram"></i></a>
          </GridTile>
          <GridTile>
            <a href="https://www.youtube.com" target="blank"><i className="fab fa-youtube"></i></a>
          </GridTile>
        </GridList>
        <GridList padding={0} cellHeight={35} cols={2} id="unaInfo">
          <GridTile>
            <div id="desarrolloInfo">
              <p>Desarrollado por Universidad Nacional</p>
              <p>Todos los derechos reservados 2018</p>
            </div>
          </GridTile>
          <GridTile>
            <div id="una">
              <a href="http://www.una.ac.cr/" target="blank"><img src={unaLogo}/></a>
            </div>
          </GridTile>
        </GridList>
      </footer>
    )
  }
}

export default Footer