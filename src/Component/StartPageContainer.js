import React from 'react';
import {connect} from "react-redux";
import Axios from 'axios';
import Preloader from './Preloader';
import StartPage from './StartPage';
import {setTasks, setCurrentPage, setTotalTasksCount, toggleIsFetching} from './../State/StartPageReducer';

class StartPageContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
     Axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name&page=${this.props.currentPage}`).then(response => {
         this.props.toggleIsFetching(false);
         this.props.setTasks(response.data.message.tasks);
         this.props.setTotalTasksCount(response.data.message.total_task_count);
 });
    }
   onPageChanged = (pageNumber)=>{
         this.props.toggleIsFetching(true);
         this.props.setCurrentPage(pageNumber);
     Axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name&page=${pageNumber}`).then(response => {
         this.props.toggleIsFetching(false);
         this.props.setTasks(response.data.message.tasks);
         this.props.setTotalTasksCount(response.data.message.total_task_count);
 });
    }

     render (){
        return <div>
        {this.props.isFetching ? <Preloader /> : null}
        <StartPage total_task_count={this.props.total_task_count} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        tasks={this.props.tasks}
        onSortChanged ={this.onSortChanged} />  
        </div>
     }
 }
let mapStateToProps = (state) => {
    return {
        tasks: state.startPage.tasks,
        pageSize: state.startPage.pageSize,
        total_task_count: state.startPage.total_task_count,
        currentPage: state.startPage.currentPage,
        isFetching: state.startPage.isFetching,
    }
}
export default connect(mapStateToProps,{setTasks, setCurrentPage, setTotalTasksCount, toggleIsFetching})(StartPageContainer);
