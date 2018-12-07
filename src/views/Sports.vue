<template>
  <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
              v-for="sport in sports"
              :key="sport.name"
              color="teal"
              class="white--text"
            >
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{sport.title}}</div>
                      <div>Sit Lorem nulla nostrud mollit cupidatat cillum sunt commodo pariatur elit cupidatat nostrud esse.</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { getUser } from '../services/sports';

export default {
  data() {
    return {
      sports: [],
    };
  },
  created() {
    getUser()
      .then(({ data: { sports } }) => {
        this.sports = sports;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
