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

function getPhoneVerifyCode(countryCode: any, account: any, lang: any, sendInterval: any, isReset: any) {
  if (isReset) {
    return agconnect.auth().requestPhoneVerifyCode(
      countryCode,
      account,
      agconnect.auth.Action.ACTION_RESET_PASSWORD,
      lang,
      sendInterval,
    );
  } else {
    return agconnect.auth().requestPhoneVerifyCode(
      countryCode,
      account,
      agconnect.auth.Action.ACTION_REGISTER_LOGIN,
      lang,
      sendInterval,
    );
  }
}

export function loginWithEmail(account: any, password: any, verifyCode: any) {
  let credential = getEmailCredential(account, password, verifyCode);
  if (!credential) {
    return Promise.reject(new Error('credential is undefined'));
  }
  return login(credential);
}

export function getEmailCredential(account: any, password: any, verifyCode: any) {
  if (verifyCode) {
    return agconnect.auth.EmailAuthProvider.credentialWithVerifyCode(account, password, verifyCode);
  }
  return agconnect.auth.EmailAuthProvider.credentialWithPassword(account, password);
}

export function createEmailUser(account: any, password: any, verifyCode: any) {
  return agconnect.auth()
    .createEmailUser(new agconnect.auth.EmailUser(account, password, verifyCode));
}

export function getEmailVerifyCode(account: any, lang: any, sendInterval: any, isReset: any) {
  if (isReset) {
    return agconnect.auth().requestEmailVerifyCode(
      account,
      agconnect.auth.Action.ACTION_RESET_PASSWORD,
      lang,
      sendInterval,
    );
  } else {
    return agconnect.auth().requestEmailVerifyCode(
      account,
      agconnect.auth.Action.ACTION_REGISTER_LOGIN,
      lang,
      sendInterval,
    );
  }
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

export { loginAnonymously, loginWithPhone, getPhoneVerifyCode, getPhoneCredential, createPhoneUser, getUserInfo, logout }