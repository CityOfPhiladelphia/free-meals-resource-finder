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
        <div>{{ $t('checkSite') }}</div>
        <!-- <div>{{ $t('holidayLaborDay') }}</div> -->
      </div>
    </div>

    <div class="has-text-centered container">
      <button
        class="button open-list-button"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>

    <!-- foodSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.foodSites.color }"
    >
      <b>{{ $t('sections.foodSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.foodSites.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.foodSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
        <div v-html="$t('sections.foodSites.pickupDetails.p3')" />
        <ul>
          <li v-html="$t('sections.foodSites.pickupDetails.li1')" />
          <li v-html="$t('sections.foodSites.pickupDetails.li2')" />
          <li v-html="$t('sections.foodSites.pickupDetails.li3')" />
        </ul>
      </div>
    </div>

    <!-- generalMealSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.generalMealSites.color }"
    >
      <b>{{ $t('sections.generalMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.generalMealSites.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.generalMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
      </div>
    </div>

    <!-- olderAdultMealSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.olderAdultMealSites.color }"
    >
      <b>{{ $t('sections.olderAdultMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.olderAdultMealSites.eligibility.p1')" />
        <ul>
          <li v-html="$t('sections.olderAdultMealSites.subsections.PCA.eligibility.li1')" />
          <li v-html="$t('sections.olderAdultMealSites.subsections.PPR_Senior.eligibility.li1')" />
        </ul>
        <div v-html="$t('sections.olderAdultMealSites.eligibility.p2')" />
      </div>
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <!-- <span v-html="$t('sections.olderAdultMealSites.pickupDetails.p1')" />&ZeroWidthSpace; -->
        <span v-html="$t('sections.olderAdultMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
        <div v-html="$t('sections.olderAdultMealSites.pickupDetails.p4')" />
      </div>
    </div>

    <!-- studentMealSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.studentMealSites.color }"
    >
      <b>{{ $t('sections.studentMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.studentMealSites.eligibility')" />
      </div>
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.studentMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
      </div>
    </div>
    <hr class="no-margin">
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('otherResources')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.studentMealSites.otherResources.p1')" />
        <ul>
          <li v-html="$t('sections.studentMealSites.otherResources.li1')" />
          <li v-html="$t('sections.studentMealSites.otherResources.li2')" />
          <li v-html="$t('sections.studentMealSites.otherResources.li3')" />
        </ul>
      </div>
    </div>

    <!-- publicBenefits -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.publicBenefits.color }"
    >
      <b>{{ $t('sections.publicBenefits.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.publicBenefits.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.publicBenefits.pickupDetails.p1')" />
        <ul>
          <li v-html="$t('sections.publicBenefits.pickupDetails.li1')" />
          <li v-html="$t('sections.publicBenefits.pickupDetails.li2')" />
          <li v-html="$t('sections.publicBenefits.pickupDetails.li3')" />
        </ul>
        <div v-html="$t('sections.publicBenefits.pickupDetails.p2')" />
      </div>
    </div>

    <!-- more resources section -->
    <div
      class="section-header"
      :style="{ 'background-color': '#F0F0F0', 'color': 'black' }"
    >
      <b>{{ $t('sections.moreResources.header') }}</b>
    </div>
    <div class="custom-section">
      <div v-html="$t('sections.moreResources.p1')" />
    </div>
  </div>
</template>

<script>

// import { parse, format } from 'date-fns';
// import greetingSection from './greetingSection.vue';

export default {
  name: 'CustomGreeting',
  components: {
    // greetingSection,
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
      console.log('customGreeting.vue getCounts is running');
      const refineData = this.database;
      let service = '';

      console.log('in getRefineSearchList, refineData:', refineData);
      refineData.forEach((arrayElem) => {
        // console.log('arrayElem:', arrayElem);
        if (arrayElem.services_offered) {
          service += `${arrayElem.services_offered},`;
        } else if (arrayElem.attributes.category) {
          service += `${arrayElem.attributes.category},`;
        }
      });

      // TODO: break this into smaller chunks
      // let serviceArray = service.split(/(,|;)/);
      let serviceArray = service.split(',');
      serviceArray = serviceArray.map(s => s.trim());

      let countObject = serviceArray.reduce(function (acc, curr) {
        if (curr) {
          if (typeof acc[curr] == 'undefined') {
            // console.log('Object.keys(acc)', Object.keys(acc), 'curr', curr);
            acc[curr] = 1;
          } else {
            acc[curr] += 1;
          }
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

.section-header {
    background-color: #0f4d90;
    font-size: 16px;
    color: white;
    padding: 4px;
    padding-left: 8px;
  }

  .underlined {
    text-decoration: underline;
  }

  .no-margin {
    margin: 0px;
  }

  .big-cell-pad {
    font-size: 14px;
    padding: 4px;
    margin: 0px !important;
  }

  .small-cell-pad {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 4px;
    padding-left: 0px;
  }
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
