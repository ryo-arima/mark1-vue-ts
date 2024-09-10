<template>
    <div class="signin">
        <h1>サインイン</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="email">メールアドレス:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">パスワード:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">サインイン</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Signin',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleSubmit() {
            // サインインのロジックをここに追加
            console.log('サインインしました', this.email, this.password);
        }
    }
}
</script>

<style scoped>
.signin {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signin h1 {
    text-align: center;
    margin-bottom: 20px;
}

.signin form {
    display: flex;
    flex-direction: column;
}

.signin label {
    margin-bottom: 5px;
}

.signin input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signin button {
    padding: 10px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.signin button:hover {
    background-color: #0056b3;
}
</style>