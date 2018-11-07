<template>
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Stock Chart</h3>
              <hr>
          </div>
          <div class="card-body">
              <div>
                  <p>{{ stockprices }}</p>
                  
              </div>
          </div>
      </div>
      <!-- <div class="card-footer">
          <form @submit.prevent="getData">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
            
              <button type="submit" class="btn btn-success">Get data</button>
          </form>
      </div> -->
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
       data() {
        return {
           
            stockprices: [],
            socket : io('localhost:3001')
        }
    },
    methods: {
        getData(e) {
            e.preventDefault();
        }
    },
        mounted() {
        this.socket.on('DATA', (data) => {
            console.log(data)
            this.stockprices = data
        });
    }
}
</script>

