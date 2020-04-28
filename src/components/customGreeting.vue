<template>
  <div
    class="grid-y custom-greeting"
  >
    <div class="grid-x exclamation-holder">
      <font-awesome-icon
        icon="exclamation-triangle"
        class="fa-3x inline-block-class"
      />
      <div
        class="grid-y exclamation-details"
      >
        <div><b>Before you go:</b></div>
        <div>Check the specific site information. Hours are subject to change.</div>
      </div>
    </div>

    <greeting-section
      v-for="(section, key) in sections"
      :key="key"
      :header="key"
      :section="$config.sections[key]"
      :color="$config.sections[key].color"
    />
  </div>
</template>

<script>

import TopicComponent from '@phila/vue-comps/src/components/TopicComponent.vue';
import greetingSection from './greetingSection.vue';

export default {
  name: 'CustomGreeting',
  components: {
    greetingSection,
  },
  mixins: [ TopicComponent ],
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
    // if (this.$props.options) {
    //   data = {
    //     greetingStyle: this.$props.options.style || {},
    //   };
    // } else {
    //   data = {
    //     greetingStyle: {},
    //   };
    // }
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
      if (this.$store.state.sources[this.$appType].data) {
        return this.$store.state.sources[this.$appType].data.rows || this.$store.state.sources[this.$appType].data.features || this.$store.state.sources[this.$appType].data;
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
      subsections.PCA = 5;
      subsections.PPR_Senior = 4;
      this.subsections = subsections;
      this.$store.commit('setSubsections', subsections);
    },
  },
  mounted() {
    this.sections = this.$config.sections;
    // this.subsections = this.getCounts();
  },
  methods: {
    getCounts() {
      console.log('customGreeting.vue getCounts is running');
      const refineData = this.database;
      // const refineData = this.sources[this.$appType].data.rows;

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

      // const uniqArray = [ ...new Set(serviceArray) ];
      // console.log('serviceArray:', serviceArray, 'uniqArray:', uniqArray);
      //
      // // clean up any dangling , or ;
      // let uniq = uniqArray.filter(a => a.length > 2);
      //
      // uniq.filter(Boolean); // remove empties

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

<style scoped>

  .custom-greeting {
    padding: 12px;
  }

  .exclamation-holder {
    margin-top: 6px;
    margin-bottom: 14px;
  }

  .exclamation-details {
    margin-left: 14px;
  }

  .mb-panel-topics-greeting {
    padding-top: 20px;
  }

  .greeting {
    font-size: 20px;
    color: #444;
    padding: 14px;
  }

  .greeting-error {
    border-left-color: #ff0000;
  }

  /*medium*/
  @media screen and (min-width: 750px) {
    .mb-panel-topics-greeting {
      /*make this scroll on medium screens*/
      /*REVIEW this is a little hacky. the 120px shouldn't be hard-coded.*/
      height: calc(100vh - 120px);
      overflow: auto;
    }
  }
</style>
