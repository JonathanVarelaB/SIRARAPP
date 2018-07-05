import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Header from '../header/header';
import {GridList, GridTile} from 'material-ui/GridList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


class Inicio extends Component {

  constructor(){
    super();
    this.state = {
      eventos: [],
      bandera: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({eventos: [
        {imagen: "https://dvzp82trihswu.cloudfront.net/logos/logo-es.png", nombre: "Juegos Panamericanos Lima 2019"},
        {imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tokyo_2020_Olympics_logo.svg/1200px-Tokyo_2020_Olympics_logo.svg.png", nombre: "Juegos Olímpicos de Tokio 2020"},
        {imagen: "http://www.copanama.com/templates/yootheme/cache/Logo---Barranquilla-2018-5cb17f76.png", nombre: "Juegos Centroamericanos y del Caribe Barranquilla 2018"}
      ]});
      this.setState({bandera: true});
    }, 3000)
  }

  cantidadEventosMostrar = (eventosTotales) => {
    var cantidad = 0;
    var pantalla = window.innerWidth;

    if(pantalla > 830){
      cantidad = 3; 
      if(eventosTotales <= 3)
        cantidad = eventosTotales;
    }
    else{
      cantidad = 2;
      if(eventosTotales <= 2)
        cantidad = eventosTotales;
    }
    return cantidad;
  }

  cargarEstructuraEventos = () => {
    var eventos = this.state.eventos;
    var eventosTotales = eventos.length;
    var estructuraFinal = [];
    if(eventosTotales > 0){
      var eventosHTML = [];
      var cantidad = this.cantidadEventosMostrar(eventosTotales);
      for(let i = 0; i < cantidad; i++){
        eventosHTML.push(
          <GridTile>
            <img src={eventos[i].imagen}/>
            <p>{eventos[i].nombre}</p>
          </GridTile>
        );
      }
      estructuraFinal.push(  
        <div id="eventos">                  
          <GridList padding={0} cellHeight={120} cols={cantidad} id="eventosPortada">
            {eventosHTML}
          </GridList>
        </div>
      );
    }
    return estructuraFinal;
  }

  cargarEstructuraSkeleton = () => {
    var estructuraFinal = [];
    var eventosHTML = [];
    var cantidad = 2;
    if(window.innerWidth > 830)
      cantidad = 3; 
    for(let i = 0; i < cantidad; i++){
      eventosHTML.push(
        <GridTile>
          <div id="fotoSkeleton">
            <Skeleton/>
          </div>
          <div id="tituloSkeleton">
            <Skeleton/>
          </div>
        </GridTile>
      );
    }
    estructuraFinal.push(  
      <div id="eventos">                  
        <GridList padding={0} cellHeight={120} cols={cantidad} id="eventosPortada">
          {eventosHTML}
        </GridList>
      </div>
    );
    return estructuraFinal;
  }

  render() {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    return (
        <div className="contenidoBody">
          <Header/>
          <div className="contenedorPagina" id="fondo"> 
            <div id="carouselInformativo">
              <div id="swipeContenido">
                { this.state.bandera ?
                  <AutoPlaySwipeableViews 
                      interval={10000} 
                      autoplay={true} 
                    >
                    {this.cargarEstructuraEventos()}
                    <div id="mision">
                      <p className="textoRegular">Misión</p>
                      <p className="textoMediano">Somos la entidad que dirige e impulsa el movimiento olímpico en nuestro país encausando al deporte con los principios del olimpismo,  contribuyendo así a la excelencia deportiva de nuestros atletas y consolidando nuestra identidad nacional.</p>
                    </div>
                    <div id="vision">
                      <p className="textoRegular">Visión</p>
                      <p className="textoMediano">Ser una entidad modelo en el ámbito nacional e internacional, por la transparencia y prestigio en el impulso de todas las disciplinas deportivas por medio de la planificación y ejecución de proyectos en beneficio de los atletas, federaciones y asociaciones deportivas nacionales.</p>
                    </div>
                  </AutoPlaySwipeableViews>
                :
                  <SkeletonTheme>
                  {this.cargarEstructuraSkeleton()}
                  </SkeletonTheme>
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}
  
export default Inicio

/*
<div id="contenedorSkeleton">
  <Skeleton/>
  <Skeleton/>
  <Skeleton/>
</div>*/