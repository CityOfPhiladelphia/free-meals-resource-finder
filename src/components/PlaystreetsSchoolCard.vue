<template>
  <section class="services">
    <!-- <vertical-table-light
      class="print-padding"
      :slots="mainVerticalTableSlots"
      :options="mainVerticalTableOptions"
    /> -->
    <h3>{{ $t('eligibility') }}</h3>

    <div class="table-intro">
      {{ $t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility') }}
    </div>

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails')"
    />
  </section>
</template>

<script>

export default {
  name: 'PlaystreetsSchoolCard',
  components: {
    // VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'../pvc/VerticalTableLight.vue'),
  },
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
    // mainVerticalTableOptions() {
    //   return {
    //     styles: {
    //       th: {
    //         'vertical-align': 'top',
    //         'font-size': '14px',
    //         'min-width': '40px !important',
    //         'max-width': '50px !important',
    //         'width': '10% !important',
    //       },
    //       td: {
    //         'font-size': '14px',
    //       },
    //     },
    //   };
    // },
    // mainVerticalTableSlots() {
    //   return {
    //     id: 'mainTable',
    //     fields: [
    //       {
    //         label: 'eligibility',
    //         labelType: 'i18n',
    //         value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY +  '.eligibility',
    //         valueType: 'i18n',
    //       },
    //       {
    //         label: 'pickupDetails',
    //         labelType: 'i18n',
    //         value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY + '.pickupDetails',
    //         valueType: 'i18n',
    //       },
    //     ],
    //   };
    // },
  },
};

</script>
