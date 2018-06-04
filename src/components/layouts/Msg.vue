<template>
  <div class="container">
    <div class="row card">
      <div>
        <h5 class="title">
          {{ content.msg_type === 1 ? content.content.channelName : content.content.leaveChannelName }}
        </h5>

        <span class="abName">{{content.content.abName}}</span>
      </div>

      <div style="margin-top: 4px;">
        <span class="carNo">{{content.msg_type === 1 ? content.content.carNo : content.content.leaveCarNo}}</span>

        <span class="wait">等待 {{timer}} s</span>
      </div>

      <span class="create_time">{{content.create_time}}</span>
    </div>
  </div>
</template>

<script>
  let _ = require('lodash');

  export default {
    name: "Msg",
    props: ['content', 'clock'],
    data() {
      return {
        create_time: 0
      }
    },
    computed: {
      timer() {
        this.clock;
        return _.now() - new Date(this.content.create_time);
        // return Math.floor(this.$data.create_time = () / 1000);
      }
    }
  }
</script>

<style scoped>
  .card {
    background: #F3F5F8;
    border: 1px solid #C1C6CD;
    margin: 6px 4px;
    padding: 8px 6px;
  }

  .title {
    display: inline-block;
    margin: 0px;
  }

  .abName {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(22, 22, 22, 0.66);
    letter-spacing: 0.79px;
    float: right;
  }

  .carNo {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(22, 22, 22, 0.66);
    letter-spacing: 0.79px;
  }

  .wait {
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: rgba(10, 10, 10, 0.40);
    letter-spacing: 0;
    float: right;
  }

  .create_time {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(10, 10, 10, 0.40);
    letter-spacing: 0;
    margin-top: 4px;
    display: inline-block;
  }
</style>
