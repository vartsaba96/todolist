import React from 'react';
import styles from './tasks.module.css';


let StartPage = (props) => {
    let pagesCount = Math.ceil(props.total_task_count / 3);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
              
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {props.tasks.map(t => <div key={t.id}>
            <span className={styles.spanTasks}>
                <div onClick={props.onSortChanged}>User name:
                 
                 {t.username}
                </div>
                <div>Email:
                 {t.email}
                </div>
                <div>Text
                 {t.text}
                </div>
            </span>
        </div>
        )}
    </div>


}
export default StartPage;