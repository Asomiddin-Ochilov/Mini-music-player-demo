import React,{useState} from 'react';
import {Album, Content, Item, Navbar, Playlist} from './styled';
import {Link} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from "axios";
const spotifyApi = new SpotifyWebApi({
    clientId:'ea1ef97270e244d0b72bbd5440d54261'
})
function Contents({array,setOne}) {

    const [search,setSearch] = useState('')
    const [music,setMusic] = useState([])

    function Search(e) {
         setSearch(e)
        // spotifyApi.searchTracks(search).then(res=>{3
        //     console.log(res.data)
        // })
          axios({
              url:'https://kun.uz',
              method:'GET'
          }).then(res=>{
              console.log(res.data)
              console.log('ishladi')
          }).catch(err=>{
              console.log(err)
          })
    }

    return(
        <Content>
      <Navbar>
          <button onClick={Search}>fgf</button>
          {/*<input value={search} onChange={(e)=>Search(e.target.value)} className={'input'} type="text" placeholder={'Search...'}/>*/}
          <div className="nav-block">
               <button>
                   SingUp
               </button>
              <div className="user">

              </div>
          </div>
      </Navbar>
     <Album>
     <div style={{width:'100%'}}>
         <h2>Recomended albums</h2>
     </div>

         {
             array.map((item,index)=> <Link className={'link'} key={index} onClick={setOne(item)} to={'/page'}>
                     <Item>
                         <img src="https://upload.wikimedia.org/wikipedia/ru/d/dc/Nectar.png" alt=""/>
                         <h3>Nectar</h3>
                         <p>Joji</p>
                     </Item>
                 </Link>
              )
         }


     </Album>
    <Playlist>
        <div style={{width:'100%'}}>
            <h2>Popular Playlists</h2>
        </div>

    </Playlist>
  </Content>
    )

}
export default Contents