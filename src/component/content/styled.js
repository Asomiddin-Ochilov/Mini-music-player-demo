import styled from 'styled-components'

export const Content = styled.div`
position: relative;
width: 84%;
height: calc(100vh);
overflow-y: auto;
backdrop-filter: blur(15px);
&::-webkit-scrollbar{
width: 0;
}
.link{
text-decoration: none;
}
`
export const Navbar = styled.div`
width: 100%;
height: 100px;
display: flex;
top: 0;
backdrop-filter: blur(100px);
justify-content: space-between;
align-items: center;
position: sticky;
.input{
width: 50%;
height: 40px;
margin-left: 20px !important;
border: none;
padding-left: 30px !important;
font-size: 18px;
font-family: 'Quicksand', sans-serif;
outline: none;
border-radius: 20px;
}
.nav-block{
width: 30%;
height: 50px;
display: flex;
align-items: center;
justify-content: end;
input{
width: 30px;
height: 30px;
outline: none;
border: none;
background-color: transparent;
border-radius: 50%;
}
button{
width: 90px;
height: 40px;
background-color: rgba(106,100,100,0.25);
color: white;
outline: none;
font-size: 17px;
border: none;
cursor: pointer;
font-family: 'Quicksand', sans-serif;
border-radius: 5px;
transition: 0.3s;
box-shadow: 2px 2px 6px black;
&:hover{
box-shadow: 4px 5px 8px black;
}
}
.user{
width: 50px;
height: 50px;
border-radius: 50%;
margin:0 2rem !important;
background-image: url("https://www.psdgraphics.com/file/user-icon.jpg");
background-position: center;
background-size: cover;
}
}
`

export const Album = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
margin: 1rem 0 !important;
h2{
margin-left: 1rem !important;
font-family: 'Quicksand', sans-serif;
color: white;
}
`
export const Item = styled.div`
width: 84%;
height: 240px;
margin: 1rem !important;
text-align: center;
cursor: pointer;
h3{
margin: 3px  0 !important;
font-family: 'Quicksand', sans-serif;
color: white;
}
p{
color: gray;
font-family: 'Quicksand', sans-serif;
font-size: 20px;
}
img{
width: 100%;
height: 180px;
border-radius: 7px;
}
`

export const Playlist = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
margin: 1rem 0 !important;
h2{
margin-left: 1rem !important;
font-family: 'Quicksand', sans-serif;
color: white;
}
`