<template>
    <div>
        <h3>Sports</h3>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Event</th>
                    <template v-for="(team, color) in $store.state.teams" :key="color">
                        <td>{{ color }}</td>
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
                        <td>{{ color }}</td>
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
        <tabulation :payload="sports"/>
        <hr/>
        <tabulation :payload="litmusda"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    import { TeamScoreType } from './types/Team.type';
    import Tabulation from './components/Tabulation.vue';

    export default defineComponent({
        name: 'App',
        components: {
            Tabulation
        },
        data() {
            return {
                sports  : {},
                litmusda: {}
            }
        },
        methods: {
            tabulate(event: string) {
                const teams  = this.$store.getters.teams;
                const events = this.$store.getters[event];

                // total
                const total: TeamScoreType = {};
                for(const teamColor in teams) {
                    total[teamColor] = 0;
                }

                // rows
                const rows = [];
                for (const sportKey in events) {
                    const row: any = {};
                    row.event  = this.$store.getters[event][sportKey];
                    row.scores = this.$store.getters[`${sportKey}/scores`];

                    // compute total
                    for(const teamColor in teams) {
                        total[teamColor] += row.scores[teamColor];
                    }

                    rows.push(row);
                }

                return { event, teams, rows, total };
            }
        },
        mounted() {
            this.sports   = this.tabulate('sports');
            this.litmusda = this.tabulate('litmusda');
        }
    });
</script>

<style scoped>

</style>
