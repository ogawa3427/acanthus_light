import Myheader from '../components/Myheader';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <Myheader mode="original" />
      <h3>What is this?</h3>
      <p>金沢大学のアカンサスポータルは重すぎる！！<br></br>
      200kbpsとかの回線だとなんかエラー出て見れないこともしばしば。<br></br>
      てなわけで、サーバーサイドでアカンサスポータルを読み込んで、軽量化して表示するサービスを作ってます。
      </p>

      <h3>Products - 現在の成果物</h3>
      <p>↓窓に入力したURLを見に行ってテキスト部分だけ抽出して送信してくるやつ</p>
      <Link href="/any_page">any_page</Link>

      <h3>Contacts</h3>
      <p>Twitter: <a href="https://twitter.com/Ogawa3427">@Ogawa3427</a></p>
      <p>Website; <a href="https://sites.google.com/view/ogawa34>">https://sites.google.com/view/ogawa34</a></p>
      <p>GitHub: <a href="https://github.com/ogawa3427/acanthus_light">acanthus_light</a></p>
    </div>
  );
}

export default HomePage;