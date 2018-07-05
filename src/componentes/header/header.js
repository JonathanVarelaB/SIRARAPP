import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import conLogo from '../../assets/logos/conLogo.png';
import azulPrincipal from '../../estilos/js/estilos';
import {AppBar, Drawer, MenuItem} from 'material-ui';
import usuario from '../../proveedores/datosUsuario';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      estilos: {
        opcionMenu:{
          color: "#0A304E"
        }
      },
      desplegarMenu: false
    }
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50)
        $('.appBar').addClass('shrink');
      else 
        $('.appBar').removeClass('shrink');
    });
  }

  cambiarEstadoMenu = () => {
    this.setState({desplegarMenu: !this.state.desplegarMenu});
  }

  render(){
    return(
      <header>
        <AppBar 
          className="appBar"
          iconElementRight={<p>Sistema Integrado de Resultados de Alto Rendimiento</p>}
          title={<img src={conLogo}/>} 
          onLeftIconButtonClick={this.cambiarEstadoMenu}
        />
        <Drawer 
          className="drawer"
          containerStyle={{backgroundColor: "#13293B"}}
          open={this.state.desplegarMenu} 
          docked={false} 
          onRequestChange={(desplegarMenu) => this.setState({desplegarMenu})}>
          <Link to="/perfil">
            <div id="perfilContenedor">
              <MenuItem>
                <div id="perfil">
                  <i className="far fa-edit"></i>
                  <img src={usuario.foto} />
                  <p>{usuario.nombre}</p>
                </div>
              </MenuItem>
            </div>
          </Link>
          <div id="opcionesMenu">
            <MenuItem>
              <div id="infoSistemaMenu">
                <p id="comiteLeyenda">Comité Olímpico Nacional</p>
                <div id="sistemaLeyenda">
                  <p>Sistema Integrado de Resultados</p>
                  <p>de Alto Rendimiento</p>
                </div>
              </div>
            </MenuItem>
              <Link to="/"><MenuItem rightIcon={<i className="fas fa-home"></i>}>Inicio</MenuItem></Link>
              <Link to="/autenticacion"><MenuItem rightIcon={<i className="fas fa-volleyball-ball"></i>}>Deportes</MenuItem></Link>
              <Link to="/"><MenuItem rightIcon={<i className="fas fa-calendar-alt"></i>}>Eventos</MenuItem></Link>
              <Link to="/"><MenuItem rightIcon={<i className="fas fa-history"></i>}>Histórico</MenuItem></Link>
              <Link to="/usuarios"><MenuItem rightIcon={<i className="fas fa-users"></i>}>Usuarios</MenuItem></Link>
              <MenuItem rightIcon={<i className="fas fa-sign-out-alt"></i>}>Salir</MenuItem>
            </div>
        </Drawer>
      </header>
    )
  }
}

export default Header