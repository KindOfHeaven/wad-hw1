<template>
    <footer class="footer">
        <div class="footer__container container">
            <small class="footer__copyright">
                KindOfHeaven © 2022
            </small>
        </div>
    </footer>
</template>

<script>
export default {
    name: "LayoutFooter"
}
</script>

<style scoped lang="scss">

    .footer {
        padding: 10px 0;

        &__container {
            text-align: center;
        }

        &__copyright {
            font-size: 16px;
        }
    }

</style>