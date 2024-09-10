<template>
    <div class="signup">
        <h1>サインアップ</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="email">メールアドレス:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">パスワード:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="confirmPassword">パスワード確認:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required>
            </div>
            <button type="submit">サインアップ</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        handleSubmit() {
            if (this.password !== this.confirmPassword) {
                alert('パスワードが一致しません');
                return;
            }
            // サインアップのロジックをここに追加
            console.log('サインアップしました', this.email, this.password);
        }
    }
}
</script>

<style scoped>
.signup {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup h1 {
    text-align: center;
    margin-bottom: 20px;
}

.signup form {
    display: flex;
    flex-direction: column;
}

.signup label {
    margin-bottom: 5px;
}

.signup input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signup button {
    padding: 10px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.signup button:hover {
    background-color: #0056b3;
}
</style>