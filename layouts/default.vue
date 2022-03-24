<template>
    <div class="app">
        <LayoutHeader />
        <main class="app__inner">
            <Nuxt />
        </main>
        <LayoutFooter />
    </div>
</template>

<script>
import LayoutFooter from "~/components/Layout/LayoutFooter";
import LayoutHeader from "~/components/Layout/LayoutHeader";
export default {
    name: 'default',
    components: {LayoutHeader, LayoutFooter}
}
</script>

<style scoped lang="scss">

    .app {
        position: relative;
        padding-top: 80px;
        min-height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;

        &__inner {
            flex: 1 1 auto;
            padding: 40px 0;
        }
    }

</style>