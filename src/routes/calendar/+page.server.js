import axios from 'axios';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params, cookies }) {
    try {
        const token = cookies.get("session_id");
        const response = await axios.post(`${locals.BACKEND_API_URL}/calendar`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        console.log(response.data);

        return { success: true, msg: response.data };
    } catch (error) {
        console.log(error.message);
        redirect(302, "/login");
    }
}