import agconnect from '@agconnect/api';
import '@agconnect/instance';
import '@agconnect/auth';

export function login(credential: any) {
  return agconnect.auth().signIn(credential);
}

function getUserInfo() {
  return agconnect.auth()
    .getCurrentUser();
}

function logout() {
  return agconnect.auth()
    .signOut();
}

function loginAnonymously() {
  return agconnect.auth()
    .signInAnonymously();
}

function loginWithPhone(countryCode: any, account: any, password: any, verifyCode: any) {
  let credential = getPhoneCredential(countryCode, account, password, verifyCode);
  if (!credential) {
    return Promise.reject(new Error('credential is undefined'));
  }
  return login(credential);
}

function getPhoneCredential(countryCode: any, account: any, password: any, verifyCode: any) {
  if (verifyCode) {
    return agconnect.auth.PhoneAuthProvider.credentialWithVerifyCode(countryCode, account, password, verifyCode);
  }
  return agconnect.auth.PhoneAuthProvider.credentialWithPassword(countryCode, account, password);
}

function createPhoneUser(countryCode: any, account: any, password: any, verifyCode: any) {
  return agconnect.auth()
    .createPhoneUser(new agconnect.auth.PhoneUser(countryCode, account, password, verifyCode));
}

export { loginAnonymously, loginWithPhone, getPhoneCredential, createPhoneUser, getUserInfo, logout }