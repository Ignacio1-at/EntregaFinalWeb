import React from 'react';
import './register.css';    
import { register } from 'react-scroll/modules/mixins/scroller';


const register = () => {

    return (
    <section class="bg-dark">
        <div class="row g-0">
            <div class="col-lg-7 d-none d-lg-block">
                <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselCaptions" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item img-3 min-vh-100 active">
                        <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weight-bold">Realizamos entrenamientos personalizados con tus datos</h5>
                        <a class="text-muted text-decoration-none">Te entregamos los implementos necesarios si no dispones de aquellos</a>
                        </div>
                    </div>
                    <div class="carousel-item img-4 min-vh-100">
                        <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weight-bold">Suscribete a nuestros planes de dietas especiales para ti</h5>
                        <a class="text-muted text-decoration-none">Salud mental para todos!!</a>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
                <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                    <img src="assets/img/savelife.png" width="190" alt= "" class="img-fluid" />
                </div>
                <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                    <h1 class="font-weight-bold mb-4">Suscribete a nuestros planes personalizados</h1>
                
                    <form id="form-group" action="" method="post">
                        <p>
                            <label for="name">Nombre <span> ( Requerido):</span></label>
                            <input id="name" name="name" minlength="4" type="text" Requerido/>
                        </p>
                        <p>
                            <label for="fechaNacimiento">fecha de Nacimiento <span> ( Requerido):</span></label>
                            <input id="fechaNacimiento" type="date" name="fechaNacimiento" required/>
                        </p>
                        <p>
                            <label for="email">Email <span> ( Requerido):</span></label>
                            <input id="email" type="email" name="email" Requerido/>
                        </p>
                        <p>
                            <label for="password">Password <span> ( Requerido, debe tener al menos 5 caracteres):</span></label>
                            <input id="password" type="password" name="password" minlength="5" Requerido />
                        </p>
                        <p>
                            <label for="numeroTelefonico">Numero Telefonico <span> ( Requerido):</span></label>
                            <input id="numeroTelefonico" type="tel" name="numeroTelefonico" Requerido/>
                        </p>
                        <p>
                            <input class="btn btn-danger w-100 col-sm-offset-2 col-sm-10" type="submit" value="Registrarse"/>
                        </p>
                    </form>
                    <p class="font-weight-bold text-center text-muted">O tambien puedes registrarte con </p>
                    <div class="d-flex justify-content-around">
                        <button type="button" class="btn btn-outline-danger flex-grow-1 mr-2"><i class="fab fa-google lead mr-2"></i> Google</button>
                        <button type="button" class="btn btn-outline-primary flex-grow-1 ml-2"><i class="fab fa-facebook-f lead mr-2"></i> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default register;