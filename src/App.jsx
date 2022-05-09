import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CarritoProvider from "./context/CarritoContext";
import LocationProvider from "./context/Location";
import { GridContainer } from "./styles/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <Router>
      <Switch>
        <CarritoProvider>
          <LocationProvider>
            <GridContainer>
              <Route path="/" exact>
                <Header />
                <div className="wrapper">
                  <Hero />

                  <Products
                    sectionTitle={"Ofertas"}
                    urlData={`https://api-rest-anthony.herokuapp.com/products`}
                  />
                  <Products
                    sectionTitle={"Los más populares"}
                    urlData={`https://api-rest-anthony.herokuapp.com/products`}
                  />
                </div>
              </Route>
              <Route path="/formulario">
                <Formulario />
              </Route>
            </GridContainer>
          </LocationProvider>
        </CarritoProvider>
      </Switch>
    </Router>
  );
};

export default App;
