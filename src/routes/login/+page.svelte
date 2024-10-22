<script>
    export let form;
</script>

{#if form && !form.success}
    <span style="color: red;">{form.msg}</span>
{/if}
<form method="post">
    <div>
        <label> Email : <input type="text" name="email" /> </label>
    </div>
    <div>
        <label> Password: <input type="password" name="password" /> </label>
    </div>
    <div><input type="submit" value="Sign In" /></div>
</form>
