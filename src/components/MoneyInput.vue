<template>
  <input id="money" class="moneyInput" type="number" v-model="newRecord" debounce="500" v-on:keyup.enter="moneyHandler">
</template>

<script>
export default {
  data () {
    return {
      newRecord: null
    };
  },
  methods: {
    moneyHandler: function (event) {
      if (event && event.shiftKey) {
        this.saveMoney();
      } else {
        this.spendMoney();
      }
    },
    spendMoney: function () {
      const record = this.newRecord * -1;
      if (!record) return;

      this.$emit('update-balance', record);
      this.$emit('add-record', record);
      this.newRecord = null;
    },
    saveMoney: function () {
      const record = this.newRecord;
      if (!record) return;

      this.$emit('update-balance', record);
      this.$emit('add-record', record);
      this.newRecord = null;
    }
  }
};
</script>

<style>
input#money::-webkit-inner-spin-button,
input#money::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.moneyInput {
  width: 90%;
  font-size: 24pt;
  text-align: right;
  margin: 10px auto;
  padding: 5px 10px;
  color: #333;
  border: 2px solid #333;
}
</style>