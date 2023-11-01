import { Translations } from "translations";

//English language file for all messages being used in the app.
export const translations: Translations = {
  //User Details Form texts.
  welcomeHeader: "WELCOME!",
  getStartedHeader:
    "Enter a user's name, email, and any other info to generate an email sequence consisting of an invitation, a promotion, and a welcome email.",
  nameFieldLabel: "Name",
  emailFieldLabel: "Email",
  infoFieldLabel: `Enter any info you'd want to about the user`,
  sendButton: "Generate",

  //useHome Hook texts.
  emailGenerationApiError: "Some error occurred, please try again",
  emptyFieldsError: "Please fill in all the fields",

  //Email Box texts.
  inviteMailTabTitle: "Invite mail",
  promotionalMailTabTitle: "Promotional mail",
  welcomeMailTabTitle: "Welcome mail",
  generateEmailsForNewUser: "Generate emails for another user",
};
