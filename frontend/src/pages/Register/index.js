import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Content, InputGroup } from './style';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !whatsapp || !city || !uf) {
      toast.warn('Todos os campos são obrigatórios');
      return;
    }

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      toast.success(`Seu ID de acesso: ${response.data.id}`, {autoClose: false, draggable: false, closeOnClick: false})
      history.push('/');
    } catch (error) {
      toast.error('Erro ao efetuar cadastro');
    }   
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft  size={16} color="#E02041" />
            Voltar para Logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <input 
              type="text" 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </Content>
    </Container>
  )
  
}