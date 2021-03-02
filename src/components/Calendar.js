import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import styles from '../Style' 

class Calendar extends Component{
    render(){
        return(
            <Modal open={this.props.open} onClose={this.props.close}>
                <div style={styles.calendar}>
                <FullCalendar plugins={[dayGridPlugin]} events={this.props.events}/>
                </div>
            </Modal>
        )
    }
}

export default Calendar;
