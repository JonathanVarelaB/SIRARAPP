// REACT
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// COMPONENTES

class ReestablecerContrasena extends Component {

  constructor(){
    super();
    this.state = { 
      validaciones: {
        errorContrasenaNueva: "", 
        errorContrasenaRepetida: "", 
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

    render(){
      return(
        <div class="contenidoBody">
          <div id="bloqueReestablecer">
            <div className="wrapperContenido">
              <div id="encabezadoLogin" className="container">
                <div id="leyenda">
                  <p className="textoGrande">Reestablecer contraseña</p>
                  <p className="textoPequenno"> / Nombre Usuario / </p>
                </div>
              </div>
              <div id="formLogin" className="container">

                <form>
                <div id="inputs">
                    <TextField
                      id="nuevaContrasena" 
                      type="password"
                      errorText={this.state.validaciones.errorContrasenaNueva}
                      fullWidth="true"
                      underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                      floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                      floatingLabelText="Nueva contraseña"
                    />
                    <TextField
                      id="repetirContrasena" 
                      type="password"
                      errorText={this.state.validaciones.errorContrasenaRepetida}
                      fullWidth="true"
                      underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                      floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                      floatingLabelText="Repetir contraseña"
                    />
                  </div>
                  <RaisedButton label="Enviar" fullWidth={true}/>
                </form>
                <div id="olvContraseña">
                  <p><a><Link to='/autenticacion'>Inicie sesión</Link></a> si no desea reestablecerla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default ReestablecerContrasena