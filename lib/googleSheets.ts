import { google } from "googleapis";

export type LeadRow = {
  createdAt: string;
  sessionId: string;
  language: string;
  name: string;
  business: string;
  requestedService: string;
  keyNeeds: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  contactDetails: string;
  summary: string;
};

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are missing.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendLeadToSheet(lead: LeadRow) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Leads";

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEETS_SPREADSHEET_ID is missing.");
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:L`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          lead.createdAt,
          lead.sessionId,
          lead.language,
          lead.name,
          lead.business,
          lead.requestedService,
          lead.keyNeeds,
          lead.budget,
          lead.timeline,
          lead.contactMethod,
          lead.contactDetails,
          lead.summary,
        ],
      ],
    },
  });
}