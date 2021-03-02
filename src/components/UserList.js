import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import MuiTableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import Loader from "react-loader-spinner";
import "@fullcalendar/daygrid/main.css";
import styles from '../Style'
import ModalActivity from './ModalActivity'
import Calendar from './Calendar'
import common from '../Utils'

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: "#fe8a71"
  }
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: "white"
  }
}))(TableCell);

let eventGuid = 0
export function createEventId() {
  return String(eventGuid++)
}

class UserList extends Component { 
  state = {
    load:true,
    openModal: false,
    openCalendar: false,
    modalId: null,
    calendarId:null,
    activity_period:[],
    events: [],
    data: []
  }

componentDidMount() {
    fetch('https://my-json-server.typicode.com/neeta1995/userlistserver/members')
    .then((res)=>res.json())
    .then((data) => {
          this.setState({ 
              data: data,
              load:false 
        })
    })
};
openModal = (id,activity) => () => {
    let activityArr = []
    let activityPeriods = {}
    activity.forEach((item)=>{
      if(new Date(common.getDateFormat(item.start_time)).toDateString()===new Date().toDateString()){
        activityPeriods['start_time'] = item.start_time
        activityPeriods['end_time'] = item.end_time 
        activityArr.push(activityPeriods)
      }
    })

    this.setState({ 
        openModal: true, 
        modalId: id, 
        activity_period: this.state.activity_period.concat(activityArr)
    });
};
openCalendar = (id,activity) => () => {
    let eventArr = []
    activity.forEach((item)=>{
      let event = {}
      event['id'] = createEventId()
      event['title'] =  common.getTimeFormat(item.start_time) + ' - ' +  common.getTimeFormat(item.end_time)
      event['date'] = new Date(common.getDateFormat(item.start_time))
      eventArr.push(event)
    })
    this.setState({ 
        openCalendar: true,
        calendarId: id,
        events:eventArr
    });
};

closeModal = () => {
    this.setState({
         openModal: false,
         activity_period:[]
    });
};

closeCalendar = () => {
    this.setState({
         openCalendar: false
    });
};

render(){
    const user = this.state.data;
    
    return(
        <div style={styles.container}>
            {this.state.load ?(
                <Loader
                style={styles.spinner}
                type="Puff"
                color="#fe8a71"
                height={60}
                width={60}
                timeout={3000} //3 secs
                />):
                (
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <h3 style={styles.alignCenter}>User List</h3>
                            <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell><h2>Username</h2></TableHeaderCell>
                                        <TableHeaderCell></TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell 
                                        style={styles.tableRightBorder}
                                        onClick={this.openModal(row.id,row.activity_periods)}>
                                            <h3 style={styles.link} >{row.real_name}</h3>
                                        </TableCell>
                                        <TableCell 
                                        onClick={this.openCalendar(row.id,row.activity_periods)}>
                                            <Button style={styles.button} 
                                            variant="contained"
                                            size="small"
                                            endIcon={<EventIcon />}>
                                            All &nbsp;activities
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    ))}   
                                </TableBody>
                            </Table>
                            </TableContainer>
                    </Grid>
                </Grid>
            )}
        <ModalActivity 
        open={this.state.openModal} 
        close={this.closeModal} 
        activity={this.state.activity_period}
        />
        <Calendar 
        open={this.state.openCalendar} 
        close={this.closeCalendar} 
        events={this.state.events}
        />
 </div>
 )}
}

export default UserList;