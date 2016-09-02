<template>
  <div id="app">
    <div class="background">
      <p id="balance-value">{{ balance }}</p>
      <money-input @update-balance="updateBalance" @add-record="addRecord"></money-input>
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
import MoneyInput from './components/MoneyInput';
export default {
  components: {
    MoneyInput
  },
  data () {
    return {
      balance: 0,
      records: [],
      recordIdCounter: 0
    }
  },
  methods: {
    updateBalance: function (value) {
      this.balance += value;
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
