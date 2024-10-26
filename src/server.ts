import express from "express" // Import the express module
import { getPayloadClient } from "./get-payload" // Import the getPayloadClient function from the get-payload module
import { nextApp, nextHandler } from "./next-utils" // Import the nextHandler function from the next-utils module

const app = express() // Create an instance of an Express application
const PORT = Number(process.env.PORT) || 3000 // Set the port to the value from the environment variable PORT or default to 3000

const start = async () => { // Define an asynchronous function named start
    const payload = await getPayloadClient({ // Await the result of getPayloadClient function call
        initOptions: { // Pass initialization options to the getPayloadClient function
            express: app, // Pass the Express application instance
            onInit: async (cms) => { // Define an asynchronous onInit callback function
                cms.logger.info(`Admin URL ${cms.getAdminURL}`) // Log the admin URL using the CMS logger
            },
        },
    })

    app.use((req, res) => nextHandler(req, res)) // Use the nextHandler function to handle all incoming requests

    nextApp.prepare().then(() => {
        payload.logger.info("next.js started")

        app.listen(PORT, async () => {
            payload.logger.info(
                `Next.js app url: ${process.env.NEXT_PUBLIC_SERVER_URL}`
            )
        })
    })
}

start() // Call the start function to initialize the application
