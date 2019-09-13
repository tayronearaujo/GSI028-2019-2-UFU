import React, { Component } from 'react'
import './style.css'
import Button from '../../components/Button'

class CreateAccount extends Component {
  render() {
    return (
      <div className="container">
      <form>
        <div className="input-card">
          <div className="input-card2">
            <h1>Criar Conta</h1>
            <div className="row ">
              <div className="col-xs-12 col-sm-6 col-md-12 form-group">
                <label>Nome:</label>
                <input type="text" placeholder="Insira seu nome" className="form-control" id=""  value="" required></input>

              </div>

              <div className="col-xs-12 col-sm-6 col-md-12 form-group">
                <label>Email:</label>
                <input type="email" placeholder="pvpgame@gmail.com" className="form-control" id=""  value="" required></input>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-12 form-group">
                <label>Senha:</label>
                <input type="password" placeholder="Insira sua senha" className="form-control" id=""  value="" required></input>
                <small>Sua senha deve conter no mínimo 8 caracteres.</small>
              </div>
          </div>


          <Button className="bnt-login" onClick={() => console.log('MEU CLICK MAROTO')}>
            Enviar
            </Button>



      </div>
     </div>
    </form>
  </div>
    )
  }
}

export default CreateAccount
