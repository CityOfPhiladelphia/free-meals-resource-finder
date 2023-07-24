<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t(`sections.foodSites.subsections['Community Refrigerators'].eligibility`)"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t(`sections.foodSites.subsections['Community Refrigerators'].pickupDetails`)"
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
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      return this.$props.item.attributes.category;
    },
  },
};

</script>
