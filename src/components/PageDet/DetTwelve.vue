<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>마피아</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu12.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 5인 이상</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starWh"></span>
          </p>
        </div>
        <div class="infoBox">
          <p>유형 : 전략</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_mafia01.png" alt="" />
              모든 사람은 서로를 볼 수 있게 마주보며 앉고, 사회자를 정합니다. 사회자는
              플레이어들에게 직업 카드를 1장씩 비공개로 나눠줍니다.<br />
              플레이어들은 다른 사람이 보지 못하게 주의하며 자신의 직업을 확인합니다.
            </li>
            <li>
              <img src="@/assets/img/img_mafia03.png" alt="" />
              직업을 확인하고난 후, 낮/밤이 번갈아가며 게임이 진행됩니다. 첫번째 날에는 낮부터
              시작하고, 낮에는 마피아일 것 같은 사람을 추리합니다. 의심되는 사람이 있으면 죽일지,
              살릴지 다수결 투표로 정합니다.
            </li>
            <li>
              <img src="@/assets/img/img_mafia02.png" alt="" />
              밤에는 각자 직업 특성에 맞는 능력을 사용할 수 있습니다. 밤이 되면 모두가 고개를 숙이고
              눈을 감은채 테이블을 두드립니다. 사회자는 특정 직업을 한명씩 호명하여 어떤 사람에게
              능력을 쓸 지 확인합니다.<br />
              플레이어는 다른 사람들이 눈치채지 못하게 내 능력을 사용할 사람을 지목합니다.
            </li>
            <li>
              다음 날 낮이 되면 마피아의 총에 맞은 사람은 아무 말도 할 수 없고 게임에 참여할 수
              없습니다. 시민팀은 총을 쏜 마피아를 찾아내야하고, 마피아는 정체가 드러나지 않도록 교란
              작전을 펼쳐야합니다.
            </li>
            <li>
              <img src="@/assets/img/img_mafia04.png" alt="" />
              <img src="@/assets/img/img_mafia05.png" alt="" />
              범죄자 팀의 수가 시민의 수와 같아지면 범죄자 팀이 승리합니다. 그러나 범죄자 팀이 모두
              사망하면 시민들의 승리입니다.
            </li>
          </ol>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 진행</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              모든 사람은 서로를 볼 수 있게 마주보며 앉고, 사회자를 정합니다. 사회자는
              플레이어들에게 직업 카드를 1장씩 비공개로 나눠줍니다.<br />
              플레이어들은 다른 사람이 보지 못하게 주의하며 자신의 직업을 확인합니다. 게임이
              시작되면, 밤부터 시작되며 낮/밤이 번갈아가며 게임이 진행됩니다.
            </li>
            <li>
              <h4>첫번째 밤</h4>
              사회자가 특정 직업을 하나씩 호명합니다.<br />
              <p class="dash">
                <b>마피아</b>가 호명되면 마피아끼리 정체를 확인하고 다시 잠이 듭니다. 첫번째 밤에는
                시민을 살해할 수 없습니다.
              </p>
              <p class="dash">
                <b>수사관</b>이 호명되면 직업이 궁금한 플레이어를 지목합니다. 지목당한 플레이어가
                시민인지 마피아인지 여부를 알아낼 수 있습니다.
              </p>
              <p class="dash">
                <b>의사</b>가 호명되면 고개를 들어 살리고 싶은 플레이어를 지목하고 다시 잠에 듭니다.
              </p>
            </li>
            <li>
              <h4>첫번째 낮</h4>
              <p class="dash">
                모든 플레이어는 눈을 뜹니다. 사회자는 지난 밤에 무슨 일이 있었는지 알려줍니다.<br />
                (예시1 : ○○플레이어는 마피아에 의해 잔인하게 살해당했습니다 / 예시2 : 지난 밤은 아주
                조용했고 아무일도 일어나지 않았습니다.)
              </p>
              <p class="dash">
                플레이어들은 지난밤 일어난 사건을 토대로 토론을 진행합니다. 시민들은 마피아가
                누구인지 추리하고, 마피아는 다른 직업인척 연기도 하며 열심히 정체를 숨겨야합니다.
              </p>
              <p class="dash">
                토론이 끝나면 플레이어들은 가장 의심스러운 한명을 지목하여 재판을 진행합니다.
              </p>
              <p class="dash">
                재판대에 선 플레이어는 최후의 변론 기회를 가질 수 있으며, 최후의 변론을 들은 나머지
                플레이어들은 해당 플레이어를 죽일지 살릴지 투표를 진행합니다. '죽인다'의 투표수가
                많으면 해당 플레이어는 직업이 공개되지 않은채 게임에서 제외됩니다. '살린다'의
                투표수가 많으면 해당 재판에서는 아무도 죽지않은채 밤으로 넘어갑니다.
              </p>
            </li>
            <li>
              <h4>두번째 밤</h4>
              <p class="dash">
                마피아와 수사관,의사는 이전 밤과 마찬가지로 능력을 사용해서 서로 수색하고 공격하고
                방어합니다.
              </p>
              <p class="dash">
                두번째 밤 부터는 마피아가 시민을 살해할 수 있습니다. 마피아들은 간단한 수신호로
                의견을 통일한 후 죽이고 싶은 시민을 한명 지목합니다.
              </p>
            </li>
            <li>
              계속 밤/낮을 반복하며 시민팀은 마피아를 찾아내서 재판으로 처형하고, 마피아팀은 밤에
              은밀히 시민팀을 살해해서 게임에서 승리하세요.
            </li>
          </ol>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>직업 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_mafia08.jpg" alt="" />
              <h4>선량한 시민</h4>
              <p>
                밤에는 잠이 들고, 낮에는 토론을 하여 마피아를 찾아내서 재판을 통해 처형시켜야
                합니다.
              </p>
              <p>직업 능력은 없습니다. 잘못 추리해서 같은 시민을 죽이지 않게 조심해야합니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_mafia07.png" alt="" />
              <h4>수사관</h4>
              <p>
                수사관은 시민팀입니다.<br />밤마다 한 명의 플레이어를 지목해서 그 플레이어가
                마피아인지, 시민인지 알 수 있습니다.
              </p>
              <p>
                수사관의 임무는 자신의 수색 결과를 바탕으로 낮에 벌어지는 토론에서 시민들이 올바른
                선택을 할 수 있도록 인도하는 것입니다.
              </p>
              <p>전략에 따라 정체를 숨길 수있고, 수색 결과도 밝히지 않을 수 있습니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_mafia09.jpg" alt="" />
              <h4>의사</h4>
              <p>의사는 시민팀입니다.</p>
              <p>
                밤마다 한 명의 플레이어를 지목해서 마피아의 공격으로부터 플레이어를 지켜낼 수
                있습니다.
              </p>
              <p>자신이 살해당할 것 같은 밤에는 자신을 지목해서 위기를 모면할 수도 있습니다.</p>
              <p>
                보통은 끝까지 정체를 숨기는게 생존에 유리하지만, <br />본인이 마피아로 의심받는
                상황에서는 잘 생각하고 행동해야 합니다.
              </p>
              <p>낮에 벌어지는 토론 과정을 지켜보고 최대한 많은 시민을 살려주세요.</p>
            </li>
            <li>
              <img src="@/assets/img/img_mafia06.png" alt="" />
              <h4>마피아</h4>
              <p>마피아는 범죄자 팀입니다.</p>
              <p>밤마다 시민을 공격해 살해할 수 있습니다.</p>
              <p>시민에게 자신의 정체가 들키지않게 조심하며 시민을 한명씩 처리하세요.</p>
              <p>
                낮에는 자신의 알리바이를 증명할 수 있게 다른 직업을 흉내내며 교란 작전을 펼치는 것도
                중요합니다.
              </p>
            </li>
          </ol>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
