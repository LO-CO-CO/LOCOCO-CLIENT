import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const email = process.env.GOOGLE_CLIENT_EMAIL;
const key = process.env.GOOGLE_PRIVATE_KEY;
const googleSheetId = process.env.TRANSLATE_GOOGLE_SHEET_ID;

const ns = 'ko';
const lngs = ['ko', 'en', 'es', 'ja'];
const localesPath = 'messages';
const sheetId = 0; // your sheet id
const NOT_AVAILABLE_CELL = '_N/A';
const columnKeyToHeader = {
  key: '키',
  ko: '한글',
  en: '영어',
  es: '스페인어',
  ja: '일본어',
};

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication

const parsedKey = key.replace(/\\n/g, '\n');

const serviceAccountAuth = new JWT({
  email,
  key: parsedKey,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
/**
 * getting started from https://theoephraim.github.io/node-google-spreadsheet
 */
async function loadSpreadsheet() {
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(googleSheetId, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets

  return doc;
}

function getPureKey(key = '') {
  return key;
}

export {
  localesPath,
  loadSpreadsheet,
  getPureKey,
  ns,
  lngs,
  sheetId,
  columnKeyToHeader,
  NOT_AVAILABLE_CELL,
};
