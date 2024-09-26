// import React from "react";
// import { useStyles } from "./Student.styles";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Box } from "@mui/material";
// import {
//   // Navigation,
//   /*Pagination,*/
//   A11y,
//     Autoplay,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import Dinesh from "../../Assets/Dinesh.jpg";
// import Likitha from "../../Assets/Likitha.jpg";
// import MKRavi from "../../Assets/M_K_Ravi.jpg";
// import Sripujitha from "../../Assets/Sri_pujitha.jpg";
// import Kumaraswamy from "../../Assets/kumara_swamy.jpg";
// import SivaPrasadReddy from "../../Assets/shivapraad.jpg";
// import Bhanuprakash from "../../Assets/Bhanu_prakash.jpg";
// import Nuthana from "../../Assets/Nuthana.jpg";
// import RaviTeja from "../../Assets/Ravi_Teja.jpg";

// // import slide_image from "./ass"

// const Student = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.container}>
//       <Box className={classes.student_head}>
//         <h3 className={classes.student_txt}>Gigaversity hall of fame</h3>
//       </Box>
//       <Box className={classes.student_block}>
//         <Swiper
//           modules={[Navigation, /*Pagination, */ A11y, Autoplay]}
//           spaceBetween={5}
//           // slidesPerView={1}
//           navigation
//           // pagination={{ clickable: true }}
//             autoplay={{ delay: 2500 }}
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           className="swiper_container"
//         >
//           <SwiperSlide className={classes.student_sliders}>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Dinesh}
//                   alt="dinesh"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Dinesh</p>
//                 <p className={classes.student_dept}>ECE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The frontend workshop exceeded my expectations, offering
//                   practical knowledge and real-world applications.The
//                   interactive sessions fostered collaboration and a dynamic
//                   learning environment.I highly recommend this workshop to
//                   anyone looking to strengthen their frontend development
//                   skills."
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Likitha}
//                   alt="Likitha"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Likitha</p>
//                 <p className={classes.student_dept}>CSE 2nd year</p>
//                 <p className={classes.student_review}>
//                   "The frontend workshop was incredibly informative, providing
//                   valuable insights into current industry practices.The
//                   instructor's clear explanations and hands-on examples made
//                   complex concepts easy to grasp. "
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={MKRavi}
//                   alt="MKRavi"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>M K Ravi</p>
//                 <p className={classes.student_dept}>CSE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The UI/UX design workshop conducted by Sun E-Learnings was an
//                   enriching experience that provided valuable insights into the
//                   intricacies of designing user-friendly applications. Through
//                   practical exercises centered around cloning the Uber
//                   application, I gained a deeper understanding of UI/UX
//                   principles."
//                 </p>
//               </Box>
//             </Box>
//           {/* </SwiperSlide>
//           <SwiperSlide className={classes.student_sliders}> */}
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Sripujitha}
//                   alt="Sripujitha"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Sri pujitha</p>
//                 <p className={classes.student_dept}>AI & Robotic 2nd year</p>
//                 <p className={classes.student_review}>
//                   "The Workshop was awesome! It was wonderful experience meeting
//                   people and learning from them and acquiring Skills from
//                   experts . Laxman Sir was Incredibly Knowledgeable about the
//                   subject and was patient and took the time to explain concepts
//                   in a way that was easy to understand, even for those who were
//                   new to this domain."
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Kumaraswamy}
//                   alt="Kumaraswamy"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Kumara swamy</p>
//                 <p className={classes.student_dept}>CSE ML 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The workshop on marketplace applications was truly
//                   insightful, offering practical examples that made learning
//                   engaging. The interactive sessions and industry insights
//                   further enriched the experience, making it highly valuable
//                   overall."
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={SivaPrasadReddy}
//                   alt="SivaPrasadReddy"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Siva Prasad Reddy</p>
//                 <p className={classes.student_dept}>ECE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The marketplace applications workshop was an invaluable
//                   experience, offering a wealth of insightful content and
//                   practical examples that truly enhanced my understanding. The
//                   interactive sessions provided an engaging platform for
//                   learning, allowing for active participation and exchange of
//                   ideas."
//                 </p>
//               </Box>
//             </Box>
//           {/* </SwiperSlide>
//           <SwiperSlide className={classes.student_sliders}> */}
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Bhanuprakash}
//                   alt="Bhanuprakash"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Bhanu Prakash</p>
//                 <p className={classes.student_dept}>ECE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The workshop on marketplace applications provided insightful
//                   content and practical examples, fostering a valuable learning
//                   experience. The interactive sessions and relevant industry
//                   insights enhanced its overall impact"
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={Nuthana}
//                   alt="Nuthana"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Nuthana</p>
//                 <p className={classes.student_dept}>ECE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The marketplace applications workshop provided a
//                   comprehensive overview of various tools and platforms
//                   available for managing online marketplaces.I got know about
//                   git code how to dump a code and various things I thank the
//                   sun-e-learing for arranging a workshop and I learnt new
//                   things."
//                 </p>
//               </Box>
//             </Box>
//             <Box className={classes.cardmain}>
//               <Box className={classes.cardmain1}>
//                 <img
//                   src={RaviTeja}
//                   alt="RaviTeja"
//                   className={classes.profileimage}
//                 />
//               </Box>
//               <Box className={classes.cardmain2}>
//                 <p className={classes.student_name}>Ravi Teja</p>
//                 <p className={classes.student_dept}>ECE 3rd year</p>
//                 <p className={classes.student_review}>
//                   "The frontend workshop was an enriching experience, offering
//                   comprehensive coverage of essential frontend technologies.
//                   Overall, it was a highly impactful learning experience that I
//                   would highly recommend to others seeking to delve into this
//                   field. "
//                 </p>
//               </Box>
//             </Box>
//           </SwiperSlide>
//         </Swiper>
//       </Box>
//     </div>
//   );
// };

// export default Student;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Dinesh from "../../Assets/Dinesh.jpg";
import Likitha from "../../Assets/Likitha.jpg";
import MKRavi from "../../Assets/M_K_Ravi.jpg";
import Sripujitha from "../../Assets/Sri_pujitha.jpg";
import Kumaraswamy from "../../Assets/kumara_swamy.jpg";
import SivaPrasadReddy from "../../Assets/shivapraad.jpg";
import Bhanuprakash from "../../Assets/Bhanu_prakash.jpg";
import Nuthana from "../../Assets/Nuthana.jpg";
import RaviTeja from "../../Assets/Ravi_Teja.jpg";
import { useStyles } from "./Student.styles";

const Student = () => {
  const classes = useStyles();
  const testimonials = [
    {
      name: "Dinesh",
      dept: "ECE 3rd year",
      image: Dinesh,
      review:
        "The frontend workshop exceeded my expectations, offering practical knowledge and real-world applications.The interactive sessions fostered collaboration and a dynamic learning environment.I highly recommend this workshop to anyone looking to strengthen their frontend development skills.",
    },
    {
      name: "Likitha",
      dept: "CSE 2nd year",
      image: Likitha,
      review:
        "The frontend workshop was incredibly informative, providing valuable insights into current industry practices.The instructor's clear explanations and hands-on examples made complex concepts easy to grasp.",
    },
    {
      name: "M K Ravi",
      dept: "CSE 3rd year",
      image: MKRavi,
      review:
        "The UI/UX design workshop conducted by Sun E-Learnings was an enriching experience that provided valuable insights into the intricacies of designing user-friendly applications. Through practical exercises centered around cloning the Uber application, I gained a deeper understanding of UI/UX principles.",
    },
    {
      name: "Sri pujitha",
      dept: "AI & Robotic 2nd year",
      image: Sripujitha,
      review:
        "The Workshop was awesome! It was wonderful experience meeting people and learning from them and acquiring Skills from experts . Laxman Sir was Incredibly Knowledgeable about the subject and was patient and took the time to explain concepts in a way that was easy to understand, even for those who were new to this domain.",
    },
    {
      name: "kumara swamy",
      dept: "CSE ML 3rd year",
      image: Kumaraswamy,
      review:
        "The workshop on marketplace applications was truly insightful, offering practical examples that made learning engaging. The interactive sessions and industry insights further enriched the experience, making it highly valuable overall.",
    },
    {
      name: "siva prasad reddy",
      dept: "ECE 3rd year",
      image: SivaPrasadReddy,
      review:
        "The marketplace applications workshop was an invaluable experience, offering a wealth of insightful content and practical examples that truly enhanced my understanding. The interactive sessions provided an engaging platform for learning, allowing for active participation and exchange of ideas.",
    },
    {
      name: "Bhanu prakash",
      dept: "ECE 3rd year",
      image: Bhanuprakash,
      review:
        "The workshop on marketplace applications provided insightful content and practical examples, fostering a valuable learning experience. The interactive sessions and relevant industry insights enhanced its overall impact.",
    },
    {
      name: "Nuthana",
      dept: "ECE 3rd year",
      image: Nuthana,
      review:
        "The marketplace applications workshop provided a comprehensive overview of various tools and platforms available for managing online marketplaces.I got know about git code how to dump a code and various things  I thank the sun-e-learing for arranging a workshop and I learnt new things",
    },
    {
      name: "Ravi Teja",
      dept: "ECE 3rd year",
      image: RaviTeja,
      review:
        "The frontend workshop was an enriching experience, offering comprehensive coverage of essential frontend technologies. Overall, it was a highly impactful learning experience that I would highly recommend to others seeking to delve into this field.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f0f4ff", padding: "0px 0px 50px 0px" }}>
      <Box className={classes.student_head}>
        <h3 className={classes.student_txt}>Gigaversity Hall of Fame</h3>
      </Box>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"9"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box
              //   sx={{
              //     backgroundColor: "white",
              //     borderRadius: "10px",
              //     padding: "20px",
              //     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              //     width: "300px",
              //     height: "400px",
              //     display: "flex",
              //     flexDirection: "column",
              //     alignItems: "center",
              //     justifyContent: "space-between",
              //   }}
              className={classes.cardmain}
            >
              <Box className={classes.cardmain1}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={classes.profileimage}
                  //   style={{
                  //     width: "100px",
                  //     height: "100px",
                  //     borderRadius: "50%",
                  //     objectFit: "cover",
                  //   }}
                />
              </Box>
              <Box
                //   sx={{ textAlign: "center" }}
                className={classes.cardmain2}
              >
                <h4
                  // style={{ margin: "10px 0", color: "#333" }}
                  className={classes.student_name}
                >
                  {testimonial.name}
                </h4>
                <p
                  // style={{ margin: "5px 0", color: "#666" }}
                  className={classes.student_dept}
                >
                  {testimonial.dept}
                </p>
                <p
                  // style={{ fontSize: "14px", color: "#444", textAlign: "center" }}
                  className={classes.student_review}
                >
                  "{testimonial.review}"
                </p>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Student;
