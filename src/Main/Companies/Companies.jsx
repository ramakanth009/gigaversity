import React from "react";
import {
  Navigation,
  /*Pagination,*/
  A11y,
  Autoplay,
} from "swiper/modules";
import { useStyles } from "./Companies.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import Phonepe from "../../Assets/companylogos/phonepe.webp";
import Zoho from "../../Assets/companylogos/Zoho-logo.png";
import Tcs from "../../Assets/companylogos/TCS.png";
import Accenture from "../../Assets/companylogos/Accenture.png";
import Adobe from "../../Assets/companylogos/Adobe_logo.png";
import Adp from "../../Assets/companylogos/ADP.png";
import Amazon from "../../Assets/companylogos/amazon.webp";
import Bharatpe from "../../Assets/companylogos/bharathpe.jpg";
import Capgemini from "../../Assets/companylogos/capgemini-logo.jpg";
import Cred from "../../Assets/companylogos/Cred.png";
import Dell from "../../Assets/companylogos/Dell.jpg";
import Deloitte from "../../Assets/companylogos/deloitte.png";
import Flipkart from "../../Assets/companylogos/Flipkart.webp";
import Infosys from "../../Assets/companylogos/infosys-logo-PNG.png";
import Musigma from "../../Assets/companylogos/Mu-Sigma.jpg";
import Pharmeasy from "../../Assets/companylogos/pharmeasy-ipo.png";
import Techmahindra from "../../Assets/companylogos/Tech_Mahindra.png";
import Wipro from "../../Assets/companylogos/Wipro.png";

const Companies = () => {
  const classes = useStyles();
  return (
    <div className={classes.companymain}>
      <Box className={classes.companylogos}>
        <p className={classes.logoheding}>
          Placement opportunities of Gigaversity
        </p>
        <Swiper
          // install Swiper modules
          modules={[Navigation, /*Pagination, */ A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          // Add autoplay with a delay of 2500 milliseconds
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className={classes.slides}>
            <img
              src={Phonepe}
              alt="PhonePe logo"
              className={classes.commonlogos}
            />
            <img src={Zoho} alt="zoho logo" className={classes.commonlogos} />
            <img src={Tcs} alt="tcs logo" className={classes.commonlogos} />
            <img
              src={Accenture}
              alt="accenture logo"
              className={classes.commonlogos}
            />
            <img src={Adobe} alt="adobe logo" className={classes.commonlogos} />
            <img src={Adp} alt="adp logo" className={classes.commonlogos} />
          </SwiperSlide>
          <SwiperSlide className={classes.slides}>
            <img
              src={Amazon}
              alt="amazon logo"
              className={classes.commonlogos}
            />
            <img
              src={Bharatpe}
              alt="bharatpe logo"
              className={classes.commonlogos}
            />
            <img
              src={Capgemini}
              alt="capgemini logo"
              className={classes.commonlogos}
            />
            <img src={Cred} alt="cred logo" className={classes.commonlogos} />
            <img src={Dell} alt="dell logo" className={classes.commonlogos} />
            <img
              src={Deloitte}
              alt="deloitte logo"
              className={classes.commonlogos}
            />
          </SwiperSlide>
          <SwiperSlide className={classes.slides}>
            <img
              src={Flipkart}
              alt="flipkart logo"
              className={classes.commonlogos}
            />
            <img
              src={Infosys}
              alt="infosys logo"
              className={classes.commonlogos}
            />
            <img
              src={Musigma}
              alt="musigma logo"
              className={classes.commonlogos}
            />
            <img
              src={Pharmeasy}
              alt="pharmeasy logo"
              className={classes.commonlogos}
            />
            <img
              src={Techmahindra}
              alt="techmahindra logo"
              className={classes.commonlogos}
            />
            <img src={Wipro} alt="wipro logo" className={classes.commonlogos} />
          </SwiperSlide>
          {/* <SwiperSlide className={classes.slides}>
      </SwiperSlide> */}
        </Swiper>
      </Box>
    </div>
  );
};

export default Companies;
