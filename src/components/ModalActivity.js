import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import styles from '../Style'
import common from '../Utils'

class ModalActivity extends Component{
render(){
    return(
        <Modal open={this.props.open} onClose={this.props.close}>
            <div>
                {this.props.activity!=0? (
                    <div style={styles.modal}>{this.props.activity.map((activity,index) => (
                    <div key={index}>
                    <h3 style={styles.modalHeader}>{common.getDateFormat(activity.start_time)}</h3>
                    <p style={styles.modalBody}>{common.getTimeFormat(activity.start_time)} - {common.getTimeFormat(activity.end_time)}</p>
                    </div>
                    ))}
                </div> )
                :
                ( <div style={styles.modal}><h3 style={styles.modalHeader}>No activity today</h3></div> )}
            </div>
        </Modal>
          )
       }
}

export default ModalActivity;

