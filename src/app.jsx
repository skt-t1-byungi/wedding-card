import { render } from 'preact'

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
        <section>{null}</section>
    )
}
