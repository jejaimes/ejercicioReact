import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import useForm from "./hooks";
import * as Joi from "joi";

const campos = [
  {
    "name": "Name",
    "type": "text",
    "placeholder": "Your name",
    "verify": {
      "required": true,
      "min": 3,
      "max": 30
    }
  },
  {
    "name": "Email",
    "type": "email",
    "placeholder": "email@example.com",
    "verify": {
      "required": true
    }
  },
  {
    "name": "Password",
    "type": "password",
    "placeholder": "",
    "verify": {
      "required": true,
      "min": 3,
      "max": 30
    }
  },
  {
    "name": "Telephone",
    "type": "tel",
    "placeholder": "+573333333333",
    "verify": {
      "required": true,
      "min": 3,
      "max": 30
    }
  },
  {
    "name": "Over 18",
    "type": "checkbox"
  },
  {
    "name": "",
    "type": "options",
    "options": [
      "option 1",
      "option 2",
      "option 3"
    ]
  }
]

const renderOpciones = (opciones) => {
  opciones.map((opcion) => {
    return <option>opcion</option>
  })
}

const renderCampos = campos.map((campo) => {
  if (campo.type === 'checkbox') {
    return (<Form.Group controlId={campo.name}>
              <Form.Check type={campo.type} label={campo.name} />
            </Form.Group>)
  } else if (campo.type === 'submit') {
return (<Button variant="primary" type={campo.type}>
          {campo.name}
        </Button>)
  } else if (campo.type === 'reset') {
  return (<Button variant="primary" type={campo.type}>
            {campo.name}
          </Button>)
  } else if (campo.type === 'options') {
return (<Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>{campo.name}</Form.Label>
          <Form.Control as="select">
            {renderOpciones(campo.options)}
          </Form.Control>
        </Form.Group>)
  } else {
  return (<Form.Group controlId={campo.name}>
            <Form.Label>{campo.name}</Form.Label>
            <Form.Control type={campo.type} placeholder={campo.placeholder} />
          </Form.Group>)
  }
})

function Formulario () {
  return (
    <Form>
      {renderCampos}
    </Form>
  );
}

ReactDOM.render(<Formulario/>, document.getElementById('root'));