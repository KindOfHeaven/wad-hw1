<template>
    <section class="profile-page">
        <div class="container">
            <Profile
                :name="$options.defaultProfile.name"
                :description="$options.defaultProfile.description"
                :image="$options.defaultProfile.image"
                :date="$options.defaultProfile.date"
            />
        </div>
    </section>
</template>

<script>

import { defaultProfile } from '~/constants/profile';
import Profile from "~/components/Profile";

export default {
    name: 'ProfilePage',
    components: {Profile},
    defaultProfile
}
</script>

<style scoped lang="scss">

    .profile-page {

    }

</style>