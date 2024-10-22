export async function handle({ event, resolve }) {
    // Global Variables
    event.locals.BACKEND_API_URL = 'https://tandem-server.onrender.com';

    const response = await resolve(event);

    return response;
}