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
          <a href="/guide" alt="배우기" class="rounded"> 배우기 </a>
          <a href="https://github.com/aheui/avis" target="_blank" alt="avis" class="rounded"> 
            시작하기
          </a>
          <a href="https://github.com/aheui" class="rounded" alt="아희 공식 깃헙"> GITHUB </a>
        </p>
      </div>
    </div>
    <div class="inner">
      <div class="flex points">
        <div class="point">
          <h2> 과학적 </h2>
          <p> 한글 자모의 특징을 살린 언어디자인 </p>
        </div>
        <div class="point">
          <h2> 고성능 </h2>
          <p> JIT을 지원하는 인터프리터 </p>
        </div>
        <div class="point">
          <h2> 난독화 </h2>
          <p> 작은 노력으로도 크게 떨어지는 가독성 </p>
        </div>
      </div>
    </div>
    <div id="implements">
      <h4> 프로젝트 </h4>
      <p>

      </p>
    </div>
    <div id="foot">
      Puzzlet Chung
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
#implements {
  text-align: center;
  margin-top: 120px;
  width: 100%;
  height: 400px;
  background-color: #f6f6f6;
  padding: 60px 0px;
}
div#implements > h4 {
  color: rgba(1, 1, 1, 0.7);
}
#foot {
  text-align: center;
  height: 160px;
  background-color: rgba(1, 1, 1, 0.8);
  padding: 20px 0px;
  color: white;
}
h1, h2 {
  font-weight: normal;
}

p#right {
  text-align: right;
  margin: 20px 0px;
}

p#right > a {
  margin-left: 20px;
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

div.point > h2 {
  margin-bottom: 20px;
}

@media screen and (min-width:600px) {
  #logo {
    font-size: 500pt;
    width: 220px;
    margin-right: 20px;
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
