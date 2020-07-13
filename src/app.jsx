import confetti from 'canvas-confetti'
import clsx from 'clsx'
import { render } from 'preact'
import { useEffect, useReducer, useRef } from 'preact/hooks'

import frameImg from './assets/frame.svg'
import hrImg from './assets/hr.svg'
import photo02Img from './assets/photo02.jpg'
import photo03Img from './assets/photo03.jpg'
import photo04Img from './assets/photo04.jpg'
import photo05Img from './assets/photo05.jpg'
import photo06Img from './assets/photo06.jpg'
import photo07Img from './assets/photo07.jpg'
import photo08Img from './assets/photo08.jpg'
import photo09Img from './assets/photo09.jpg'
import photo10Img from './assets/photo10.jpg'
import photo11Img from './assets/photo11.jpg'
import photo12Img from './assets/photo12.jpg'
import photo13Img from './assets/photo13.jpg'
import photo14Img from './assets/photo14.jpg'

import './style.scss'

render(<App />, document.getElementById('app'))

function App () {
    return (
        <>
            <Sec01 />
            <Sec02 />
            <Sec03 />
            <Sec04 />
            <Sec05 />
        </>)
}

function Sec01 () {
    return (
        <section className='s1'>
            <div className='s1__foot'>
                <p className='s1__names title'>
                    <span className='s1__txt1'>장지현,</span>
                    <span className='s1__txt2'>정미영</span>
                </p>
                <h1 className='s1__title title'>
                    <span className='s1__txt3'>우</span>리 결혼해요
                </h1>
                <p className='s1__sub-title'>
                    8월 15일 토요일 오후 3시<br /> 스탠포트 호텔 서울 2층, 그랜드 볼룸
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
    const [isLetterShown, showLetter] = useReducer(() => true, false)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries.find(e => e.target === ref.current)
            if (!entry) observer.disconnect()
            if (entry.isIntersecting) {
                showLetter()
                observer.disconnect()
            }
        }, { threshold: 0.5 })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className='s2' ref={ref}>
            <img src={frameImg} className='s2__fr s2__fr--lt' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--rt' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--lb' alt='frame' />
            <img src={frameImg} className='s2__fr s2__fr--rb' alt='frame' />
            <div className={clsx('s2__letter', { 's2__letter--show': isLetterShown })}>
                {`오랜 기다린 속에서
                저희 두사람, 한 마음되어
                참된 사랑의 결실을 맺게 되었습니다.
                오셔서 축복해주시면
                큰 기쁨이 되겠습니다.`}
            </div>
            <img src={hrImg} className='s2__hr' />
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

function Sec03 () {
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries.find(e => e.target === ref.current)
            if (!entry) observer.disconnect()
            if (entry.isIntersecting) {
                confetti({
                    particleCount: 100,
                    startVelocity: 30,
                    spread: 360,
                    origin: {
                        x: Math.random(),
                        y: Math.random() - 0.2
                    }
                })
            }
        }, { threshold: 0, rootMargin: '-100px' })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return (
        <section className='s3' ref={ref}>
            <img className='s3__img' src={photo02Img} alt='photo' />
            <img className='s3__img' src={photo03Img} alt='photo' />
            <img className='s3__img' src={photo04Img} alt='photo' />
            <img className='s3__img' src={photo05Img} alt='photo' />
            <img className='s3__img' src={photo06Img} alt='photo' />
            <img className='s3__img' src={photo07Img} alt='photo' />
            <img className='s3__img' src={photo08Img} alt='photo' />
            <img className='s3__img' src={photo09Img} alt='photo' />
            <img className='s3__img' src={photo10Img} alt='photo' />
            <img className='s3__img' src={photo11Img} alt='photo' />
            <img className='s3__img' src={photo12Img} alt='photo' />
            <img className='s3__img' src={photo13Img} alt='photo' />
            <img className='s3__img' src={photo14Img} alt='photo' />
        </section>
    )
}

function Sec04 () {
    /** @type {import('preact/hooks').Ref<HTMLDivElement>} */
    const mapRef = useRef()
    const timestamp = '1594574090615'
    useEffect(() => {
        new window.daum.roughmap.Lander({
            timestamp,
            key: '2z88g',
            mapWidth: mapRef.current.clientWidth
        }).render()
    }, [])

    return (
        <section className='s4'>
            <h2 className='s4__title title'>오시는 길</h2>
            <address className='s4__addr font-stylish'>마포구 월드컵북로 58길 15</address>
            <div id={`daumRoughmapContainer${timestamp}`} className='root_daum_roughmap s4__map' ref={mapRef} />
            <dl className='s4__guides'>
                <DescItem title='지하철' className='s4__guide'>
                    <ol>
                        <li>공항철도, 경의선, 6호선 디지털미디어시티역 하차</li>
                        <li>도보로 10분, 2번 출구 앞 버스정류장 버스 이용 5분, 택시 이용 5분</li>
                    </ol>
                </DescItem>
                <DescItem title='버스' className='s4__guide'>
                    <ul>
                        <li>파랑(간선버스) - 710, 171, 271, 470, 771, 670, 270, 470, 750A</li>
                        <li>초록(지선버스) - 7737, 6715, 7013A, 7019, 7711, 7715, 7730, 7013B, 7011</li>
                        <li>빨강(광역버스) - 9711</li>
                        <li>마을 버스 - 마포 18번(스탠포드호텔 정류장)</li>
                    </ul>
                </DescItem>
                <DescItem title='셔틀버스 이용시' className='s4__guide'>
                    6호선 디지털미디어시티(DMC)역 2번출구 30M전방 <br />
                    (행사시간 1시간 전 부터 10분간격 운행)
                </DescItem>
                <DescItem title='주차' className='s4__guide'>
                    예식 하객 무료주차 3시간, 3시간 이후 10분당 1000원
                </DescItem>
            </dl>
        </section>
    )
}

function DescItem ({ title, children, className }) {
    return (
        <div className={clsx('di', className)}>
            <dt className='di__dt'>{title}</dt>
            <dd className='di__dd'>{children}</dd>
        </div>
    )
}

function Sec05 () {
    useEffect(() => {
        window.Kakao.init('d17095f08c55aa2b0b3c5a2d413ddea5')
    }, [])
    return (
        <section className='s5'>
            <div className='s5__links'>
                <div
                    className='s5__link s5__link--kakao'
                    onClick={e => {
                        window.Kakao.Link.sendScrap({ requestUrl: 'https://skt-t1-byungi.github.io/wedding-card' })
                    }}
                />
                <div
                    className='s5__link s5__link--fb'
                    onClick={e => {
                        const url = encodeURIComponent('https://skt-t1-byungi.github.io/wedding-card')
                        window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`)
                    }}
                />
            </div>
            <h2 className='s5__txt'>카카오/페이스북 공유하기</h2>
        </section>)
}
