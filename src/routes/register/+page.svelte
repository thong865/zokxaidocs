<script>
    import * as yup from "yup";
    import { _ } from "svelte-i18n";
    import { enhance } from "$app/forms";
    import TextInput from "../../component/textInput.svelte";
    let ruleItem = [1, 2, 9, 3, 4, 5, 6, 7, 8];
    let errors = {};
    let dataFrm = {};

    let obf = {
        req_type: "MOBILE",
        firstname: "",
        lastname: "",
        mobile: "",
        sex: "M",
        password: "",
        cpassword: "",
    };
    const schema = yup.object().shape({
        firstname: yup.string().required(""),
        lastname: yup.string().required(""),
        mobile: yup.string().required(""),
        password: yup.string().required(""),
        cpassword: yup
            .string()
            .required("")
            .oneOf([yup.ref("password"), ""], "mcpassword"),
    });
    const handleLogin = async () => {
        try {
            await schema.validate(obf, { abortEarly: false });
            alert(JSON.stringify(obf, null, 2));
            errors = {};
        } catch (err) {
            errors = err.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
            }, {});
        }
    };
</script>

<svelte:head>
    <title>{$_("rules.title")}</title>
    <meta name="description" content="About this app" />
</svelte:head>
<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">{$_('regPage.title')}</h1>
            <p class="py-6">{$_('regPage.ads_message')}</p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form on:submit|preventDefault={handleLogin} use:enhance class="card-body">
                <TextInput
                    label={$_("freg.firstname")}
                    bind:value={obf.firstname}
                    mserr={$_(errors.firstname)}
                >
                    <div slot="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                    </div>
                </TextInput>
                <TextInput
                    label={$_("freg.lastname")}
                    bind:value={obf.lastname}
                    mserr={$_(errors.lastname)}
                >
                    <div slot="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                    </div>
                </TextInput>
                <TextInput
                    type="password"
                    label={$_("freg.password")}
                    bind:value={obf.password}
                    mserr={$_(errors.password)}
                >
                    <div slot="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                    </div>
                </TextInput>
                <TextInput
                    type="password"
                    label={$_("freg.cpassword")}
                    bind:value={obf.cpassword}
                    mserr={$_(errors.cpassword)}
                >
                    <div slot="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70"
                        >
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                            />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                            />
                        </svg>
                    </div>
                </TextInput>
                <button type="submit" class="btn w-full">LOGIN</button>
            </form>
        </div>
    </div>
</div>

