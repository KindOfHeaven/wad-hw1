<template>
    <header class="header">
        <div class="container header__container">
            <nuxt-link to="/" class="header__logo">
                <img src="/logo/logo.svg" alt="HW1 Project with codex logo">
            </nuxt-link>
            <nav class="header__nav">
                <ul class="header__nav--list">
                    <li>
                        <nuxt-link to="/profile" class="link header__nav--link">Profile</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "LayoutHeader"
}
</script>

<style scoped lang="scss">

    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-bottom: 1px solid #ccc;
        z-index: 1;
        padding: 10px 0;

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__logo {
            flex: 0 0 auto;
            height: 60px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__nav {
            margin-left: 20px;

            &--link {
                font-size: 18px;
            }
        }
    }

</style>