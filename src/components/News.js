import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import "./Home.css"

export default class News extends Component {
        
       static defaultProps ={
              pagesize: 6,
              category: "general",
              country: "in"
       }

       static propTypes ={
              pagesize: PropTypes.number,
              category: PropTypes.string,
              country: PropTypes.string
       }

       constructor(props){
              super(props);
              
              this.state={

                     articles: [],
                     loading: false,
                     page: 1,
                     totalResults: 0
                     
              }
              document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`
       }

       capitalizeFirstLetter =(string)=>{
              return string.slice(0).toUpperCase();
       }

       async updatepage(){
              this.props.setProgress(10);
              const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
              this.setState({loading: true})
              let data= await fetch(url);
              this.props.setProgress(40);
              let parsedData= await data.json();
              this.props.setProgress(70);
              
              this.setState({articles: parsedData.articles ,
                totalResults: parsedData.totalResults,
                loading: false
                
         })
         this.props.setProgress(100);
       }
       
      

    async componentDidMount(){
          this.updatepage();
            

       }

       fetchData =async()=>{
              this.setState({
                     page: this.state.page+1
              })
              const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
              
              let data= await fetch(url);
              let parsedData= await data.json();
              
              this.setState({articles: this.state.articles.concat(parsedData.articles) ,
                totalResults: parsedData.totalResults,
                loading: false
         });
     }
//       handleprev =async ()=>{
           
//        this.setState({
//                     page: this.state.page-1,
                   
//              })
//              this.updatepage();
//       }

//       handlenext = async()=>{
      
//        this.setState({
//               page: this.state.page+1,
            
//        })
      
//      this.updatepage();
      
            
//       }
  render() {

    return (
           <>
          
        <div className="container my-3">
      <h3 className='bg-warning text-center' style={{marginTop: "60px"}} >TODAYS TOP NEWS FROM {this.capitalizeFirstLetter(this.props.category)}</h3>
      {this.state.loading && <Spinner />}
                          <InfiniteScroll
                            dataLength={this.state.articles.length} 
                            next={this.fetchData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner/>}  
                            endMessage={
                                   <p style={{textAlign: "center"}}><strong>----No more contents----</strong></p>}
                           
                            style={{overflow: "none"}}>
          
                      <div className="row">
                                   {this.state.articles.map((element)=>{
                                          return <div className="col-md-8 " style={{width: "100%"}} key={element.url}>
                                                               <Newsitem  title={element.title===null?"":element.title.slice(0,80)} description={element.description===null?"":element.description.slice(0,100)} imageUrl={element.urlToImage===null?"https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/b96d51e9-cfde-4c8b-9746-f277d7fb0bb4/e4ca83d6-7ae8-4801-8030-e6f8eca97ad6/1280x720/match/image.jpg":element.urlToImage} urlToNews={element.url} author={element.author===null?"Unknown":element.author} date={element.publishedAt} source={element.source.name===null?"Unknown":element.source.name}/>
                                                 </div>
                                          })}
                                          
                                   </div>
                                   </InfiniteScroll>
                                   </div>
             
              

             {/* <div className="container d-flex justify-content-center">
                    <button className="btn btn-dark mx-2" disabled={this.state.page<=1} onClick={this.handleprev}> &larr; previous</button>
                    <button className="btn btn-dark" disabled={(this.state.page +1 > Math.ceil(this.state.totalResults/6))} onClick={this.handlenext}>next &rarr;</button>
             </div>         */}
  

      </>
    )
  }
}
