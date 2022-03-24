<template>
    <div class="base-image">
        <picture v-if="image">
            <source
                :srcset="`${image.image2xWebp} 2x, ${image.imageWebp} 1x`"
                type="image/webp"
            />
            <source :srcset="`${image.image2x} 2x, ${image.image} 1x`" >
            <img
                :src="image.image"
                :alt="alt"
                v-bind="$attrs"
                :loading="loading"
            />
        </picture>
        <img
            v-else-if="defaultImage"
            :src="defaultImage"
            :alt="alt"
            v-bind="$attrs"
            :loading="loading"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseImage',
    props: {
        /**
         * image structure
         * {
         *     image: png/jpg 1x,
         *     image2x: png/jpg 2x,
         *     imageWebp: webp 1x,
         *     image2xWebp: webp 2x
         * }
         */
        image: { type: [Object, Boolean], default: false },
        defaultImage: { type: String, default: '' },
        alt: { type: String, default: '' },
        loading: { type: String, default: 'lazy' }
    }
}
</script>

<style scoped lang="scss">
.base-image {
    picture,
    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: auto;
        object-fit: contain;
    }
}
</style>
