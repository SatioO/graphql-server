import * as got from "got"
import config from "../config";


export const Intents = {
    create: async ({
        fallbackIntent = false,
        name = '',
        priority = 50000,
        userSays = [],
        webhookForSlotFilling = false,
        webhookUsed = false
    }, { headers }) => {
        try {
            const body = {
                fallbackIntent,
                name,
                priority,
                userSays,
                webhookForSlotFilling,
                webhookUsed
            }
            //dialog flow api url
            const apiUrl = config.pa_dialog_flow.createIntents;
            //extract Authorization token for pa-intents;
            const authKey = headers["x-authpa-token"];
            //call intents api
            const response = await got.post(
                apiUrl,
                {
                    headers: {
                        "Authorization": `Bearer ${authKey}`,
                        "Content-Type": "application/json"
                    },
                    body,
                    json: true
                }
            )
            return response.body;
        } catch (error) {
            return error;
        }
    }
};
