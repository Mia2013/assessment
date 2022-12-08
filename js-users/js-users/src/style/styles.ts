 const styles = {
  app: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
  },
    homePageItems: {
      textAlign: "center",
      mx: "auto",
      width: "100%",
      maxWidth: { xs: "300px", sm: "450px" },
    },
    listBackground: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    button: {
      width: "100%",
      backgroundColor: "#FF177A",
      my: 4,
    },
    buttonHover: {
      "&:hover": {
        background:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      },
    },
    buttonColor: {
      color: "#FF177A" 
    }

  };

  export default styles;