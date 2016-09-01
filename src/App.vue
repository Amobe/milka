<template>
  <div id="app">
    <div class="background">
      <p id="balance-value">{{ balance }}</p>
      <input id="money" class="moneyInput" type="number" v-model="money" debounce="500" v-on:keyup.enter="moneyHandler">
      <ul class="records">
        <li class="record" :class="{save: record.value > 0, spend: record.value < 0}" v-for="record in records">
          <div>
            <label>{{ record.value }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      balance: 0,
      money: null,
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

.background {
  width: 20%;
  padding: 0 0;
  background-color: rgb(255, 251, 240);
  text-align: center;
}

#balance-value {
  color: #444;
  font-size: 50pt;
  font-weight: bolder;
  margin: auto 0;
  padding: 30px 0 20px 0;
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

ul.records {
  list-style: none;
  text-align: center;
  width: 100%;
  padding: 0 0;
  padding: 0 0;
  margin: 0 0;
}

li.record {
  width: 100%;
  text-align: center;
  background-color: #333;
}

li.record > div {
  width: 90%;
  padding: 10px 0;
  margin: 0 5%;
  font-size: 16pt;
  font-weight: bold;
  background-color: transparent;
  border-bottom: 1px solid #AAA;
}

li.record.save {
  color: #04BFBF;
}

li.record.spend {
  color: #FF8598;
}
</style>
