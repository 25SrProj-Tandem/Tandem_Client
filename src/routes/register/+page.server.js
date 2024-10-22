import axios from 'axios';
export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');

        try {
            const response = await axios.post(`${locals.BACKEND_API_URL}/auth/register`, {
                firstName,
                lastName,
                email,
                password
            });

            return { success: true, msg: response.data };
        } catch (error) {
            console.log(error);
            let errorMsg = "Cannot create account at this time.";
            if (error.response) {
                // Request made but the server responded with an error
                errorMsg = error.response.data.message;
            }
            return { success: false, msg: errorMsg };
        }
    },
};