import styled from 'styled-components';

export const Container = styled.div`
width: 84%;
height: 100vh;
backdrop-filter: blur(15px);
display: flex;
justify-content: center;
align-items: center;
`
export const Block = styled.div`
width: 50%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
border-radius: 10px;
background-image: url(${props=>props.img});
background-size: cover;
background-position: center;
`
export const Radius = styled.div`
width: 80%;
height: 55%;
display: flex;
align-items: end;
justify-content: center;
#audio-canvas{
width: 420px;
height:250px;
}
`
export const Media = styled.div`
width: 80%;
height: 200px;
display: flex;
align-items: end;
justify-content: center;
flex-wrap: wrap;
color: white;
font-family: 'Quicksand', sans-serif;
.name-music{
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
h4{
margin: 0 15px !important;
font-size: 20px;
}
p{
font-size: 20px;
}
}
.controls{
width: 100%;
height: 40px;
display: flex;
justify-content: center;
flex-wrap: wrap;

.prev{
width: 45%;
}
.next{
width: 45%;
margin-bottom: 5px !important;
text-align: right;
}
}
.progress-music{
width: 90%;
margin: auto !important;
height: 6px;
border-radius: 5px;
display: flex;
cursor: pointer;
color: red !important;
span{
background-color: gray;
width: 50%;
height: 100%;
display: inline-block;
border-radius: 5px;
}
}
.player-icons{
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
i{
font-size: 34px;
margin: 0 10px !important;
cursor: pointer;
transition: 0.5s;
}
}
`
