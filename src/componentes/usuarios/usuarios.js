// REACT
import React, {Component} from 'react';
import $ from 'jquery';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Header from '../header/header';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import SearchBar from 'material-ui-search-bar'
import FormularioUsuario from '../formularioUsuario/formularioUsuario';
import usuarioSeleccionado from '../../proveedores/almacenamiento';

class Usuarios extends Component {

  constructor(){
    super();
    this.state = {
      usuariosOriginal: [],
      usuariosVista: [],
      banderaCarga: false,
      banderaFormulario: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({usuariosOriginal: [
        {foto: "", nombre: "Usuario Prueba Primero", email: "primero@gmail.com", telefono: "11111111", rol: "Administrador", id:"1"},
        {foto: "", nombre: "Usuario Prueba Segundo", email: "segundo@gmail.com", telefono: "22222222", rol: "Colaborador", id:"2"},
        {foto: "", nombre: "Usuario Prueba Tercero", email: "tercero@gmail.com", telefono: "3333333", rol: "Colaborador", id:"3"},
        {foto: "", nombre: "Usuario Prueba Cuarto", email: "cuarto@gmail.com", telefono: "44444444", rol: "Administrador", id:"4"},
        {foto: "", nombre: "Usuario Prueba Quinto", email: "quinto@gmail.com", telefono: "5555555", rol: "Administrador", id:"5"},
        {foto: "", nombre: "Usuario Prueba Sexto", email: "sexto@gmail.com", telefono: "6666666", rol: "Colaborador", id:"6"},
        {foto: "", nombre: "Usuario Prueba Setimo", email: "setimo@gmail.com", telefono: "7777777", rol: "Administrador", id:"7"},
        {foto: "", nombre: "Usuario Prueba Octavo", email: "octavo@gmail.com", telefono: "88888888", rol: "Administrador", id:"8"},
        {foto: "", nombre: "Usuario Prueba Noveno", email: "noveno@gmail.com", telefono: "9999999", rol: "Colaborador", id:"9"},
        {foto: "", nombre: "Usuario Prueba Primero", email: "primero@gmail.com", telefono: "11111111", rol: "Administrador", id:"1"},
        {foto: "", nombre: "Usuario Prueba Segundo", email: "segundo@gmail.com", telefono: "22222222", rol: "Colaborador", id:"2"},
        {foto: "", nombre: "Usuario Prueba Tercero", email: "tercero@gmail.com", telefono: "3333333", rol: "Colaborador", id:"3"},
        {foto: "", nombre: "Usuario Prueba Cuarto", email: "cuarto@gmail.com", telefono: "44444444", rol: "Administrador", id:"4"},
        {foto: "", nombre: "Usuario Prueba Quinto", email: "quinto@gmail.com", telefono: "5555555", rol: "Administrador", id:"5"},
        {foto: "", nombre: "Usuario Prueba Sexto", email: "sexto@gmail.com", telefono: "6666666", rol: "Colaborador", id:"6"},
        {foto: "", nombre: "Usuario Prueba Setimo", email: "setimo@gmail.com", telefono: "7777777", rol: "Administrador", id:"7"},
        {foto: "", nombre: "Usuario Prueba Octavo", email: "octavo@gmail.com", telefono: "88888888", rol: "Administrador", id:"8"},
        {foto: "", nombre: "Usuario Prueba Noveno", email: "noveno@gmail.com", telefono: "9999999", rol: "Colaborador", id:"9"}
      ]});
      this.setState({usuariosVista: this.state.usuariosOriginal});
      this.setState({banderaCarga: true});
      this.funcionamientoBotonAgregar();
    }, 1000)
  }

  manejoFormulario = () => {
    var eventos = (this.state.banderaFormulario) ? "auto" : "none";
    $('header').css('pointerEvents', eventos);
    $('#cuerpoUsuarios').fadeToggle(800);
    $('#modalFormUsuario').slideToggle(800);
    this.setState({banderaFormulario: !this.state.banderaFormulario});
  }

  funcionamientoBotonAgregar = () => {
    ($("body").height() < window.innerHeight) ? $('.botonAgregarUsuario').addClass('subirBoton') : null;
      var alturaContenedor = $("body").height() - $("footer").height();
      $(window).scroll(function() {
        $('.botonAgregarUsuario').toggleClass('subirBoton', ($(document).scrollTop() > alturaContenedor))
      });
  }

  estructuraSkeleton = () => {
    var items = [];
    var iterador = 0;
    var cantidadItems = parseInt(window.innerHeight / 102) - 1;
    while(iterador < cantidadItems){
      items.push(
        <section>
          <ListItem
            className="itemUsuario"
            leftAvatar={<p id="fotoSkeleton"><Skeleton/></p>}
            hoverColor="transparent"
            primaryText={<Skeleton/>}
            secondaryText={<p><Skeleton/><Skeleton/><Skeleton/></p>}
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </section>
      );
      iterador++;
    }
    return items;
  }

  busqueda = () => {
    return <SearchBar 
      className="barraBusquedaUsuarios"
      hintText="Buscar"
      onChange={(valor) => this.buscar(valor)}
      onRequestSearch={() => console.log("search")}
      //style={{boxShadow: 'transparent',width: '90%',margin: '5px auto 0 auto',maxWidth:'500px'}}
      //iconButtonStyle={{height:'20px',marginTop:'17px',padding:'0',transform:'scale(0.8,0.8)'}}
    />
  }

  buscar = (valor) => {
    if(valor == "")
      this.setState({usuariosVista: this.state.usuariosOriginal});
    else{
      var resultados = [];
      this.state.usuariosOriginal.map((u) => {
        if(u.nombre.includes(valor) || u.email.includes(valor) || u.telefono.includes(valor) || u.rol.includes(valor))
          resultados.push(u);
      });
      this.setState({usuariosVista: resultados});
    }
  }

  seleccionarUsuario = (usuario) => {
    //usuarioSeleccionado = Usuario(usuario);
    this.manejoFormulario();
  }

    render(){
      return(
        <div className="contenidoBody">
            <Header/>
            <div className="contenedorPagina" id="contenedorUsuarios">
              <div id="encabezadoUsuarios" className="segundoMenu">
                <p>Usuarios</p>
                {this.busqueda()}
              </div>
              <div id="cuerpoUsuarios">
                <div id="formularioUsuarios">
                  <FormularioUsuario></FormularioUsuario>
                </div>
                <div id="listadoUsuarios">
                  { this.state.banderaCarga ?
                    <section>
                      <List>
                        {
                          (this.state.usuariosVista.length > 0) ?
                            this.state.usuariosVista.map((u) => 
                              <section>
                                <ListItem
                                  className="itemUsuario"
                                  leftAvatar={<Avatar src={u.foto} />}
                                  hoverColor="transparent"
                                  primaryText={u.nombre}
                                  onClick={() => this.seleccionarUsuario(u)}
                                  secondaryText={
                                    <p>
                                      <span>{u.email}</span><br/>
                                      <span>{u.telefono}</span><br/>
                                      <span id="labelRolUsuario" style={{color: "#C91D32"}}>{u.rol}</span>
                                    </p>
                                  }
                                  secondaryTextLines={2}
                                />
                                <Divider inset={true} />
                              </section>
                            )
                          :
                            <p className="mensajeSinRegistros">Sin resultados</p>
                        }
                      </List>
                      <FloatingActionButton 
                        className="botonAgregarUsuario"
                        onClick={this.manejoFormulario}
                      >
                          <ContentAdd />
                      </FloatingActionButton>
                    </section>
                  :
                    <List>
                      <SkeletonTheme>
                        {this.estructuraSkeleton()}
                      </SkeletonTheme>
                    </List>
                  }
                </div>
              </div> 
              <div id="modalFormUsuario"
              >
                <FloatingActionButton 
                  className="botonCerrarForm"
                  onClick={this.manejoFormulario}
                >
                  <svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10 fa-3x">
                    <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                    </path>
                  </svg>
                </FloatingActionButton>
                <FormularioUsuario></FormularioUsuario> 
              </div>
            </div>
        </div>
      )
    }
  }
  
  export default Usuarios