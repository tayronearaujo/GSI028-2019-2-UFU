import React, { Component } from 'react'
import Button from '../../components/Button'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

// o campo value vai popular o form com as informações vindo da api

class Login extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="input-card">
            <div className="input-card2">
              <h1>Fazer login</h1>
              <div className="row ">

                <div className="col-xs-12 col-sm-6 col-md-12 form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="pvpgame@gmail.com" className="form-control" id=""  value="" required ></input>
                    <div className="invalid-feedback">
                      Por favor, digite um email válido.
                    </div>
                 </div>

                <div className="col-xs-12 col-sm-6 col-md-12 form-group">
                  <label>Senha:</label>
                  <input type="password" placeholder="Insira sua senha" className="form-control" id=""  value="" required></input>
                  <small id="" className="form-text text-muted">Sua senha deve conter no mínimo 8 caracteres.</small>
                  <div className="invalid-feedback"></div>
                </div>

            </div>

            <Button className="bnt-login" onClick={() => console.log('MEU CLICK MAROTO')}>
            Enviar
            </Button>

            <div className="create-acc">
              <h5>Ainda não possui conta?<a href="/signup"> Criar conta!</a></h5>
            </div>

        </div>
       </div>
      </form>




    </div>
    )
  }
}

export default Login
