import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint("https://hl-appwriter.buildapi.cyou/v1")
    .setProject("64186f7eb9c06513b9a0");

export const account = new Account(client);

// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});

export const databases = new Databases(client, "641938ea5d2a327aa369")