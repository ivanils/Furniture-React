import { useEffect, useState } from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';
import './Aluxion.scss';


const Aluxion = ({ }) => {

    // Datos Principales
    let data = [
        {
            id: 1,
            titulo: 'Shell Dining Chair',
            autor: 'Michael W.Dreeben',
            descripcion: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit. Est aperiam quos totam bladitis sapiente sit, quasi non, excepturi architecto dolorem?',
            enlace: '#Silla',
            imgSrc: 'assets/mesa_negra.png'
        },
        {
            id: 2,
            titulo: 'Dunes Anthrazite Black',
            autor: 'Jeaper K.Thomas',
            descripcion: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit. Est aperiam quos totam bladitis sapiente sit, quasi non, excepturi architecto dolorem?',
            enlace: '#Mesa',
            imgSrc: 'assets/silla_negra.png'
        }
    ]
    // Datos Menú
    let dataMenu = [
        {
            seccion: 'Collection',
            categorias: ['Collection 1', 'Collection 2', 'Collection 3'],
            imagenes: ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
        },
        {
            seccion: 'Design',
            categorias: ['Design 1', 'Design 2', 'Design 3'],
            imagenes: ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
        },
        {
            seccion: 'Craftmanship',
            categorias: ['Craftmanshi 1', 'Craftmanshi 2', 'Craftmanshi 3'],
            imagenes: ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
        },
        {
            seccion: 'Ethics',
            categorias: ['Furniture', 'Lightning', 'Accesories'],
            imagenes: ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
        },
    ]
    // Enlaces Menú
    let footerMenu = [
        {
            titulo: 'About',
            enlace: '#About'
        },
        {
            titulo: 'Contact',
            enlace: '#Contact'
        },
        {
            titulo: 'Dealers',
            enlace: '#Dealers'
        },
        {
            titulo: 'News',
            enlace: '#News'
        },
        {
            titulo: 'Care',
            enlace: '#Care'
        },
        {
            titulo: 'Press',
            enlace: '#Press'
        }
    ]
    // Estado POSICIÓN
    let [posicion, setPosicion] = useState(0)
    let cambiarPosicion = (nuevoValor) => {
        setPosicion(nuevoValor)
    }
    // Calculos SLIDER
    let cantidadElementos = data.length
    let alturaSlider = () => {
        return `calc(100% * ${cantidadElementos})`
    }
    let alturaElemento = () => {
        return `calc(100% / ${cantidadElementos})`
    }
    // let desplazamientoVertical = () => {
    //     return `calc(${posicion}*(-100/${cantidadElementos})%)`
    // }
    // Estado Menú
    let [menu, setMenu] = useState(false)
    let cambiarMenu = () => {
        setMenu(!menu)
    }
    // Estado POSICIÓN MENÚ
    let [posicionMenu, setPosicionMenu] = useState(-1)
    let cambiarPosicionMenu = (nuevoValor) => {
        setPosicionMenu(nuevoValor)
    }
    let devolverPosicionMenu = ()=>{
        setPosicionMenu(-1)
    }
    useEffect(()=>{
        
    }, []);

    return (
        <div className='Aluxion'>
            <div className="main-wrapper">
                <nav className="header">
                    <button className={`logo ${(menu) ? 'activo' : ''}`}>
                        <a href="#" className='mater'>mater</a>
                    </button>
                    <div
                        className={`hamburguesa ${(menu) ? 'activo' : ''}`}
                        onClick={cambiarMenu}>
                        <button className='btn-menu'>
                            <div className="contenedor-lineas">
                                <div className="top"></div>
                                <div className="mid"></div>
                                <div className="bot"></div>
                            </div>
                        </button>
                    </div>
                </nav>
                <div className="main-aluxion">
                    <div className="izq">
                        <div className="caja-texto">
                            <div className="slider-texto"
                                style={{
                                    height: `${alturaSlider()}`
                                }}>
                                {
                                    data.map((texto, i) =>
                                        <div className="contenedor-texto"
                                            key={i}
                                            style={{
                                                height: `${alturaElemento()}`
                                            }
                                            }>
                                            <span className='span-texto'>{texto.autor}</span>
                                            <h2 className='h2-texto'>{texto.titulo}</h2>
                                            <p className="p-texto">{texto.descripcion}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="boton-details">
                            {
                                data.map((texto, i) =>
                                    <button key={i} className='btn-details activo'>
                                        <a href={texto.enlace}>
                                            Product Details
                                        </a>
                                    </button>)
                            }
                        </div>
                    </div>
                    <div className="drc">
                        <div className="slider"
                            style={{
                                height: `${alturaSlider()}`
                            }}>
                            {
                                data.map((texto, i) =>
                                    <div
                                        key={i} className="contenedor-imagen"
                                        style={{ height: `${alturaElemento()}` }}>
                                        <img src={texto.imgSrc} alt={texto.titulo} />
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="selecciones">
                    {
                        data.map((texto, i) =>
                            <button key={i} className={`opcion ${(posicion == i) ? 'activo' : ''}`}
                                onClick={() => {
                                    cambiarPosicion(i)
                                }}>
                                <a href={texto.enlace} className="a-opcion">
                                    <span className="numero">0{texto.id}</span>
                                    <p className="titulo-opcion">{texto.titulo}</p>
                                </a>
                            </button>)
                    }
                </div>
            </div>
            <div className={`menu ${(menu) ? 'activo' : ''}`}>
                <div className="main-wrapper">
                    <div className="menu-izq">
                        <ul className="secciones">
                            {dataMenu.map((elemento, i)=>  
                            <li key={i} className="seccion"
                            onMouseOver={()=>{cambiarPosicionMenu(i)}}
                                onMouseOut={devolverPosicionMenu}>
                                <span className="nombre-seccion" >{elemento.seccion}</span>
                                <div className={`categorias ${(posicionMenu == i) ? 'activo' : ''}`}>
                                    {elemento.categorias.map((categoria, i)=>
                                        <span key={i} className='categoria'>{categoria}</span>
                                    )}
                                </div>
                            </li>
                            )}
                        </ul>
                        <div className="footer-menu">
                            {footerMenu.map((elemento, i)=>
                            <span key={i} className="span-foot"><a href={elemento.enlace}>{elemento.titulo}</a></span>
                            )}
                        </div>
                    </div>
                    <div className="menu-drc"></div>
                </div>
            </div>
        </div>
    )


}
Aluxion.defaultProps = {}

export default Aluxion