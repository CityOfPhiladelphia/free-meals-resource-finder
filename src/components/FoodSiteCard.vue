<template>
  <section class="services grid-x grid-padding-x">
    <div class="cell">
      <vertical-table-light
        class="print-padding"
        :slots="mainVerticalTableSlots"
        :options="mainVerticalTableOptions"
      >
        <div class="table-slot">
          <div>
            {{ $t('sections.' + this.section + '.pickupDetails') }}
          </div>
          <vertical-table-3-cells-light
            class="print-padding"
            :slots="componentVerticalTableSlots"
          />
        </div>
      </vertical-table-light>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FoodSiteCard',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'@phila/vue-comps/src/components/VerticalTableLight.vue'),
    VerticalTable3CellsLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'@phila/vue-comps/src/components/VerticalTable3CellsLight.vue'),
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
            value: 'sections.' + this.section + '.eligibility',
            type: 'i18n',
          },
          {
            label: 'randomWords.pickupDetails',
            labelType: 'i18n',
            // value: 'sections.' + this.section + '.pickupDetails',
            type: 'component',
          },
        ],
      };
    },
    componentVerticalTableSlots() {
      let allDays = [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY' ];
      let theFields = [];
      let days = {};
      for (let day of allDays) {
        if (this.item.attributes[day] != null){
          let details;
          if (day === 'MONDAY') {
            details = 'non-perishable items only';
          } else {
            details = 'fresh produce only';
          }
          let dayObject = {
            label: 'randomWords.' + day,
            labelType: 'i18n',
            value: this.item.attributes[day],
            // type: 'i18n',
            value1: details,
          };
          // days[day] = this.item.attributes[day]
          theFields.push(dayObject);
        }
      }
      // console.log('days:', days);
      console.log('theFields:', theFields);

      return {
        id: 'mainTable',
        fields: theFields,
        // fields: [
        //   {
        //     label: 'randomWords.eligibility',
        //     labelType: 'i18n',
        //     value: 'sections.' + this.section + '.eligibility',
        //     type: 'i18n',
        //   },
        //   {
        //     label: 'randomWords.pickupDetails',
        //     labelType: 'i18n',
        //     type: 'component',
        //     value: 'component value',
        //   },
        // ],
      };
    },
  },
};

</script>

<style lang="scss">
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
