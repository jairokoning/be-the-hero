import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container} from './styles';
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    if (!id) {
      toast.warn('Informe o seu ID');
      return;
    }

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      
      if (err.response.data.error && err.response.data.error !== '') {
        toast.error(err.response.data.error);
      } else {
        toast.error('Falha no Login');
      }      
    }
  }

  return (
    <Container>
      <section>
      <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            type="text" 
            placeholder="Sua ID" 
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn  size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Heroes" />
    </Container>
  );
}