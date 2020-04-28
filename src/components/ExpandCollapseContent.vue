<template>
  <div class="grid-x grid-padding-x">
    <div class="cell medium-12">
      <div
        v-if="item.attributes.address"
        class="detail"
      >
        <font-awesome-icon icon="map-marker-alt" />
        <!-- <span v-html="parseAddress(item.attributes.address)"> -->
        <span>
          <!-- {{ parseAddress(item.attributes.address) }} -->
          {{ item.attributes.address }}<br>
          Philadelphila, PA {{ item.attributes.ZIP2 }}
        </span>
      </div>
    </div>
    <div class="cell medium-12">
      <div
        v-if="item.attributes.phone_number"
        class="detail"
      >
        <font-awesome-icon icon="phone" />
        <span>{{ item.attributes.phone_number }}</span>
      </div>
    </div>
    <section class="services grid-x grid-padding-x">
      <div class="cell">
        <h3 class="h4">
          {{ item.attributes.CATEGORY }}
        </h3>
        <h3 class="h4">
          Hours of Operation
        </h3>
        <div class="grid-y">
          <div>Hours: {{ item.attributes.HOURS }}</div>
          <div>Monday: {{ item.attributes.MONDAY }}</div>
          <div>Tuesday: {{ item.attributes.TUESDAY }}</div>
          <div>Wednesday: {{ item.attributes.WEDNESDAY }}</div>
          <div>Thursday: {{ item.attributes.THURSDAY }}</div>
          <div>Friday: {{ item.attributes.FRIDAY }}</div>
          <div>Saturday: {{ item.attributes.SATURDAY }}</div>
          <div>Sunday: {{ item.attributes.SUNDAY }}</div>


          <!-- <div
            v-for="i in parseServiceList(item.services_offered)"
            :key="i"
            class="cell medium-12 service-item"
          >
            {{ i }}
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>

// import TopicComponent from '@phila/vue-comps/src/components/TopicComponent.vue';

export default {
  // mixins: [ TopicComponent ],
  props: {
    isMapVisible: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  data() {
    return {
      locationOpen: false,
    };
  },
  computed: {
    servicesOffered() {
      return this.$props.item.services_offered.split(',');
    },
    selectedResources() {
      return this.$store.state.selectedResources;
    },
    latestSelectedResourceFromMap() {
      return this.$store.state.map.latestSelectedResourceFromMap;
    },
  },
  watch: {
    selectedResources(nextSelectedResources) {
      if (this.locationOpen || nextSelectedResources.includes(this.$props.item._featureId)) {
        if (this.locationOpen === false) {
          this.openLocation();
        } else if (this.locationOpen && !nextSelectedResources.includes(this.$props.item._featureId)) {
          this.locationOpen = false;
        }
      } else {
        this.locationOpen = false;
      }
    },
    isMapVisible(nextIsMapVisible) {
      if (!nextIsMapVisible) {
        if (this.latestSelectedResourceFromMap) {
          console.log('ExpandCollapse is reporting map is invisible and there is a this.latestSelectedResourceFromMap:', this.latestSelectedResourceFromMap);
          if (this.latestSelectedResourceFromMap === this.item._featureId) {
            const el = this.$el;
            const visible = this.isElementInViewport(el);
            if (!visible) {
              el.scrollIntoView();
            }
          }
        }
      }
    },
  },
  mounted() {
    if (this.selectedResources.includes(this.item._featureId)) {
      this.locationOpen = true;
    }
  },
  methods: {
    parseAddress(address) {
      const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
      return formattedAddress;
    },
    openLocation() {
      this.locationOpen = true;
      const el = this.$el;
      const visible = this.isElementInViewport(el);
      if (!visible) {
        el.scrollIntoView();
      }
    },
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      // console.log('bounding box', rect);
      const visibility = {
        // TODO the 108 below is account for the combined height of the
        // app header and address header. this is not a good long-term
        // solution - instead, use the `bottom` value of the address header's
        // bounding rect. however, this should only fire on small devices,
        // which would require again hard-coding screen breakpoints from
        // standards or some other magic, which might not a huge
        // improvement in terms of decoupling logic and presentation. hmm.
        top: rect.top >= 108,
        left: rect.left >= 0,
        bottom: rect.bottom <= (window.innerHeight || document.documentElement.clientHeight),
        right: rect.right <= (window.innerWidth || document.documentElement.clientWidth),
      };

      // console.log('visibility', visibility);

      // return if all sides are visible
      return Object.values(visibility).every(val => val);
    },
    expandLocation() {
      // console.log('ExpandCollapse expandLocation is starting');
      this.locationOpen = !this.locationOpen;
      const selectedResource = this.$props.item._featureId;
      const selectedResources = [ ...this.selectedResources ];
      let latestSelectedResourceFromExpand = null;
      if (this.locationOpen) {
        selectedResources.push(selectedResource);
        latestSelectedResourceFromExpand = selectedResource;
      } else {
        selectedResources.splice(selectedResources.indexOf(selectedResource), 1);
      }
      // this.locationOpen ? selectedResources.push(selectedResource) : selectedResources.splice(selectedResources.indexOf(selectedResource), 1);
      // console.log('ExpandCollapse expandLocation after selectedResources is defined');
      this.$store.commit('setSelectedResources', selectedResources);
      this.$store.commit('setLatestSelectedResourceFromExpand', latestSelectedResourceFromExpand);
    },
    makeID( itemTitle ){
      // console.log('itemTitle:', itemTitle);
      if (itemTitle) {
        return itemTitle.replace(/\s+/g, '-').toLowerCase();
      }
      return '';

    },
  },
};
</script>
<style lang="scss">
.location-item {
  position: relative;
  border-bottom: 1px solid black;
  height:100%;

  &:hover::after {
    color: white;
  }

  .location-title {
    cursor: pointer;
    padding: 1rem;
    margin-bottom: 0;
    &:hover{
      background: #2176d2;
      color: white;
    }
  }

  &::after{
    position: absolute;
    right:1rem;
    top: 0;
    content: '+';
    font-weight: 900;
    font-size:1.5rem;
    z-index: 100;
    color: color(dark-ben-franklin)
  }
  &.open{
    h2{
      color:white;
      background-color: color(ben-franklin-blue);
      font-weight: 900;
    }
    &::after{
      content: '-';
      color:white;
    }
  }
  .location-content{
    overflow: hidden;
    height:0;

    &.location-open{
      padding: 1rem;
      height: 100%;
      overflow: initial;
    }
  }
}
</style>
