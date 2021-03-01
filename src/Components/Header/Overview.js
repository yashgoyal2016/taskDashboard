import React from 'react';
import axios from 'axios';
import { Doughnut, Bar } from 'react-chartjs-2';


const doughnutData = {
    label: [' ',' '],
    datasets: [{
        label: '# of Votes',
        data: [30, 10],
        backgroundColor: [
            '#0080ff',
            '#87D3F8',
        ],
        weight : 10,
        borderWidth : '1px',
        hoverBorderWidth : '0px',
        borderAlign:'center'
    }],
};


const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 9,
        maxBarThickness: 10,
        minBarLength: 2,
        radius:3,
        label: '',
        data: [12, 10, 8, 16, 6, 9, 20, 10, 7, 14, 5, 10, 14, 15, 7],
        backgroundColor: [
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
            '#87D3F8',
            '#0080ff',
        ],
        borderWidth: 1
    }]
}

const doughnutData2 = {
    label: [' ',' '],
    datasets: [{
        label: '# of Votes',
        data: [30, 10],
        backgroundColor: [
            '#ff00ff',
            '#f984e5',
        ],
        weight : 10,
        borderWidth : '1px',
        hoverBorderWidth : '0px',
        borderAlign:'center'
    }],
    
};

const data2 = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 9,
        maxBarThickness: 10,
        minBarLength: 2,
        radius:3,
        label: '',
        data: [12, 10, 8, 16, 6, 9, 20, 10, 7, 14, 5, 10, 14, 15, 7],
        backgroundColor: [
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
            '#f984e5',
            '#ff00ff',
        ],
        borderWidth: 1
    }]
}

const options = {
    scales: {
        yAxes: [{
            gridLines: {
                drawBorder: false,
                display: false,
                offsetGridLines: false
            },
            ticks: {
                fontSize: 0,
              }
        }],
        xAxes: [{
            gridLines: {
                offsetGridLines: true,
                display: false,

            }
        }]
    },
    legend: {
        display: false,
    },
}

// here I made static term values array of objects
const termScore = [
    {
        name : 'TERM 1',
        score : 85.76
    },
    {
        name : 'TERM 2',
        score : 1.76
    },
    {
        name : 'TERM 3',
        score : 33.11
    },
    {
        name : 'TERM 4',
        score : 75.11
    }
]

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : [],
            currentPage: 1,
            todosPerPage: 20,
            isLoading:true
        }
        this.taskRef = React.createRef() 
    }

    handleClick = (event) => {
        this.taskRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) // on every page change automatically scroll to top
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        this.todoList()
    }

    todoList = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
                this.setState({
                    todoList: res.data,
                    isLoading:false
                })
        })
    }
    render() {
        const {todoList, currentPage, todosPerPage, isLoading} = this.state; //destructing all the states at one place
        const indexOfLastTodo = currentPage * todosPerPage; //to find the last todo number
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage; //to find first todo number
        const currentTodos = todoList.slice(indexOfFirstTodo, indexOfLastTodo); //now will render the list of data by using slice to appear at first render


        // this logic used to show number of pages, where number of list items appear on each page
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todoList.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
              <button key={number}
              id={number}
              onClick={this.handleClick} className={number === currentPage ? 'btn_pages-disabled' : 'btn_pages'}>{number}</button> // here selected button and non selected buttons have different classes where the selected button have btn_pages-disabled and on the other side non selected button have btn_pages
          );
        });


        return (
            <div>
                <div className='row flex_ac tabcontent'>
                    <div className='col-sm-4'>
                        <h5>Data Overview</h5>
                    </div>
                    <div className='col-sm-8'>
                        <div className='row'>
                            <div className='col-sm-12 progress_slider'>
                                <div className='progress_slider_parent'>
                                    <span className='progress_slider_child'> </span>
                                </div>
                                <span className='pl_20'>643 <span className='inserted_txt'>insertions needed to completed</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid height_600">    
                    <div className="row content h_100">
                        <div className="col-sm-12 inside_graph"> 
                            <div className='row height_600 bb_solid py_0 flex_ac'>
                                <div className='col-sm-5 h_100 br_solid pt_30 px_15'>
                                <span>General results</span>
                                <h3 className='mb_50_pt_20'>9.401 <span className='table_head'>  Followers</span></h3>
                                    <div className='row flex_abaseline'>
                                        <div className='col-sm-8'>
                                            <Bar data={data} options={options} />
                                        </div>
                                        <div className='col-sm-4'>
                                            <Doughnut data={doughnutData} width={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-5 h_100 br_solid pt_30 px_15'>
                                <span>Ratings by Category</span>
                                <h3 className='mb_50_pt_20'>3.900 <span className='table_head'>  Followers</span></h3>
                                    <div className='row flex_abaseline'>
                                        <div className='col-sm-8'>
                                            <Bar data={data2} options={options} />
                                        </div>
                                        <div className='col-sm-4'>
                                            <Doughnut data={doughnutData2} width={100} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 h_100 pt_20 m_center'>
                                    {termScore.map((term, i) => {
                                        return (
                                            <div className='row' key={i}>
                                                <div className='col-sm-6 terms'>
                                                    <span>{term.name}</span>
                                                </div>
                                                <div className='col-sm-6 terms_qty'>
                                                    <span>{term.score}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {isLoading ? <h1 className='loader'><i className="bi bi-arrow-repeat"></i></h1> :
                            <div className="col-sm-9">
                                <div className='row pt_20'>
                                    <h5 ref={this.taskRef}>Tasks</h5>
                                </div>
                                <div >
                                <table style={{width:'100%', borderCollapse:'separate', borderSpacing:'0 1em'}}>
                                    <tbody>
                                    <tr className='table_head'>
                                        <th>User ID</th>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Completed</th>
                                    </tr>
                                    {currentTodos.map((todo,i) => {
                                        return (
                                            <tr key={i}>
                                                <td className='td h6'>{todo.userId}</td>
                                                <td className='td inside_ele'>{todo.id}</td>
                                                <td className='td inside_ele'>{todo.title}</td>
                                                <td className='td'>
                                                    {todo.completed === true ? 
                                                    <button className='premium_btn_true'>True</button>
                                                    :
                                                    <button disabled className='premium_btn_false'>False</button>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    
                                    </tbody>
                                </table>
                                </div>
                            </div>}
                        </div>
                    </div>
                    {isLoading ? null :
                    <div className='row flex_ac'>
                    <div className='col-sm-4 px_0 pages_shown' >
                         Showing <span className='h6'>{indexOfFirstTodo}</span> to <span className='h6'>{indexOfLastTodo}</span> of {todoList.length} elements
                    </div>
                 <div className='col-sm-8 dflex_end px_0'>
                 Pages {renderPageNumbers}
                 </div>
             </div>}
                </div>
            </div>
        )
    }
}


export default Overview;