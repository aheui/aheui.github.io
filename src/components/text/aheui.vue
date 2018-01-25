<template>
  <div class="content">
    <h1 id="aheui"> 아희 </h1>
    <app-line> </app-line>
    <p>
      아희는 한글로 된 난해한 프로그래밍 언어입니다.
      여기저기 링크를 타다가 이 문서를 찾아오신 분들을 위해서 프로그래밍 언어에 대한 간단한 설명으로 시작하겠습니다.
      아시는 분들은 건너뛰셔도 됩니다.
    </p>

    <h1 id="what-is-the-programming-language"> 프로그래밍 언어란? </h1>
    <app-line> </app-line>
    <p>
      사람들이 워드, 인터넷 웹 브라우저, 게임 같은 소프트웨어를 “만든다”고 하는 것은 곧 글을 쓰는 기능, 인터넷을 보는 기능 등을 컴퓨터가 이해할 수 있는 명령으로 만들어서 써 주는 것을 뜻합니다.
      여기서 명령을 쓸 때에 쓰는 여러 규칙을 뭉뚱그려서 프로그래밍 언어라고 부릅니다.
      컴퓨터가 이해하기 위해 만든 언어이기 때문에 사람과 사람 사이의 의사소통을 위한 언어와는 거리가 있습니다.

      지구상에는 수백 가지가 넘는 수의 프로그래밍 언어가 있습니다. 그 중에서 가장 잘 알려진 프로그래밍 언어 가운데 하나로 C라는 언어가 있습니다. 아래는 “안녕하세요?”를 화면에 출력하는, C로 된 코드입니다.

      <code>
        <p>
          #include &lt;stdio.h&gt;

          int main () {
              &emsp;printf ("안녕하세요?\n");
              &emsp;return 0;
          }
        </p>
      </code>

      대부분의 프로그래밍 언어는 위와 같이 로마 자로 쓰도록 되어 있습니다.
    </p>

    <h1 id="what-is-the-esolang"> 난해한 프로그래밍 언어란? </h1>
    <app-line> </app-line>
    <p>
      프로그래밍 언어 중에서는 특수한 목적을 가지고 만들어졌거나, 언어의 한계를 시험하거나, 아니면 순전히 취미로 일부러 복잡하게 만든 프로그래밍 언어가 있는데, 이를 난해한 프로그래밍 언어로 부릅니다.
      이를테면 널리 쓰이는 프로그래밍 언어의 대부분은 위 C 언어와 같이 깔끔하며 알아보기 쉽게 되어 있지만, 아래 코드는 다릅니다.

      <code>
        <p>
        어두벊벖버범벅벖떠벋벍떠벑번뻐버떠뻐벚벌버더벊벖떠벛벜버버
        　뿌멓더떠떠떠떠더벋떠벌뻐뻐뻐
        붉차밠밪따따다밠밨따따다　박봃
        받빠따따맣반발따맣아희
        </p>
      </code>

      이 코드는 앞서 소개한 C로 된 것과 똑같이 “안녕하세요?”를 화면에 출력하지만 아희라는 언어로 쓰여져 있습니다.
      얼핏 봐서는 아희의 코드가 외계어와 같은 한글 파괴의 전형적인 예로 보일지도 모르지만, 아희는 위에서 설명한 것 처럼 인간이 쓰는 어떤 언어를 나타내기 위한 것이 아니기 때문에 흔히 얘기하는 ‘한글 파괴’에는 해당되지 않습니다.
    </p>

    <h1 id="comunity"> 커뮤니티 </h1>
    <app-line> </app-line>
    <ul>
      <li>
        <a class="link" href="https://github.com/aheui"> 깃헙 </a>
        - 아희 깃헙 그룹입니다.
      </li>
      <li>
        <a class="link" href="http://aheui.github.io/"> 표준 </a>
        - 아희의 표준을 적어 놓은 문서입니다.
      </li>
      <li>
        <a class="link" href="https://github.com/aheui/snippets"> 코드 </a>
        - 아희로 적은 코드입니다.
      </li>
      <li>
        <a class="link" href="/aheuicon"> 국제아희개발자대회 </a>
      </li>
    </ul>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import line from '../line'
import footer from '../footer'

export default {
  name: 'appContent',
  components: {
    'app-line': line,
    'app-footer': footer,
  }
}
</script>

<style scoped>
a {
  text-decoration: blue;
}
ul {
  padding-left: 2em;
}
h1 {
  margin-top: 40px;
}
p {
  word-wrap: white-space;
  white-space: pre-line;
  word-spacing: 0.05em;
}
</style>
