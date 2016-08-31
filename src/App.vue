<template>
  <div id="app">
    <p id="balance-title">餘額</p>
    <p id="balance-value">{{ balance }}</p>
    <input id="money" type="number" v-model="money"  debounce="500" v-on:keyup.enter="moneyHandler">
    <ul class="records">
      <li class="record" v-for="record in records">
        <div>
          <label>{{ record.value }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      balance: 0,
      money: 0,
      records: [],
      recordIdCounter: 0
    }
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
      this.balance -= this.money;
      this.addRecord(-1 * this.money);
      this.money = null;
    },
    saveMoney: function () {
      this.balance += this.money;
      this.addRecord(this.money);
      this.money = null;
    },
    addRecord: function (value) {
      this.records.unshift({ id: this.recordIdCounter++, value: value });
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

input#money::-webkit-inner-spin-button,
input#money::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
