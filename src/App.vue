<template>
    <div>
        <h3>Sports</h3>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Event</th>
                    <template v-for="(team, color) in $store.state.teams" :key="color">
                        <td>{{ team.name }}</td>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sport, key, index) in $store.state.events.sports" :key="sport.key">
                    <td>{{ index+1 }}.</td>
                    <td>{{ sport.name }}</td>
                    <template v-for="(team, key) in $store.state.teams" :key="key">
                        <td>{{ $store.getters[`${sport.key}/scores`][key] }}</td>
                    </template>
                </tr>
            </tbody>
        </table>

        <h3>Litmusda</h3>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Event</th>
                    <template v-for="(team, color) in $store.state.teams" :key="color">
                        <td>{{ team.name }}</td>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(litmusda, key, index) in $store.state.events.litmusda" :key="litmusda.key">
                    <td>{{ index+1 }}.</td>
                    <td>{{ litmusda.name }}</td>
                    <template v-for="(team, key) in $store.state.teams" :key="key">
                        <td>{{ $store.getters[`${litmusda.key}/scores`][key] }}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'App',
        data() {
            return {

            }
        }
    });
</script>

<style scoped>

</style>
