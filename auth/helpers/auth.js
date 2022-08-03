import {compare, hash} from 'bcryptjs'

export async function getHashPassword(password){
     const hashPassword = await hash(password,12);
     return hashPassword;
}
export async function verifyPassword(password,hashPassword){
     const isValid = await compare(password,hashPassword);
      return isValid;
}