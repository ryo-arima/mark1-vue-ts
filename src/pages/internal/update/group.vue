<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>グループ編集</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="group.name"
                        :rules="[rules.required]"
                        label="グループ名"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="group.uuid"
                        :rules="[rules.required]"
                        label="UUID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="group.created_at"
                        :rules="[rules.required]"
                        label="作成日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="group.updated_at"
                        :rules="[rules.required]"
                        label="更新日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="group.deleted_at"
                        label="削除日"
                    ></v-text-field>
                    <v-btn color="primary" @click="saveGroup">保存</v-btn>
                </v-form>
            </v-container>
        </v-main>

        <v-bottom-navigation app>
            <v-btn>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-settings</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
export default {
    name: 'InternalUpdateGroup',
    data() {
        return {
            valid: false,
            group: {
                id: null,
                uuid: '',
                name: '',
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            rules: {
                required: value => !!value || '必須項目です',
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveGroup() {
            if (this.$refs.form.validate()) {
                // グループ保存のロジックをここに追加
                console.log('グループが保存されました:', this.group);
                this.goBack();
            }
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>