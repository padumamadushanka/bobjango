import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "smart phones",
          imageUrl:
            "https://www.glitched.africa/wp-content/uploads/2019/09/iphone-11-final.jpg",
          id: 1,
          linkUrl: "shop/smart_phones"
        },
        {
          title: "smart watches",
          imageUrl: "https://i.ytimg.com/vi/nrQevwouWn0/maxresdefault.jpg",
          id: 2,
          linkUrl: "shop/smart_watches"
        },
        {
          title: "laptops",
          imageUrl:
            "https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2018/07/apple_macbook_pro_review.jpg",
          id: 3,
          linkUrl: "shop/laptops"
        },
        {
          title: "gaming consoles",
          imageUrl:
            "https://demo.tagdiv.com/newsmag_tech/wp-content/uploads/2014/09/631.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/gaming_consoles"
        },
        {
          title: "cameras",
          imageUrl: "https://wallpaperaccess.com/full/326756.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/cameras"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          ></MenuItem>
        ))}
      </div>
    );
  }
}
export default Directory;
