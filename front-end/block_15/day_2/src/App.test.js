import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks())

describe('Teste da aplicação toda', () => {

  it('renderiza o estado inicial', () => {
    const { getByText, getByTestId } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    const inputElement = getByTestId('input');
    const buttonElement = getByTestId('buttonSearch');
    expect(linkElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('atualiza o valor do input', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, { target : { value: 'Agumon'} });
    expect(inputElement.value).toBe('Agumon');
  });

  it('testa o retorno da API', async () => {
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];
    
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    })
    
    const { findByText, getByTestId } = render(<App />);

    fireEvent.change(getByTestId('input'), { target : { value: 'Agumon'} });
    expect(getByTestId('input').value).toBe('Agumon');

    expect(getByTestId('buttonSearch')).toBeInTheDocument();
    fireEvent.click(getByTestId('buttonSearch'));

    await findByText('Agumon');
    await findByText(/Rookie/);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon'
    );
  });

  it('testa não encontrar um digimon', () => {
    
  });

});