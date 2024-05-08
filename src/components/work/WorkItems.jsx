import React from 'react'

const WorkItems = ({item}) => {
    const renderLink = () => {
        if (item?.gitrepo) {
            if(item?.weblink){
                return <> <a href={item.weblink} target='_blank' className="work__button"><i className="uil uil-link-h work__button-icon"></i> Website link</a>&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href={item.gitrepo} target='_blank' className="work__button"><i className="uil uil-github-alt work__button-icon"></i> github repo</a>
                       </>
            }
            else{
                return <a href={item.gitrepo} target='_blank' className="work__button"><i className="uil uil-github-alt work__button-icon"></i> github repo</a>
            }
          
        } 
         else {
          return <a href={item.weblink} target='_blank' className="work__button"><i className="uil uil-link-h work__button-icon"></i> Website link</a>;
        }
      };
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="image" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        {renderLink()}
    </div>
  )
}

export default WorkItems