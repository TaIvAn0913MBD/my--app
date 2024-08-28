// // import Home from "@/compound/Nest.jsx";

// // import Hello from "@/compound/Hello.jsx";
// // const davtalt = () => {
// //   const mockData = [
// //     { ner: "J i m", nas: 21 },
// //     { ner: "T o m", nas: 22 },
// //     { ner: "T u l g a", nas: 23 },
// //     { ner: "T e m u", nas: 24 },
// //   ];
// //   return (
// //     <div>
// //       {mockData.map((data, index) => {
// //         return <Hello name={data.ner} key={index} age={data.nas} />;
// //       })}
// //     </div>
// //   );
// // };
// // export default davtalt;

import Cars from "@/compound/car";
const davtalt = () => {
  const mockData = [
    {
      ner: "Toyota",
      ungu: "black",
      tsag: 2011,
      pic: "https://media.autoexpress.co.uk/image/private/s--4CVWootY--/f_auto,t_content-image-full-mobile@1/v1596209108/autoexpress/2020/07/Toyota%20RAV4%20Black%20Edition%202020.jpg",
    },
    {
      ner: "Benz",
      ungu: "white",
      tsag: 2020,
      pic: "https://i.pinimg.com/736x/81/7e/81/817e8116def4e700a365029455d5c93a.jpg",
    },
    {
      ner: "BMW",
      ungu: "blue",
      tsag: 1990,
      pic: "https://www.wallpaperflare.com/static/932/37/301/bmw-m5-cars-2018-5k-blue-wallpaper-preview.jpg",
    },
    {
      ner: "Nissan",
      ungu: "red",
      tsag: 2003,
      pic: "https://imgd.aeplcdn.com/370x208/n/nu0jpra_1422360.jpg?q=80",
    },
  ];
  return (
    <div className="container">
      {mockData.map((data, index) => {
        return (
          <Cars
            name={data.ner}
            color={data.ungu}
            key={index}
            time={data.tsag}
            image1={data.pic}
          />
        );
      })}
    </div>
  );
};

export default davtalt;

// import TheList from "@/compound/List";
// const davtalt = () => {
//   const mockData = [
//     {
//       ner: "Jordan",
//       ajil: "CEO and The BOSS",
//       zurag:
//         "https://en.wikipedia.org/wiki/Michael_Jordan#/media/File:Michael_Jordan_in_2014.jpg",
//     },
//   ];
//   return (
//     <div>
//       {mockData.map((data, index) => {
//         return (≠
//           <TheList
//             Name={data.ner}
//             Job={data.ajil}
//             key={index}
//             PPic={data.zurag}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default davtalt;
