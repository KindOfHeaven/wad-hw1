<template>
    <div>
        Index Page you will never see )))))
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    middleware ({ redirect }) {
        redirect('/profile')
    }
}
</script>
