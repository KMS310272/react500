import React from 'react';
import axios from 'axios';
import Loading from '../basics/Loading';
import FooterInfo from '../basics/FooterInfo';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';
import { getAllByDisplayValue, getByDisplayValue } from '@testing-library/dom';



function PortInfo({link, image, title, category}){
    return (
        <div className="port__item">
            <figure className="port__item__img">
                <a href={link}>
                    <img src={image} alt={title} />
                </a>
            </figure>
            <div className="port__item__txt">
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </div>
    )
}

class Portfolio extends React.Component{
    state ={
        isLoading : true,
        ports : [] //포트폴리오 내용 저장 할 곳 
    }

    getPorts = async () => {
        const {
            data:{
                data:{ports},
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({isLoading : false, ports})
        
        //console.log(ports.data.data.ports);
    }
    mainAnimation =() =>{
      //쥐에스피 사용
    }
    componentDidMount(){
        setTimeout(() =>{
            this.getPorts();
            document.querySelector("body").classList.add("show");
            //DOM구조 vertual 
            this.mainAnimation();
        },3000)
    }
    render(){
        const { isLoading, ports } =this.state;
        return(
            <>
                {isLoading ? (
                    <Loading color = "light"/>
                ):(
                    <>
                    <Header />
                    <Layout>
                        <section id="portCont">
                            <div className="container">
                                <Title text={["portfolio","book"]} />
                                <div className ="port__cont">
                                    {ports.map((port)=>(
                                            <PortInfo 
                                            link = {port.link}
                                            image = {port.image}
                                            title= {port.title}
                                            category = {port.category}
                                         />
                                    ))}
                                   </div> 
                            </div>
                        </section>
                   
                    </Layout>
                     <FooterInfo />
                    </>
                )}
                
            </>
        )
    }
}

export default Portfolio;