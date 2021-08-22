import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


class Main extends React.Component{
    state ={};

    componentDidMount(){

    }

    render(){
        return(
            <div id="wrap">
                <Header />
                <main id="main">
                    <section id="mainCont">
                        <div className="main__cont">
                            <div>We provide</div>
                            <div>Visual coding</div>
                            <div>solutions</div>
                            <div>For your webs</div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
  
export default Main;