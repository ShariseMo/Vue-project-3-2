<template>
  <div class="nav_bottom">
    <ul>
      <li>
        <router-link to="/layouts/home"><img src="../assets/img/icon/home.png"></router-link>
      </li>
      <li>
        <router-link to="/layouts/classify"><img src="../assets/img/icon/camp.png"></router-link>
      </li>
      <li>
        <router-link to="/layouts/banner"><img src="../assets/img/icon/pic.png"></router-link>
      </li>
      <li>
        <router-link to="/layouts/banner"><img src="../assets/img/icon/account.png"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav",
    data: function () {
      return {

      }
    },
  };

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style-type: none;
  }

  .nav_bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background: #fff;
    ul {
      margin-left: -10px;
    }
    li {
      float: left;
      width: 25%;
      padding: 5px 0;
      text-align: center;
      border-right: 1px solid #fff;
      background: #eee;
      img {
        width: 45%;
      }
    }
    li:last-child {
      border: 0;
    }
  }

</style>
