<script>
    import { goto } from "$app/navigation";

    async function logout() {
        try {
            const response = await fetch("/calendar", {
                method: "POST",
                credentials: "include",
            });
            goto("/login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }
</script>

<h1>calendar</h1>

<button class="primary sm" on:click={logout}>Log Out</button>
