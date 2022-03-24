<template>
    <div class="profile">
        <BaseImage
            v-if="image"
            class="profile__image"
            :alt="name"
            :image="preparedImage"
            width="200px"
            height="200px"
        />
        <h1 class="profile__title">
            {{ name }}
        </h1>
        <div v-if="preparedDate" class="profile__date">
            Дата рождения: {{ preparedDate }}
        </div>
        <p v-if="description" class="profile__description">
            {{ description }}
        </p>
    </div>
</template>

<script>
import { formatDate } from '~/utils/formatters';
import BaseImage from "~/components/Bases/BaseImage";

export default {
    name: 'Profile',
    components: {BaseImage},
    props: {
        name: { type: String, required: true },
        description: { type: String, default: '' },
        date: { type: String, default: '' },
        image: { type: String, default: '' }
    },
    computed: {
        preparedDate() {
            return this.date ? formatDate(this.date) : false
        },
        preparedImage() {
            const ext = this.image.split('.').pop()
            const imgName = this.image.replace(`.${ext}`, '')

            return {
                image: `${imgName}.${ext}`,
                image2x: `${imgName}@2x.${ext}`,
                imageWebp: `${imgName}.webp`,
                image2xWebp: `${imgName}@2x.webp`
            }
        }
    }
}
</script>

<style scoped lang="scss">

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__image {
            border-radius: 50%;
            overflow: hidden;
            -webkit-mask-image: -webkit-radial-gradient(white, black);
            margin-bottom: 30px;
        }

        &__title {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
        }

        &__date {
            color: #a39c9c;
            font-size: 16px;
        }
        
        &__description {
            margin-top: 40px;
            max-width: 500px;
            text-align: center;
            font-size: 18px;
            line-height: 1.5;

        }
    }

</style>