import React from 'react';
import Moment from 'react-moment';
import './ProfileDetails.scss';


const imgStye = {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
};

const ProfileDetails = (props) => {
    return (
      <div className="cont">
        
        <div className="image">
            {props.infoclean.avatar_url ?
                <img src={props.infoclean.avatar_url}
                    alt="Profile"
                    style={imgStye}/> : null }
        </div>

        <div className="right">
            <div className="graph">
            {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />
            }<br/></div> : null }
            </div>
        

            <div className="bio">
            {props.infoclean.name ? <div className="text">
                <span>Name:</span><span>{props.infoclean.name}</span>
            </div> : null }
            {props.infoclean.bio ? <div className="text">
                <span>Bio:</span><span>{props.infoclean.bio}</span>
            </div> : null }
            {props.infoclean.created_at ? <div className="text">
                <span>Joined:</span><span>{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</span>
                </div> : null }
            {props.infoclean.blog ? <div className="text">
                <span>Blog:</span><span><a href={
                props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
                : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></span>
                </div> : null }
            {props.infoclean.location ? <div className="text">
                <span>Location:</span><span>{props.infoclean.location}</span>
                </div> : null }
            {props.infoclean.company ? <div className="text">
                <span>Company:</span><span>{props.infoclean.company}</span>
                </div> : null }
            {props.infoclean.public_repos ? <div className="text">
                <span>Public Repos:</span><span>{props.infoclean.public_repos}</span>
                </div> : null }    
            {props.infoclean.followers ? <div className="text">
                <span>Followers:</span><span>{props.infoclean.followers}</span>
                </div> : null }      
            {props.infoclean.following ? <div className="text">
                <span>Following:</span><span>{props.infoclean.following}</span>
                </div> : null }
            </div>
        </div>
      </div>
    )};
    export default ProfileDetails;