import './Landing.css';
import fuecoco from '../../assets/image/fuecoco.png';
import profile from '../../assets/image/profile.jpg';



export const Landing = () => {
  return (
    <>
      <img src={profile} className='profile_img' alt='프로필 사진'></img>
      <img src={fuecoco} alt='뜨아거'></img>
      <h1>안녕하세요 서형준의 포폴이 될 사이트 입니다잉~</h1>
      <p>우선 커여운 뜨아거 보고 계세여</p>
    </>
  )
}

export default Landing;