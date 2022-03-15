import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let{title,description,imageUrl,urlToNews,author,date,source} =this.props;
    return (
      <div className='container my-2' > 
{/*       
             <div className="card" >
             
                 <img src={imageUrl} className="card-img-top" alt="..." style={{height: "150px"}}/>
               <div className="card-body">
               <span className="badge rounded-pill bg-success">{source}</span>
                    <h5 className="card-title mb-3" >{title}...</h5>
                   
                    <p className="card-text " >{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={urlToNews} target="_blank"  rel="noreferrer" className="btn btn-primary d-flex justify-content-center" >Read more</a>
              </div>
           </div> */}

<div className="card mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
    <img src={imageUrl} className="card-img-top" alt="..." style={{height: "100%", width: "100%"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
      <span className="badge rounded-pill bg-success">{source}</span>
      <h5 className="card-title mb-3" >{title}...</h5>
      <p className="card-text " >{description}...</p>
      <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
      <a href={urlToNews} target="_blank"  rel="noreferrer" className="btn btn-primary  justify-content-center" >Read more</a>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
