import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
//withRouter is high order component like function it can take another component as an argument and return poweerful component
//withRouter will take MenuItem component and return it as powerfull component which have access to history prop then meu item component will have access to match location kind of props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">
        <i class="far fa-hand-point-right"></i>shop now
      </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
