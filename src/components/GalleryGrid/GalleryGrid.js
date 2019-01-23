import React from "react";
import GalleryGrid from "react-photo-gallery";
import Lightbox from "react-images";

export default class Sample extends React.Component {
  state = { currentImage: 0 };

  showLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  render() {
    return (
      <div>
        <GalleryGrid photos={PHOTO_SET} onClick={this.showLightbox} />
        <Lightbox
          images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
const PHOTO_SET = [
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/20640e56d7c069d0de3ffac4f803388b/5D00FDD9/t51.2885-15/e35/32628813_207397840061954_4550965364229406720_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 1,
    height: 1
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/363b900d6ede43c208b2c416b96997e6/5CC0AF56/t51.2885-15/e35/49480120_544155072737033_8277900877252719264_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 3,
    height: 3
  },

  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/c70625df8006eb8175aeedc18cdc7ff5/5CF805EE/t51.2885-15/e35/34752851_245673259544907_3300302455643832320_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 3,
    height: 4
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/31bc5398c72b9268076fbf9c522c7e37/5CE50573/t51.2885-15/e35/45392445_502421886905438_112799783589924667_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 4,
    height: 4
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/89317cda66f910b3c465b140a6b16375/5CFE8D9C/t51.2885-15/e35/36883662_268531907211822_2189490339415326720_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 3,
    height: 4
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/2e1e6b44bc078caf315694bcb207148e/5CC2DF23/t51.2885-15/e35/35935790_676035372760825_5162110614557949952_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 4,
    height: 3
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/a0a696b5091f573c24079b568aa2572b/5CC6CEF9/t51.2885-15/e35/34704129_2137051769846977_8174780695231594496_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 3,
    height: 3
  },
  {
    src:
      "https://scontent-arn2-1.cdninstagram.com/vp/1d81f627afd94c8dfcaab83d072e9545/5CE19CBD/t51.2885-15/e35/29738815_438072039981741_6321261681464836096_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com",
    width: 4,
    height: 5
  },
  {
    src:
      "https://instagram.fgse1-1.fna.fbcdn.net/vp/b47950eb30bcbc20512ce505cc51bbed/5CC2068D/t51.2885-15/e35/30603421_274035156472431_8859199685357731840_n.jpg?_nc_ht=instagram.fgse1-1.fna.fbcdn.net",
    width: 1,
    height: 1
  }
];
