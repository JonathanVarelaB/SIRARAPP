import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';
import imagenDefault from '../../assets/imagenes/defaultImage.png';
import usuarioSeleccionado from '../../proveedores/almacenamiento';


class FormularioUsuario extends Component{

  constructor(){
    super();
    $(document).ready(() => {
      $('#contenedorPerfil').height(window.innerHeight - 70);
    });
    this.state = { 
      validaciones: {
        errorNombre: "", 
        errorEmail: "", 
        errorId: "", 
        errorTelefono: "", 
      },
      estilos: { 
        underlineFocusStyle: { borderBottomColor: "#00478A" },
        floatingLabelShrinkStyle: { color: "#336CA1" }
      },
      opcionesFoto: false,
      modalFoto: false,
      banderaCarga: false,
      indexTab: 0,
      labelBoton: "Agregar"
    };
  }

  mostrarPopOverFoto = (event) => {
    event.preventDefault();
    this.setState({
      opcionesFoto: true,
      anchorEl: event.currentTarget,
    });
  };

  ocultarPopOverFoto = () => {
    this.setState({
      opcionesFoto: false
    });
  };

  verFoto = () => {
    
    this.setState({modalFoto: true, opcionesFoto: false});
  };

  cerrarFoto = () => {
    this.setState({modalFoto: false});
  };

  subirFoto = () => {
    $(document).ready(() => {
      $('#inputFoto').click();
    });
    this.setState({opcionesFoto: false});
  };

  actualizarFoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      if( (event.target.files[0].size / 1024 / 1024) < 5){
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({foto: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
      }
      else{
        // alerta validacion
        console.log("La foto supera el tamaño permitido");
      }
    }
  }

  render(){
    return(
        <div id="contenedorFormUsuario">
            <div id="formPerfil">
                <form>
                  <div id="inputs">
                      <div id="fotoPerfil">
                        { (usuarioSeleccionado.foto != '')
                          ? <img id="imagenPerfil" src={usuarioSeleccionado.foto}/>
                          : <img id="imagenPerfil" src={imagenDefault}/>
                        }
                        <i className="fas fa-cog" onClick={this.mostrarPopOverFoto}></i>
                        <input id="inputFoto" type="file"  accept="image/*" onChange={this.actualizarFoto}/>
                      </div>
                      <Popover
                        open={this.state.opcionesFoto}
                        anchorEl={this.state.anchorEl}
                        onRequestClose={this.ocultarPopOverFoto}
                        anchorOrigin={{horizontal:'middle', vertical:'bottom'}}
                        targetOrigin={{horizontal:'left', vertical:'bottom'}}
                      >
                        <Menu className="opcionesPopover">
                          { (usuarioSeleccionado.foto != '')
                            ? <MenuItem primaryText="Ver foto" onClick={this.verFoto}/>
                            : null
                          }
                          <MenuItem primaryText="Subir foto" onClick={this.subirFoto}/>
                        </Menu>
                      </Popover>
                      <div id="grupoInputs">
                        <TextField
                          value={usuarioSeleccionado.id}
                          id="idPerfil" 
                          type="text"
                          errorText={this.state.validaciones.errorId}
                          fullWidth={true}
                          underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                          floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                          floatingLabelText="Identificación"
                        />
                        <TextField
                          value={usuarioSeleccionado.nombre}
                          id="nombrePerfil" 
                          type="text"
                          errorText={this.state.validaciones.errorNombre}
                          fullWidth={true}
                          underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                          floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                          floatingLabelText="Nombre"
                        />
                        <TextField
                          value={usuarioSeleccionado.email}
                          id="emailPerfil" 
                          type="text"
                          errorText={this.state.validaciones.errorEmail}
                          fullWidth={true}
                          underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                          floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                          floatingLabelText="Correo Electrónico"
                        />
                        <TextField
                          value={usuarioSeleccionado.telefono}
                          id="telefonoPerfil" 
                          type="tel"
                          errorText={this.state.validaciones.errorTelefono}
                          fullWidth={true}
                          underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                          floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                          floatingLabelText="Teléfono"
                        />
                        <TextField
                          value={usuarioSeleccionado.rol}
                          id="rolPerfil" 
                          type="text"
                          fullWidth={true}
                          underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                          floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                          floatingLabelText="Rol"
                        />
                      </div>
                  </div>
                  <div id="grupoBotones">
                    <RaisedButton label={this.state.labelBoton} fullWidth={true} className="botonAgregarU"/>
                    <RaisedButton label="Eliminar" fullWidth={true} className="botonEliminarU"/>
                  </div>
                </form>
            </div>
          <Dialog
            overlayClassName="overlayVisualizador"
            contentClassName="visualizadorModal"
            open={this.state.modalFoto}
            onRequestClose={this.cerrarFoto}
          >
            <img src={usuarioSeleccionado.foto} />
          </Dialog>
        </div>
    )
  }
}
export default FormularioUsuario