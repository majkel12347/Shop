import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Dietary Supplements",
          imageUrl:
            "https://preparaty-invexu.pl/images/banery/moc_monojonowej_czasteczki.jpg",
          id: 1,
          linkUrl: "shop/dietary"
        },
        {
          title: "Cosmetics",
          imageUrl:
            "https://www.invexremedies.pl/theme/Default/assets/img/ga-bg-4.jpg",
          id: 2,
          linkUrl: "shop/cosmetics"
        },
        {
          title: "Profesional Line",
          imageUrl:
            "https://live.staticflickr.com/130/411453602_49363adf71_z.jpg",
          id: 3,
          linkUrl: "shop/professional"
        },
        {
          title: "Sport Line",
          imageUrl:
            "https://img3.stockfresh.com/files/l/lunamarina/m/42/946121_stock-photo-blue-tiles-swimming-pool-water-reflection-texture.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/sport"
        },
        {
          title: "For Soil",
          imageUrl:
            "https://www.publicdomainpictures.net/pictures/180000/nahled/digging-in-the-dirt.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/soil"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
