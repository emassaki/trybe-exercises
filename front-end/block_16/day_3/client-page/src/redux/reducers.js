import { combineReducers } from 'redux';
import { EMAIL_LOGIN, PASSWORD_LOGIN, REGISTER, REMOVE } from './actions';

const INITIAL_LOGIN_STATE = {
  email: '',
  password: '',
};

const INITIAL_REGISTER_STATE = {
  users: [
    {
      name: 'João da Silva',
      email: 'joaodasilva@gmail.com',
      password: 'joaodasilvasenha',
    },
    {
      name: 'Ana Paula Silveira',
      email: 'anapsilveira@gmail.com',
      password: 'AnaSilveiraPaula1985',
    },
  ],
};

const loginReducer = (state = INITIAL_LOGIN_STATE, action) => {
  switch (action.type) {
    case EMAIL_LOGIN:
      return { ...state, email: action.value };
    case PASSWORD_LOGIN:
      return { ...state, password: action.value };
    default:
      return state;
  }
};

const registerReducer = (state = INITIAL_REGISTER_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, users: [...state.users, action.value] };
    case REMOVE:
      return {
        ...state,
        users: [...state.users].filter(
          (user) => (user.email !== action.value.email || user.name !== action.value.name)
        ),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ loginReducer, registerReducer });
