// REACT
import React, {Component} from 'react';
import $ from 'jquery';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// COMPONENTES
import conLogo from '../../assets/logos/conLogo.png';

class Login extends Component {

    constructor(){
      super();
      this.state = { 
        validaciones: {
          errorCorreo: "", 
          errorContrasena: "", 
        },
        estilos: { 
          underlineFocusStyle: {
            borderBottomColor: "#00478A"
          },
          floatingLabelShrinkStyle: {
            color: "#336CA1"
          }
        },
        datos:{
          
        }
      };
    }

    olvidoContrasena = () => {
      $(document).ready( () => {
        $('#login').css('display', 'none');
        $('#recuperacion').css('display', 'block');
      });
    }

    login = () => {
      $(document).ready( () => {
        $('#recuperacion').css('display', 'none');
        $('#login').css('display', 'block');
      });
    }

    render(){
      return(
        <div class="contenidoBody">
          <div id="bloqueAutenticacion">
            <div className="wrapperContenido" id="login">
              <GridList cellHeight={120} cols={2} id="encabezadoLogin">
                <GridTile>
                  <img src={conLogo}/>
                </GridTile>
                <GridTile>
                  <div id="leyendaLogin">
                    <p className="textoGrande">Iniciar sesión</p>
                    <p className="textoPequenno">Sistema Integrado de Resultados de Alto Rendimiento</p>
                  </div>
                </GridTile>
              </GridList>
              <div id="formLogin" className="container">
                <form>
                  <div id="inputs">
                    <TextField
                      id="correoUsuarioLogin" 
                      type="email"
                      errorText={this.state.validaciones.errorCorreo}
                      fullWidth="true"
                      underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                      floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                      floatingLabelText="Correo Electrónico"
                    />
                    <TextField
                      id="claveUsuario" 
                      type="password"
                      errorText={this.state.validaciones.errorContrasena}
                      fullWidth="true"
                      underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                      floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                      floatingLabelText="Contraseña"
                    />
                  </div>
                  <RaisedButton label="Iniciar" fullWidth={true}/>
                </form>
                <div id="olvContraseña">
                    <p>¿<a onClick={this.olvidoContrasena}>Olvidó su contraseña</a>?</p>
                </div>
              </div>
            </div>
            <div className="wrapperContenido" id="recuperacion">
              <div id="encabezadoReestablecer" className="container">
                <div id="leyendaReestablecer">
                  <p className="textoGrande">Reestablecer contraseña</p>
                  <p className="textoPequenno">Se enviará un enlace a su correo electrónico</p>
                </div>
              </div>
              <div id="formLogin" className="container">
                <form>
                <div id="inputs">
                    <TextField
                      id="correoUsuarioRecuperacion" 
                      type="email"
                      errorText={this.state.validaciones.errorCorreo}
                      fullWidth="true"
                      underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                      floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                      floatingLabelText="Correo Electrónico"
                    />
                  </div>
                  <RaisedButton label="Enviar" fullWidth={true}/>
                </form>
                <div id="olvContraseña">
                  <a onClick={this.login}>Iniciar Sesión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Login