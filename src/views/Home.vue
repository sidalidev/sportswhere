<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
            >
              <v-card>
                <v-img :src="card.src" height="200px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>map</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    cards: [
      {
        title: 'Judo',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12,
      },
      {
        title: 'Foot',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6,
      },
      {
        title: 'Rugby',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6,
      },
    ],
  }),
  methods: {
    ...mapActions(['setActivityLocalization', 'setActivityDescription']),
    onSelection(activity) {
      this.setActivityLocalization(activity.localization);
      this.setActivityDescription(activity.description);
    },
  },
};
</script>
