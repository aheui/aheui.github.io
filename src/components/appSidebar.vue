<template>
  <aside id="sidebar">
    <ul>
      <li class="current">
        <a class="title" href="/guide"> 소개 </a>
        <ul>
          <li>
            <a class="subtitle" href="/guide#aheui"> 아희 </a>
          </li>
          <li>
            <a class="subtitle" href="/guide#what-is-the-programming-language"> 프로그래밍 언어란? </a>
          </li>
          <li>
            <a class="subtitle" href="/guide#what-is-the-esolang"> 난해한 프로그래밍 언어란? </a>
          </li>
          <li>
            <a class="subtitle" href="/guide#name1"> 커뮤니티 </a>
          </li>
          <li>
            <a class="subtitle" href="/aheuicon" target="_blank"> 국제아희개발자대회 </a>
          </li>
        </ul>
      </li>
      <li class="current">
        <a class="title" href="/guide/standard"> 표준 </a>
        <ul>
          <li>
            <a class="subtitle" href="/guide/standard#summary"> 개요 </a>
          </li>
          <li>
            <a class="subtitle" href="/guide/standard#code"> 코드 </a>
          </li>
          <li>
            <a class="subtitle" href="/guide/standard#holsound"> 홀소리 </a>
          </li>
          <li>
            <a class="subtitle" href="/guide/standard#datsound"> 닿소리 </a>
          </li>
          <li>
            <a class="subtitle" href="/guide/standard#storage"> 저장공간 </a>
          </li>
        </ul>
      </li>
      <li class="current">
        <a 
          target="_blank"
          class="title" 
          href="https://github.com/aheui/snippets"
        >
          예제
        </a>
      </li>
    </ul>

  </aside>
</template>

<script>
export default {
  name: 'appSidebar',
}
</script>

<style scoped>

li {
  list-style: none;
}

a.title {
  display: block;
  padding: 16px 0px;
  font-weight: bold;
  font-size: 18pt;
}

a.subtitle {
  display: block;
  padding: 4px 0px;
  font-size: 14pt;
  padding-left: 1em;
}

#sidebar {
  position: fixed;
  height: 100%;
  padding: 40px 40px;
  flex: 0 0 260px;
}

</style>
