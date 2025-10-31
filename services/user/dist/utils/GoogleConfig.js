import { GoogleApis } from "googleapis";
import dotenv from 'dotenv';
dotenv.config();
const GOOGLE_CLIENT_ID = process.env.Google_Client_id;
const GOOGLE_CLIENT_SECRET = process.env.Google_client_secret;
const google = new GoogleApis();
export const oauth2client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, "postmessage");
//# sourceMappingURL=GoogleConfig.js.map