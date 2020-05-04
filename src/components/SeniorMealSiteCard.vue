<template>
  <section class="services grid-x grid-padding-x">
    <div class="cell">
      <vertical-table-light
        class="print-padding"
        :slots="mainVerticalTableSlots"
        :options="mainVerticalTableOptions"
      />
    </div>
  </section>
</template>

<script>

export default {
  name: 'SeniorMealSiteCard',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTableLight" */'@phila/vue-comps/src/components/VerticalTableLight.vue'),
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
            label: 'randomWords.eligibility',
            labelType: 'i18n',
            value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY + '.eligibility',
            valueType: 'i18n',
          },
          {
            label: 'randomWords.pickupDetails',
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

<style lang="scss">

.services {
  width: 100%;
}

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
