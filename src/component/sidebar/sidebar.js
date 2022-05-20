import React from 'react'
import {Library, Links, Logo, Sider} from './styled';

function Sidebar() {
    return(
        <Sider>
       <Logo>
          Music
       </Logo>
       <Links>
        <p>Menu</p>
        <div className="links"> <i className="bi bi-house"> </i> <span> Home</span> </div>
        <div className="links"><i className="bi bi-broadcast-pin"> </i> <span> Radio</span> </div>
        <div className="links"><i className="bi bi-vinyl"> </i> <span> Player</span> </div>
       </Links>
      <Library>
          <p>Library</p>
          <div className="links"><i className="bi bi-music-note-list"> </i> <span> Albums</span> </div>
          <div className="links"><i className="bi bi-music-player"> </i> <span> Playlists</span> </div>
          <div className="links"><i className="bi bi-heart"> </i> <span> Favorites</span> </div>
          <div className="links"><i className="bi bi-person"> </i> <span> Artists</span> </div>
          <div className="links"><i className="bi bi-mic"> </i> <span> Covers</span> </div>
      </Library>
        </Sider>
    )
}
export default Sidebar