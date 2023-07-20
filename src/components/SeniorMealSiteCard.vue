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
      v-if="$config.i18n.data.messages['en-US'].sections[this.section].subsections[this.subsection].eligibility.p2"
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility.p2')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.pickupDetails.p1')"
    />
    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.pickupDetails.p3')"
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
      return this.$props.item.attributes.category;
    },
  },
};

</script>
