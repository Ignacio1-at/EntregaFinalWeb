import React from 'react';
import './login.css';

const login = () => {

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
                        <div class="carousel-item img-1 min-vh-100 active">
                            <div class="carousel-caption d-none d-md-block">
                            <h5 class="font-weight-bold">APP realizada en 2022 para una vida saludable</h5>
                            <a class="text-muted text-decoration-none">Cuenta con un amplio equipo de expertos para ayudar a todo aquel que lo necesite</a>
                            </div>
                        </div>
                        <div class="carousel-item img-2 min-vh-100">
                            <div class="carousel-caption d-none d-md-block">
                            <h5 class="font-weight-bold">Regístrate y tendrás un beneficio en tu primer mes</h5>
                            <a class="text-muted text-decoration-none">Síguenos en nuestras redes sociales</a>
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
                    <h1 class="font-weight-bold mb-4">Bienvenido a SaveLife</h1>

                    <form class="mb-5" id="signupForm">
                        <div class="mb-4 form-group">
                            <label for="email" class="control-label font-weight-bold">Email</label>
                            <div class="col-sm-10">
                                <input type="text" id="email" name="email" class="form-control bg-dark-x border-0" ngModel />
                            </div>
                        </div>
            
                        <div class="mb-4 form-group">
                            <label for="password" class="control-label font-weight-bold">Password</label>
                            <div class="col-sm-10">
                                <input type="text" id="password" name="password" class="form-control bg-dark-x border-0" ngModel/>
                            </div>
                        </div>
            
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <a input type="submit" class="btn btn-danger w-100"  value="Inicio sesion"/></div>
                            </div>
                        </div>
                    </form>

                    <p class="font-weight-bold text-center text-muted">O inicia sesión con</p>
                    <div class="d-flex justify-content-around">
                        <button type="button" class="btn btn-outline-danger flex-grow-1 mr-2"><i class="fab fa-google lead mr-2"></i> Google</button>
                        <button type="button" class="btn btn-outline-primary flex-grow-1 ml-2"><i class="fab fa-facebook-f lead mr-2"></i> Facebook</button>
                    </div>
                    </div>
                    <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                        <p class="d-inline-block mb-0">¿Todavia no tienes una cuenta?</p> <a class="text-light font-weight-bold text-decoration-none">Crea una ahora</a>
                    </div>
                <div/>
            <div/>
        </section>
    );
}

export default login;