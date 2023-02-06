<template>
    <div>
        <h3>{{ payload.event }}</h3>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Event</th>
                    <template v-for="team in payload.teams" :key="team.color">
                        <th>{{ team.color }}</th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in payload.rows" :key="row.event.key">
                    <td>{{ index+1 }}.</td>
                    <td>{{ row.event.name }}</td>
                    <template v-for="team in payload.teams" :key="team.color">
                        <td align="right">{{ row.scores[team.color] }}</td>
                    </template>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="2" align="right">TOTAL:</th>
                    <template v-for="team in payload.teams" :key="team.color">
                        <th align="right">{{ payload.total[team.color] }}</th>
                    </template>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: '',
        props: {
            payload: {
                type: Object,
                required: true
            }
        },
        data() {
            return {

            }
        }
    });
</script>

<style scoped>

</style>
