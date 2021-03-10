export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const PASSWORD_LOGIN = 'PASSWORD_LOGIN';
export const REGISTER = 'REGISTER';
export const REMOVE = 'REMOVE';

export const emailChange = (value) => ({ type: EMAIL_LOGIN, value })
export const passwordChange = (value) => ({ type: PASSWORD_LOGIN, value })

export const sendRegister = (value) => ({ type: REGISTER, value})
export const removeRestered = (value) => ({ type: REMOVE, value})