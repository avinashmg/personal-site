import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    thumbnail: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    caption: "Car 1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    thumbnail:
      "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    caption: "Cherry Red Pearl",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },

  {
    src: "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnail:
      "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnail:
      "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnail: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnail:
      "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnail:
      "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnail:
      "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    thumbnail: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    caption: "Car 1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    thumbnail:
      "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    caption: "Cherry Red Pearl",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },

  {
    src: "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnail:
      "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnail:
      "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnail: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnail:
      "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnail:
      "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnail:
      "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    thumbnail: "https://cdn.wallpapersafari.com/78/42/4at6U2.jpg",
    caption: "Car 1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    thumbnail:
      "https://assetto-db.com/img/previews/nissan_silvia_s13_rb_beta/cherry_red_pearl.png",
    caption: "Cherry Red Pearl",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },

  {
    src: "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnail:
      "https://th.bing.com/th/id/Ra744de84f077e3ca3485b3b9837338c0?rik=3jCNfOmcEGjS7w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-MkdF4KxiI3k%2fUBs9VMjXnjI%2fAAAAAAAAATo%2fbLAHQ4h1MrU%2fs1600%2fred%2band%2bblack%2bcars-2.jpg&ehk=7KfV9QxJmckR0%2fEoDDci99iDXFUw5XOqmNp%2b8HEpKbA%3d&risl=&pid=ImgRaw",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnail:
      "https://th.bing.com/th/id/OIP.E6Z6Khv4q2Ky9HzAmIiZJgHaEK?pid=ImgDet&rs=1",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnail: "https://wallpaperaccess.com/full/740019.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnail:
      "https://topcarconnection.com/wp-content/uploads/2018-Nissan-GT-R-10-768x432.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnail:
      "https://i.pinimg.com/originals/c7/36/f9/c736f90a2c6eb8509e21910fff731890.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnail:
      "https://www.wallpaperflare.com/static/648/306/455/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];
const Lightbox = () => {
  return (
    <section id="gallery" className="m-5 ">
      <h2 className="text-center m-5">Gallery</h2>
      <Gallery enableImageSelection={false} rowHeight={200} images={IMAGES} />
      <h2 className="text-center m-5">&nbsp;</h2>
    </section>
  );
};
export default Lightbox;
