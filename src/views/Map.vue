<template>
  <v-card padding>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
        <div>{{activityDescription}}</div>
      </div>
    </v-card-title>

    <v-container>
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 50vh"
      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="geolocPosition"
          :rotation.sync="rotation"
        ></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon
                  :src="require('../assets/marker.png')"
                  :scale="0.2"
                  :anchor="[0.5, 1]"
                ></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { getActivities } from '../services/sports';

export default {
  data() {
    return {
      zoom: 5,
      center: this.activityLocalization,
      rotation: 0,
      geolocPosition: [0, 0],
    };
  },
  computed: {
    ...mapState(['activityLocalization', 'activityDescription']),
  },
  created() {
    getActivities(this.geolocPosition[0], this.geolocPosition[1]).then(res => console.log(res),);
  },
};
</script>
