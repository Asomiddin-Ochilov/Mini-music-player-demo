import React,{useState,useEffect} from 'react';
import {Block, Container, Media, Radius} from "./styled";
import AudioSpectrum from "react-audio-spectrum/lib/AudioSpectrum";
function OnePage({one}) {
    const [state,setState] = useState(false);
    const [progress,setProgress] = useState('0');
    const [minut,setMinut] = useState(0);
    const [secound,setSecound] = useState(0);
    const [DurationMinut,setMinutDuration] = useState(0);
    const [DurationSecound,setSecoundDuration] = useState(0);


    function Progress(e) {

     let audio  = document.getElementById('audio')
        let ss = audio.duration * (e / 100);
        audio.currentTime = ss
    }
    function Prev() {

        let audio  = document.getElementById('audio')
        // let ss = audio.duration * (-10 / 100);
        audio.currentTime -=10
    }
    function Play() {
     setState(true)
      const dd =  document.getElementById('audio')
        dd.play()
        setInterval(()=>{
            const ss =  dd.currentTime * (100 / dd.duration);
            let currentMinutes = Math.floor(dd.currentTime / 60);
            let currentSeconds = Math.floor(dd.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(dd.duration / 60);
            let durationSeconds = Math.floor(dd.duration - durationMinutes * 60);
            setProgress(ss);
            setSecound(currentSeconds);
            setMinut(currentMinutes);
            setMinutDuration(durationMinutes);
            setSecoundDuration(durationSeconds);
        },1000)
    }
    function Pause() {
        setState(false)
        document.getElementById('audio').pause()
    }
    function Next() {
        let audio  = document.getElementById('audio')
        audio.currentTime +=10
    }
    return(
        <Container>
           <Block img={one.img}>
               <Radius>
                   <AudioSpectrum
                       id="audio-canvas"
                       // height={250}
                       // width={300}
                       audioId={'audio'}
                       capColor={'white'}
                       capHeight={2}
                       meterWidth={2}
                       meterCount={512}
                       meterColor={[
                           {stop: 0, color: '#26ff00'},
                           {stop: 0.5, color: '#fd7c0c'},
                           {stop: 1, color: 'red'}
                       ]}
                       gap={4}
                   />
               </Radius>
           <Media>
            <div className="name-music">
                <h4>{one.name}</h4>
                <p>{one.musicName}</p>
            </div>
             <div className={'controls'}>
                 <span className={'prev'}>{minut}:{secound}</span> <span className={'next'}>{DurationMinut}:{DurationSecound}</span>
                 <audio id={'audio'} src={one.src}> </audio>
                 <input onChange={(e)=>Progress(e.target.value)} className="progress-music" type="range" value={progress} min={'1'} max={'100'}/>
             </div>
             <div className="player-icons">
                 <i className="bi bi-skip-backward-fill" onClick={Prev}> </i>
                 {
                     state ? <i className="bi bi-pause-circle-fill" onClick={Pause}> </i>
                     :
                         <i className="bi bi-play-circle-fill" onClick={Play}> </i>
                 }
                 <i className="bi bi-skip-forward-fill" onClick={Next}> </i>
             </div>
           </Media>
           </Block>

        </Container>
    )

}
export default OnePage