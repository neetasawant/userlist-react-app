 const style = {
    body: {
      display: "flex",
      flexDirection: "row",
      margin: 2,
    },
    button: {
      zIndex: 1000,
      height: 100,
      width: 100,
      margin: 6.5,
      borderRadius: 0
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      flexWrap: "wrap",
      margin: "5px 50px",
      backgroundColor: "white",
      padding: 6.5
    },
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      boxShadow: "none",
      padding: 10,
      outline: "none",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%)`
    },
    calendar: {
      position: "absolute",
      width: 1200,
      height:600,
      backgroundColor: "white",
      boxShadow: "none",
      padding: 20,
      outline: "none",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%)`,
      overflowY: "auto"
    },
    alignCenter: {
      textAlign:"center",
      color:"white",
      backgroundColor:"#fe8a71 "
    },
    modalBody:{
      textAlign: "center"
    },
    modalHeader:{
      backgroundColor: "#3da4ab ",
      textAlign: "center",
      color:"white"
    },
    link:{
      color: "#3da4ab",
      textDecoration: "underline"
    },
    calendarView:{
      backgroundColor: "red",
    },
    button:{
      fontSize:"5px",
      backgroundColor:"white"
    },
    fontSize20:{
      fontSize: "20px"
    },
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      borderRadius: "10%",
      transform: `translate(-50%, -50%)`
    },
    tableRightBorder : {
      borderRight: '1px solid #DCDCDC'
    }
};

export default style;