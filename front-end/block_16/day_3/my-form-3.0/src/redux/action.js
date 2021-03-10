export const NAME = 'NAME';
export const EMAIL = 'EMAIL';
export const CPF = 'CPF';
export const ADDRESS = 'ADDRESS';
export const CITY = 'CITY';
export const RESUME = ' RESUME';
export const ROLE = 'ROLE';
export const ROLE_DESC = ' ROLE_DESC';

export const nameChange = (value) => ({ type: NAME, value });
export const emailChange = (value) => ({ type: EMAIL, value });
export const cpfChange = (value) => ({ type: CPF, value });
export const addressChange = (value) => ({ type: ADDRESS, value });
export const cityChange = (value) => ({ type: CITY, value });
export const resumeChange = (value) => ({ type: RESUME, value });
export const roleChange = (value) => ({ type: ROLE, value });
export const roleDescChange = (value) => ({ type: ROLE_DESC, value });
