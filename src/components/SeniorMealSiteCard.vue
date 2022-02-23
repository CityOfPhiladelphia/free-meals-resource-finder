<template>
  <section class="services">
    <vertical-table-light
      class="print-padding"
      :slots="mainVerticalTableSlots"
      :options="mainVerticalTableOptions"
    />
  </section>
</template>

<script>

export default {
  name: 'SeniorMealSiteCard',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTableLight" */'../pvc/VerticalTableLight.vue'),
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
    mainVerticalTableOptions() {
      return {
        styles: {
          th: {
            'vertical-align': 'top',
            'font-size': '14px',
          },
          td: {
            'font-size': '14px',
          },
        },
      };
    },
    mainVerticalTableSlots() {
      return {
        id: 'mainTable',
        fields: [
          {
            label: 'eligibility',
            labelType: 'i18n',
            value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY + '.eligibility',
            valueType: 'i18n',
          },
          {
            label: 'pickupDetails',
            labelType: 'i18n',
            value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY + '.pickupDetails',
            valueType: 'i18n',
          },
        ],
      };
    },
  },
};

</script>
