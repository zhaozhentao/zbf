<template>
  <div class="home-container" style="background: rgb(239, 239, 239)">
    <div class="container" style="background-color: #fff;">
      <p class="title">个人中心</p>

      <div class="row" style="margin-top: 16px">
        <div class="col-md-3 col-xs-3">
          <img src="https://tvax4.sinaimg.cn/crop.0.0.640.640.180/6e064726ly8fqeacewghbj20hs0hsdgq.jpg"
               class="profile-avatar">
        </div>
        <div class="col-md-9 col-xs-9" style="margin-top: 4px">
          <p class="name">哦哦哦哦哦哦</p>
          <p class="badge status">休息中</p>
        </div>
      </div>

      <div class="row" style="margin-top: 8px">
        <div class="col-md-4 col-xs-4 sum">
          <p class="content">---</p>
          <p class="sum-title">当班收费(元)</p>
        </div>

        <div class="line"></div>

        <div class="col-md-4 col-xs-4 sum">
          <p class="content">---</p>
          <p class="sum-title">处理车辆(辆)</p>
        </div>

        <div class="line"></div>

        <div class="col-md-4 col-xs-4 sum">
          <p class="content">---</p>
          <p class="sum-title">异常开闸(辆)</p>
        </div>
      </div>
    </div>

    <router-link :to="`/shift_money`" class="container button" style="margin-top: 16px">
      <div class="row">
        <span class="item-icon icon collect"></span>
        <span class="item-title">收费汇总</span>
        <span class="icon right-arrow"></span>
      </div>
    </router-link>

    <div class="container" style="background: white;margin-top: 16px">
      <div class="button">
        <div class="row">
          <span class="item-icon icon scan"></span>
          <span class="item-title">扫码交班</span>
          <span class="icon right-arrow"></span>
        </div>
      </div>

      <div class="line-horizon"></div>

      <router-link :to="`/duty`" class="button">
        <div class="row">
          <span class="item-icon icon duty"></span>
          <span class="item-title">选择通道上班</span>
          <span class="icon right-arrow"></span>
        </div>
      </router-link>
    </div>

    <div class="container logout button">
      <div class="row" style="text-align: center">
        <span class="item-title">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
  }
</script>

<style scoped lang="scss">
  .title {
    font-family: PingFangSC-Medium;
    font-size: 22px;
    color: #333333;
    letter-spacing: 2px;
    margin-top: 30px;
    margin-left: 13px;
  }

  .profile-avatar {
    width: 5rem;
    height: 5rem;
    border: 1px solid white;
    border-radius: 50%;
    margin-left: 10px;
  }

  .name {
    font-size: 18px;
    color: #0C0C0C;
    letter-spacing: 0;
  }

  .status {
    background: #EDEDED;
    color: rgba(12, 12, 12, 0.64);
    font-size: 10px;
  }

  .sum {
    text-align: center;
    width: 33%;

    .content {
      font-size: 15px;
      color: rgba(12, 12, 12, 0.90);
    }

    .sum-title {
      color: rgba(10, 10, 10, 0.40);
      font-size: 8px;
    }
  }

  .line {
    width: 1px;
    height: 25px;
    background: rgba(10, 10, 10, 0.1);
    display: inline-block;
    float: left;
    margin-top: 13px;
  }

  .line-horizon {
    height: 1px;
    background: rgba(10, 10, 10, 0.1);
    margin-left: 16px;
  }

  .button {
    background: white;
    height: 54px;
    font-size: 14px;
    display: block;

    .item-icon {
      margin-top: 12px;
      margin-left: 16px;
      float: left;
    }

    .icon {
      display: inline-block;
      vertical-align: middle;
      width: 26px;
      height: 26px;
      background-size: contain !important;
      -webkit-background-size: contain !important;
    }

    .item-title {
      float: left;
      display: inline-block;
      margin-top: 18px;
      margin-left: 16px;
      color: #333333;
    }

    .right-arrow {
      float: right;
      margin-right: 12px;
      margin-top: 13px;
      background: url("../../assets/skip.png");
    }
  }

  .collect {
    background: url("../../assets/collect.png");
  }

  .scan {
    background: url("../../assets/scan.png");
  }

  .duty {
    background: url("../../assets/select_channel.png");
  }

  .logout {
    margin-top: 16px;
    margin-bottom: 16px;

    .item-title {
      float: none;
      margin-left: 0px;
    }
  }
</style>
