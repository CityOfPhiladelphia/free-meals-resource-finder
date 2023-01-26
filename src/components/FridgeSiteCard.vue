<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.communityRefrigerators.eligibility')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.communityRefrigerators.pickupDetails')"
    />
  </section>
</template>

<script>

export default {
  name: 'FridgeSiteCard',
  // components: {},
  props: {
    item: {
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
      return this.subsections[this.$props.item.attributes['CATEGORY']];
    },
    subsection() {
      return this.$props.item.attributes.CATEGORY;
    },
  },
};

</script>
