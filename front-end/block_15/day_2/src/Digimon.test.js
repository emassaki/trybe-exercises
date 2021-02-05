import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const digimon = {
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }
    const { getByTestId } = render(<Digimon digimon={digimon}/>);

    expect(getByTestId('digimonName').innerHTML).toBe('Agumon');
    expect(getByTestId('digimonLevel').innerHTML).toBe('level: Rookie');
  });
});