import { ADDRESS, CITY, CPF, EMAIL, NAME, RESUME, ROLE, ROLE_DESC } from './action';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  resume: '',
  role: '',
  roleDescription: '',
};

export default function formsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.value.toUpperCase() };
    case EMAIL:
      return { ...state, email: action.value };
    case CPF:
      return { ...state, cpf: action.value };
    case ADDRESS:
      return { ...state, address: action.value.replace(/[^\w\s]/gi, '') };
    case CITY:
      return { ...state, city: action.value };
    case RESUME:
      return { ...state, resume: action.value };
    case ROLE:
      return { ...state, role: action.value };
    case ROLE_DESC:
      return { ...state, roleDescription: action.value };
    default:
      return state;
  }
}
