import { json } from '@sveltejs/kit';

// Logout function
export async function POST({ cookies }) {
    cookies.delete('session_id', {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
    });
    return json({ message: 'Logged out successfully' });
}