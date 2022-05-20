import styled from 'styled-components'


export const Sider = styled.div`
width: calc(16%);
height: calc(100vh);
display: flex;
flex-wrap: wrap;
justify-content: center;
backdrop-filter: blur(15px);
`
export const Logo = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: end;
font-size: 44px;
font-family: 'Dancing Script', cursive;
color: white;
`
export const Links = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;
flex-wrap: wrap;
p{
margin-right: 20% !important;
margin-top: 10px !important;
font-size: 20px;
color: white;
}
.links{
width: 90%;
height: 40px;
display: flex;
align-items: center;
font-size: 17px;
padding-left: 22% !important;
color: white;
font-family: 'Quicksand', sans-serif;
transition: 0.5s;
cursor: pointer;
&:hover{
color: #bfab0d;
}
i{
margin-right: 10px !important;
}
}
`
export const Library = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
flex-wrap: wrap;
p{
margin-right: 20% !important;
margin-top: 10px !important;
font-size: 20px;
color: white;
}
.links{
width: 90%;
height: 40px;
font-size: 17px;
display: flex;
align-items: center;
padding-left: 22%!important;
color: white;
font-family: 'Quicksand', sans-serif;
transition: 0.5s;
cursor: pointer;
&:hover{
color: #bfab0d;
}
i{
margin-right: 10px !important;
}
}
`