import { redirect } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
    default: async ({ request, locals, cookies }) => {
        const formData = await request.formData();
        let email = formData.get('email');
        let password = formData.get('password');

        try {
            const response = await axios.post(`${locals.BACKEND_API_URL}/auth/login`, {
                email,
                password
            });

            const token = response.data.jwt;
            cookies.set('session_id', token, {
                httpOnly: true,
                path: '/',
                sameSite: 'Lax',
            });

        } catch (error) {
            let errorMsg = "Unable to login at this time.";
            if (error.response) {
                // Request made but the server responded with an error
                errorMsg = "Invalid Email or Password.";
            }
            console.log(error);
            return { success: false, msg: errorMsg };
        }

        throw redirect(302, '/calendar');
    },
};
