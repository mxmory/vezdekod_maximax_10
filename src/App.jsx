import gsap from 'gsap';
import { useEffect } from 'react';
const tl = gsap.timeline();

function App() {

  useEffect(() => {
    tl.fromTo('.header__title', {opacity: 0, y: -100}, {duration: 1, opacity: 1, y: 0}).fromTo('.role', {opacity: 0, y: 30}, {duration: 1, opacity: 1, y: 0}, '<').fromTo('.info', {opacity: 0, y: 20}, {duration: 1.3, opacity: 1, y: 0}, '<').fromTo('.info', {opacity: 0, y: 20}, {duration: 1.3, opacity: 1, y: 0}, '<')
    gsap.fromTo('.team__member .img__main', {x: 5, y: 5}, {x: -5, y: -5, duration: 1, stagger: 0.2, repeat: -1, yoyo: true})
    gsap.fromTo('.team__member .img__bg', {rotate: 10}, {rotate: -10, duration: 2, stagger: 0.2, repeat: -1, yoyo: true})
  }, [])

     

  return (
    <div className="App">
      <video className="bg-video" muted autoPlay loop src="./bg.mp4"/>
      <header className="header">
        <div className="header__title">
          <img className="header__img" src="https://i.ibb.co/8rwQJhj/6-2-1.png" alt="ocpocmaq"/>
          <h1>ocpocmaq</h1>
          <img className="line" src="https://i.ibb.co/37sPBqT/line-1.png" alt=""/>
        </div>
      </header>
      <main>
        <div className="team">
          <div className="team__wrapper">
            <div className="team__member">
                <div className="img">
                <img className="img__main" src="https://i.ibb.co/nRfDnxc/01-1.png" alt="01-1" border="0"/>
                <img className="img__bg" src="https://i.ibb.co/7p2wvSg/01.png" alt="01" border="0"/>
                </div>
                <div className="name">
                ar$en
                </div>
                <div className="role">ux/ui_des</div>
                <div className="info">любит коктейль кровавую мэри, хочет завести собаку, ищет работу</div>
            </div>
            <div className="team__member">
                <div className="img">
                <img className="img__main" src="https://i.ibb.co/44mPPZc/02-1.png" alt="01-1" border="0"/>
                <img className="img__bg" src="https://i.ibb.co/41DTQcn/02.png" alt="01" border="0"/>
                </div>
                <div className="name">
                aid@r
                </div>
                <div className="role">front_dev</div>
                <div className="info">любит элеши и эчпочмаки, хочет ???, ищет себя</div>
            </div>
            <div className="team__member">
                <div className="img">
                <img className="img__main" src="https://i.ibb.co/XZkpRPW/03-1.png" alt="01-1" border="0"/>
                <img className="img__bg" src="https://i.ibb.co/HCgw0ck/03.png" alt="01" border="0"/>
                </div>
                <div className="name">
                dmi7r!i
                </div>
                <div className="role">fullstack_dev</div>
                <div className="info">любит свою черную кошку мэри, хочет ???, ищет идеи</div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="subscribe">
        <img src="https://i.ibb.co/nPwXCzF/9-1.png" alt="9-1" border="0"/>
          <h3>подпишись на нашу команду</h3>
          <form className="subscribe__form">
              <input type="email" placeholder="e-mail"/>
              <button type="submit">подписаться</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
