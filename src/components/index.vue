<template>
  <div id="index">
    <div class="inner" id="headline">
      <img id="logo" src="../assets/logo.svg" alt="로고">
      <div>
        <h1>
          한글로 쓰는 <br />
          난해한 프로그래밍 언어
        </h1>
        <p id="right">
          <a href="/guide" alt="시작" class="rounded"> 시작하기 </a>
          <a href="https://github.com/aheui" class="rounded" alt="아희 공식 깃헙"> GITHUB </a>
        </p>
      </div>
    </div>
    <div class="inner">
      <div class="flex points">
        <div class="point">
          <h2> 난해함 </h2>
          <p> 난해해요 </p>
        </div>
        <div class="point">
          <h2> 난해함 </h2>
          <p> 난해해요 </p>
        </div>
        <div class="point">
          <h2> 난해함 </h2>
          <p> 난해해요 </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '한글로 쓰는\n난해한 프로그래밍 언어'
    }
  }
}
</script>

<style scoped>
#index {
}
h1, h2 {
  font-weight: normal;
}

p#right {
  margin: 20px 0px;
}

#headline {
  display: flex;
  padding: 40px 40px 30px;
}

.points {
  justify-content: space-around;
}

.point {
  text-align: center;
}

@media screen and (min-width:600px) {
  #logo {
    font-size: 500pt;
    width: 220px;
  }
  .inner {
    max-width: 1260px;
    margin: 0 auto;
  }
  h1 {
    font-size: 3.2em;
  }
}
@media screen and (max-width:599px) {
  nav {
    display: none;
  }
}
</style>
