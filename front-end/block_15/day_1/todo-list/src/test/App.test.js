import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando a aplicação, testando botão', () => {
  test('Testando se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />)
    const addButton = getByText('Adicionar');
    expect(addButton).toBeInTheDocument();
    expect(addButton.type).toBe('button');
  });

  test('Testando a funcionalidade do botão', () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonTask = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Teste' } });
    expect(queryByText('Teste')).not.toBeInTheDocument();
    fireEvent.click(buttonTask);
    expect(queryByText('Teste')).toBeInTheDocument();
  });
});

describe('Testando a aplicação, geração da lista baseada em um array', () => {
  test('Testando se cria uma lista', () => {
    const tasks = ['Comer', 'Beber', 'Dormir'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonTask = getByText('Adicionar'); 

    tasks.forEach(task => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(buttonTask);
    });

    tasks.forEach(task => {
      return expect(getByText(task)).toBeInTheDocument;
    });
  })

  test('Testando o componente Input', () => {
    const { getByText } = render(<Item content='Uma string' />);
    const itemContent = getByText('Uma string');
    expect(itemContent).toBeInTheDocument;
  })
});
