import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
const ivKey = process.env.NEXT_PUBLIC_IV as string;

export default (value: string) => {
  const key = CryptoJS.enc.Hex.parse(secretKey);
  const iv =  CryptoJS.enc.Hex.parse(ivKey);

  let encrypted = CryptoJS.AES.encrypt(value, key, {iv:iv,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});

  return encodeURIComponent(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
}
