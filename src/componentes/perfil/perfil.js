import React, {Component} from 'react';
import Header from '../header/header';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import usuario from '../../proveedores/datosUsuario';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


class Perfil extends Component {

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
      foto: '',
      nombre: '',
      email: '',
      id: '',
      telefono: '',
      opcionesFoto: false,
      modalFoto: false,
      banderaCarga: false,
      indexTab: 0
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(
          {foto: usuario.foto, nombre: usuario.nombre, email: usuario.email, 
          id: usuario.id, telefono: usuario.telefono,
          banderaCarga: true});
    }, 2000)
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

  cambiarIndexTabs = (value) => {
    this.setState({
      indexTab: value,
    });
  };

  render(){
    return(
      <div className="contenidoBody">
        <Header/>
        <div className="contenedorPagina" id="contenedorPerfil">
          <Tabs
            className="tabs segundoMenu"
            inkBarStyle={{backgroundColor: '#C91D32'}}
            onChange={this.cambiarIndexTabs}
            value={this.state.indexTab}
          >
            <Tab label="Datos Personales" value={0} />
            <Tab label="Cambio Contraseña" value={1} />
          </Tabs>
          <SwipeableViews
            index={this.state.indexTab}
            onChangeIndex={this.cambiarIndexTabs}
          >
            <div id="formPerfil" className="container">
              { this.state.banderaCarga ?
                <form>
                  <div id="inputs">
                      <div id="fotoPerfil">
                        <img id="imagenPerfil" src={this.state.foto}/>
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
                          <MenuItem primaryText="Ver foto" onClick={this.verFoto}/>
                          <MenuItem primaryText="Subir foto" onClick={this.subirFoto}/>
                        </Menu>
                      </Popover>
                      <TextField
                        value={this.state.nombre}
                        id="nombrePerfil" 
                        type="text"
                        errorText={this.state.validaciones.errorNombre}
                        fullWidth={true}
                        underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                        floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                        floatingLabelText="Nombre"
                      />
                      <TextField
                        value={this.state.email}
                        id="emailPerfil" 
                        type="text"
                        errorText={this.state.validaciones.errorEmail}
                        fullWidth={true}
                        underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                        floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                        floatingLabelText="Correo Electrónico"
                      />
                      <TextField
                        value={this.state.id}
                        id="idPerfil" 
                        type="text"
                        errorText={this.state.validaciones.errorId}
                        fullWidth={true}
                        underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                        floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                        floatingLabelText="Identificación"
                      />
                      <TextField
                        value={this.state.telefono}
                        id="telefonoPerfil" 
                        type="tel"
                        errorText={this.state.validaciones.errorTelefono}
                        fullWidth={true}
                        underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                        floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                        floatingLabelText="Teléfono"
                      />
                  </div>
                  <RaisedButton label="Guardar" fullWidth={true}/>
                </form>
              :
                <div id="inputsSkeleton">
                  <div id="fotoSkeleton">
                    <Skeleton/>
                  </div>
                  <div id="cuerpoSkeleton">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                  </div>
                </div>
              }
            </div>
            <div id="formPerfil" className="container">
              <form>
                <div id="inputs">
                  <TextField
                    id="actualContrasena" 
                    type="password"
                    errorText={this.state.validaciones.errorActualContrasena}
                    fullWidth="true"
                    underlineFocusStyle={this.state.estilos.underlineFocusStyle}
                    floatingLabelShrinkStyle={this.state.estilos.floatingLabelShrinkStyle}
                    floatingLabelText="Actual contraseña"
                  />
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
                <RaisedButton label="Guardar" fullWidth={true}/>
              </form>
            </div>
          </SwipeableViews>
          <Dialog
            overlayClassName="overlayVisualizador"
            contentClassName="visualizadorModal"
            open={this.state.modalFoto}
            onRequestClose={this.cerrarFoto}
          >
            <img src={this.state.foto} />
          </Dialog>
        </div>
      </div>
    )
  }
}
  
export default Perfil