<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <!-- <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.eligibility.li1')"
    /> -->
    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility.li1')"
    />
    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.eligibility.p2')"
    />
    <div
      v-if="$config.i18n.data.messages['en-US'].sections[this.section].subsections[this.subsection].eligibility.p2"
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility.p2')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div class="table-intro">
      <!-- class="table-intro" -->
      <span
        v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails.p1')"
      />&ZeroWidthSpace;
  
      <!-- class="table-intro" -->
      <span
        v-html="$t('daysAndTimesVaryBySite')"
      />
    </div>

    <div
      v-if="$config.i18n.data.messages['en-US'].sections[this.section].subsections[this.subsection].pickupDetails.p3"
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails.p3')"
    />

    <div
      v-if="$config.i18n.data.messages['en-US'].sections[this.section].subsections[this.subsection].pickupDetails.p4"
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails.p4')"
    />
  </section>
</template>

<script>

export default {
  name: 'SeniorMealSiteCard',
  // components: {},
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
    pickupDetails: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  computed: {
    subsections() {
      return this.$config.subsections;
    },
    section() {
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      // special cases allow picking meals up
      // non-special cases must be eaten on site
      let specialCases = [
        'Southwest Senior Center',
        'Firehouse Active Adult Center',
        'Nativity Satellite Program',
        'St. Edmonds Senior Community Center Catholic Housing and Community Services',
        'Catholic Housing and Community Services Star Harbor Senior Center Satellite',
        'Juniata Park Older Adult Center',
        'Center in the Park',
        'The Center at Journey’s Way',
        'Northern Living Center',
        'Marconi Older Adult Program',
        'Lutheran Settlement House',
        'West Philadelphia Senior Community Center',
        'Peter Brassi NE Senior Center',
      ];
      if (specialCases.includes(this.$props.item.attributes['site_name'])) {
        return 'specialPCA';
      }
      return this.$props.item.attributes.category;
    },
  },
};

</script>
