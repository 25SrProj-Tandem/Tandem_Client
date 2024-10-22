<script>
    export let form;
</script>

<h2>Registration</h2>
<form method="post">
    <label for="firstName">First Name:</label>
    <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter your First Name"
        required
    />

    <label for="lastName">Last Name:</label>
    <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your Last Name"
        required
    />

    <label for="email">Email:</label>
    <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your Email"
        required
    />

    <label for="password">Password:</label>
    <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your Password"
        required
    />

    <button type="submit">Register</button>
    {#if form && !form.success}
        <div>
            <span style="color: red;">{form.msg}</span>
        </div>
    {/if}
    <div>
        <span class="form-footer"
            >Already have an account? <a href="/login">Login</a> here.</span
        >
    </div>
</form>
