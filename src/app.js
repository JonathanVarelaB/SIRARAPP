// REACT
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// COMPONENTES
import Login from './componentes/login/login';
import ReestablecerContrasena from './componentes/reestablecerContrasena/reestablecerContrasena';
import Inicio from './componentes/inicio/inicio';
import Perfil from './componentes/perfil/perfil';
import Footer from './componentes/footer/footer';
import Usuarios from './componentes/usuarios/usuarios';
import $ from 'jquery';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {

  constructor(){
    super();
    if(window.innerWidth > 830){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50)
          $('.segundoMenu').addClass('scrollSegundoMenu');
        else 
          $('.segundoMenu').removeClass('scrollSegundoMenu');
      });
    }

    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                   '-moz-transform' : 'rotate('+ degrees +'deg)',
                   '-ms-transform' : 'rotate('+ degrees +'deg)',
                   'transform' : 'rotate('+ degrees +'deg)'});
      return $(this);
    };
  }
  render(){
    return(
      <div>
        <main>
          <MuiThemeProvider>
            <Switch>
              <Route exact path='/' component={Inicio}/>
              <Route path='/autenticacion' component={Login}/>
              <Route path='/reestablecer' component={ReestablecerContrasena}/>
              <Route path='/perfil' component={Perfil}/>
              <Route path='/usuarios' component={Usuarios}/>
            </Switch>
            <Footer/>
          </MuiThemeProvider>
        </main>
      </div>
    )
  }
}

export default App