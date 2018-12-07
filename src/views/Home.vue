<template>
  <v-layout justify-center>
    {{favouriteSport}}
    <v-flex xs12 sm6>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-bind="{ [`xs12`]: true }">
              <v-card>
                <v-img
                  src="http://yesofcorsa.com/wp-content/uploads/2017/06/Handball-Best-Wallpaper.jpg"
                  height="200px"
                >
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span
                          class="headline white--text"
                          v-text="favouriteSport"
                        ></span>
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
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    cards: [
      {
        title: 'Foot',
        src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSoQdizOaoasuq9MPPsEnzO30ZgQqEfzBFCqvuAwPqjJGjn7P',
        flex: 6,
      },
      {
        title: 'Rugby',
        src:
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/D8FC/production/_103484555_mathewparry.jpg',
        flex: 6,
      },
    ],
  }),
  computed: {
    ...mapState(['favouriteSport']),
  },
  methods: {
    ...mapActions(['setActivityLocalization', 'setActivityDescription']),
    onSelection(activity) {
      this.setActivityLocalization(activity.localization);
      this.setActivityDescription(activity.description);
    },
  },
};
</script>
