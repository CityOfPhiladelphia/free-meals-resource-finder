<template>
  <div
    class="custom-greeting content"
  >
    <div class="exclamation-holder columns is-mobile">
      <div class="column is-narrow">
        <font-awesome-icon
          icon="exclamation-triangle"
          class="fa-3x"
        />
      </div>
      <div class="column exclamation-details">
        <div><b>{{ $t('beforeYouGo') }}:</b></div>
        <div>{{ $t('checkSite') }}</div>
      </div>
    </div>

    <div class="has-text-centered container">
      <button
        class="button open-list-button"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>

    <!-- sections that rely on data -->
    <greeting-section
      v-for="(section, key) in sections"
      :key="key"
      :header="key"
      :section="$config.sections[key]"
      :color="$config.sections[key].color"
    />

    <!-- food pantries section -->
    <div
      class="section-header"
      :style="{ 'background-color': '#F0F0F0', 'color': 'black' }"
    >
      <b>{{ $t('sections.foodPantries.header') }}</b>
    </div>
    <div class="custom-section">
      {{ $t('sections.foodPantries.intro') }}
      <ul class="custom-ul">
        <li v-html="$t('sections.foodPantries.li1')" />
        <li v-html="$t('sections.foodPantries.li2')" />
        <li v-html="$t('sections.foodPantries.li3')" />
      </ul>
      {{ $t('sections.foodPantries.h2') }}
      <ul class="custom-ul">
        <li v-html="$t('sections.foodPantries.li21')" />
        <li v-html="$t('sections.foodPantries.li22')" />
        <li v-html="$t('sections.foodPantries.li23')" />
      </ul>
    </div>
  </div>
</template>

<script>

import { parse, format } from 'date-fns';
import greetingSection from './greetingSection.vue';

export default {
  name: 'CustomGreeting',
  components: {
    greetingSection,
  },
  props: {
    'message': {
      type: String,
      default: function() {
        return 'defaultMessage';
      },
    },
  },
  data() {
    let data = {
      sections: {},
      subsections: {},
    };
    return data;
  },
  computed: {
    i18nEnabled() {
      if (this.$config.i18n) {
        return true;
      }
      return false;

    },
    database() {
      if (this.$store.state.sources[this.$appType]) {
        if (this.$store.state.sources[this.$appType].data) {
          return this.$store.state.sources[this.$appType].data.rows || this.$store.state.sources[this.$appType].data.features || this.$store.state.sources[this.$appType].data;
        }
      }
      return [];
    },
    hasError() {
      return this.$store.state.geocode.status === 'error';
    },
    errorMessage() {
      const input = this.$store.state.geocode.input;
      return `
          <p>
            We couldn't find
            ${input ? '<strong>' + input + '</strong>' : 'that address'}.
            Are you sure everything was spelled correctly?
          </p>
          <p>
            Here are some examples of things you can search for:
          </p>
          <ul>
            <li>1234 Market St</li>
            <li>1001 Pine Street #201</li>
            <li>12th & Market</li>
            <li>883309050 (an OPA number with no hyphens or other characters)</li>
          </ul>
        `;
    },
  },
  watch: {
    database(nextDatabase) {
      let subsections = this.getCounts();
      this.subsections = subsections;
      this.$store.commit('setSubsections', subsections);
    },
  },
  mounted() {
    this.sections = this.$config.sections;
  },
  methods: {
    getCounts() {
      // console.log('customGreeting.vue getCounts is running');
      const refineData = this.database;
      let service = '';

      // console.log('in getRefineSearchList, refineData:', refineData);
      refineData.forEach((arrayElem) => {
        // console.log('arrayElem:', arrayElem);
        if (arrayElem.services_offered) {
          service += `${arrayElem.services_offered},`;
        } else if (arrayElem.attributes.CATEGORY) {
          service += `${arrayElem.attributes.CATEGORY},`;
        }
      });

      // TODO: break this into smaller chunks
      // let serviceArray = service.split(/(,|;)/);
      let serviceArray = service.split(',');
      serviceArray = serviceArray.map(s => s.trim());

      let countObject = serviceArray.reduce(function (acc, curr) {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
        return acc;
      }, {});

      return countObject;
    },
  },
};
</script>

<style lang="scss" scoped>

@import "../../node_modules/@phila/pinboard/src/assets/scss/customGreeting.scss";

.custom-section {
  font-size: 14px;
  margin-left: 8px;
  margin-top: 4px;
}

.custom-ul {
  margin-left: 4rem;
  font-size: 14px;
}

</style>
