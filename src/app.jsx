import { render } from 'preact'

import frameImg from './assets/frame.svg'

render(<App />, document.getElementById('app'))

function App () {
    return (
        <div className='app'>
            <Sec01 />
            <Sec02 />
        </div>)
}

function Sec01 () {
    return (
        <section className='s1'>
            <div className='s1__foot'>
                <p className='s1__names'>
                    <span className='s1__txt1'>장지현,</span>
                    <span className='s1__txt2'>정미영</span>
                </p>
                <h1 className='s1__title'>
                    <span className='s1__txt3'>우</span>리 결혼해요
                </h1>
                <p className='s1__sub-title'>
                    8월 15일 토요일 오후 3시<br /> 서울 스탠포트 호텔 2층, 그랜드 볼룸
                </p>
                <div className='s1__hearts'>
                    <div className='s1__heart s1__heart--1' />
                    <div className='s1__heart s1__heart--2' />
                    <div className='s1__heart s1__heart--3' />
                    <div className='s1__heart s1__heart--4' />
                </div>
            </div>
        </section>
    )
}

function Sec02 () {
    return (
        <section className='s2'>
            <img src={frameImg} className='s2__fr s2__fr--lt' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--rt' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--lb' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--rb' alt='frame' />
            <div className='s2__letter'>
                {`오랜 기다린 속에서
                저희 두사람, 한 마음되어
                참된 사랑의 결실을 맺게 되었습니다.
                오셔서 축복해주시면
                큰 기쁨이 되겠습니다.`}
            </div>
            <div className='s2__sign s2__sign--1'>
                <span>장한성</span>
                <span>김혜성</span>
                <span>의 차남</span>
                <span>장지현</span>
            </div>
            <div className='s2__sign'>
                <span>정연근</span>
                <span>장정순</span>
                <span>의 차녀</span>
                <span>정미영</span>
            </div>
            <div className='s2__birds'>
                <div className='s2__bird s2__bird--1' />
                <div className='s2__bird s2__bird--2' />
                <div className='s2__bird s2__bird--3' />
                <div className='s2__bird s2__bird--4' />
                <div className='s2__bird s2__bird--5' />
            </div>
        </section>
    )
}
