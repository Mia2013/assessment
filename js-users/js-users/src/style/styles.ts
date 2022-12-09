const styles = {
  app: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
  },
  pageItems: {
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
    my: 4,
  },
  buttonHover: {
    "&:hover": {
      background:
        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    },
  },
  mainColor: {
    color: "#FF177A",
  },
  buttonColor: {
    backgroundColor: "#FF177A",
  },
  form: {
    borderRadius: "20px",
  },
  backButtonPosition:{
    m: 5,
    textAlign: "end",
    width: "100px",
  },
  textField: {
    "& .MuiTextField-root": { m: 3, width: "90%" },
    my: 5,
  }
};

export default styles;